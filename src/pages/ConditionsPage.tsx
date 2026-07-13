import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import { usePageSeo } from '../common/seo/usePageSeo';
import { useJsonLd } from '../common/seo/useJsonLd';

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

export const ConditionsPage: React.FC = () => {
  usePageSeo('conditions', '/conditions');
  const { t } = useTranslation('conditions');

  const renderChip = (key: string, tier: 'proven' | 'probable') => {
    const label = t(`${tier}.${key}`);
    const mark = tier === 'proven' ? '✓' : '○';
    const chipClasses =
      tier === 'proven'
        ? 'bg-green-100 border border-green-200 text-gray-800'
        : 'bg-green-50 border border-green-100 text-green-600';
    const topic = BROCHURE_LINKS[key];

    if (topic) {
      return (
        <Link
          key={key}
          to={`/brochures/${topic}`}
          className={`inline-flex items-center gap-1.5 ${chipClasses} px-3 py-1.5 rounded-full text-sm sm:text-base hover:ring-1 hover:ring-[#395c3b] transition-shadow`}
        >
          <span aria-hidden="true">{mark}</span>
          {label}
          <span className="text-xs opacity-60" aria-hidden="true">↗</span>
        </Link>
      );
    }

    return (
      <span key={key} className={`inline-flex items-center gap-1.5 ${chipClasses} px-3 py-1.5 rounded-full text-sm sm:text-base`}>
        <span aria-hidden="true">{mark}</span>
        {label}
      </span>
    );
  };

  useJsonLd('conditions', {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: t('title'),
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

      <main className="flex-1 bg-[#f1f9f0]">
        <section className="max-w-6xl mx-auto px-5 py-12">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">{t('title')}</h1>
            <p className="text-gray-600 text-xl mb-4">{t('intro.p1')}</p>
            <p className="text-gray-600 text-xl">{t('intro.p2')}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-5 sm:p-6 mb-8 flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-start">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-gray-800 text-sm font-bold shrink-0">✓</span>
              <div>
                <p className="font-semibold text-gray-800">{t('legend.proven')}</p>
                <p className="text-gray-500 text-sm">{t('provenDescription')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600 text-sm font-bold shrink-0">○</span>
              <div>
                <p className="font-semibold text-gray-800">{t('legend.probable')}</p>
                <p className="text-gray-500 text-sm">{t('probableDescription')}</p>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center -mt-4 mb-8">{t('brochureHint')}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {CATEGORIES.map((category) => (
              <div key={category.key} className="bg-white rounded-lg shadow-md p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#e9f5e9] text-[#395c3b] shrink-0">
                    <category.icon className="w-6 h-6" />
                  </span>
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{t(`categories.${category.key}`)}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.proven.map((key) => renderChip(key, 'proven'))}
                  {category.probable.map((key) => renderChip(key, 'probable'))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConditionsPage;
