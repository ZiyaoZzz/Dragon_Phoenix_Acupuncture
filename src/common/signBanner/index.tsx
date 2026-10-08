import React from 'react';
import bannerArt from '../../assets/banner_art.jpg';

// Recreation of the clinic's sign (src/assets/Dragon.jpg, 1512x986; still used as-is for the og:image
// via public/images/og-image.jpg) as one inline SVG in the original's own coordinate space. Only the
// illustration (dragon, globe, phoenix: rows 0-452 of the original) is an image; the clinic name is
// real <text>, so search engines and screen readers can read it.
//
// The homepage has always shown the sign squashed to half its height (the old version did it with a
// scaleY(0.5) transform). Here the wrapper's aspect ratio is half the SVG's, and
// preserveAspectRatio="none" stretches the drawing to fit, which gives the identical look.
//
// Positions, sizes, and colors below were measured from the original image: each text line's
// textLength is the pixel width of that line on the sign, and the gradient stops are sampled from
// the sign's background (red #d33d0c, blue #113271).
export const SignBanner: React.FC = () => (
  <div className="w-full -mt-1 overflow-hidden" style={{ aspectRatio: '1512 / 493' }}>
    <svg
      viewBox="0 0 1512 986"
      preserveAspectRatio="none"
      className="block w-full h-full"
      role="img"
      aria-label="龍鳳針灸診所 Dragon Phoenix Acupuncture Clinic"
    >
      <defs>
        <linearGradient id="sign-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dc741f" />
          <stop offset="0.229" stopColor="#de8e2d" />
          <stop offset="0.458" stopColor="#e4ad2f" />
          <stop offset="0.649" stopColor="#e9ba38" />
          <stop offset="1" stopColor="#f0d138" />
        </linearGradient>
      </defs>
      <rect width="1512" height="986" fill="url(#sign-bg)" />
      <image href={bannerArt} x="0" y="0" width="1512" height="452" preserveAspectRatio="none" />
      <text
        x="93"
        y="630"
        textLength="1320"
        lengthAdjust="spacingAndGlyphs"
        fill="#d33d0c"
        fontSize="205"
        fontWeight="600"
        fontFamily='"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif'
        lang="zh-Hant"
      >
        龍鳳針灸診所
      </text>
      <g fill="#113271" fontSize="148" fontWeight="600" fontFamily='Archivo, Arial, sans-serif'>
        <text x="164" y="778" textLength="1131" lengthAdjust="spacingAndGlyphs">Dragon Phoenix</text>
        <text x="92" y="922" textLength="1344" lengthAdjust="spacingAndGlyphs">Acupuncture Clinic</text>
      </g>
    </svg>
  </div>
);
