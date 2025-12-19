import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import clinicLogo from '../../asserts/clinic_logo.png';
import phoneIcon from '../../asserts/phone.png';
import locationIcon from '../../asserts/location.png';
import clockIcon from '../../asserts/clock.png';

export const Header: React.FC = () => {
  const { t } = useTranslation('header');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass =
    "px-3 md:px-4 text-white hover:text-brand-light transition-colors duration-300 font-medium tracking-wide whitespace-nowrap leading-none block py-2 md:py-0";
  const navItems = [
    { to: '/', labelKey: 'nav.home' },
    { to: '/physicians', labelKey: 'nav.physicians' },
    { to: '/faqs', labelKey: 'nav.faqs' },
    { to: '/brochures', labelKey: 'nav.brochures' },
    { to: '/conditions', labelKey: 'nav.conditions' },
    { to: '/gallery', labelKey: 'nav.gallery' },
    { to: '/contact', labelKey: 'nav.contact' },
  ] as const;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-brand-light/20">
        <div className="max-w-8xl mx-auto px-4 md:px-8 py-4 md:py-8 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={clinicLogo} 
              alt="Dragon Phoenix Acupuncture Logo"
              className="h-10 md:h-14 w-auto"
            />
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex flex-wrap justify-end items-center gap-6 xl:gap-8">
            <div className="flex items-center space-x-3">
              <img 
                src={phoneIcon} 
                alt="Phone" 
                className="h-5 w-5 md:h-6 md:w-6"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 text-sm md:text-base">{t('contact.phone')}</span>
                <span className="text-xs md:text-sm text-brand-accent font-medium">{t('contact.consultation')}</span>
              </div>
            </div>
            
            <div className="hidden xl:flex items-center space-x-3">
              <img 
                src={locationIcon} 
                alt="Location" 
                className="h-5 w-5 md:h-6 md:w-6"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 text-sm md:text-base">{t('contact.address')}</span>
                <span className="text-xs md:text-sm text-gray-600">{t('contact.location')}</span>
              </div>
            </div>
            
            <div className="hidden xl:flex items-center space-x-3">
              <img 
                src={clockIcon} 
                alt="Hours" 
                className="h-5 w-5 md:h-6 md:w-6"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800 text-sm md:text-base">{t('contact.hours')}</span>
                <span className="text-xs md:text-sm">{t('contact.closed')}</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      <nav className="bg-brand-primary relative">
        <div className="max-w-8xl mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 py-4">
            <ul className="flex w-full items-center divide-x divide-white/30 text-sm md:text-base">
              {navItems.map(({ to, labelKey }) => (
                <li key={to} className="flex-1 text-center">
                  <Link to={to} className={navLinkClass}>
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-2 shrink-0 whitespace-nowrap relative z-[102]">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
          }`}>
            <ul className="space-y-2">
              {navItems.map(({ to, labelKey }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className={navLinkClass}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/20">
                <div className="px-3 relative z-[102]">
                  <LanguageSwitcher />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};