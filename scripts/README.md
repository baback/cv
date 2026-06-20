# Case-study image workflow

Batch (re)generate the case-study visuals via the Azure OpenAI image API
(`gpt-image-1`), so every image shares one consistent style.

## Setup
1. Copy `.env.example` → `.env` and fill in your Azure values.
2. Set `AZURE_IMAGE_DEPLOYMENT` to the deployment name of your gpt-image model.

## Edit prompts in one place
`scripts/image-manifest.mjs`:
- `style` — the shared style guide prepended to **every** image (edit once → all images match).
- `sets.lindo[]` — each image's `id`, output `file`, and `prompt` (what it shows).

## Run
```bash
# preview the plan (no API calls)
npm run images:regen -- --set lindo --dry

# regenerate everything (edits the existing images, backs up originals first)
npm run images:regen -- --set lindo

# regenerate from scratch (ignore existing images)
npm run images:regen -- --set lindo --mode generate

# only specific images
npm run images:regen -- --set lindo --only ln-3,ln-6
```

## Flags
- `--set <name>` — which set (default `lindo`)
- `--mode edit|generate` — transform existing image vs. generate fresh (default `edit`)
- `--only <ids>` — comma-separated, e.g. `ln-1,ln-3`
- `--size 1536x1024|1024x1024|1024x1536|auto` (default `1536x1024`)
- `--quality low|medium|high` (default `high`)
- `--out <dir>` — output dir (default `public/work/<set>`)
- `--dry` — print the plan only
- `--no-backup` — don't back up originals

Originals are backed up to `backups/work-<set>-<timestamp>/` before being overwritten.
```
