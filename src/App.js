import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Pricing from './components/Pricing.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import Career from './components/Career.js'
import WebDevelopment from './components/services/WebDevelopment.js'
import MobileApps from './components/services/MobileApps.js'
import CloudServices from './components/services/CloudServices.js'
import Consulting from './components/services/Consulting.js'

function App() {
  return (
    <Router>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          overflow-x: hidden;
          width: 100%;
          position: relative;
        }

        body {
          overflow-x: hidden;
          max-width: 100vw;
          width: 100%;
          position: relative;
          scroll-behavior: smooth;
        }

        #root {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          overflow-x: hidden;
          max-width: 100vw;
          width: 100%;
          position: relative;
        }
      `}</style>

      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Pricing />
            <Contact />
          </>
        } />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
