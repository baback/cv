import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import WordsPullUp from '../components/WordsPullUp'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#companies' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar */}
        <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] transition-colors sm:text-xs md:text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-12 items-end gap-4 p-5 sm:p-8 md:p-10">
          <div className="col-span-12 lg:col-span-8">
            <WordsPullUp
              text="Babak"
              showAsterisk
              color="#E1E0CC"
              className="text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
            />
          </div>

          <div className="col-span-12 flex flex-col gap-4 lg:col-span-4 lg:pb-4">
            <motion.h1
              className="text-2xl font-medium leading-[1.05] text-[#E1E0CC] sm:text-3xl md:text-[2rem]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease }}
            >
              I design AI products people{' '}
              <span className="font-serif italic">actually trust.</span>
            </motion.h1>

            <motion.p
              className="text-xs leading-[1.35] text-[#E1E0CC]/70 sm:text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55, ease }}
            >
              Product designer & design lead, 13+ years. I co-founded Lindo.ai
              and lead its design — the AI platform 30,000+ agencies use to build
              1,000,000+ client websites.
            </motion.p>

            <motion.a
              href="#work"
              className="group mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-[#DEDBC8] py-1.5 pl-5 pr-1.5 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
            >
              View work
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                <ArrowRight size={18} style={{ color: '#E1E0CC' }} />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
