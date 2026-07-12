import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

// Only the home and contact pages currently have locale-prefixed URLs (/es, /zh/contact, etc).
// Every other route keeps a single shared URL across languages, so the switcher just changes
// i18n state in place for those. See CLAUDE.md's SEO section for why this pilot is scoped narrowly.
const LOCALIZED_PATHS: Record<string, { en: string; es: string; zh: string }> = {
  '/': { en: '/', es: '/es', zh: '/zh' },
  '/es': { en: '/', es: '/es', zh: '/zh' },
  '/zh': { en: '/', es: '/es', zh: '/zh' },
  '/contact': { en: '/contact', es: '/es/contact', zh: '/zh/contact' },
  '/es/contact': { en: '/contact', es: '/es/contact', zh: '/zh/contact' },
  '/zh/contact': { en: '/contact', es: '/es/contact', zh: '/zh/contact' },
};

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const languages = [
    { code: 'en', name: 'English'},
    { code: 'es', name: 'Español'},
    { code: 'zh', name: '中文'}
  ];

  const handleLanguageChange = (langCode: 'en' | 'es' | 'zh') => {
    i18n.changeLanguage(langCode);
    const mapping = LOCALIZED_PATHS[location.pathname];
    if (mapping) {
      navigate(mapping[langCode]);
    }
  };

  return (
    <div className="inline-flex bg-gray-100 rounded-lg p-1 shadow-inner">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code as 'en' | 'es' | 'zh')}
          className={`
            relative px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ease-in-out
            ${i18n.language === lang.code
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
            }
          `}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};
