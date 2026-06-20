import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Lock } from 'lucide-react'
import { SHOWCASE_PASSWORD } from '../config'
import { isUnlocked, unlock } from '../auth'

interface Props {
  id: string
  title: string
  role: string
  children: ReactNode
}

export default function PasswordGate({ id, title, role, children }: Props) {
  const [open, setOpen] = useState(() => isUnlocked(id))
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim().toLowerCase() === SHOWCASE_PASSWORD.toLowerCase()) {
      unlock(id)
      setOpen(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (open) return <>{children}</>

  return (
    <main className="flex min-h-screen items-center justify-center bg-page px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-surface p-8 sm:p-10"
      >
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12]" />
        <div className="relative">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-subtle transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} /> Back
          </Link>

          <p className="mt-8 text-sm text-subtle">
            {role}
          </p>
          <h1 className="mt-2 text-3xl font-medium text-primary sm:text-4xl">
            {title}
          </h1>

          <div className="mt-6 flex items-center gap-2 text-subtle">
            <Lock size={14} />
            <span className="text-xs sm:text-sm">
              This case study is protected.
            </span>
          </div>

          <form onSubmit={submit} className="mt-4 flex gap-2">
            <input
              type="password"
              autoFocus
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
                setError(false)
              }}
              placeholder="Password"
              className="flex-1 rounded-full border border-line/15 bg-line/5 px-5 py-3 text-sm text-primary placeholder:text-subtle outline-none focus:border-primary/50"
            />
            <button
              type="submit"
              className="group flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-on-primary transition-all hover:gap-3"
            >
              Enter
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </form>
          {error && (
            <p className="mt-3 text-xs text-red-400/80">Incorrect password.</p>
          )}
        </div>
      </motion.div>
    </main>
  )
}
