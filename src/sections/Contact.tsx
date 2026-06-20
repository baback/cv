import { MapPin, Linkedin, Download } from 'lucide-react'
import { CONTACT } from '../config'
import { ThemeToggle } from '../theme'

const TOOLS = [
  'Design systems',
  'AI product & interaction design',
  'End-to-end product design',
  'Prototyping in code',
  'HTML / CSS / Tailwind / JS',
  'Figma',
  'Cursor',
  'AI design tools',
]

export default function Contact() {
  return (
    <section id="contact" className="bg-page px-4 pb-10 pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl rounded-3xl bg-surface px-6 py-16 sm:px-10 md:py-20">
        <p className="text-sm text-subtle">
          Get in touch
        </p>
        <h2 className="mt-6 max-w-2xl text-3xl leading-[0.95] sm:text-4xl md:text-5xl">
          <span className="font-normal text-primary">
            Let’s build something{' '}
          </span>
          <span className="font-serif italic text-primary">
            people actually trust.
          </span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm sm:text-base">
          <a
            href="/Babak_Jafari_Resume.pdf"
            download="Babak_Jafari_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-5 pr-2 font-medium text-on-primary transition-all hover:gap-3"
          >
            Download CV
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-on-primary/15">
              <Download size={15} />
            </span>
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-primary/80 transition-colors hover:text-primary"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <span className="flex items-center gap-2 text-subtle">
            <MapPin size={16} /> {CONTACT.location}
          </span>
        </div>

        <div className="mt-12 border-t border-line/10 pt-8">
          <p className="text-sm text-subtle">
            Tools & craft
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line/10 px-3 py-1.5 text-xs text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-line/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <ThemeToggle />
          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} Babak Jafari
          </p>
        </div>
      </div>
    </section>
  )
}
