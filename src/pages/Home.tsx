import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Companies from '../sections/Companies'
import Work from '../sections/Work'
import Contact from '../sections/Contact'
import ShowcaseModal, { type Showcase } from '../components/ShowcaseModal'

export default function Home() {
  const [active, setActive] = useState<Showcase | null>(null)
  const navigate = useNavigate()

  const openShowcase = (s: Showcase) => {
    if (s.path) {
      navigate(s.path)
    } else {
      setActive(s)
    }
  }

  return (
    <main className="bg-page">
      <Hero />
      <About />
      <Companies />
      <Work onOpen={openShowcase} />
      <Contact />
      <ShowcaseModal showcase={active} onClose={() => setActive(null)} />
    </main>
  )
}
