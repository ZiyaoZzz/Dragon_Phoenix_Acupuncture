import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

type JsonDict = Record<string, unknown>;
const modules = import.meta.glob('../**/translations/*.json', { eager: true }) as Record<string, { default: unknown } | JsonDict>;

type Resources = Record<string, Record<string, JsonDict>>;
const resources: Resources = {};

Object.entries(modules).forEach(([path, modValue]) => {
  const file = path.split('/').pop() as string;
  const parts = file.split('.');
  if (parts.length < 3) return;
  const ns = parts[0];
  const lng = parts[1];
  if (!['en', 'zh', 'es'].includes(lng)) return;
  if (!resources[lng]) resources[lng] = {};
  const maybeModule = modValue as { default: unknown } | JsonDict;
  const data = (maybeModule as { default: unknown }).default ?? maybeModule;
  if (data && typeof data === 'object') {
    resources[lng][ns] = data as JsonDict;
  }
});

const detectLanguage = (): string => {
  const stored = localStorage.getItem('i18nextLng');
  if (stored && ['en', 'zh', 'es'].includes(stored)) {
    return stored;
  }

  const browserLang = navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage || 'en';
  const langCode = browserLang.toLowerCase().split('-')[0];

  if (langCode === 'es') {
    return 'es';
  }

  if (langCode === 'zh') {
    return 'zh';
  }

  return 'en';
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: detectLanguage(),
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'querystring', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      convertDetectedLanguage: (lng: string): string => {
        const langCode = lng.toLowerCase().split('-')[0];

        if (langCode === 'es') {
          return 'es';
        }

        if (langCode === 'zh') {
          return 'zh';
        }

        return 'en';
      },
    },
  });

export default i18n;
