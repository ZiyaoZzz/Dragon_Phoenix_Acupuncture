import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=dragon+phoenix+acupuncture+reviews#lrd=0x88dd8f626219351d:0xed674992cf3991ee,1,,,';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-6h4v6" />
  </svg>
);

const StethoscopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className}>
    <path d="M6 3v6a4 4 0 0 0 8 0V3" />
    <path d="M10 13v3a5 5 0 0 0 10 0v-2" />
    <circle cx="20" cy="12" r="2" />
  </svg>
);

const SealIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className}>
    <circle cx="12" cy="9" r="6" />
    <path d="M9 8.5l2 2 4-4" />
    <path d="M9 14l-1.5 6L12 18l4.5 2L15 14" />
  </svg>
);

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className}>
    <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
  </svg>
);

const ITEMS = [
  { key: 'experience', icon: HomeIcon },
  { key: 'medical', icon: StethoscopeIcon },
  { key: 'certified', icon: SealIcon },
  { key: 'personal', icon: HeartIcon },
] as const;

export const WhyChoose: React.FC = () => {
  const { t, i18n } = useTranslation('whyChoose');
  const langPrefix = i18n.language === 'es' || i18n.language === 'zh' ? `/${i18n.language}` : '';

  return (
    <section className="bg-brand-surface px-4 sm:px-5 py-8 md:py-12 mb-8 md:mb-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl sm:text-3xl text-brand-primary text-center mb-6 md:mb-8">{t('title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ITEMS.map(({ key, icon: Icon }) => (
            <div key={key} className="bg-white rounded-lg shadow-card p-5 sm:p-6">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-surface text-brand-primary mb-3">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{t(`items.${key}.title`)}</h3>
              <p className="text-gray-600 text-base">{t(`items.${key}.desc`)}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-base sm:text-lg">
          <Link
            to={`${langPrefix}/physicians`}
            className="text-brand-primary hover:text-brand-accent underline underline-offset-2"
          >
            {t('physiciansLink')}
          </Link>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:text-brand-accent underline underline-offset-2"
          >
            {t('reviewsLink')}
          </a>
        </div>
      </div>
    </section>
  );
};
