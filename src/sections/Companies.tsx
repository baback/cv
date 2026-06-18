import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

interface Company {
  name: string
  impact: string
}

const COMPANIES: Company[] = [
  {
    name: 'Lindo.ai',
    impact:
      'Co-founded and lead design for the AI platform 30,000+ agencies use to build 1,000,000+ client websites.',
  },
  {
    name: 'Lexpoint.io',
    impact:
      'Designed self-serve tools that replace $500+ immigration consultations.',
  },
  {
    name: 'ROOMVU',
    impact:
      'Built the first design system and rebuilt the dashboards for an AI marketing platform used by 350,000+ real-estate pros.',
  },
  {
    name: 'Asan Pardakht',
    impact:
      'Redesigned core flows for an e-payments app used by 50M+ people.',
  },
  {
    name: 'TiaraUXD',
    impact: 'Led a 12-person design team shipping for clients reaching 30M+ users.',
  },
  {
    name: 'HyperOffice',
    impact: 'Led design for an enterprise SaaS suite used by 2M+ people.',
  },
]

function CompanyRow({ company, index }: { company: Company; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ y: 24, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 24, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 gap-2 border-t border-line/10 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
    >
      <p className="text-lg font-bold text-primary md:col-span-4 lg:col-span-3">
        {company.name}
      </p>
      <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:col-span-8 lg:col-span-9">
        {company.impact}
      </p>
    </motion.div>
  )
}

export default function Companies() {
  return (
    <section id="companies" className="bg-page px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl">
            <WordsPullUpMultiStyle
              className="!justify-start"
              segments={[
                { text: 'Where I’ve made an impact.', className: 'text-primary' },
                {
                  text: 'At scale, across AI, fintech & enterprise.',
                  className: 'text-subtle',
                },
              ]}
            />
          </h2>
        </div>

        <div className="border-b border-line/10">
          {COMPANIES.map((c, i) => (
            <CompanyRow key={c.name} company={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
