import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface Segment {
  text: string
  className?: string
}

interface Props {
  segments: Segment[]
  className?: string
  staggerDelay?: number
}

export default function WordsPullUpMultiStyle({
  segments,
  className = '',
  staggerDelay = 0.08,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  // Flatten segments into individual words while preserving per-word className.
  const words: { text: string; className?: string }[] = []
  segments.forEach((segment) => {
    segment.text
      .split(' ')
      .filter((w) => w.length > 0)
      .forEach((w) => words.push({ text: w, className: segment.className }))
  })

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word.text}-${i}`}
          className={`inline-block ${word.className ?? ''}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word.text}
          {'\u00A0'}
        </motion.span>
      ))}
    </span>
  )
}
