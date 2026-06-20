import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X, ArrowDown } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

/* ── Image grid (thumbnails, e.g. wireframe explorations) ── */
export function ImageGrid({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="my-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {images.map((im, i) => (
        <Reveal key={im.src} delay={i * 0.04}>
          <img
            src={im.src}
            alt={im.alt}
            loading="lazy"
            className="w-full rounded-xl border border-line/15"
          />
        </Reveal>
      ))}
    </div>
  )
}

/* ── Case image (real exported visual) ────────────────────── */
export function CaseImage({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <Reveal>
      <figure className="my-10">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full rounded-2xl border border-line/15"
        />
        {caption && (
          <figcaption className="mt-3 text-center text-[0.85em] text-subtle">
            {caption}
          </figcaption>
        )}
      </figure>
    </Reveal>
  )
}

type Tone = 'emerald' | 'amber' | 'rose' | 'violet' | 'sky' | 'indigo'

const TONE: Record<Tone, { bg: string; border: string; accent: string }> = {
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', accent: 'text-emerald-500' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/25', accent: 'text-amber-500' },
  rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', accent: 'text-rose-500' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', accent: 'text-violet-500' },
  sky: { bg: 'bg-sky-500/10', border: 'border-sky-500/20', accent: 'text-sky-500' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', accent: 'text-indigo-500' },
}

/* ── Quote cards ───────────────────────────────────────────── */
export interface Quote {
  quote: string
  author: string
  tone: Tone
}

export function QuoteCards({ items }: { items: Quote[] }) {
  return (
    <div className="my-10 grid gap-4 sm:grid-cols-3">
      {items.map((q, i) => {
        const t = TONE[q.tone]
        return (
          <Reveal key={i} delay={i * 0.08}>
            <figure className={`h-full rounded-2xl border ${t.bg} ${t.border} p-5`}>
              <span className={`font-serif text-4xl leading-none ${t.accent}`}>“</span>
              <blockquote className="mt-1 text-[0.95em] leading-relaxed text-primary">
                {q.quote}
              </blockquote>
              <figcaption className="mt-3 text-[0.85em] text-subtle">— {q.author}</figcaption>
            </figure>
          </Reveal>
        )
      })}
    </div>
  )
}

/* ── Comparison cards ──────────────────────────────────────── */
export interface CompareGroup {
  title: string
  tone: Tone
  positive?: boolean
  items: string[]
}

export function ComparisonCards({ left, right }: { left: CompareGroup; right: CompareGroup }) {
  const card = (g: CompareGroup, delay: number) => {
    const t = TONE[g.tone]
    const Icon = g.positive ? Check : X
    return (
      <Reveal delay={delay}>
        <div className={`h-full rounded-2xl border ${t.bg} ${t.border} p-6`}>
          <p className={`text-[0.95em] font-semibold ${t.accent}`}>{g.title}</p>
          <ul className="mt-4 space-y-2.5">
            {g.items.map((it, i) => (
              <li key={i} className="flex gap-2.5 text-[0.92em] leading-relaxed text-muted">
                <Icon size={16} className={`mt-1 shrink-0 ${t.accent}`} />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    )
  }
  return (
    <div className="my-10 grid gap-4 sm:grid-cols-2">
      {card(left, 0)}
      {card(right, 0.1)}
    </div>
  )
}

/* ── Persona cards ─────────────────────────────────────────── */
export interface Persona {
  name: string
  tone: Tone
  tags: string[]
  jobs: string[]
  pains: string[]
}

export function PersonaCards({ personas }: { personas: Persona[] }) {
  return (
    <div className="my-10 grid gap-4 md:grid-cols-3">
      {personas.map((p, i) => {
        const t = TONE[p.tone]
        return (
          <Reveal key={i} delay={i * 0.08}>
            <div className={`h-full rounded-2xl border ${t.bg} ${t.border} p-5`}>
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border ${t.border} bg-page/40 text-[0.9em] font-bold ${t.accent}`}
                >
                  {p.name.replace(/^The\s+/, '').charAt(0)}
                </span>
                <p className="text-[1em] font-semibold text-primary">{p.name}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full border ${t.border} px-2 py-0.5 text-[0.7em] uppercase tracking-wide ${t.accent}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[0.8em] font-semibold text-primary">Jobs to be done</p>
              <ul className="mt-1.5 space-y-1.5">
                {p.jobs.map((j, k) => (
                  <li key={k} className="flex gap-2 text-[0.88em] leading-snug text-muted">
                    <Check size={14} className={`mt-0.5 shrink-0 ${t.accent}`} />
                    <span>{j}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[0.8em] font-semibold text-primary">Pain points</p>
              <ul className="mt-1.5 space-y-1.5">
                {p.pains.map((j, k) => (
                  <li key={k} className="flex gap-2 text-[0.88em] leading-snug text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-subtle" />
                    <span>{j}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

/* ── Team cluster ──────────────────────────────────────────── */
export function TeamCluster({
  core,
  satellites,
  note,
}: {
  core: string[]
  satellites: string[]
  note: string
}) {
  return (
    <Reveal>
      <div className="my-10 rounded-2xl border border-line/15 bg-surface2 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-center gap-x-[-12px] gap-y-3">
          {core.map((c, i) => (
            <span
              key={c}
              className="flex h-28 w-28 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 p-3 text-center text-[0.82em] font-medium leading-tight text-primary sm:h-32 sm:w-32"
              style={{ marginLeft: i === 0 ? 0 : -18 }}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {satellites.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line/15 bg-page/40 px-3 py-1 text-[0.8em] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-5 text-center text-[0.8em] text-subtle">{note}</p>
      </div>
    </Reveal>
  )
}

/* ── Process divider ───────────────────────────────────────── */
export function ProcessDivider({ title }: { title: string }) {
  return (
    <Reveal>
      <div className="relative my-12 overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          style={{ color: 'rgb(var(--c-on-primary))' }}
        >
          <path d="M0 50 L100 10 L200 50 L300 10 L400 50 M0 50 L100 90 L200 50 L300 90 L400 50" strokeWidth="1.5" />
        </svg>
        <p className="relative font-serif text-2xl italic text-on-primary sm:text-3xl">{title}</p>
      </div>
    </Reveal>
  )
}

/* ── Flow diagram (vertical steps) ─────────────────────────── */
export function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="my-10">
      {steps.map((s, i) => (
        <Reveal key={i} delay={i * 0.05}>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md rounded-xl border border-line/15 bg-surface2 px-5 py-3 text-center text-[0.9em] text-primary">
              {s}
            </div>
            {i < steps.length - 1 && (
              <ArrowDown size={18} className="my-1.5 text-subtle" />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}

/* ── Agent map (grid of chips) ─────────────────────────────── */
export function AgentMap({ agents }: { agents: { name: string; role: string }[] }) {
  return (
    <div className="my-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {agents.map((a, i) => (
        <Reveal key={a.name} delay={i * 0.05}>
          <div className="h-full rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4">
            <p className="text-[0.9em] font-semibold text-primary">{a.name}</p>
            <p className="mt-1 text-[0.8em] leading-snug text-muted">{a.role}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
