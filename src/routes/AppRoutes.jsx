import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from '../components/layout/DashboardLayout'
import { dashboardConfigs } from '../data/dashboardData'
import Dashboard from '../pages/Dashboard/Dashboard'
import LandingPage from '../pages/Landing/LandingPage'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import OurStory from '../pages/Info/OurStory'
import Team from '../pages/Info/Team'
import Products from '../pages/Info/Products'
import Pricing from '../pages/Info/Pricing'
import FAQ from '../pages/Info/FAQ'
import Guides from '../pages/Info/Guides'
import Blog from '../pages/Info/Blog'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageWrapper />} />
        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/register" element={<RegisterWrapper />} />
        <Route path="/our-story" element={<PageWrapper><OurStory /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
        <Route path="/guides" element={<PageWrapper><Guides /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/dashboard/:role" element={<DashboardWrapper />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

function PageWrapper({ children }) {
  const navigate = (route) => {
    window.location.href = route ? `/${route}` : '/'
  }
  return <InfoPageLayout onNavigate={navigate}>{children}</InfoPageLayout>
}

function InfoPageLayout({ children, onNavigate }) {
  return (
    <div className="info-page-shell">
      <header className="landing-navbar scrolled">
        <div className="brand brand--dark" onClick={() => onNavigate('')} style={{ cursor: 'pointer' }}>
          <div className="brand__mark">A</div>
          <div>
            <strong>Ayedous SACCO</strong>
            <span>Savings and Credit Cooperative</span>
          </div>
        </div>

        <nav className="landing-links" aria-label="Navigation">
          <a href="/" onClick={(e) => { e.preventDefault(); onNavigate(''); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('our-story'); }}>Our Story</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}>FAQ</a>
          <div className="nav-auth-buttons">
            <a href="/login" className="nav-login-link">Login</a>
            <a href="/register" className="nav-register-link">Register</a>
          </div>
        </nav>
      </header>
      <main className="info-page-content">
        {children}
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
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Products</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('pricing'); }}>Pricing</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('our-story'); }}>Our Story</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('team'); }}>Team</a>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}>FAQ</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('guides'); }}>Guides</a>
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

function LandingPageWrapper() {
  const navigate = (route) => {
    window.location.href = route ? `/${route}` : '/'
  }
  return <LandingPage onNavigate={navigate} />
}

function LoginWrapper() {
  return <Login />
}

function RegisterWrapper() {
  return <Register />
}

function DashboardWrapper() {
  const [activeRole, setActiveRole] = useState(null)

  if (!activeRole) {
    return <Navigate to="/login" replace />
  }

  const config = dashboardConfigs[activeRole]

  return (
    <DashboardLayout
      role={activeRole}
      userName={config.userName}
      userRole={config.userRole}
      userInitials={config.userInitials}
      title={config.pageTitle}
      onLogout={() => setActiveRole(null)}
    >
      <Dashboard role={activeRole} />
    </DashboardLayout>
  )
}

export default AppRoutes
