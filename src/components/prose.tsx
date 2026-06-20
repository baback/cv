import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

/** Centered reading column. */
export function Column({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[680px]">{children}</div>
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.6, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function SectionNumber({ children }: { children: ReactNode }) {
  const id = typeof children === 'string' ? slugify(children) : undefined
  return (
    <Reveal>
      <h2
        id={id}
        className="mb-4 mt-20 scroll-mt-24 text-[1.45em] font-semibold leading-tight text-primary"
      >
        {children}
      </h2>
    </Reveal>
  )
}

export function Heading({ children }: { children: ReactNode }) {
  const id = typeof children === 'string' ? slugify(children) : undefined
  return (
    <Reveal>
      <h3
        id={id}
        className="mb-5 scroll-mt-24 text-[1.25em] font-medium leading-snug text-primary"
      >
        {children}
      </h3>
    </Reveal>
  )
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <p className="mb-6 text-[1.2em] leading-relaxed text-primary">
        {children}
      </p>
    </Reveal>
  )
}

export function P({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <Reveal>
      <p className={`mb-6 text-[1em] leading-relaxed text-muted ${className}`}>
        {children}
      </p>
    </Reveal>
  )
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <blockquote className="my-12 border-l-2 border-primary/40 pl-6 font-serif text-[1.6em] italic leading-snug text-primary">
        {children}
      </blockquote>
    </Reveal>
  )
}

export interface ListItem {
  label?: string
  text: string
}

export function BulletList({ items }: { items: ListItem[] }) {
  return (
    <Reveal>
      <ul className="mb-6 space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-[1em] leading-relaxed text-muted">
            <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
            <span>
              {item.label && (
                <span className="font-semibold text-primary">{item.label} — </span>
              )}
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
