// ─────────────────────────────────────────────────────────────
// AI vision review of case-study images. For each image, asks a
// vision model whether the text is legible, the content matches the
// intended description, and flags any visual problems.
//
// Run:
//   node --env-file=.env scripts/review-images.mjs --set lindo --dir public/work/lindo
//
// Uses AZURE_CHAT_DEPLOYMENT (or AZURE_PRODUCT_ENRICH_DEPLOYMENT) — must be a
// vision-capable model (e.g. gpt-4o).
// ─────────────────────────────────────────────────────────────
import { readFileSync, existsSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { sets } from './image-manifest.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`)
  if (i === -1) return fallback
  const next = process.argv[i + 1]
  return next && !next.startsWith('--') ? next : true
}

const setName = arg('set', 'lindo')
const dir = (() => {
  const d = arg('dir', join('public', 'work', setName))
  return d.startsWith('/') ? d : join(root, d)
})()

const setDef = sets[setName]
const items = Array.isArray(setDef) ? setDef : setDef?.items
if (!items) {
  console.error(`✗ Unknown set "${setName}".`)
  process.exit(1)
}

const apiKey = process.env.AZURE_API_KEY
const resource = process.env.AZURE_RESOURCE_NAME
const deployment =
  process.env.AZURE_CHAT_DEPLOYMENT || process.env.AZURE_PRODUCT_ENRICH_DEPLOYMENT
const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2025-04-01-preview'
const endpoint =
  process.env.AZURE_OPENAI_ENDPOINT || (resource ? `https://${resource}.openai.azure.com` : null)

if (!apiKey || !endpoint || !deployment) {
  console.error(
    '✗ Missing env. Need AZURE_API_KEY, AZURE_RESOURCE_NAME, and a vision chat deployment\n' +
      '  (AZURE_CHAT_DEPLOYMENT or AZURE_PRODUCT_ENRICH_DEPLOYMENT).'
  )
  process.exit(1)
}

const url = `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`

const MIME = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' }

function resolveFile(file) {
  // try the manifest name, then swap to .webp / .png
  const base = file.replace(extname(file), '')
  for (const ext of ['.webp', '.png', extname(file)]) {
    const p = join(dir, base + ext)
    if (existsSync(p)) return p
  }
  return null
}

async function review(item) {
  const file = resolveFile(item.file)
  if (!file) return { id: item.id, verdict: 'MISSING', raw: `no file for ${item.file}` }
  const b64 = readFileSync(file).toString('base64')
  const mime = MIME[extname(file).toLowerCase()] || 'image/png'

  const body = {
    messages: [
      {
        role: 'system',
        content:
          'You are a meticulous design reviewer for a senior product-design portfolio. Be concise and specific. AI-generated graphics often contain misspelled or nonsensical text — call it out.',
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text:
              `This case-study graphic is supposed to show:\n"${item.prompt}"\n\n` +
              'Reply in EXACTLY this format:\n' +
              'VERDICT: PASS | NEEDS WORK\n' +
              'TEXT: misspelled/gibberish/nonsensical text you can read, or "clean"\n' +
              'MATCH: yes | partly | no — short reason\n' +
              'NOTE: one short sentence on visual quality.',
          },
          { type: 'image_url', image_url: { url: `data:${mime};base64,${b64}` } },
        ],
      },
    ],
    max_completion_tokens: 400,
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) return { id: item.id, verdict: 'ERROR', raw: `${res.status} ${await res.text()}` }
  const json = await res.json()
  return { id: item.id, raw: json.choices?.[0]?.message?.content?.trim() ?? '(empty)' }
}

async function main() {
  console.log(`\n▶ Reviewing set "${setName}" in ${dir}\n`)
  for (const item of items) {
    process.stdout.write(`──── ${item.id} (${item.file}) ────\n`)
    try {
      const r = await review(item)
      console.log(r.raw + '\n')
    } catch (e) {
      console.log(`ERROR: ${e.message}\n`)
    }
  }
}

main()
