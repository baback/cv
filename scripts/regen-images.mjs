// ─────────────────────────────────────────────────────────────
// Batch (re)generate case-study images via the Azure OpenAI image API.
//
// Run:
//   node --env-file=.env scripts/regen-images.mjs --set lindo
//
// Flags:
//   --set <name>      which set in image-manifest.mjs (default: lindo)
//   --mode <m>        "edit" (transform existing image, default) or "generate"
//   --only <ids>      comma-separated ids, e.g. --only ln-1,ln-3
//   --size <size>     1024x1024 | 1536x1024 | 1024x1536 | auto (default 1536x1024)
//   --quality <q>     low | medium | high (default high)
//   --out <dir>       output dir (default public/work/<set>)
//   --dry             print the plan, call nothing
//   --no-backup       skip backing up existing files
//
// Requires in .env: AZURE_API_KEY, AZURE_RESOURCE_NAME, AZURE_IMAGE_DEPLOYMENT.
// ─────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { style, sets } from './image-manifest.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// ── tiny arg parser ──
function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`)
  if (i === -1) return fallback
  const next = process.argv[i + 1]
  return next && !next.startsWith('--') ? next : true
}

const setName = arg('set', 'lindo')
const mode = arg('mode', 'edit')
const size = arg('size', '1536x1024')
const quality = arg('quality', 'high')
const dry = Boolean(arg('dry', false))
const noBackup = Boolean(arg('no-backup', false))
const only = arg('only', null)
const resolveDir = (p) => (p.startsWith('/') ? p : join(root, p))
const srcDir = resolveDir(arg('src', join('public', 'work', setName)))
const outDir = resolveDir(arg('out', join('public', 'work', setName)))

const setDef = sets[setName]
if (!setDef) {
  console.error(`✗ Unknown set "${setName}". Available: ${Object.keys(sets).join(', ')}`)
  process.exit(1)
}
const entries = Array.isArray(setDef) ? setDef : setDef.items
const setStyle = (Array.isArray(setDef) ? null : setDef.style) || style

const onlyIds = only ? String(only).split(',').map((s) => s.trim()) : null
const todo = onlyIds ? entries.filter((e) => onlyIds.includes(e.id)) : entries

// ── env / endpoint ──
const apiKey = process.env.AZURE_API_KEY
const resource = process.env.AZURE_RESOURCE_NAME
const deployment = process.env.AZURE_IMAGE_DEPLOYMENT
const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2025-04-01-preview'
const endpoint =
  process.env.AZURE_OPENAI_ENDPOINT || (resource ? `https://${resource}.openai.azure.com` : null)

if (!apiKey || !endpoint || !deployment) {
  console.error(
    '✗ Missing env. Need AZURE_API_KEY, AZURE_RESOURCE_NAME (or AZURE_OPENAI_ENDPOINT), AZURE_IMAGE_DEPLOYMENT.'
  )
  process.exit(1)
}

const baseUrl = `${endpoint}/openai/deployments/${deployment}/images`

function buildPrompt(entry) {
  return `${setStyle}\n\n--- This image ---\n${entry.prompt}`
}

async function generate(entry) {
  const res = await fetch(`${baseUrl}/generations?api-version=${apiVersion}`, {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: buildPrompt(entry), size, quality, n: 1 }),
  })
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`)
  const json = await res.json()
  return json.data[0].b64_json
}

async function edit(entry) {
  const src = join(srcDir, entry.file)
  if (!existsSync(src)) {
    console.warn(`  · no source ${entry.file}; falling back to generate`)
    return generate(entry)
  }
  const form = new FormData()
  form.append('prompt', buildPrompt(entry))
  form.append('size', size)
  form.append('quality', quality)
  form.append('n', '1')
  form.append('image', new Blob([readFileSync(src)], { type: 'image/png' }), entry.file)
  const res = await fetch(`${baseUrl}/edits?api-version=${apiVersion}`, {
    method: 'POST',
    headers: { 'api-key': apiKey },
    body: form,
  })
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`)
  const json = await res.json()
  return json.data[0].b64_json
}

async function main() {
  console.log(`\n▶ set=${setName} mode=${mode} size=${size} quality=${quality}`)
  console.log(`  src=${srcDir}`)
  console.log(`  out=${outDir}`)
  console.log(`  images: ${todo.map((e) => e.id).join(', ')}\n`)
  if (dry) {
    todo.forEach((e) => console.log(`  [dry] ${e.id} (${e.file})`))
    return
  }
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  // back up existing originals once (only when writing in place)
  if (!noBackup && outDir === srcDir) {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-')
    const backupDir = join(root, 'backups', `work-${setName}-${stamp}`)
    let backed = 0
    for (const e of todo) {
      const src = join(outDir, e.file)
      if (existsSync(src)) {
        if (!existsSync(backupDir)) mkdirSync(backupDir, { recursive: true })
        copyFileSync(src, join(backupDir, e.file))
        backed++
      }
    }
    if (backed) console.log(`  ↳ backed up ${backed} original(s) to ${backupDir}\n`)
  }

  for (const e of todo) {
    process.stdout.write(`  • ${e.id} … `)
    try {
      const b64 = mode === 'generate' ? await generate(e) : await edit(e)
      writeFileSync(join(outDir, e.file), Buffer.from(b64, 'base64'))
      console.log('done')
    } catch (err) {
      console.log('FAILED')
      console.error(`    ${err.message}`)
    }
  }
  console.log('\n✔ finished\n')
}

main()
