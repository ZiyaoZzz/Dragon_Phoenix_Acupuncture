import { useEffect } from 'react';

/**
 * Injects a <script type="application/ld+json"> tag into <head>, keyed by `id` so multiple
 * hooks/pages don't collide and so it's removed again on unmount (client-side route change).
 * Pass `data: null` to skip rendering (e.g. while translations are still loading).
 */
export function useJsonLd(id: string, data: object | null) {
  useEffect(() => {
    if (!data) return;

    let el = document.head.querySelector<HTMLScriptElement>(`script[data-jsonld="${id}"]`);
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute('data-jsonld', id);
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);

    return () => {
      el?.remove();
    };
  }, [id, data]);
}
