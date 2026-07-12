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
import { ForceLanguage } from './common/seo/ForceLanguage'
import './i18n/index'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/es" element={<ForceLanguage lang="es"><HomePage localePath="/es" /></ForceLanguage>} />
      <Route path="/zh" element={<ForceLanguage lang="zh"><HomePage localePath="/zh" /></ForceLanguage>} />
      <Route path="/physicians" element={<PhysiciansPage />} />
      <Route path="/faq" element={<Navigate to="/faqs" replace />} />
      <Route path="/faqs" element={<FAQPage />} />
      <Route path="/conditions" element={<ConditionsPage />} />
      <Route path="/brochures" element={<BrochuresPage />} />
      <Route path="/brochures/:topic" element={<BrochuresPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/es/contact" element={<ForceLanguage lang="es"><ContactPage localePath="/es/contact" /></ForceLanguage>} />
      <Route path="/zh/contact" element={<ForceLanguage lang="zh"><ContactPage localePath="/zh/contact" /></ForceLanguage>} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
)
