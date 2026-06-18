import './index.css'
import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import HowItWorks from './components/howItWorks.jsx'
import Features from './components/features.jsx'
import Testimonials from './components/testimonials.jsx'
import Download from './components/download.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Download />
      </main>
      <Footer />
    </>
  )
}

export default App
