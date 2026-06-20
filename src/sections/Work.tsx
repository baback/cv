import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Clock } from 'lucide-react'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import type { Showcase } from '../components/ShowcaseModal'

export const SHOWCASES: Showcase[] = [
  {
    id: 'lindo',
    title: 'Lindo.ai',
    role: 'Co-Founder & Head of Design',
    path: '/work/lindo',
    blurb:
      'An agentic, AI-native website platform for agencies — generating, managing, and growing client websites at scale.',
    highlights: [
      'Scaled to 30,000+ agencies who have built 1,000,000+ client websites.',
      "Cut agency delivery from days to minutes by training the platform's AI to design with taste.",
      'Built a 1,000+ block-and-template system that lets the AI compose complete, consistent websites.',
    ],
  },
  {
    id: 'immigration',
    title: 'Lexpoint.io',
    role: 'Product Design Consultant · Legal-tech',
    comingSoon: true,
    blurb:
      'A Canadian immigration legal-tech platform replacing costly consultations with instant, self-serve flows.',
    highlights: [
      'Replaced $500+ immigration consultations with instant, self-serve flows.',
      'Designed AI eligibility assessments, calculators, and applicant dashboards.',
      'Direct legal-tech experience across a regulated, high-trust domain.',
    ],
  },
]

const MEDIA: Record<string, { type: 'video' | 'image'; src: string }> = {
  lindo: {
    type: 'video',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
  },
  immigration: {
    type: 'video',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4',
  },
}

interface CardProps {
  showcase: Showcase
  index: number
  onOpen: (s: Showcase) => void
}

function ShowcaseCard({ showcase, index, onOpen }: CardProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const media = MEDIA[showcase.id]

  return (
    <motion.button
      ref={ref}
      onClick={showcase.comingSoon ? undefined : () => onOpen(showcase)}
      aria-disabled={showcase.comingSoon}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative flex h-[420px] flex-col justify-end overflow-hidden rounded-3xl bg-surface2 p-6 text-left sm:p-8 ${
        showcase.comingSoon ? 'cursor-default' : ''
      }`}
    >
      {/* Media background */}
      {media.type === 'video' ? (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
          autoPlay
          loop
          muted
          playsInline
          src={media.src}
        />
      ) : (
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
          src={media.src}
          alt={showcase.title}
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Status badge */}
      {showcase.comingSoon && (
        <span className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-[10px] text-[#E1E0CC]/80 backdrop-blur-sm sm:text-xs">
          <Clock size={12} /> In progress
        </span>
      )}

      <div className="relative">
        <p className="text-xs text-[#E1E0CC]/80 sm:text-sm">{showcase.role}</p>
        <h3
          className="mt-2 text-3xl font-medium sm:text-4xl"
          style={{ color: '#E1E0CC' }}
        >
          {showcase.title}
        </h3>
        <p className="mt-3 max-w-md text-sm text-gray-300">{showcase.blurb}</p>

        {showcase.comingSoon ? (
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#E1E0CC]/60">
            Case study coming soon
          </span>
        ) : (
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#E1E0CC] transition-all group-hover:gap-3">
            View case study
            <ArrowRight size={16} className="-rotate-45 transition-transform" />
          </span>
        )}
      </div>
    </motion.button>
  )
}

interface Props {
  onOpen: (s: Showcase) => void
}

export default function Work({ onOpen }: Props) {
  return (
    <section
      id="work"
      className="relative min-h-screen bg-page px-4 py-20 md:py-28"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-12 max-w-3xl text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            className="!justify-start"
            segments={[
              {
                text: 'Selected work for visionary teams.',
                className: 'text-primary',
              },
              {
                text: 'AI products. Fintech. Legal-tech.',
                className: 'text-subtle',
              },
            ]}
          />
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {SHOWCASES.map((s, i) => (
            <ShowcaseCard key={s.id} showcase={s} index={i} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}
