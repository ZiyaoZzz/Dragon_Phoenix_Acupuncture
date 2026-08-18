import { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ForceLanguage } from './common/seo/ForceLanguage'
import './i18n/index'
import './index.css'

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })))
const PhysiciansPage = lazy(() => import('./pages/PhysiciansPage').then((m) => ({ default: m.PhysiciansPage })))
const FAQPage = lazy(() => import('./pages/faqPage').then((m) => ({ default: m.FAQPage })))
const ConditionsPage = lazy(() => import('./pages/ConditionsPage').then((m) => ({ default: m.ConditionsPage })))
const GalleryPage = lazy(() => import('./pages/GalleryPage').then((m) => ({ default: m.GalleryPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })))
const BrochuresPage = lazy(() => import('./pages/BrochuresPage').then((m) => ({ default: m.BrochuresPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })))
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage').then((m) => ({ default: m.AdminLoginPage })))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard').then((m) => ({ default: m.AdminDashboard })))

createRoot(document.getElementById('root')!).render(
  <Router>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/es" element={<ForceLanguage lang="es"><HomePage localePath="/es" /></ForceLanguage>} />
        <Route path="/zh" element={<ForceLanguage lang="zh"><HomePage localePath="/zh" /></ForceLanguage>} />

        <Route path="/physicians" element={<PhysiciansPage />} />
        <Route path="/es/physicians" element={<ForceLanguage lang="es"><PhysiciansPage localePath="/es/physicians" /></ForceLanguage>} />
        <Route path="/zh/physicians" element={<ForceLanguage lang="zh"><PhysiciansPage localePath="/zh/physicians" /></ForceLanguage>} />

        <Route path="/faq" element={<Navigate to="/faqs" replace />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/es/faqs" element={<ForceLanguage lang="es"><FAQPage localePath="/es/faqs" /></ForceLanguage>} />
        <Route path="/zh/faqs" element={<ForceLanguage lang="zh"><FAQPage localePath="/zh/faqs" /></ForceLanguage>} />

        <Route path="/conditions" element={<ConditionsPage />} />
        <Route path="/es/conditions" element={<ForceLanguage lang="es"><ConditionsPage localePath="/es/conditions" /></ForceLanguage>} />
        <Route path="/zh/conditions" element={<ForceLanguage lang="zh"><ConditionsPage localePath="/zh/conditions" /></ForceLanguage>} />

        <Route path="/brochures" element={<BrochuresPage />} />
        <Route path="/brochures/:topic" element={<BrochuresPage />} />
        <Route path="/es/brochures" element={<ForceLanguage lang="es"><BrochuresPage /></ForceLanguage>} />
        <Route path="/es/brochures/:topic" element={<ForceLanguage lang="es"><BrochuresPage /></ForceLanguage>} />
        <Route path="/zh/brochures" element={<ForceLanguage lang="zh"><BrochuresPage /></ForceLanguage>} />
        <Route path="/zh/brochures/:topic" element={<ForceLanguage lang="zh"><BrochuresPage /></ForceLanguage>} />

        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/es/gallery" element={<ForceLanguage lang="es"><GalleryPage localePath="/es/gallery" /></ForceLanguage>} />
        <Route path="/zh/gallery" element={<ForceLanguage lang="zh"><GalleryPage localePath="/zh/gallery" /></ForceLanguage>} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/es/contact" element={<ForceLanguage lang="es"><ContactPage localePath="/es/contact" /></ForceLanguage>} />
        <Route path="/zh/contact" element={<ForceLanguage lang="zh"><ContactPage localePath="/zh/contact" /></ForceLanguage>} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </Router>
)
