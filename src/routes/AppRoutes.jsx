
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import Footer from '../components/ui/Footer'
import Navbar from '../components/layout/Navbar'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageWrapper />} />
        <Route path="/our-story" element={ <OurStoryWrapper/> } />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/blog" element={ <BlogWrapper /> } />
        <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
        <Route path="/faq" element={<FAQWrapper/>} />
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

function InfoPageLayout({ children, onNavigate  }) {
  
   
  return (
    <div className="info-page-shell">
        <Navbar onNavigate={onNavigate} />
      <main className="info-page-content">
        {children}
      </main>
         
    </div>
  )
}

function LandingPageWrapper() {
  const navigate = (route) => {
    window.location.href = route ? `/${route}` : '/'
  }
  return <LandingPage onNavigate={navigate} />
}
function OurStoryWrapper() {
  const navigate = (route) => {
    window.location.href = route ? `/${route}` : '/'
  }
  return <OurStory onNavigate={navigate} />
}

function FAQWrapper() {
  return <FAQ />
}
 
  
 
function BlogWrapper() {
  return <Blog/>
}

function DashboardWrapper() {
 


  return (
    <>
    </>
   
  )
}

export default AppRoutes
