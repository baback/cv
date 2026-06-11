import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  index: number
  totalChars: number
  progress: MotionValue<number>
}

function AnimatedLetter({ char, index, totalChars, progress }: AnimatedLetterProps) {
  const charProgress = index / totalChars
  const opacity = useTransform(
    progress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  )
  return (
    <motion.span style={{ opacity }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}

interface Props {
  text: string
  className?: string
}

export default function AnimatedParagraph({ text, className = '' }: Props) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={{ color: '#DEDBC8' }}>
      {chars.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          index={i}
          totalChars={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  )
}
