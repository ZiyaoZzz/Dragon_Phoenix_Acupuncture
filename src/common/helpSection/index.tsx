import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Common reasons patients come in, each linking to its existing in-depth brochure page.
// Labels reuse the brochure sidebar's translations so the two never drift apart.
const TOPICS = [
  'lower-back-pain',
  'sciatica',
  'migraine',
  'joint-pain',
  'sports-injuries',
  'anxiety',
  'insomnia',
  'menopause',
  'fertility',
  'dry-eye',
] as const;

export const HelpSection: React.FC = () => {
  const { t, i18n } = useTranslation('helpSection');
  const langPrefix = i18n.language === 'es' || i18n.language === 'zh' ? `/${i18n.language}` : '';

  return (
    <section className="bg-white px-4 sm:px-5 py-8 md:py-14">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-3xl text-brand-primary mb-2 md:mb-3">{t('title')}</h2>
          <p className="text-base sm:text-lg text-gray-600">{t('intro')}</p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {TOPICS.map((topic) => (
            <li key={topic}>
              <Link
                to={`${langPrefix}/brochures/${topic}`}
                className="group flex h-full items-center justify-between gap-2 bg-brand-surface border border-green-100 rounded-lg px-4 py-3 sm:py-4 text-gray-800 hover:border-brand-primary hover:text-brand-primary transition-colors text-base sm:text-lg"
              >
                <span>{t(`brochures:sidebar.items.${topic}`)}</span>
                <span aria-hidden="true" className="text-brand-primary transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="text-center mt-6 md:mt-8">
          <Link
            to={`${langPrefix}/conditions`}
            className="text-brand-primary hover:text-brand-accent underline underline-offset-2 text-base sm:text-lg"
          >
            {t('allConditions')}
          </Link>
        </div>
      </div>
    </section>
  );
};
