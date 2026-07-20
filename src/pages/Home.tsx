import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Compass, Layers, Code2 } from 'lucide-react'
import { ThemeToggle } from '../theme'
import { CONTACT } from '../config'

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

const SECTIONS = [
  { id: 'work', label: 'Case studies' },
  { id: 'experience', label: 'Experience' },
  { id: 'approach', label: 'Approach' },
  { id: 'contact', label: 'Contact' },
] as const

const WORK = [
  {
    title: 'Lindo.ai',
    role: 'Co-Founder & Head of Design',
    path: '/work/lindo',
    cover: '/work/lindo/cover.webp',
    line: 'Rebuilt a commodity AI website builder into an agentic platform agencies trust with real client work.',
    tags: ['30,000+ agencies', '1M+ websites', 'Agentic AI'],
  },
  {
    title: 'Lexpoint.io',
    role: 'Product Design Consultant',
    path: '/work/lexpoint',
    cover: '/work/lexpoint/cover.webp',
    line: 'Self-serve immigration tools — AI eligibility, calculators, and applicant dashboards — for a high-trust legal domain.',
    tags: ['Replaced $500+ consults', 'Legal-tech', 'Self-serve'],
  },
]

const EXPERIENCE = [
  {
    company: 'Lindo.ai',
    role: 'Co-Founder & Head of Design',
    line: 'Lead design for the AI platform 30,000+ agencies use to build over a million client websites.',
  },
  {
    company: 'Lexpoint.io',
    role: 'Product Design Consultant',
    line: 'Designed self-serve tools that replace $500+ immigration consultations.',
  },
  {
    company: 'ROOMVU',
    role: 'Product Designer',
    line: 'Built the first design system and rebuilt dashboards for a marketing platform used by 350,000+ real-estate pros.',
  },
  {
    company: 'Asan Pardakht',
    role: 'Product Designer',
    line: 'Redesigned core flows for an e-payments app used by 50M+ people.',
  },
  {
    company: 'TiaraUXD',
    role: 'Design Lead',
    line: 'Led a 12-person design team shipping for clients reaching 30M+ users.',
  },
  {
    company: 'HyperOffice',
    role: 'Product Designer',
    line: 'Led design for an enterprise SaaS suite used by 2M+ people.',
  },
]

const APPROACH = [
  {
    icon: Compass,
    title: 'Start with the user',
    body: 'I design for the moment someone hesitates — grounded in research, interviews, and usability testing.',
  },
  {
    icon: Layers,
    title: 'Think in systems',
    body: 'Components and patterns that scale, so the hundredth screen feels as considered as the first.',
  },
  {
    icon: Code2,
    title: 'Prototype in code',
    body: 'I design in the real medium, so what ships behaves exactly the way I intended it to.',
  },
]

const TOOLS = [
  'Design systems',
  'AI product design',
  'End-to-end product design',
  'User research',
  'Usability testing',
  'Figma',
  'Cursor',
  'HTML / CSS / Tailwind',
]

/* ──────────────────────────────────────────────────────────────
   Helpers
   ────────────────────────────────────────────────────────────── */

