import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://dragonphoenixacupuncture.com';
// Static copy of the clinic sign (public/images/), so the URL is stable across builds
// (files under src/assets get a content hash in their filename).
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;
const OG_LOCALE: Record<string, string> = { en: 'en_US', es: 'es_US', zh: 'zh_CN' };

function setMetaByName(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
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
 * GitHub Pages serves every route as a directory (e.g. dist/contact/index.html) and 301s
 * the no-slash form to the slash form. Canonical URLs must match the URL that actually
 * returns 200, or Google sees a redirect/canonical contradiction and won't index the page.
 */
function withTrailingSlash(path: string): string {
  if (path === '/') return path;
  return path.endsWith('/') ? path : `${path}/`;
}

/**
 * Sets document.title, meta description, canonical link, and Open Graph/Twitter card tags
 * (used for link previews on Facebook, iMessage, WhatsApp, etc.) for the current route.
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
    const url = `${SITE_URL}${withTrailingSlash(path)}`;
    setCanonical(url);
    setMetaByProperty('og:type', 'website');
    setMetaByProperty('og:site_name', 'Dragon Phoenix Acupuncture');
    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', url);
    setMetaByProperty('og:image', OG_IMAGE);
    setMetaByProperty('og:locale', OG_LOCALE[i18n.language] ?? 'en_US');
    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('robots', options?.noindex ? 'noindex, nofollow' : 'index, follow');
  }, [t, i18n.language, routeKey, path, options?.noindex]);
}
