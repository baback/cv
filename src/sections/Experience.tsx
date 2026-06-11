import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Role {
  title: string
  company: string
  period: string
  blurb: string
}

const ROLES: Role[] = [
  {
    title: 'Co-Founder & Head of Design',
    company: 'Lindo.ai',
    period: 'Jan 2023 – Present',
    blurb:
      'Scaled an agentic, AI-native website platform to 30,000+ agencies who have built 1,000,000+ client websites — leading design across AI site generation, delivery, billing, and growth.',
  },
  {
    title: 'Product Design Consultant',
    company: 'Lexpoint.io',
    period: 'Jun 2025 – Apr 2026',
    blurb:
      'Replaced $500+ immigration consultations with instant, self-serve flows — designing AI eligibility assessments, calculators, and dashboards for a Canadian legal-tech platform.',
  },
  {
    title: 'Co-Founder & Designer',
    company: 'Lindo Card',
    period: 'Jun 2021 – Jul 2022',
    blurb:
      'Shipped a 0→1 Visa-backed benefits product from concept to launch — replacing manual expense reports with one card across program setup, payroll/HRIS sync, and spend.',
  },
  {
    title: 'Product Design Consultant',
    company: 'ROOMVU',
    period: 'Aug 2020 – Mar 2021',
    blurb:
      "Raised usability for 350,000+ real-estate professionals — built ROOMVU's first design system from scratch, rebuilt the dashboards on it, and lifted landing-page conversion.",
  },
  {
    title: 'Lead Product Designer',
    company: 'Asan Pardakht',
    period: 'Apr 2019 – Feb 2021',
    blurb:
      'Improved activation for an e-payments app used by 50M+ people — redesigned core flows using behavioral data and usability research, shipping in agile with PM and product owners.',
  },
  {
    title: 'Product Design Manager',
    company: 'TiaraUXD',
    period: 'May 2016 – Sep 2017',
    blurb:
      'Led a 12-person design team shipping for clients reaching 30M+ users across fintech, telecom, and media — owning craft standards, mentoring, and direction.',
  },
  {
    title: 'Lead UX/UI Designer',
    company: 'HyperOffice',
    period: 'Jan 2012 – Apr 2016',
    blurb:
      'Scaled an enterprise SaaS suite to 2M+ users across web, iOS, and Android — led product design and built the design system behind it (Maryland, US).',
  },
]

function RoleRow({ role, index }: { role: Role; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 24, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 gap-2 border-t border-white/10 py-7 md:grid-cols-12 md:gap-6"
    >
      <div className="md:col-span-3">
        <p className="text-base font-bold" style={{ color: '#E1E0CC' }}>
          {role.company}
        </p>
        <p className="mt-1 text-xs text-gray-500">{role.period}</p>
      </div>
      <div className="md:col-span-9">
        <p className="text-sm text-primary sm:text-base">{role.title}</p>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
          {role.blurb}
        </p>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="bg-black px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2
            className="text-2xl font-medium sm:text-3xl md:text-4xl"
            style={{ color: '#E1E0CC' }}
          >
            Experience
          </h2>
          <p className="max-w-sm text-sm text-gray-500">
            13+ years across AI products, fintech, and enterprise — design
            systems, leadership, and 0→1 builds.
          </p>
        </div>

        <div className="border-b border-white/10">
          {ROLES.map((role, i) => (
            <RoleRow key={role.company} role={role} index={i} />
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Earlier — Product Design Consultant at Mofid Securities & Kian Digital
          (fintech / wealth-tech).
        </p>
      </div>
    </section>
  )
}
