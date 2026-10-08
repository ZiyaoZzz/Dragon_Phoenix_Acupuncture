// Scrolls the homepage booking form (#appointment) near the top of the viewport (below the header
// if the header is pinned there).
//
// Two things made a plain scrollIntoView land in the wrong place: a fixed scroll-margin can't
// match how much header is actually covering the viewport (see pinnedHeaderHeight), and
// lazy-loaded images above the form can finish loading mid-scroll and push it further down. So
// the offset is measured at click time, and for a couple of seconds any page-height change
// re-targets the scroll. Stops early if the user scrolls themselves.
const GAP_BELOW_HEADER = 16;
const FOLLOW_MS = 2500;

// Height the header actually covers at the top of the viewport. It's `sticky`, but sticky only
// pins to the nearest scrolling ancestor: the homepage wrapper's overflow-x-hidden makes that
// wrapper the scroll container, so there the header scrolls away and covers nothing.
function pinnedHeaderHeight(): number {
  const header = document.querySelector('header');
  if (!header || getComputedStyle(header).position !== 'sticky') return 0;
  for (let el = header.parentElement; el && el !== document.body; el = el.parentElement) {
    const { overflowX, overflowY } = getComputedStyle(el);
    if (![overflowX, overflowY].every((o) => o === 'visible' || o === 'clip')) return 0;
  }
  return header.offsetHeight;
}

export function scrollToAppointment(): boolean {
  const form = document.getElementById('appointment');
  if (!form) return false;

  const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const go = () => {
    const top = form.getBoundingClientRect().top + window.scrollY - pinnedHeaderHeight() - GAP_BELOW_HEADER;
    window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
  };
  go();

  const observer = new ResizeObserver(go);
  observer.observe(document.body);
  const stop = () => {
    observer.disconnect();
    window.clearTimeout(timer);
    for (const evt of ['wheel', 'touchstart', 'keydown'] as const) window.removeEventListener(evt, stop);
  };
  const timer = window.setTimeout(stop, FOLLOW_MS);
  for (const evt of ['wheel', 'touchstart', 'keydown'] as const) window.addEventListener(evt, stop, { passive: true });
  return true;
}
