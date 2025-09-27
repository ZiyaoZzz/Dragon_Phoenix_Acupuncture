import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PhysiciansPage } from './pages/PhysiciansPage'
import { FAQPage } from './pages/faqPage'
import { ConditionsPage } from './pages/ConditionsPage'
import { GalleryPage } from './pages/GalleryPage'
import { ContactPage } from './pages/ContactPage'
import { BrochuresPage } from './pages/BrochuresPage'
import './i18n/index'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Router basename={import.meta.env.PROD ? "/Dragon_Phoenix_Acupuncture" : "/"}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/physicians" element={<PhysiciansPage />} />
      <Route path="/faqs" element={<FAQPage />} />
      <Route path="/conditions" element={<ConditionsPage />} />
      <Route path="/brochures" element={<BrochuresPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>
)
