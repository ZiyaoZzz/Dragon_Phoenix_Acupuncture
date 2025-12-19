import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English'},
    { code: 'es', name: 'Español'},
    { code: 'zh', name: '中文'}
  ];

  const handleLanguageChange = (langCode: 'en' | 'es' | 'zh') => {
    i18n.changeLanguage(langCode);
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
