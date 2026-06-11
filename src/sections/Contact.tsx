import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { CONTACT } from '../config'

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
    <section id="contact" className="bg-black px-4 pb-10 pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#101010] px-6 py-16 sm:px-10 md:py-20">
        <p className="text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
          Get in touch
        </p>
        <h2 className="mt-6 max-w-2xl text-3xl leading-[0.95] sm:text-4xl md:text-5xl">
          <span className="font-normal" style={{ color: '#E1E0CC' }}>
            Let’s build something{' '}
          </span>
          <span className="font-serif italic text-primary">
            people actually trust.
          </span>
        </h2>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm sm:text-base">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 text-primary/80 transition-colors hover:text-primary"
          >
            <Mail size={16} /> {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 text-primary/80 transition-colors hover:text-primary"
          >
            <Phone size={16} /> {CONTACT.phone}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-primary/80 transition-colors hover:text-primary"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <span className="flex items-center gap-2 text-gray-500">
            <MapPin size={16} /> {CONTACT.location}
          </span>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Tools & craft
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Associate’s Degree, Computer Engineering — Sadjad University of
            Technology, 2013 · English · Persian
          </p>
          <p>© {new Date().getFullYear()} Babak Jafari</p>
        </div>
      </div>
    </section>
  )
}
