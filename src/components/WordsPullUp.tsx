import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface WordsPullUpProps {
  text: string
  className?: string
  /** color applied via inline style */
  color?: string
  /** adds a superscript * after the last "a" of the final word */
  showAsterisk?: boolean
  staggerDelay?: number
}

export default function WordsPullUp({
  text,
  className = '',
  color,
  showAsterisk = false,
  staggerDelay = 0.08,
}: WordsPullUpProps) {
  const words = text.split(' ')
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  const lastWordIndex = words.length - 1

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={{ color }}>
      {words.map((word, i) => {
        const isLast = i === lastWordIndex
        return (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: i * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {isLast && showAsterisk ? (
              <span className="relative inline-block">
                {word}
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                  *
                </span>
              </span>
            ) : (
              word
            )}
            {i < lastWordIndex && '\u00A0'}
          </motion.span>
        )
      })}
    </span>
  )
}
