import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import { Reveal } from '../common/reveal';
import { usePageSeo } from '../common/seo/usePageSeo';
import { useJsonLd } from '../common/seo/useJsonLd';
import { ConsultationCta } from '../common/consultationCta';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const BoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <circle cx="5.5" cy="7" r="2.5" />
    <circle cx="18.5" cy="17" r="2.5" />
    <line x1="7.3" y1="8.8" x2="16.7" y2="15.2" />
  </svg>
);

const FlowerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <circle cx="12" cy="6.5" r="2.4" />
    <circle cx="12" cy="17.5" r="2.4" />
    <circle cx="6.5" cy="12" r="2.4" />
    <circle cx="17.5" cy="12" r="2.4" />
    <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
  </svg>
);

const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <ellipse cx="12" cy="12" rx="7" ry="4.3" transform="rotate(-40 12 12)" />
    <line x1="7.3" y1="16.7" x2="4" y2="20" />
  </svg>
);

const WaveIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <polyline points="3,12 6.5,8 9.5,16 12.5,8 15.5,16 18.5,8 21,12" />
  </svg>
);

const WindIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <path d="M3 8q4.5-3 9 0t9 0" />
    <path d="M3 13q4.5-3 9 0t9 0" />
    <path d="M3 18q4.5-3 9 0t9 0" />
  </svg>
);

const PulseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <polyline points="2,12 7,12 9,6 12,18 14,10 16,12 22,12" />
  </svg>
);

const DropletIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg {...iconProps} className={className} aria-hidden="true">
    <path d="M12 3c4 5 7 8.5 7 12a7 7 0 0 1-14 0c0-3.5 3-7 7-12z" />
  </svg>
);

interface Category {
  key: string;
  icon: React.FC<{ className?: string }>;
  proven: string[];
  probable: string[];
}

const CATEGORIES: Category[] = [
  {
    key: 'painMusculoskeletal',
    icon: BoneIcon,
    proven: ['biliaryColic', 'facialPain', 'headache', 'kneePain', 'lowBackPain', 'neckPain', 'painInDentistry', 'periarthritisOfShoulder', 'postoperativePain', 'renalColic', 'rheumatoidArthritis', 'sciatica', 'sprain', 'tennisElbow'],
    probable: ['cancerPain', 'fibromyalgia', 'goutyArthritis', 'neuralgia', 'osteoarthritis', 'painDueToEndoscopy', 'painInThromboangiitis', 'postExtubation', 'postoperativeConvalescence', 'radicularPain', 'raynaudSyndrome', 'reflexSympatheticDystrophy', 'spinePain', 'stiffNeck', 'temporomandibularJoint', 'tietzeSyndrome'],
  },
  {
    key: 'womensHealth',
    icon: FlowerIcon,
    proven: ['dysmenorrhoea', 'inductionOfLabor', 'malpositionOfFetus', 'menstrualCramps', 'morningSickness'],
    probable: ['femaleInfertility', 'femaleUrethralSyndrome', 'hypoOvarian', 'labourPain', 'lactationDeficiency', 'polycysticOvarySyndrome', 'premenstrualSyndrome'],
  },
  {
    key: 'digestive',
    icon: LeafIcon,
    proven: ['dysentery', 'epigastralgia', 'nauseaAndVomiting'],
    probable: ['abdominalPain', 'cholecystitis', 'cholelithiasis', 'gastrokineticDisturbance', 'hepatitisB', 'ulcerativeColitis'],
  },
  {
    key: 'neuroMental',
    icon: WaveIcon,
    proven: ['depression', 'stroke'],
    probable: ['alcoholDependence', 'bellsPalsy', 'cardiacNeurosis', 'competitionStress', 'craniocerebralInjury', 'facialSpasm', 'insomnia', 'meniereDisease', 'opiumDependence', 'schizophrenia', 'tobaccoDependence', 'touretteSyndrome', 'vascularDementia'],
  },
  {
    key: 'respiratoryEntSkin',
    icon: WindIcon,
    proven: ['allergicRhinitis'],
    probable: ['acneVulgaris', 'bronchialAsthma', 'earache', 'epidemicHemorrhagicFever', 'epistaxis', 'eyePain', 'herpesZoster', 'neurodermatitis', 'pruritus', 'sialism', 'sjogrenSyndrome', 'soreThroat', 'whoopingCough'],
  },
  {
    key: 'cardioMetabolic',
    icon: PulseIcon,
    proven: ['hypertension', 'hypotension', 'leukopenia'],
    probable: ['diabetesMellitus', 'hyperlipaemia', 'obesity'],
  },
  {
    key: 'urinaryMens',
    icon: DropletIcon,
    proven: [],
    probable: ['maleSexualDysfunction', 'prostatitis', 'recurrentLowerUrinaryTract', 'retentionOfUrine', 'urolithiasis'],
  },
];

const TIERS = ['proven', 'probable'] as const;

// "Name (qualifier)" -> ["Name", "qualifier"]; handles both ASCII and full-width (zh) parentheses.
const splitLabel = (label: string): [string, string | null] => {
  const match = label.match(/^(.*?)\s*[(（](.*)[)）]$/);
  return match ? [match[1], match[2]] : [label, null];
};

