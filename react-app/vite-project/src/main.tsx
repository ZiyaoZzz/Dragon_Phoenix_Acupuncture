import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PhysiciansPage } from './pages/PhysiciansPage'
import { FAQPage } from './pages/faqPage'
import './i18n/index'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/physicians" element={<PhysiciansPage />} />
      <Route path="/faqs" element={<FAQPage />} />
      <Route path="/brochures" element={<div>Brochures Page</div>} />
      <Route path="/conditions" element={<div>Conditions Page</div>} />
      <Route path="/gallery" element={<div>Gallery Page</div>} />
      <Route path="/contact" element={<div>Contact Page</div>} />
    </Routes>
  </Router>
)
