import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  Code2,
  Megaphone,
  PenTool,
  Search,
  Sparkles,
  Target,
} from 'lucide-react'
import { ThemeToggle } from '../theme'
import { CONTACT } from '../config'

const MAILTO = `mailto:${CONTACT.email}?subject=Studio%20inquiry`

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

const NAV = [
  { id: 'services', label: 'Services' },
  { id: 'how', label: 'How it works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
] as const

const SERVICES = [
  {
    icon: PenTool,
    title: 'Design',
    body: 'Product & UX/UI, brand identity, and high-converting marketing sites.',
  },
  {
    icon: Sparkles,
    title: 'AI Development',
    body: 'LLM apps, agents, and AI features designed and shipped end to end.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    body: 'Full-stack web apps — from prototype in code to production.',
  },
  {
    icon: Search,
    title: 'SEO',
    body: 'Technical and content SEO that grows durable organic traffic.',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    body: 'Positioning, landing pages, and lifecycle campaigns that land.',
  },
  {
    icon: Target,
    title: 'Ad Campaigns',
    body: 'Paid social & search creative, built and iterated to convert.',
  },
]

const STEPS = [
  { n: '01', title: 'Subscribe', body: 'Pick a plan and kick off within a week — no lengthy onboarding.' },
  { n: '02', title: 'Request', body: 'Add tasks to your board; one or two run at a time depending on plan.' },
  { n: '03', title: 'Receive', body: 'Updates land in your private Slack a few times a week.' },
  { n: '04', title: 'Iterate', body: 'Revise until it’s right. Pause or cancel anytime.' },
]

const BASIC = [
  '1 active request at a time',
  'Product design (web & mobile)',
  'Marketing websites',
  'A senior partner (13+ yrs, ex-Head of Design)',
  'Private Slack channel',
  '2–3 updates per week',
  'No contracts — cancel anytime',
]

const PRO = [
  '2 active requests at a time',
  'Everything in Basic, plus:',
  'AI development & design systems',
  'Full-stack software development',
  'SEO, marketing & ad campaigns',
  'Branding & Framer builds',
  'Priority turnaround — 3–4 updates / week',
]

const FAQ = [
  {
    q: 'Is there a contract?',
    a: 'No. It’s month-to-month — pause or cancel anytime. Unused time rolls into the next month.',
  },
  {
    q: 'How fast are updates?',
    a: 'Two to four times a week depending on your plan. Most single requests turn around in a few days.',
  },
  {
    q: 'What if I only need one thing?',
    a: 'Subscribe, get it done, then pause. Your subscription is there when you need it again.',
  },
  {
    q: 'Who actually does the work?',
    a: 'You work directly with me (Babak) — 13+ years across AI, fintech, and enterprise, and Head of Design at Lindo.ai.',
  },
]

/* ──────────────────────────────────────────────────────────────
   Helpers
   ────────────────────────────────────────────────────────────── */

function useActiveSection(): string {
  const [active, setActive] = useState<string>(NAV[0].id)
  useEffect(() => {
    const onScroll = () => {
      let current: string = NAV[0].id
      for (const s of NAV) {
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

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
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

export default function Studio() {
  const active = useActiveSection()

  return (
    <div className="site-scope min-h-screen bg-page text-primary">
      <Nav active={active} />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </div>
  )
}

/* ── Nav ──────────────────────────────────────────────────────── */

function Nav({ active }: { active: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/10 bg-page/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/studio" className="flex items-baseline gap-1.5">
          <span className="text-lg font-bold tracking-tight">Babak Jafari</span>
          <span className="text-lg font-bold tracking-tight text-accent">Studio</span>
        </Link>

        <nav aria-label="Sections" className="hidden items-center gap-8 md:flex">
          {NAV.map((s) => (
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
            href={MAILTO}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Book a call
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
    <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 text-center sm:pt-24">
      <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-line/15 px-3.5 py-1.5 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        One subscription. Design, AI, and engineering.
      </div>

      <h1 className="mx-auto mt-7 max-w-3xl text-[2.75rem] font-bold leading-[1.02] tracking-[-0.03em] text-primary sm:text-6xl md:text-[4rem]">
        Your design &amp; build team, <span className="text-accent">on subscription.</span>
      </h1>

      <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        One senior partner for product design, AI, software, and growth — shipping
        a few times a week. No hiring, no contracts, pause anytime.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#pricing"
          className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:gap-3"
        >
          See pricing
          <ArrowRight size={16} />
        </a>
        <a
          href={MAILTO}
          className="inline-flex items-center gap-2 rounded-full border border-line/20 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-surface2"
        >
          Book a call
        </a>
      </div>
    </section>
  )
}

/* ── Services ─────────────────────────────────────────────────── */

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 sm:py-24">
      <SectionTitle eyebrow="Services" title="Everything you need to ship." />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.title}
              className="rounded-[1.5rem] border border-line/10 bg-surface p-7 transition-colors hover:border-line/25"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                <Icon size={20} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ── How it works ─────────────────────────────────────────────── */

function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 sm:py-24">
      <SectionTitle eyebrow="How it works" title="Simple by design." />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <div key={s.n} className="rounded-[1.5rem] border border-line/10 p-7">
            <span className="text-sm font-semibold text-accent">{s.n}</span>
            <h3 className="mt-3 text-lg font-semibold text-primary">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Pricing ──────────────────────────────────────────────────── */

function PlanFeature({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          light ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'
        }`}
      >
        <Check size={13} />
      </span>
      <span className={`text-sm leading-snug ${light ? 'text-white/90' : 'text-muted'}`}>
        {children}
      </span>
    </li>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 sm:py-24">
      <div className="text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-accent">
          Pricing
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl md:text-5xl">
          One flat monthly rate.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted">
          Cheaper than a single senior hire, with a whole studio’s range. Cancel anytime.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Basic */}
        <div className="flex flex-col rounded-[1.75rem] border border-line/12 bg-surface p-8">
          <h3 className="text-lg font-bold text-primary">Basic</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            For founders who want a design &amp; build partner they can trust like a team.
          </p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight text-primary">$2,917</span>
            <span className="text-sm text-muted">/ month</span>
          </div>
          <div className="my-6 border-t border-dashed border-line/20" />
          <ul className="flex-1 space-y-3.5">
            {BASIC.map((f) => (
              <PlanFeature key={f}>{f}</PlanFeature>
            ))}
          </ul>
          <a
            href={MAILTO}
            className="mt-8 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary px-6 py-3 text-sm font-medium text-on-primary transition-opacity hover:opacity-90"
          >
            Start this week
          </a>
        </div>

        {/* Pro */}
        <div className="relative flex flex-col rounded-[1.75rem] bg-accent p-8 text-white shadow-[0_24px_60px_-24px_rgba(37,99,235,0.6)]">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Pro</h3>
            <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-wide">
              Most popular
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/80">
            For founders and teams who need faster turnaround and full-stack scope.
          </p>
          <div className="mt-6 flex items-baseline gap-2">
            <span className="text-4xl font-bold tracking-tight">$3,999</span>
            <span className="text-sm text-white/70">/ month</span>
          </div>
          <div className="my-6 border-t border-dashed border-white/25" />
          <ul className="flex-1 space-y-3.5">
            {PRO.map((f) => (
              <PlanFeature key={f} light>
                {f}
              </PlanFeature>
            ))}
          </ul>
          <a
            href={MAILTO}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent transition-opacity hover:opacity-90"
          >
            Start this week
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-muted">
        Need something custom or enterprise?{' '}
        <a href={MAILTO} className="font-medium text-accent hover:underline">
          Let’s talk →
        </a>
      </p>
    </section>
  )
}

/* ── FAQ ──────────────────────────────────────────────────────── */

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-16 sm:py-24">
      <SectionTitle eyebrow="FAQ" title="Good questions." />

      <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
        {FAQ.map((f) => (
          <div key={f.q}>
            <h3 className="text-base font-semibold text-primary">{f.q}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── CTA ──────────────────────────────────────────────────────── */

function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="overflow-hidden rounded-[2.25rem] bg-primary px-8 py-16 text-center sm:px-16 sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-on-primary sm:text-5xl">
          Ready to ship faster?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-on-primary/60">
          Book a quick call and I’ll tell you honestly if a subscription is the right fit.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          <a
            href={MAILTO}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Book a call
            <ArrowRight size={16} />
          </a>
          <a
            href="#pricing"
            className="rounded-full border border-on-primary/25 px-6 py-3 text-sm font-medium text-on-primary transition-colors hover:bg-on-primary/10"
          >
            See pricing
          </a>
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
        <p className="text-sm text-subtle">© {new Date().getFullYear()} Babak Jafari</p>
        <div className="flex items-center gap-5">
          <Link to="/" className="text-sm text-subtle transition-colors hover:text-primary">
            Portfolio
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
