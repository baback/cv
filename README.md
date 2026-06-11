# Babak Jafari — CV

Dark, cinematic personal CV site. React + Vite + TypeScript + Tailwind CSS, with framer-motion animations and lucide-react icons.

## Sections
- **Hero** — animated name with background video, nav, intro, CTA
- **About** — bio with Instrument Serif italic accent + scroll-linked text reveal
- **Experience** — full work history timeline
- **Work** — two showcases (Lindo.ai + Lexpoint immigration), password-gated
- **Contact** — email, phone, LinkedIn, tools, education

## Showcase password
The two case studies are gated behind a soft password while they're in progress.
Change it in `src/config.ts`:

```ts
export const SHOWCASE_PASSWORD = 'prisma'
```

Current default: `prisma`. This is a client-side gate — fine for handing out to
recruiters, but not real security.

## Develop
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy to Cloudflare Pages
**Option A — Dashboard (Git):**
1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → Pages → Create → connect the repo.
3. Build command: `npm run build` · Build output directory: `dist`

**Option B — Wrangler (direct upload):**
```bash
npm run build
npx wrangler pages deploy dist
```

`public/_redirects` is included so the SPA serves correctly.
```
