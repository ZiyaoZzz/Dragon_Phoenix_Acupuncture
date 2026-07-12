import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Forces i18n to a specific language for locale-prefixed routes (e.g. /es, /zh/contact),
 * overriding whatever localStorage/browser-detected language was active. Renders nothing
 * until the switch resolves, so the prerender script (which waits for the SEO meta tag)
 * never captures a frame in the wrong language.
 */
export const ForceLanguage: React.FC<{ lang: 'en' | 'es' | 'zh'; children: React.ReactNode }> = ({ lang, children }) => {
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(i18n.language === lang);

  useEffect(() => {
    if (i18n.language === lang) {
      setReady(true);
      return;
    }
    setReady(false);
    let cancelled = false;
    i18n.changeLanguage(lang).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [lang, i18n]);

  if (!ready) return null;
  return <>{children}</>;
};
