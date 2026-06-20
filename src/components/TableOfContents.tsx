import { useEffect, useState } from 'react'
import { slugify } from './prose'

export interface TocItem {
  label: string
  /** 2 = nested sub-section */
  level?: number
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const entries = items.map((it) => ({ ...it, id: slugify(it.label) }))
  const [active, setActive] = useState(entries[0]?.id)

  useEffect(() => {
    const els = entries
      .map((e) => document.getElementById(e.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const onScroll = () => {
      const threshold = 140 // just below the sticky top bar
      let current = els[0]?.id ?? ''
      for (const el of els) {
        if (el.getBoundingClientRect().top - threshold <= 0) current = el.id
      }
      if (current) setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
    }
  }

  return (
    <nav
      aria-label="Contents"
      className="fixed left-6 top-28 z-20 hidden max-h-[calc(100vh-9rem)] w-52 overflow-y-auto xl:block 2xl:left-12"
    >
      <p className="mb-4 text-xs font-medium tracking-wide text-subtle">
        Contents
      </p>
      <ul className="border-l border-line/15">
        {entries.map((it) => {
          const isActive = active === it.id
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => handleClick(e, it.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`-ml-px block border-l-2 py-1.5 text-[13px] leading-snug transition-all duration-200 ${
                  it.level === 2 ? 'pl-7' : 'pl-4'
                } ${
                  isActive
                    ? 'border-primary font-medium text-primary'
                    : 'border-transparent text-subtle hover:border-line/40 hover:text-primary'
                }`}
              >
                {it.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
