import { useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ThemeToggle } from '../theme'

// Reading-size steps. Index 2 (= 1.15rem base) is a comfortable
// case-study reading size by default.
const SCALES = [0.9, 1, 1.15, 1.3, 1.45]
const DEFAULT_IDX = 2

function getInitialIdx(): number {
  try {
    const stored = Number(localStorage.getItem('reading-scale'))
    if (Number.isInteger(stored) && stored >= 0 && stored < SCALES.length) {
      return stored
    }
  } catch {
    /* ignore */
  }
  return DEFAULT_IDX
}

interface Props {
  children: ReactNode
}

export default function CaseStudyShell({ children }: Props) {
  const [idx, setIdx] = useState(getInitialIdx)

  const setScale = (next: number) => {
    setIdx(next)
    try {
      localStorage.setItem('reading-scale', String(next))
    } catch {
      /* ignore */
    }
  }

  return (
    <main className="min-h-screen bg-page">
      {/* Top bar */}
      <div className="sticky top-0 z-30 border-b border-line/10 bg-page/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[680px] items-center justify-between px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} /> Babak Jafari
          </Link>

          <div className="flex items-center gap-2">
            {/* Reading-size control */}
            <div className="flex items-center overflow-hidden rounded-full border border-line/15 bg-surface2">
              <button
                onClick={() => setScale(Math.max(0, idx - 1))}
                disabled={idx === 0}
                aria-label="Decrease text size"
                className="px-3 py-1.5 text-xs text-muted transition-colors hover:text-primary disabled:opacity-30"
              >
                A
              </button>
              <span className="h-4 w-px bg-line/15" />
              <button
                onClick={() => setScale(Math.min(SCALES.length - 1, idx + 1))}
                disabled={idx === SCALES.length - 1}
                aria-label="Increase text size"
                className="px-3 py-1.5 text-base text-muted transition-colors hover:text-primary disabled:opacity-30"
              >
                A
              </button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Reading-size scope: prose uses em, so this base font-size scales it */}
      <div style={{ fontSize: `${SCALES[idx]}rem` }}>{children}</div>
    </main>
  )
}
