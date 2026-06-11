import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { SHOWCASE_PASSWORD } from '../config'

export interface Showcase {
  id: string
  title: string
  role: string
  blurb: string
  highlights: string[]
}

interface Props {
  showcase: Showcase | null
  onClose: () => void
}

export default function ShowcaseModal({ showcase, onClose }: Props) {
  const [input, setInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)

  // Reset state whenever a different showcase is opened/closed.
  useEffect(() => {
    setInput('')
    setUnlocked(false)
    setError(false)
  }, [showcase])

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim().toLowerCase() === SHOWCASE_PASSWORD.toLowerCase()) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <AnimatePresence>
      {showcase && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#101010] p-6 sm:p-10"
            initial={{ scale: 0.95, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 16, opacity: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 text-gray-500 transition-colors hover:text-primary"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
                {showcase.role}
              </p>
              <h3
                className="mt-2 text-3xl font-medium sm:text-4xl"
                style={{ color: '#E1E0CC' }}
              >
                {showcase.title}
              </h3>

              {!unlocked ? (
                <form onSubmit={submit} className="mt-8">
                  <div className="flex gap-2">
                    <input
                      type="password"
                      autoFocus
                      value={input}
                      onChange={(e) => {
                        setInput(e.target.value)
                        setError(false)
                      }}
                      placeholder="Password"
                      className="flex-1 rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm text-primary placeholder:text-gray-600 outline-none focus:border-primary/50"
                    />
                    <button
                      type="submit"
                      className="group flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-black transition-all hover:gap-3"
                    >
                      Enter
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                  {error && (
                    <p className="mt-3 text-xs text-red-400/80">
                      Incorrect password.
                    </p>
                  )}
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8"
                >
                  <p className="mb-6 text-sm text-gray-400 sm:text-base">
                    {showcase.blurb}
                  </p>
                  <ul className="space-y-3">
                    {showcase.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed text-gray-300 sm:text-base"
                      >
                        — {h}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-xs text-primary/60 sm:text-sm">
                    The full visual case study is still being built. Thanks for
                    your patience — check back soon.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
