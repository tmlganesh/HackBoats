import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import App from './App.jsx'
import ProductDevelopment from './pages/ProductDevelopment.jsx'
import CoE from './pages/CoE.jsx'
import Hackathons from './pages/Hackathons.jsx'
import About from './pages/About.jsx'
import Media from './pages/Media.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'

import homeBg from './assets/home-bg.jpg'
import productBg from './assets/product-bg.jpeg'
import coeBg from './assets/coe-bg.jpeg'
import hackathonBg from './assets/hackathon-bg.jpeg'
import aboutBg from './assets/about-bg.jpeg'
import mediaBg from './assets/media-bg.jpeg'
import contactBg from './assets/contact-bg.jpeg'

export default function AnimatedRoutes() {
  const location = useLocation()

  const getBackground = () => {
    switch (location.pathname) {
      case '/': return homeBg
      case '/product': return productBg
      case '/coe': return coeBg
      case '/hackathons': return hackathonBg
      case '/about': return aboutBg
      case '/media': return mediaBg
      case '/contact': return contactBg
      default: return homeBg
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-[#030712] text-white font-sans">
      <div className="fixed inset-0 z-0">
        <img src={getBackground()} className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <Navbar />

        <div className="relative z-10">
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<App />} />
          <Route path="/product" element={<ProductDevelopment />} />
          <Route path="/coe" element={<CoE />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/about" element={<About />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer/>
      </div>

    </div>
  )
}
