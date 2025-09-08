import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import clinicLogo from '../../asserts/clinic_logo.png';
import phoneIcon from '../../asserts/phone.png';
import locationIcon from '../../asserts/location.png';
import clockIcon from '../../asserts/clock.png';

export const Header: React.FC = () => {
  const { t } = useTranslation('header');

  const navLinkClass =
    "px-3 md:px-4 text-white hover:text-brand-light transition-colors duration-300 font-medium tracking-wide whitespace-nowrap leading-none";
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
    <header className="bg-white shadow-md">
      <div className="bg-brand-light/20">
        <div className="max-w-8xl mx-auto px-4 md:px-8 py-8 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={clinicLogo} 
              alt="Dragon Phoenix Acupuncture Logo"
              className="h-14 w-auto"
            />
          </div>

          <div className="flex flex-wrap justify-end items-center gap-8">
            <div className="flex items-center space-x-3">
              <img 
                src={phoneIcon} 
                alt="Phone" 
                className="h-6 w-6"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">{t('contact.phone')}</span>
                <span className="text-sm text-brand-accent font-medium">{t('contact.consultation')}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <img 
                src={locationIcon} 
                alt="Location" 
                className="h-6 w-6"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">{t('contact.address')}</span>
                <span className="text-sm text-gray-600">{t('contact.location')}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <img 
                src={clockIcon} 
                alt="Hours" 
                className="h-6 w-6"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">{t('contact.hours')}</span>
                <span className="text-sm">{t('contact.closed')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="bg-brand-primary">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex items-center gap-4 py-4">
            <ul className="flex w-full items-center divide-x divide-white/30 text-sm md:text-base">
              {navItems.map(({ to, labelKey }) => (
                <li key={to} className="flex-1 text-center">
                  <Link to={to} className={navLinkClass}>
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-2 shrink-0 whitespace-nowrap">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};