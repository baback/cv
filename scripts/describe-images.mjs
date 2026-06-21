// ─────────────────────────────────────────────────────────────
// Documents a folder of screenshots into a markdown index using a
// vision model — for each image: a short title + what the screen is,
// its purpose, and key UI elements/visible text.
//
// Run:
//   node --env-file=.env scripts/describe-images.mjs \
//     --dir "public/work/lexpoint/shots" --out work/Lexpoint_Screens_Index.md
//
// Uses AZURE_CHAT_DEPLOYMENT (or AZURE_PRODUCT_ENRICH_DEPLOYMENT) — vision-capable.
// ─────────────────────────────────────────────────────────────
import { readFileSync, readdirSync, writeFileSync, appendFileSync, existsSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`)
  if (i === -1) return fallback
  const next = process.argv[i + 1]
  return next && !next.startsWith('--') ? next : true
}

const resolveDir = (p) => (p.startsWith('/') ? p : join(root, p))
const dir = resolveDir(arg('dir', 'public/work/lexpoint/shots'))
const out = resolveDir(arg('out', 'work/Lexpoint_Screens_Index.md'))
const context =
  arg('context',
    'Lexpoint.io — an AI-powered Canadian immigration platform covering the journey: eligibility assessment, application, and compliance, used by applicants and licensed immigration consultants.')

const apiKey = process.env.AZURE_API_KEY
const resource = process.env.AZURE_RESOURCE_NAME
const deployment =
  process.env.AZURE_CHAT_DEPLOYMENT || process.env.AZURE_PRODUCT_ENRICH_DEPLOYMENT
const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2025-04-01-preview'
const endpoint =
  process.env.AZURE_OPENAI_ENDPOINT || (resource ? `https://${resource}.openai.azure.com` : null)

if (!apiKey || !endpoint || !deployment) {
  console.error('✗ Missing env (AZURE_API_KEY, AZURE_RESOURCE_NAME, vision chat deployment).')
  process.exit(1)
}

const url = `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`
const MIME = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' }

const files = readdirSync(dir)
  .filter((f) => MIME[extname(f).toLowerCase()])
  .sort()

async function describe(file) {
  const b64 = readFileSync(join(dir, file)).toString('base64')
  const mime = MIME[extname(file).toLowerCase()]
  const body = {
    messages: [
      {
        role: 'system',
        content: `You document product screenshots. Context: ${context} Be concise, factual, and specific. Read visible labels.`,
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text:
              'Document this screenshot. Reply in EXACTLY this format:\n' +
              'TITLE: 3–6 word screen name\n' +
              'PURPOSE: one sentence on what this screen is for\n' +
              'ELEMENTS: key UI elements / visible labels (comma-separated)\n' +
              'USEFUL FOR: cover | app-screenshot | wireframe-source | flow-step | skip — pick the best one + 2 words why',
          },
          { type: 'image_url', image_url: { url: `data:${mime};base64,${b64}` } },
        ],
      },
    ],
    max_completion_tokens: 350,
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) return `(error ${res.status}: ${(await res.text()).slice(0, 120)})`
  const json = await res.json()
  return json.choices?.[0]?.message?.content?.trim() ?? '(empty)'
}

async function main() {
  console.log(`\n▶ Documenting ${files.length} images in ${dir}\n  → ${out}\n`)
  writeFileSync(
    out,
    `# Lexpoint.io — screenshot index\n\n_Auto-documented via vision model. ${files.length} screens._\n\n`
  )
  for (const file of files) {
    process.stdout.write(`  • ${file} … `)
    try {
      const desc = await describe(file)
      appendFileSync(out, `## ${file}\n\n${desc}\n\n---\n\n`)
      console.log('done')
    } catch (e) {
      appendFileSync(out, `## ${file}\n\n(failed: ${e.message})\n\n---\n\n`)
      console.log('FAILED')
    }
  }
  console.log(`\n✔ wrote ${out}\n`)
}

void existsSync
main()
