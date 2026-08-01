// Runs after `vite build` (see package.json "postbuild").
//
// GitHub Pages is a plain static file host: it has no server logic, so a direct
// request for a client-side route like /physicians gets a real HTTP 404 (GitHub
// Pages falls back to serving 404.html, but the *status code* stays 404). Search
// engines mostly ignore body content when the status code says "not found", so
// those routes were being excluded from Google's index even though the page
// rendered fine for a human clicking around inside the app.
//
// This script boots the built app in a headless browser, visits each known
// route, and writes the fully-rendered HTML to a physical file
// (dist/physicians/index.html, etc.). GitHub Pages serves those with a normal
// 200 status, and each one carries the per-route <title>/description/canonical
// set by src/common/seo/usePageSeo.ts.
//
// When you add a new route in src/main.tsx, add it here too (and to
// public/sitemap.xml, and give it a seo.* translation entry).

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, 'dist');
const PORT = 4713;
const BASE_URL = `http://localhost:${PORT}`;

const ROUTES = [
  '/',
  '/es',
  '/zh',
  '/physicians',
  '/faqs',
  '/conditions',
  '/brochures',
  '/brochures/fertility',
  '/brochures/fibromyalgia',
  '/brochures/lower-back-pain',
  '/brochures/stop-smoking',
  '/brochures/weight-loss',
  '/brochures/migraine',
  '/brochures/joint-pain',
  '/brochures/insomnia',
  '/brochures/anxiety',
  '/brochures/menopause',
  '/gallery',
  '/contact',
  '/es/contact',
  '/zh/contact',
  '/admin',
  '/admin/login',
];

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        await fetch(url);
        return resolve();
      } catch {
        // server not accepting connections yet
      }
      if (Date.now() - start > timeoutMs) {
        return reject(new Error(`Timed out waiting for ${url}`));
      }
      setTimeout(tick, 200);
    };
    tick();
  });
}

async function main() {
  // Spawn the local `vite` binary directly rather than through `npx`: npx forks
  // its own child to run vite, so killing the npx wrapper in cleanup() below
  // left the real preview server (npx's grandchild) running and holding the
  // port/stdio open — the script's own work finished but the process tree
  // never exited, hanging the CI job indefinitely. node_modules/.bin is
  // already on PATH here because this runs as an npm postbuild lifecycle script.
  const cmd = process.platform === 'win32' ? 'vite.cmd' : 'vite';
  const previewProcess = spawn(
    cmd,
    ['preview', '--port', String(PORT), '--strictPort'],
    { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'], shell: process.platform === 'win32' }
  );
  let serverLog = '';
  previewProcess.stdout.on('data', (chunk) => { serverLog += chunk.toString(); });
  previewProcess.stderr.on('data', (chunk) => { serverLog += chunk.toString(); });

  const cleanup = () => previewProcess.kill();

  try {
    await waitForServer(BASE_URL);
  } catch (err) {
    cleanup();
    console.error(serverLog);
    throw err;
  }

  const browser = await chromium.launch();
  try {
    // reducedMotion: 'reduce' makes components that check prefers-reduced-motion
    // (e.g. TrustBar's AnimatedCounter) skip straight to their final value instead of
    // a multi-second count-up animation, so the static HTML captured below never
    // freezes mid-animation (e.g. "37+" baked in instead of the real "90+").
    const page = await browser.newPage({ reducedMotion: 'reduce' });
    // The same page/browsing context is reused for every route below, so localStorage
    // persists across navigations. Locale-prefixed routes (/es, /zh, ...) call
    // i18n.changeLanguage(), which i18next-browser-languagedetector caches to
    // localStorage — without this, that choice would leak into every route that
    // follows it in ROUTES and silently prerender them in the wrong language.
    await page.addInitScript(() => {
      try {
        window.localStorage.removeItem('i18nextLng');
      } catch {
        // localStorage can throw in some contexts (e.g. about:blank); nothing to clean up then.
      }
    });
    for (const route of ROUTES) {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle' });
      // usePageSeo() only adds this tag after its effect runs; its presence means
      // the route-specific title/description/canonical have been applied.
      await page.waitForSelector('meta[name="robots"]', { state: 'attached', timeout: 5000 });

      // Scroll-reveal sections (useInView) start hidden until an IntersectionObserver
      // fires, which never happens on a page that's never scrolled. Without this,
      // the static HTML below the fold would freeze in its pre-animation (invisible)
      // state for anything that doesn't run JS a second time (most non-Google crawlers).
      // Scrolling through in small steps gives each observer a chance to fire.
      await page.evaluate(async () => {
        const step = Math.max(window.innerHeight, 400);
        const height = document.body.scrollHeight;
        for (let y = 0; y < height; y += step) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
        window.scrollTo(0, 0);
      });

      const html = await page.content();
      const outDir = route === '/' ? DIST : join(DIST, route.replace(/^\//, ''));
      await mkdir(outDir, { recursive: true });
      await writeFile(join(outDir, 'index.html'), html, 'utf-8');
      console.log(`prerendered ${route}`);
    }
  } finally {
    await browser.close();
    cleanup();
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Prerender failed:', err);
    process.exit(1);
  });
