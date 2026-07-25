import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import LindoTrustCaseStudy from './pages/LindoTrustCaseStudy'
import LexpointCaseStudy from './pages/LexpointCaseStudy'

// Scroll to top on route change (unless navigating to an in-page anchor).
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/lindo" element={<LindoTrustCaseStudy />} />
        <Route path="/work/lexpoint" element={<LexpointCaseStudy />} />
      </Routes>
    </>
  )
}
