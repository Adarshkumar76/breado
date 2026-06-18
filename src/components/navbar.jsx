import './navbar.css'
import logoImg from '../assets/images/logo.png'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'How It Works', 'Features', 'Download', 'Contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo">
          <img src={logoImg} alt="Mr. Breado" />
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a href="#download" className="btn-primary">Download App</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#download" className="btn-primary nav-cta">
            <span>📱</span> Download App
          </a>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            id="hamburger-btn"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}
