import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PhysiciansPage } from './pages/PhysiciansPage'
import { FAQPage } from './pages/faqPage'
import { ConditionsPage } from './pages/ConditionsPage'
import { GalleryPage } from './pages/GalleryPage'
import { ContactPage } from './pages/ContactPage'
import { BrochuresPage } from './pages/BrochuresPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { AdminLoginPage } from './pages/admin/AdminLoginPage'
import { AdminDashboard } from './pages/admin/AdminDashboard'
import './i18n/index'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/physicians" element={<PhysiciansPage />} />
      <Route path="/faq" element={<Navigate to="/faqs" replace />} />
      <Route path="/faqs" element={<FAQPage />} />
      <Route path="/conditions" element={<ConditionsPage />} />
      <Route path="/brochures" element={<BrochuresPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
)
