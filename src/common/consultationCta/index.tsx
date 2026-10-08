import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Shared end-of-page call to action for content pages (brochures, conditions, physicians,
// contact). The booking form lives on the homepage (#appointment), so this links there.
export const ConsultationCta: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { t, i18n } = useTranslation('consultationCta');
  const langPrefix = i18n.language === 'es' || i18n.language === 'zh' ? `/${i18n.language}` : '';

  return (
    <aside className={`bg-white border border-green-100 rounded-lg shadow-card p-6 sm:p-8 text-center ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3">{t('title')}</h2>
      <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-6">{t('description')}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <Link
          to={`${langPrefix}/#appointment`}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-primary text-white px-7 py-3 rounded-full hover:bg-brand-accent transition-colors text-base sm:text-lg font-semibold shadow-lg motion-safe:animate-cta-bounce hover:animate-none"
        >
          {t('primary')}
        </Link>
        <a
          href="tel:+14079324818"
          className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-brand-primary text-brand-primary px-6 py-2.5 rounded-full hover:bg-brand-surface transition-colors text-base sm:text-lg font-medium"
        >
          {t('call')}
        </a>
      </div>
    </aside>
  );
};
