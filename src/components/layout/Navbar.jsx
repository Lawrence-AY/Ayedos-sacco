import { useState, useEffect } from 'react'
import { HiBell, HiChevronDown, HiBars3, HiXMark } from 'react-icons/hi2'
import Button from '../ui/Button'

function Navbar({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
    setDropdownOpen(null)
  }

  const handleNavLink = (e, route) => {
    e.preventDefault()
    if (onNavigate) onNavigate(route)
    setMobileMenuOpen(false)
    setDropdownOpen(null)
  }

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu)
  }

  return (
    <header className={`landing-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div
        className="brand brand--dark"
        onClick={() => onNavigate && onNavigate('')}
        style={{ cursor: 'pointer' }}
      >
        <div className="brand__mark">A</div>
        <div>
          <strong>AYEDOS SACCO</strong>
          <span>Savings and Credit Cooperatives</span>
        </div>
      </div>

      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <HiXMark /> : <HiBars3 />}
      </button>

      <nav className={`landing-links ${mobileMenuOpen ? 'open' : ''}`}>
        {/* About */}
        <div className="nav-dropdown">
          <button onClick={() => toggleDropdown('about')}>
            About Us
          </button>
          {dropdownOpen === 'about' && (
            <div className="nav-dropdown-menu">
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Overview</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'our-story')}>Our Story</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'team')}>Team</a>
            </div>
          )}
        </div>

        {/* Services */}
        <div className="nav-dropdown">
          <button onClick={() => toggleDropdown('services')}>
            Services
          </button>
          {dropdownOpen === 'services' && (
            <div className="nav-dropdown-menu">
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>All Services</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'products')}>Products</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'pricing')}>Pricing</a>
            </div>
          )}
        </div>

        {/* Resources */}
        <div className="nav-dropdown">
          <button onClick={() => toggleDropdown('resources')}>
            Resources
          </button>
          {dropdownOpen === 'resources' && (
            <div className="nav-dropdown-menu">
              <a href="#" onClick={(e) => handleNavLink(e, 'faq')}>FAQ</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'guides')}>Guides</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'blog')}>Blog</a>
            </div>
          )}
        </div>

        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
          Contact
        </a>

        <div className="nav-auth-buttons">
         <button className="btn btn-outline btn-accent" onClick={() => onNavigate && onNavigate('register')}>
           Get started
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar