import { motion } from 'framer-motion'
import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'

export default function About() {
  return (
    <section id="about" className="bg-page px-4 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-3xl bg-surface px-6 py-16 text-center sm:px-10 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
          Product design
        </p>

        <h2 className="mt-6 max-w-4xl text-2xl leading-[1.15] sm:text-3xl sm:leading-[1.1] md:text-4xl lg:text-5xl lg:leading-[1.05]">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Babak Jafari,', className: 'font-normal' },
              {
                text: 'a product designer & design lead.',
                className: 'italic font-serif',
              },
              {
                text: 'I co-founded Lindo.ai and train AI to design with taste.',
                className: 'font-normal',
              },
            ]}
          />
        </h2>

        <motion.p
          className="mx-auto mt-10 w-full max-w-[640px] text-left text-sm leading-relaxed text-primary sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Over 13+ years across AI, fintech, and enterprise, I've shipped
          products used by tens of millions — including a 50M-user payments app
          — and led a 12-person design team. Today, 30,000+ agencies build on
          Lindo to launch client websites at scale. I think in systems,
          prototype in code, and care most about experiences people trust.
        </motion.p>
      </div>
    </section>
  )
}
