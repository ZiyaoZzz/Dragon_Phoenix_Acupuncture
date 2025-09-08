import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Auto-load any JSON under **/translations with name pattern {namespace}.{lng}.json
// Example: ../common/header/translations/header.en.json → ns=header, lng=en
type JsonDict = Record<string, unknown>;
const modules = import.meta.glob('../**/translations/*.json', { eager: true }) as Record<string, { default: unknown } | JsonDict>;

type Resources = Record<string, Record<string, JsonDict>>; // { lng: { ns: dict } }
const resources: Resources = {};

Object.entries(modules).forEach(([path, modValue]) => {
  const file = path.split('/').pop() as string; // e.g. header.en.json
  const parts = file.split('.');
  if (parts.length < 3) return; // not matching {ns}.{lng}.json
  const ns = parts[0];
  const lng = parts[1];
  if (!['en', 'zh'].includes(lng)) return;
  if (!resources[lng]) resources[lng] = {};
  const maybeModule = modValue as { default: unknown } | JsonDict;
  const data = (maybeModule as { default: unknown }).default ?? maybeModule;
  if (data && typeof data === 'object') {
    resources[lng][ns] = data as JsonDict;
  }
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
