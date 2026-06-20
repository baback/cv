// ─────────────────────────────────────────────────────────────
// Image manifest for the case-study visuals.
//
// `style` is prepended to every prompt so all generated images stay
// visually consistent. Tweak it once and every image re-renders to match.
//
// Each entry: { id, file, prompt }
//   - id    : short key (used by --only)
//   - file  : output filename inside the set's folder (public/work/<set>/)
//   - prompt: what this specific image should show
// ─────────────────────────────────────────────────────────────

export const style = `
Style guide — keep ALL images visually consistent and look premium/professional:
- Minimal, clean, editorial product case-study graphic. Flat vector, no photos, no 3D, no heavy gradients.
- Lots of whitespace and calm composition. Restrained, confident, "less is more".
- Background: soft off-white (#F7F7F6). Cards/surfaces: pure white with a single hairline light-grey border (#E6E6E6) and gently rounded corners (16-20px). Soft, very subtle shadow at most.
- Typography: one clean geometric sans-serif. Clear hierarchy — a small label, a strong title, concise body. Real labels only, never placeholder gibberish, no misspellings.
- Color: mostly neutral greys (#1A1A1A headings, #5C5C5C body) on white. ONE accent — indigo (#4F46E5) — used sparingly for icons, key arrows, and the active item. Soft green (#16A34A) only for "positive", soft rose (#E11D48) only for "negative" in comparisons. Nothing else colorful.
- Icons: simple thin-line (1.5px) monochrome icons in indigo or grey, consistent across all images.
- Crisp alignment, even spacing, balanced margins. Landscape orientation. No watermarks, no logos unless specified.
`.trim()

