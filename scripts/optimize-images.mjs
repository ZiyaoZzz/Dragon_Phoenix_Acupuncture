// One-off/occasional maintenance script (not part of the build): shrinks src/assets/* in place.
// Run manually with `npm run optimize-images` after adding new photos, or every so often to
// re-check existing ones. Overwrites files at the same path/extension so no import needs updating.
//
// Most of the source photos here are straight-off-the-camera (3000-5000px wide, several MB) but
// are only ever displayed at a few hundred px in cards or ~1500px as a hero banner. That gap is
// pure wasted page weight and directly hurts LCP / Core Web Vitals, which factors into Google
// ranking. This resizes anything wider than MAX_WIDTH and re-compresses JPEG/PNG.

import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const ASSETS_DIR = join(ROOT, 'src', 'assets');
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 80;

async function optimizeFile(path) {
  const ext = extname(path).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;

  const before = (await stat(path)).size;
  const image = sharp(path);
  const metadata = await image.metadata();

  let pipeline = image;
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH });
  }

  const buffer =
    ext === '.png'
      ? await pipeline.png({ compressionLevel: 9, palette: true, quality: 85 }).toBuffer()
      : await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();

  const after = buffer.length;
  if (after < before) {
    const { writeFile } = await import('node:fs/promises');
    await writeFile(path, buffer);
    return { path, before, after };
  }
  return { path, before, after: before, skipped: true };
}

async function main() {
  const files = await readdir(ASSETS_DIR);
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const path = join(ASSETS_DIR, file);
    const result = await optimizeFile(path);
    if (!result) continue;
    totalBefore += result.before;
    totalAfter += result.after;
    const beforeKb = (result.before / 1024).toFixed(0);
    const afterKb = (result.after / 1024).toFixed(0);
    const note = result.skipped ? '(already smaller, kept)' : '';
    console.log(`${file}: ${beforeKb}KB -> ${afterKb}KB ${note}`);
  }

  console.log(
    `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`
  );
}

main().catch((err) => {
  console.error('Image optimization failed:', err);
  process.exit(1);
});
