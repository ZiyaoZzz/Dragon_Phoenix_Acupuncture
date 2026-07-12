import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://dragonphoenixacupuncture.com';

function setMetaByName(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets document.title, meta description and canonical link for the current route.
 * Runs client-side on mount/language change; the prerender script (scripts/prerender.mjs)
 * captures the DOM after this runs, so the values baked into the static HTML files match.
 */
export function usePageSeo(routeKey: string, path: string, options?: { noindex?: boolean }) {
  const { t, i18n } = useTranslation('seo');

  useEffect(() => {
    const title = t(`${routeKey}.title`);
    const description = t(`${routeKey}.description`);
    document.title = title;
    setMetaByName('description', description);
    setCanonical(`${SITE_URL}${path}`);
    setMetaByName('robots', options?.noindex ? 'noindex, nofollow' : 'index, follow');
  }, [t, i18n.language, routeKey, path, options?.noindex]);
}
