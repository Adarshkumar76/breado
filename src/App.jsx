import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import HowItWorks from './components/howItWorks.jsx'
import Features from './components/features.jsx'
import Testimonials from './components/testimonials.jsx'
import Download from './components/download.jsx'
import Footer from './components/footer.jsx'
import ScrollToTop from './components/scrollToTop.jsx'
import ContactPage from './components/ContactPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import PrivacyPolicyPage from './components/PrivacyPolicyPage.jsx'
import TermsPage from './components/TermsPage.jsx'
import DeleteDataPage from './components/DeleteDataPage.jsx'
import ReturnPolicyPage from './components/ReturnPolicyPage.jsx'

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <HowItWorks />
            <Features />
            <Testimonials />
            <Download />
          </main>
        } />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/delete-data" element={<DeleteDataPage />} />
        <Route path="/return-policy" element={<ReturnPolicyPage />} />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
