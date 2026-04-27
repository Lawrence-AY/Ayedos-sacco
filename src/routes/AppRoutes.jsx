import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/Landing/LandingPage";
import AuthRedirect from "../pages/Auth/AuthRedirect";
import OurStory from "../pages/Info/OurStory";
import OurIdeology from "../pages/Info/OurIdeology";
import Products from "../pages/Info/Products";
import FAQ from "../pages/Info/FAQ";
import Guides from "../pages/Info/Guides";
import Blog from "../pages/Info/Blog";
import Contact from "../pages/Info/Contact";
import Footer from "../components/ui/Footer";
import Navbar from "../components/layout/Navbar";
import  TermsAndConditions from "../pages/Info/TermsAndConditions";
import  CookiePolicy from "../pages/Info/CookiePolicy"
import { navigateToRoute } from "../utils/webappRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageWrapper />} />
        <Route path="/login" element={<AuthRedirect mode="login" />} />
        <Route path="/register" element={<AuthRedirect mode="register" />} />
        <Route path="/our-story" element={<PageWrapper><OurStory /></PageWrapper>} />
        <Route path="/our-ideology" element={<PageWrapper><OurIdeology /></PageWrapper>  } />
        <Route path="/products" element={<PageWrapper>
          <Products />
          </PageWrapper>
          } />
             <Route path="/TermsAndConditions" element={<PageWrapper>< TermsAndConditions /> </PageWrapper>} />
                <Route path="/CookiePolicy" element={<PageWrapper> <CookiePolicy /> </PageWrapper>} />
      
        <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
        <Route path="/guides" element={<PageWrapper><Guides /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route
          path="/blog"
          element={
            <PageWrapper>
              <Blog />
            </PageWrapper>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function PageWrapper({ children }) {
  const navigate = (route) => navigateToRoute(route);
  return <InfoPageLayout onNavigate={navigate}>{children}</InfoPageLayout>;
}

function InfoPageLayout({ children, onNavigate }) {
  return (
    <div className="info-page-shell">
      <Navbar onNavigate={onNavigate} />
      <main className="info-page-content">{children}</main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

function LandingPageWrapper() {
  const navigate = (route) => navigateToRoute(route);
  return <LandingPage onNavigate={navigate} />;
}

export default AppRoutes;