export const sets = {
  lindo: {
    items: [
    {
      id: 'ln-1',
      file: 'ln-1.png',
      prompt:
        'Team structure diagram. Three overlapping circles labeled "Product design", "Engineering", "AI / Product". Around them, smaller satellite chips: Marketing, Customer success, QA, Graphic design, Freelance developers ×3, Support. A small caption: "4 in-house + 5 freelance".',
    },
    {
      id: 'ln-2',
      file: 'ln-2.png',
      prompt:
        'A full-width section divider banner. Centered serif-style title "The design process". Behind it, a faint double-diamond motif (discover → define → develop → deliver). Calm, minimal.',
    },
    {
      id: 'ln-3',
      file: 'ln-3.png',
      prompt:
        'Three quote cards side by side, each with a large quotation mark. Card 1: "It built a whole site from one sentence — but it\'s my client\'s site, I need to know it\'s right before I send it." — Agency owner. Card 2: "I\'m scared to let it edit the homepage. What if it changes things I can\'t get back?" — Freelance designer. Card 3: "If I can see what it\'s doing and undo it, I\'ll use it on every client." — Studio founder.',
    },
    {
      id: 'ln-4',
      file: 'ln-4.png',
      prompt:
        'Two comparison cards. Left card "Market gaps" (soft rose, ✗ marks): Generation-only; black-box edits; no white-label layer; no undo/version history; built for end-users not agencies. Right card "Lindo advantages" (soft green, ✓ marks): full multi-page sites from one prompt; visible controllable agent; true white-label; built-in CRM + billing; designed for agency and client at once.',
    },
    {
      id: 'ln-5',
      file: 'ln-5.png',
      prompt:
        'Three persona cards. "The Agency" (tags: Owner, Designer, Studio) — jobs: ship client sites fast, keep control, resell builds; pains: can\'t risk AI breaking a client site, needs build+bill+deliver in one place. "The Freelancer" (tags: Solo, Contractor) — jobs: more clients without more hours, compete with studios; pains: no time for grunt work, limited budget. "The Client" (tags: Small-business, Non-designer) — jobs: small edits without the agency; pains: not technical, afraid of breaking things.',
    },
    {
      id: 'ln-6',
      file: 'ln-6.png',
      prompt:
        'A vertical boxes-and-arrows flowchart of the agent build-and-edit flow: Prompt entry → Agent reflects back what it understood → Agents build all pages in parallel (visible page-by-page progress) → Reveal that invites editing → Edit mode: select what the agent can touch (scope control) → Agent proposes change → "Here\'s what changed" preview → Approve / Undo / Page-history rollback. Each step a rounded box with a small indigo icon.',
    },
    {
      id: 'ln-7',
      file: 'ln-7.png',
      prompt:
        'Three quote cards about trust and control. Card 1: "Once I could undo anything, I stopped being scared of it. Now I use it on every site." — Agency owner. Card 2: "Showing me exactly what it changed is everything — I\'m responsible to my client." — Freelancer. Card 3: "Letting me lock the parts I don\'t want touched is what made me trust it with the homepage." — Studio founder.',
    },
    {
      id: 'ln-8',
      file: 'ln-8.png',
      prompt:
        'Two MVP scope cards. Left "Prioritized" (soft green, ✓): prompt → full multi-page site; visible build progress; Figma-style editor (select mode, layers); undo/redo + page-history; "what changed" preview; white-label brand. Right "Deferred" (muted, ○): team approval workflows; agent explainability; multi-site bulk edits; deeper CRM automation; public agent API / MCP ecosystem.',
    },
    ],
  },

  // Low-fidelity wireframes — converts real screenshots into clean low-fi sketches.
  wireframe: {
    style: `
Convert this screenshot into a clean LOW-FIDELITY WIREFRAME:
- Grayscale only: white background, light-grey (#EDEDED) fill blocks, mid-grey (#9AA0A6) lines, dark-grey outlines. No brand colors, no real photos.
- Represent images/media as a rectangle with an X or mountain-photo glyph. Represent text as horizontal grey bars/lines (longer = headings, shorter = body). Buttons as rounded rectangles with a short bar label.
- Keep the SAME overall layout, structure, and proportions as the source so it reads as the same screen — just abstracted to a sketch.
- Thin 1.5px outlines, slightly hand-drawn/blueprint feel, generous spacing. No noise, no gradients, no shadows.
- It should look like an early-stage UX wireframe a designer would make in Figma/Balsamiq.
`.trim(),
    items: [
      { id: 'wf-1', file: 'wf-1.png', prompt: 'Low-fi wireframe of this screen.' },
      { id: 'wf-2', file: 'wf-2.png', prompt: 'Low-fi wireframe of this screen.' },
      { id: 'wf-3', file: 'wf-3.png', prompt: 'Low-fi wireframe of this screen.' },
      { id: 'wf-4', file: 'wf-4.png', prompt: 'Low-fi wireframe of this screen.' },
      { id: 'wf-5', file: 'wf-5.png', prompt: 'Low-fi wireframe of this screen.' },
      { id: 'wf-6', file: 'wf-6.png', prompt: 'Low-fi wireframe of this screen.' },
      { id: 'wf-7', file: 'wf-7.png', prompt: 'Low-fi wireframe of this screen.' },
      { id: 'wf-8', file: 'wf-8.png', prompt: 'Low-fi wireframe of this screen.' },
    ],
  },

  // Re-imagined, more realistic case-study visuals (v2).
  lindo2: {
    items: [
      {
        id: 'ln-1',
        file: 'ln-1.png',
        prompt:
          "A clean team-structure diagram. A central node labeled 'Design — product, UI, system, front-end' connects to two clusters. In-house cluster: AI product designer, Marketing, Customer success, QA. Freelance cluster: 3 Developers, Support, Graphic designer. Small circular avatar placeholders with role labels and thin connecting lines. Caption beneath: '9-person cross-functional team · 4 in-house + 5 freelance'.",
      },
      {
        id: 'ln-2',
        file: 'ln-2.png',
        prompt:
          "A horizontal double-diamond design-process timeline. Four labeled phases left to right with small thin-line icons: Discover, Define, Develop, Deliver. A subtle diamond motif behind. Centered title: 'The design process'. Minimal, editorial.",
      },
      {
        id: 'ln-3',
        file: 'ln-3.png',
        prompt:
          "A research synthesis board titled 'What we heard'. Three sticky-note style quote cards from agencies about fearing loss of control over AI-built client sites. To the side, a small cluster of pill tags: 'opacity', 'reversibility', 'overreach', 'authorship'. Organized, calm, low-key.",
      },
      {
        id: 'ln-4',
        file: 'ln-4.png',
        prompt:
          "A competitor comparison matrix table. Two columns: 'Other AI builders' and 'Lindo'. Rows: 'Full multi-page site from one prompt', 'Visible build progress', 'Undo & version history', 'Scoped edits', 'White-label brand', 'Built-in CRM + billing'. The Lindo column shows soft-green check marks; the other column shows muted grey dashes or × marks. Clean header row.",
      },
      {
        id: 'ln-5',
        file: 'ln-5.png',
        prompt:
          "Three polished persona cards with simple avatar circles. 'The Agency' (owner / studio) — goal: ship client sites fast under their brand; pain: can't risk AI breaking a client's site. 'The Freelancer' (solo) — goal: take on more clients without more hours; pain: no time for grunt work. 'The Client' (small-business, non-designer) — goal: make small edits themselves; pain: afraid of breaking things. Consistent layout, indigo accents.",
      },
      {
        id: 'ln-6',
        file: 'ln-6.png',
        prompt:
          "A horizontal product user-flow of the agentic build: five connected app-screen frames left to right — (1) Prompt input, (2) Agent shows its understanding, (3) Pages building with visible progress, (4) Reveal / preview, (5) Edit mode with scope control + undo. Thin arrows between frames, a short caption under each frame.",
      },
      {
        id: 'ln-7',
        file: 'ln-7.png',
        prompt:
          "An annotated product screenshot of the agentic editor with callout labels pointing to trust features: 'Select scope', '\"What changed\" preview', 'Undo / page history'. Include one short pull quote in a small card: 'Once I could undo anything, I stopped being scared of it.' Clean annotated mockup.",
      },
      {
        id: 'ln-8',
        file: 'ln-8.png',
        prompt:
          "A 2x2 prioritization matrix. Y axis 'Impact', X axis 'Effort'. In the highlighted high-impact / low-effort quadrant, labeled dots: 'Visible build progress', 'Undo + page history', 'What-changed preview'. In higher-effort quadrants, muted labeled dots: 'Team approval', 'Agent explainability', 'Public API / MCP'. Title: 'MVP prioritization'.",
      },
    ],
  },
}
