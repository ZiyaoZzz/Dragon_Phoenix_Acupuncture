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
  const previewProcess = spawn(
    'vite',
    ['preview', '--port', String(PORT), '--strictPort'],
    { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] }
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
    const page = await browser.newPage();
    for (const route of ROUTES) {
      await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle' });
      // usePageSeo() only adds this tag after its effect runs; its presence means
      // the route-specific title/description/canonical have been applied.
      await page.waitForSelector('meta[name="robots"]', { state: 'attached', timeout: 5000 });

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
