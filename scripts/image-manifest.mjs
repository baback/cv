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
        "A full-width section-divider banner. The title 'The design process' sits ON TOP, above a clear DOUBLE-DIAMOND diagram (two diamond shapes side by side, thin indigo lines) — the diamonds must be fully visible and NOT overlapped by the title. Four phase labels beneath the diamonds: Discover, Define, Develop, Deliver. Off-white background, minimal and editorial.",
    },
    {
      id: 'ln-3',
      file: 'ln-3.png',
      prompt:
        "Three polished, realistic testimonial cards in a row (like real product-review cards). Each card: a circular avatar placeholder (soft grey simple silhouette) at top, a small indigo quotation mark, the quote in readable body text, and a role label beneath in muted grey (roles only, no full names). Card 1: \"It built a whole site from one sentence — amazing, but it's my client's reputation on the line. I need to know it's right before I send it.\" — Agency owner. Card 2: \"I was scared to let it touch the homepage. What if it changes something I can't get back?\" — Freelance designer. Card 3: \"The moment I could see what it did and undo it, I started using it on every client.\" — Studio founder. Soft card surfaces, subtle shadow, generous padding, equal heights, consistent layout.",
    },
    {
      id: 'ln-4',
      file: 'ln-4.png',
      prompt:
        "A clear two-column comparison. LEFT column header 'Other AI builders', every row prefixed by a soft-ROSE ✗: Generation only · Black-box edits · No white-label · No undo / version history · Built for end-users. RIGHT column header 'Lindo', every row prefixed by a soft-GREEN ✓: Full multi-page from one prompt · Visible build progress · Undo + version history · Scoped edits · White-label brand · Built-in CRM + billing. Strong green-check vs rose-✗ color coding so the contrast is instantly scannable. White cards, clean grid.",
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
        "A vertical boxes-and-arrows flowchart of the agent build-and-edit flow: Prompt entry → Agent reflects back what it understood → Agents build all pages in parallel (visible page-by-page progress) → Reveal that invites editing → Edit mode: select what the agent can touch (scope control) → Agent proposes change → \"Here's what changed\" preview → Approve / Undo / Page-history rollback. Each step a rounded box with a small indigo line icon, connected top-to-bottom by thin arrows. Show ONLY this single vertical sequence of connected boxes — no extra grid, panel, legend, or screen mockup beside or below it.",
    },
    {
      id: 'ln-7',
      file: 'ln-7.png',
      prompt:
        "Three polished, realistic testimonial cards in a row (like real product-review cards), about trust and control once editing was reversible. Each card: a circular avatar placeholder (soft grey simple silhouette) at top, a small indigo quotation mark, the quote in readable body text, and a role label beneath in muted grey (roles only, no full names). Card 1: \"Once I knew I could undo anything, I stopped being scared of it — now I use it on every site.\" — Agency owner. Card 2: \"Seeing exactly what it changed is everything. I'm accountable to my client, so I have to see it.\" — Freelancer. Card 3: \"Being able to lock the parts I didn't want touched is what made me trust it with the homepage.\" — Studio founder. Soft card surfaces, subtle shadow, generous padding, equal heights, consistent layout.",
    },
    {
      id: 'ln-8',
      file: 'ln-8.png',
      prompt:
        "Two MVP scope columns. LEFT column titled 'Prioritized' in SOFT GREEN (#16A34A) — its title, its header icon, and every item's check mark ✓ are all soft green (never blue/indigo): 'Prompt → full multi-page site', 'Visible build progress', 'Figma-style editor (select mode, layers)', 'Undo/redo + page-history', '\"What changed\" preview', 'White-label brand'. RIGHT column titled 'Deferred' in muted GREY — every item prefixed with a muted grey hollow circle ○: 'Team approval workflows', 'Agent explainability', 'Multi-site bulk edits', 'Deeper CRM automation', 'Public agent API / MCP'. Clean two-column layout, consistent icons throughout.",
    },
    ],
  },

  // Low-fidelity wireframes — converts real screenshots into clean low-fi sketches.
  wireframe: {
    style: `
Convert this screenshot into a clean MID-FIDELITY wireframe — a testable Figma-style mockup:
- KEEP ALL TEXT LEGIBLE and in place: headings, menu items, button labels, field labels, table headers, body copy stay as actual readable text. DO NOT replace text with grey bars, lines, or lorem gibberish — preserve the real words from the screenshot.
- Simplify the visuals around the text: flat light-grey (#ECECEC) rectangles for images/media (with a tiny image glyph), thin 1.5px outlines for cards, panels, and inputs, buttons as outlined rounded rectangles showing their real label.
- Mostly grayscale on white with at most one restrained light-indigo accent for the primary action. No photos, no gradients, no shadows, no brand colors.
- Preserve the original layout, structure, and proportions so it clearly reads as the same screen — just cleaner and schematic, like a mockup you'd put in front of a user to test.
- If the source is a very DENSE screen (full app editor, toolbars, long lists, template galleries): SIMPLIFY hard. Keep only the key regions and their important labels as legible text; collapse dense panels, lists, and toolbars into a few clean placeholder blocks; and OMIT tiny secondary text, code snippets, and URLs entirely rather than rendering them unreadably. Favor clarity over completeness — fewer, bigger, readable elements.
- Crisp alignment, even spacing, professional.
`.trim(),
    items: [
      { id: 'wf-1', file: 'wf-1.png', prompt: 'Mid-fidelity wireframe of this screen, keeping all text readable.' },
      { id: 'wf-2', file: 'wf-2.png', prompt: 'Mid-fidelity wireframe of this screen, keeping all text readable.' },
      { id: 'wf-3', file: 'wf-3.png', prompt: 'Mid-fidelity wireframe of this screen, keeping all text readable.' },
      { id: 'wf-4', file: 'wf-4.png', prompt: 'Mid-fidelity wireframe of this screen, keeping all text readable.' },
      { id: 'wf-5', file: 'wf-5.png', prompt: 'Mid-fidelity wireframe of this screen, keeping all text readable.' },
      { id: 'wf-6', file: 'wf-6.png', prompt: 'Mid-fidelity wireframe of this website-editor screen. CRITICAL: render NO small/secondary text, NO code, NO block IDs, NO file paths or glob patterns, NO URLs — replace all of those with plain neutral placeholder blocks. Keep ONLY a few large, real, correctly-spelled labels for the main regions (e.g. left panel "Pages", center "Canvas", right panel "Settings", top "Editor"). Every visible word must be a real, meaningful, correctly spelled label — absolutely no gibberish or truncated words.' },
      { id: 'wf-7', file: 'wf-7.png', prompt: 'Mid-fidelity wireframe of this screen, keeping all text readable.' },
      { id: 'wf-8', file: 'wf-8.png', prompt: 'Mid-fidelity wireframe of this screen, keeping all text readable.' },
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