function useActiveSection(): string {
  const [active, setActive] = useState<string>(SECTIONS[0].id)
  useEffect(() => {
    const onScroll = () => {
      let current: string = SECTIONS[0].id
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top - 110 <= 0) current = s.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return active
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: ReactNode
}) {
  return (
    <div>
      <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────
   Page
   ────────────────────────────────────────────────────────────── */

export default function Home() {
  const active = useActiveSection()

  return (
    <div className="site-scope min-h-screen bg-page text-primary">
      <Nav active={active} />
      <Hero />
      <Statement />
      <Work />
      <Experience />
      <Approach />
      <Contact />
      <Footer />
    </div>
  )
}

/* ── Nav ──────────────────────────────────────────────────────── */

function Nav({ active }: { active: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/10 bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold tracking-tight">
          Babak Jafari
        </Link>

        <nav aria-label="Sections" className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
              className={`text-sm transition-colors ${
                active === s.id ? 'text-accent' : 'text-muted hover:text-primary'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${CONTACT.email}`}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Let&apos;s talk
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

/* ── Hero ─────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-14 sm:pt-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <h1 className="text-[2.75rem] font-bold leading-[1.0] tracking-[-0.03em] text-primary sm:text-6xl md:text-[4.25rem]">
            I design AI products people actually trust.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            I&apos;m Babak — a product designer &amp; design lead with 13 years
            turning complex, ambiguous problems into clear systems across AI,
            fintech, and enterprise. Co-founder &amp; head of design at{' '}
            <span className="text-primary">Lindo.ai</span>.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:gap-3"
            >
              See my work
              <ArrowRight size={16} />
            </a>
            <a
              href="/Babak_Jafari_Resume.pdf"
              download="Babak_Jafari_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-line/20 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-surface2"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Layered photo */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -bottom-4 -right-3 h-full w-full rounded-[2.25rem] bg-surface2 sm:-bottom-5 sm:-right-5" />
          <img
            src="/profile.png"
            alt="Babak Jafari"
            className="relative aspect-[4/5] w-full rounded-[2.25rem] border border-line/10 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

/* ── Statement ────────────────────────────────────────────────── */

function Statement() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <p className="max-w-3xl text-2xl font-medium leading-[1.35] tracking-tight text-primary sm:text-3xl md:text-[2.35rem] md:leading-[1.3]">
        I co-founded Lindo.ai and lead its design — today 30,000+ agencies use
        it to build over a million client websites. Before that, I redesigned a
        payments app for 50 million people and led a team of twelve.
      </p>
    </section>
  )
}

/* ── Work ─────────────────────────────────────────────────────── */

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 sm:py-20">
      <SectionTitle eyebrow="Case studies" title="A closer look." />

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {WORK.map((w) => (
          <Link
            key={w.title}
            to={w.path}
            className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-line/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.28)]"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={w.cover}
                alt={`${w.title} case study`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col p-7 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-subtle">
                {w.role}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                {w.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[15px]">
                {w.line}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line/12 px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                Read case study
                <ArrowRight size={16} className="text-accent" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

/* ── Experience ───────────────────────────────────────────────── */

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 sm:py-24"
    >
      <SectionTitle eyebrow="Experience" title="Where I've made an impact" />

      <div className="mt-12 border-t border-line/10">
        {EXPERIENCE.map((e) => (
          <div
            key={e.company}
            className="grid grid-cols-1 gap-2 border-b border-line/10 py-7 md:grid-cols-[1fr_1.7fr] md:gap-10"
          >
            <div>
              <p className="text-lg font-semibold text-primary">{e.company}</p>
              <p className="text-sm text-subtle">{e.role}</p>
            </div>
            <p className="text-[15px] leading-relaxed text-muted">{e.line}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Approach ─────────────────────────────────────────────────── */

function Approach() {
  return (
    <section
      id="approach"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 sm:py-24"
    >
      <SectionTitle eyebrow="How I work" title="Design with a point of view" />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {APPROACH.map((a) => {
          const Icon = a.icon
          return (
            <div
              key={a.title}
              className="rounded-[1.5rem] border border-line/10 bg-surface p-7 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">
                {a.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {a.body}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-10 flex flex-wrap gap-2.5">
        {TOOLS.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line/15 px-4 py-2 text-sm text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}

/* ── Contact ──────────────────────────────────────────────────── */

function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 sm:py-24"
    >
      <div className="overflow-hidden rounded-[2.25rem] bg-primary px-8 py-16 text-center sm:px-16 sm:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center">
          <span className="text-[13px] font-medium uppercase tracking-[0.16em] text-accent">
            Get in touch
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-on-primary sm:text-5xl">
            Let&apos;s build something people actually trust.
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {CONTACT.email}
              <ArrowRight size={16} />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-on-primary/25 px-6 py-3 text-sm font-medium text-on-primary transition-colors hover:bg-on-primary/10"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-8 text-sm text-on-primary/40">
            {CONTACT.phone} · {CONTACT.location}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Footer ───────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-12">
      <div className="flex items-center justify-between border-t border-line/10 pt-8">
        <p className="text-sm text-subtle">
          © {new Date().getFullYear()} Babak Jafari
        </p>
        <ThemeToggle />
      </div>
    </footer>
  )
}
