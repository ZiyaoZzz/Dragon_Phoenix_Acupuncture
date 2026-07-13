import React from 'react';
import { useTranslation } from 'react-i18next';

const SealIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9 8.5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 14l-1.5 6L12 18l4.5 2L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TrustBar: React.FC = () => {
  const { t } = useTranslation('trustBar');

  return (
    <section className="bg-white max-w-[1200px] mx-auto px-4 sm:px-5 pt-8 md:pt-10 pb-4 md:pb-6">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <span className="inline-flex items-center gap-2 bg-brand-surface border border-green-100 text-gray-800 px-4 py-2 rounded-full text-sm sm:text-base">
          <SealIcon className="w-4 h-4 text-brand-primary shrink-0" />
          {t('credentials.nccaom')}
        </span>
        <span className="inline-flex items-center gap-2 bg-brand-surface border border-green-100 text-gray-800 px-4 py-2 rounded-full text-sm sm:text-base">
          <SealIcon className="w-4 h-4 text-brand-primary shrink-0" />
          {t('credentials.florida')}
        </span>
      </div>
    </section>
  );
};
