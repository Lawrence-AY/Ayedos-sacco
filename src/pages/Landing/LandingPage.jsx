import { useState, useEffect } from 'react'
import { HiShieldCheck, HiArrowRight, HiBars3, HiXMark } from 'react-icons/hi2'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { saccoHighlights } from '../../data/dashboardData'

function LandingPage({ onNavigate }) {
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
    onNavigate(route)
    setMobileMenuOpen(false)
    setDropdownOpen(null)
  }

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu)
  }

  return (
    <div className="landing-shell">
      <header className={`landing-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="brand brand--dark" onClick={() => onNavigate('')} style={{ cursor: 'pointer' }}>
          <div className="brand__mark">A</div>
          <div>
            <strong>Ayedous SACCO</strong>
            <span>Savings and Credit Cooperative</span>
          </div>
        </div>

        <button 
          className="mobile-menu-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <HiXMark /> : <HiBars3 />}
        </button>

        <nav className={`landing-links ${mobileMenuOpen ? 'open' : ''}`} aria-label="Landing navigation">
          <div className="nav-dropdown">
            <button className="nav-dropdown-toggle" onClick={() => toggleDropdown('about')}>
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
          
          <div className="nav-dropdown">
            <button className="nav-dropdown-toggle" onClick={() => toggleDropdown('services')}>
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

          <div className="nav-dropdown">
            <button className="nav-dropdown-toggle" onClick={() => toggleDropdown('resources')}>
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

          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>

          <div className="nav-auth-buttons">
            <Button type="button" variant="ghost" className="nav-login-btn" onClick={() => onNavigate('login')}>
              Login
            </Button>
            <Button type="button" className="nav-register-btn" onClick={() => onNavigate('register')}>
              Register
            </Button>
          </div>
        </nav>
      </header>

      <main className="landing-content">
        <section className="landing-hero">
          <div className="landing-copy">
            <p className="eyebrow">Secure Financial Platform</p>
            <h1>Professional SACCO operations for administrators, finance officers, and members</h1>
            <p className="muted-copy">
              Ayedous SACCO is designed as a modern office-based financial system for savings, shares, dividends,
              and member administration with a clean banking-grade experience.
            </p>

            <div className="hero-actions">
              <Button type="button" className="btn-primary-animated" onClick={() => onNavigate('login')}>
                Login to Dashboard
                <HiArrowRight className="btn-arrow" />
              </Button>
              <Button type="button" variant="ghost" onClick={() => onNavigate('register')}>
                Register Account
              </Button>
            </div>

            <div className="landing-meta" id="about">
              <div>
                <span>Head Office</span>
                <strong>Nairobi Financial Centre</strong>
              </div>
              <div>
                <span>Membership</span>
                <strong>Employees and Non-Employees</strong>
              </div>
              <div>
                <span>Core Services</span>
                <strong>Savings, Shares, Loans, Dividends</strong>
              </div>
            </div>
          </div>

          <Card className="landing-panel" id="security">
            <div className="section-heading">
              <div>
                <h2>Why stakeholders trust Ayedous</h2>
                <p>Operational confidence for office teams and members</p>
              </div>
              <HiShieldCheck className="feature-icon" aria-hidden="true" />
            </div>

            <div className="trust-metrics">
              {saccoHighlights.map((item, index) => (
                <div key={index} className="trust-metric-item">
                  <span>Control</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="services-section" id="services">
          <div className="services-heading">
            <p className="eyebrow">Our Services</p>
            <h2>Comprehensive SACCO Management</h2>
            <p>Everything you need to manage your cooperative efficiently</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Savings Management</h3>
              <p>Track member deposits, withdrawals, and savings accounts with real-time updates</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Share Capital</h3>
              <p>Manage share purchases and ownership records with transparent reporting</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Dividend Distribution</h3>
              <p>Calculate and distribute dividends accurately based on performance</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏦</div>
              <h3>Loan Management</h3>
              <p>Process loan applications, approvals, and track repayment schedules</p>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="cta-content">
            <h2>Ready to get started?</h2>
            <p>Join Ayedous SACCO today and experience modern cooperative management</p>
            <div className="cta-actions">
              <Button type="button" className="btn-primary-animated" onClick={() => onNavigate('register')}>
                Create Account
                <HiArrowRight className="btn-arrow" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand__mark">A</div>
            <div>
              <strong>Ayedous SACCO</strong>
              <span>Savings and Credit Cooperative</span>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Platform</h4>
              <a href="#" onClick={(e) => handleNavLink(e, 'products')}>Products</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
              <a href="#security">Security</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#" onClick={(e) => handleNavLink(e, 'our-story')}>Our Story</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'team')}>Team</a>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#" onClick={(e) => handleNavLink(e, 'faq')}>FAQ</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'guides')}>Guides</a>
              <a href="#" onClick={(e) => handleNavLink(e, 'blog')}>Blog</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Ayedous SACCO. All rights reserved.</p>
            <div className="footer-social">
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage