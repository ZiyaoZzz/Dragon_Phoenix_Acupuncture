import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

// Routes that exist in a locale-prefixed form (/es/physicians, /zh/brochures/fertility, etc).
// Anything else (admin routes, 404) just switches i18n state in place without navigating,
// since there's no matching URL for it in another language. See CLAUDE.md's SEO section.
const LOCALIZABLE_BASE_PATHS = ['/', '/physicians', '/faqs', '/conditions', '/gallery', '/contact'];

function isLocalizable(basePath: string): boolean {
  return LOCALIZABLE_BASE_PATHS.includes(basePath) || basePath === '/brochures' || basePath.startsWith('/brochures/');
}

function stripLocalePrefix(pathname: string): string {
  for (const prefix of ['es', 'zh']) {
    if (pathname === `/${prefix}`) return '/';
    if (pathname.startsWith(`/${prefix}/`)) return pathname.slice(prefix.length + 1);
  }
  return pathname;
}

function localizedPath(pathname: string, lang: 'en' | 'es' | 'zh'): string {
  const basePath = stripLocalePrefix(pathname);
  if (lang === 'en') return basePath;
  return basePath === '/' ? `/${lang}` : `/${lang}${basePath}`;
}

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
    if (isLocalizable(stripLocalePrefix(location.pathname))) {
      navigate(localizedPath(location.pathname, langCode));
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
