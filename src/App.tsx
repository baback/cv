import { useState } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'
import ShowcaseModal, { type Showcase } from './components/ShowcaseModal'

export default function App() {
  const [active, setActive] = useState<Showcase | null>(null)

  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Work onOpen={setActive} />
      <Contact />
      <ShowcaseModal showcase={active} onClose={() => setActive(null)} />
    </main>
  )
}
