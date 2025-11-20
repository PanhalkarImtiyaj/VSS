import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Pricing from './components/Pricing.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        #root {
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Navbar />
      <Hero />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}

export default App