// Conditions with a matching in-depth brochure. Only conditions that map cleanly to a
// brochure topic are linked (e.g. not "headache" -> "migraine", too imprecise a match).
const BROCHURE_LINKS: Record<string, string> = {
  femaleInfertility: 'fertility',
  fibromyalgia: 'fibromyalgia',
  lowBackPain: 'lower-back-pain',
  tobaccoDependence: 'stop-smoking',
  obesity: 'weight-loss',
  osteoarthritis: 'joint-pain',
  insomnia: 'insomnia',
};

export const ConditionsPage: React.FC<{ localePath?: string }> = ({ localePath }) => {
  const path = localePath ?? '/conditions';
  usePageSeo('conditions', path);
  const { t, i18n } = useTranslation('conditions');
  const langPrefix = i18n.language === 'es' || i18n.language === 'zh' ? `/${i18n.language}` : '';

  const renderChip = (key: string, tier: 'proven' | 'probable') => {
    // Many WHO labels carry a long parenthetical qualifier ("Epigastralgia, acute (in peptic
    // ulcer, ...)"). Show the name in the chip's main weight and the qualifier as smaller text.
    const [name, detail] = splitLabel(t(`${tier}.${key}`));
    const mark = tier === 'proven' ? '✓' : '○';
    const topic = BROCHURE_LINKS[key];
    const chipClasses = topic
      ? 'bg-white border border-brand-primary text-brand-primary font-medium hover:bg-brand-primary hover:text-white transition-colors'
      : tier === 'proven'
        ? 'bg-green-100 border border-green-200 text-gray-800'
        : 'bg-white border border-gray-200 text-gray-700';
    const content = (
      <>
        <span aria-hidden="true" className={topic ? '' : tier === 'proven' ? 'text-brand-primary' : 'text-gray-400'}>{mark}</span>
        <span>
          {name}
          {detail && <span className="ml-1 text-xs sm:text-sm font-normal opacity-70">({detail})</span>}
        </span>
        {topic && <span aria-hidden="true">↗</span>}
      </>
    );
    const classes = `inline-flex items-start gap-1.5 ${chipClasses} px-3 py-1.5 rounded-2xl text-sm sm:text-base leading-snug`;

    return topic ? (
      <Link key={key} to={`${langPrefix}/brochures/${topic}`} className={classes}>
        {content}
      </Link>
    ) : (
      <span key={key} className={classes}>
        {content}
      </span>
    );
  };

  useJsonLd('conditions', {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: t('title'),
    url: `https://dragonphoenixacupuncture.com${path}/`,
    about: CATEGORIES.flatMap((category) =>
      TIERS.flatMap((tier) => category[tier].map((key) => ({
        '@type': 'MedicalCondition',
        name: t(`${tier}.${key}`),
      })))
    ),
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-brand-surface">
        <section className="max-w-6xl mx-auto px-5 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">{t('title')}</h1>
            <p className="text-gray-600 text-lg sm:text-xl mb-4">{t('intro.p1')}</p>
            <p className="text-gray-600 text-lg sm:text-xl">{t('intro.p2')}</p>
          </div>

          <div className="bg-white rounded-lg shadow-card p-5 sm:p-6 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 border border-green-200 text-brand-primary text-sm font-bold shrink-0">✓</span>
              <div>
                <p className="font-semibold text-gray-800">{t('legend.proven')}</p>
                <p className="text-gray-600 text-sm sm:text-base">{t('provenDescription')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-400 text-sm font-bold shrink-0">○</span>
              <div>
                <p className="font-semibold text-gray-800">{t('legend.probable')}</p>
                <p className="text-gray-600 text-sm sm:text-base">{t('probableDescription')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white border border-brand-primary text-brand-primary text-sm font-bold shrink-0">↗</span>
              <div>
                <p className="font-semibold text-gray-800">{t('legend.link')}</p>
                <p className="text-gray-600 text-sm sm:text-base">{t('linkDescription')}</p>
              </div>
            </div>
          </div>

          <nav aria-label={t('jumpLabel')} className="flex flex-wrap justify-center gap-2 mb-8">
            {CATEGORIES.map((category) => (
              <a
                key={category.key}
                href={`#${category.key}`}
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm hover:border-brand-primary hover:text-brand-primary transition-colors"
              >
                <category.icon className="w-4 h-4" />
                {t(`categories.${category.key}`)}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CATEGORIES.map((category, i) => (
              // The first (largest) category spans both columns so the remaining six pair up
              // evenly instead of leaving one card orphaned at the bottom.
              <Reveal key={category.key} delay={i === 0 ? 0 : ((i - 1) % 2) * 100} className={i === 0 ? 'lg:col-span-2' : ''}>
                <div id={category.key} className="h-full bg-white rounded-lg shadow-card p-6 sm:p-7 scroll-mt-28 lg:scroll-mt-52">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand-surface text-brand-primary shrink-0">
                      <category.icon className="w-6 h-6" />
                    </span>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{t(`categories.${category.key}`)}</h2>
                  </div>
                  {TIERS.filter((tier) => category[tier].length > 0).map((tier, j) => (
                    <div key={tier} className={j > 0 ? 'mt-5 pt-5 border-t border-gray-100' : ''}>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">{t(`legend.${tier}`)}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category[tier].map((key) => renderChip(key, tier))}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-500 leading-relaxed max-w-4xl mx-auto">{t('sourceNote')}</p>

          <ConsultationCta className="mt-10 md:mt-14" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConditionsPage;
