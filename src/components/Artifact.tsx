import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'
import { ImageIcon } from 'lucide-react'

interface Props {
  /** short label of the visual, e.g. "Hero banner" */
  title: string
  /** description of what the image should show — written inside the slot */
  desc: ReactNode
  /** taller media area for hero-like shots */
  tall?: boolean
}

/**
 * A reserved image slot. The empty media area marks where a real
 * screenshot / visual goes; the caption documents exactly what it
 * should show. Swap the media area for an <img>/<video> when ready.
 */
export default function Artifact({ title, desc, tall }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="my-12 overflow-hidden rounded-2xl border border-dashed border-line/30 bg-surface2"
    >
      <div
        className={`flex items-center justify-center ${
          tall ? 'min-h-[280px] sm:min-h-[360px]' : 'min-h-[150px] sm:min-h-[200px]'
        }`}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary/60">
          <ImageIcon size={22} />
        </span>
      </div>
      <figcaption className="border-t border-dashed border-line/20 px-5 py-4">
        <span className="flex items-center gap-1.5 text-xs font-medium text-subtle">
          <ImageIcon size={13} /> Image placeholder{title ? ` · ${title}` : ''}
        </span>
        <div className="mt-1.5 text-[0.92em] leading-relaxed text-muted">
          {desc}
        </div>
      </figcaption>
    </motion.figure>
  )
}
