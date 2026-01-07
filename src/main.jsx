import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './tailwind.css'
import './index.css'
import App from './App.jsx'
import ProductDevelopment from './pages/ProductDevelopment.jsx'
import CoE from './pages/CoE.jsx'
import Hackathons from './pages/Hackathons.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Aurora from './components/Aurora.jsx'
import Navbar from './components/Navbar.jsx'

function AnimatedRoutes() {
  const location = useLocation()
  
  return (
    <div className="relative w-full min-h-screen bg-black text-white font-sans">
      {/* Persistent Aurora background - never unmounts */}
      <Aurora />
      
      {/* Persistent Navbar - never unmounts */}
      <Navbar />
      
      {/* Only page content transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<App />} />
          <Route path="/product" element={<ProductDevelopment />} />
          <Route path="/coe" element={<CoE />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
)
