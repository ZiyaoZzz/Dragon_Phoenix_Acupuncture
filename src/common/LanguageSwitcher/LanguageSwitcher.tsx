import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; right?: number; left?: number }>({ top: 0 });

  const languages = [
    { code: 'en', name: 'English'},
    { code: 'es', name: 'Español'},
    { code: 'zh', name: '中文'}
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: 'en' | 'es' | 'zh') => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  // Calculate dropdown position when opening
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const dropdownWidth = 192; // w-48 = 192px
      const spacing = 8; // mt-2 = 8px
      
      // Simple positioning: align to right edge of button, but ensure it stays in viewport
      let right = window.innerWidth - rect.right;
      if (right < 0) right = 16; // If would go off screen, use padding
      if (right + dropdownWidth > window.innerWidth) {
        right = window.innerWidth - dropdownWidth - 16; // Ensure dropdown fits
      }
      
      setDropdownPosition({
        top: rect.bottom + window.scrollY + spacing,
        right: right + window.scrollX,
      });
    }
  }, [isOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        const dropdown = document.getElementById('language-dropdown');
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <div className="relative">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors duration-200"
        >
          <span>{currentLanguage?.name}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && createPortal(
        <div
          id="language-dropdown"
          className="fixed z-[9999]"
          style={{
            top: `${dropdownPosition.top}px`,
            ...(dropdownPosition.right !== undefined 
              ? { right: `${dropdownPosition.right}px` }
              : { left: `${dropdownPosition.left}px` }
            ),
          }}
        >
          <div className="w-48 bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as 'en' | 'es' | 'zh')}
                  className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-3 transition-colors duration-200 ${
                    i18n.language === lang.code 
                      ? 'bg-[#a5d6a7] text-[#395c3b] font-semibold border-l-4 border-[#395c3b]' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{lang.name}</span>
                  {i18n.language === lang.code && (
                    <svg className="w-4 h-4 ml-auto text-[#395c3b]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
