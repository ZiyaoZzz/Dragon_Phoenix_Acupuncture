import React from 'react';
import { useTranslation } from 'react-i18next';
import { scrollToAppointment } from './scrollToAppointment';

// Above-the-fold intro for the homepage: the page's only <h1>, the clinic's strongest trust
// line, and the main conversion action (the appointment form further down the page).
export const HomeHero: React.FC = () => {
  const { t } = useTranslation('homeHero');

  return (
    // Background picks up the sign banner's bottom yellow (#f0d238, softened) and fades into
    // brand-surface, the WhyChoose section's background, so the banner -> hero -> next section
    // transition has no hard white band.
    <section className="bg-gradient-to-b from-[#fbedb5] via-[#fdf7e4] to-brand-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-5 pt-6 md:pt-8 pb-8 md:pb-12 text-center">
        {/* The sign banner above already shows the clinic name in large type, so the <h1> is styled
            as a small eyebrow label (kept visible: hidden heading text risks a Google spam penalty)
            and the trust line carries the visual weight instead. */}
        <h1 className="text-sm sm:text-base font-semibold uppercase tracking-widest text-brand-primary [text-wrap:balance]">{t('title')}</h1>
        <p className="mt-2 md:mt-3 text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug [text-wrap:balance]">{t('trustLine')}</p>
        <p className="mt-2 md:mt-3 max-w-3xl mx-auto text-base sm:text-lg text-gray-700">{t('lead')}</p>
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#appointment"
            onClick={(e) => {
              if (scrollToAppointment()) {
                e.preventDefault();
                window.history.replaceState(null, '', '#appointment');
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-primary text-white px-7 py-3 rounded-full hover:bg-brand-accent transition-colors text-base sm:text-lg font-semibold shadow-lg motion-safe:animate-cta-bounce hover:animate-none"
          >
            {t('primaryCta')}
          </a>
      </div>
      <p className="mt-3 text-sm sm:text-base text-gray-600">{t('hours')}</p>
      </div>
    </section>
  );
};
