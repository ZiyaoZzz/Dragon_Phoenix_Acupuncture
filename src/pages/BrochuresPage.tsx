import React, { useEffect, useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import { Sidebar } from '../common/sidebar';
import type { SidebarItem } from '../common/sidebar';
import { renderBrochureSection } from '../common/brochures/renderer';
import type { BrochureSectionId } from '../common/brochures/types';
import { useTranslation } from 'react-i18next';
import { usePageSeo } from '../common/seo/usePageSeo';
import { useJsonLd } from '../common/seo/useJsonLd';

const SITE_URL = 'https://dragonphoenixacupuncture.com';

// Maps a brochure topic id to its seo.*.json key and its own URL. 'intro' is the default
// topic and lives at /brochures itself rather than /brochures/intro.
const SEO_KEY_BY_TOPIC: Record<BrochureSectionId, string> = {
  intro: 'brochuresIntro',
  fertility: 'brochuresFertility',
  fibromyalgia: 'brochuresFibromyalgia',
  'lower-back-pain': 'brochuresLowerBackPain',
  sciatica: 'brochuresSciatica',
  'stop-smoking': 'brochuresStopSmoking',
  'weight-loss': 'brochuresWeightLoss',
  migraine: 'brochuresMigraine',
  'joint-pain': 'brochuresJointPain',
  'sports-injuries': 'brochuresSportsInjuries',
  insomnia: 'brochuresInsomnia',
  anxiety: 'brochuresAnxiety',
  menopause: 'brochuresMenopause',
  'dry-eye': 'brochuresDryEye',
};

// Topics with a visible FAQ block in their section component (see additional-sections.tsx),
// mapped to the translation section key (camelCase) and how many faq{n}Q/faq{n}A pairs exist,
// so the same content can be surfaced as FAQPage structured data — Google requires the
// structured data to mirror what's actually visible on the page, not go beyond it.
const FAQ_TOPICS: Partial<Record<BrochureSectionId, { sectionKey: string; count: number }>> = {
  sciatica: { sectionKey: 'sciatica', count: 2 },
  'sports-injuries': { sectionKey: 'sportsInjuries', count: 2 },
};

export const BrochuresPage: React.FC = () => {
  const { t, i18n } = useTranslation('brochures');
  const navigate = useNavigate();
  const { topic } = useParams<{ topic?: string }>();
  const langPrefix = i18n.language === 'es' || i18n.language === 'zh' ? `/${i18n.language}` : '';
  const topicPath = (id: string): string =>
    id === 'intro' ? `${langPrefix}/brochures` : `${langPrefix}/brochures/${id}`;

  const items: SidebarItem[] = useMemo(() => [
    { id: 'intro', name: t('sidebar.items.intro') },
    { id: 'fertility', name: t('sidebar.items.fertility') },
    { id: 'fibromyalgia', name: t('sidebar.items.fibromyalgia') },
    { id: 'lower-back-pain', name: t('sidebar.items.lower-back-pain') },
    { id: 'sciatica', name: t('sidebar.items.sciatica') },
    { id: 'stop-smoking', name: t('sidebar.items.stop-smoking') },
    { id: 'weight-loss', name: t('sidebar.items.weight-loss') },
    { id: 'migraine', name: t('sidebar.items.migraine') },
    { id: 'joint-pain', name: t('sidebar.items.joint-pain') },
    { id: 'sports-injuries', name: t('sidebar.items.sports-injuries') },
    { id: 'insomnia', name: t('sidebar.items.insomnia') },
    { id: 'anxiety', name: t('sidebar.items.anxiety') },
    { id: 'menopause', name: t('sidebar.items.menopause') },
    { id: 'dry-eye', name: t('sidebar.items.dry-eye') },
  ], [t]);

  const rawIndex = items.findIndex((i) => i.id === topic);
  const selectedIndex = rawIndex === -1 ? 0 : rawIndex;
  const selected = items[selectedIndex];
  const prevItem = selectedIndex > 0 ? items[selectedIndex - 1] : null;
  const nextItem = selectedIndex < items.length - 1 ? items[selectedIndex + 1] : null;

  const seoKey = SEO_KEY_BY_TOPIC[selected.id as BrochureSectionId];
  usePageSeo(seoKey, topicPath(selected.id));

  const { t: tSeo } = useTranslation('seo');
  useJsonLd('brochureTopic', {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: tSeo(`${seoKey}.title`),
    description: tSeo(`${seoKey}.description`),
    url: `${SITE_URL}${topicPath(selected.id)}/`,
    inLanguage: i18n.language,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Dragon Phoenix Acupuncture',
      url: SITE_URL,
    },
  });

  const faqConfig = FAQ_TOPICS[selected.id as BrochureSectionId];
  useJsonLd(
    'brochureFaq',
    faqConfig
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: Array.from({ length: faqConfig.count }, (_, i) => i + 1).map((n) => ({
            '@type': 'Question',
            name: t(`sections.${faqConfig.sectionKey}.faq${n}Q`),
            acceptedAnswer: {
              '@type': 'Answer',
              text: t(`sections.${faqConfig.sectionKey}.faq${n}A`),
            },
          })),
        }
      : null,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selected.id]);

  const handleSelect = (item: SidebarItem) => {
    navigate(topicPath(item.id));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-surface">
        <section className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 text-center">{t('sidebar.title')}</h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
            <div className="md:col-span-3">
              <div className="md:sticky md:top-28 lg:top-32">
                <Sidebar
                  title={t('sidebar.title')}
                  items={items}
                  selectedItem={selected}
                  onItemSelect={handleSelect}
                />
              </div>
            </div>

            <div className="md:col-span-9 space-y-6 sm:space-y-8 md:space-y-10">
              {renderBrochureSection(selected.id as BrochureSectionId)}

              <nav className="flex items-stretch justify-between gap-4 pt-4 border-t border-gray-300" aria-label={t('pager.label', { defaultValue: 'Brochure pagination' })}>
                {prevItem ? (
                  <Link
                    to={topicPath(prevItem.id)}
                    className="group flex-1 max-w-[48%] rounded-xl p-4 sm:p-5"
                  >
                    <span className="text-sm text-gray-600 flex items-center gap-1 group-hover:text-brand-primary transition-colors">
                      <span aria-hidden="true" className="inline-block transition-transform group-hover:-translate-x-1">←</span>
                      {t('pager.previous', { defaultValue: 'Previous' })}
                    </span>
                    <span className="block text-brand-primary font-semibold mt-1">{prevItem.name}</span>
                  </Link>
                ) : <span />}
                {nextItem ? (
                  <Link
                    to={topicPath(nextItem.id)}
                    className="group flex-1 max-w-[48%] rounded-xl p-4 sm:p-5 text-right"
                  >
                    <span className="text-sm text-gray-600 flex items-center justify-end gap-1 group-hover:text-brand-primary transition-colors">
                      {t('pager.next', { defaultValue: 'Next' })}
                      <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                    <span className="block text-brand-primary font-semibold mt-1">{nextItem.name}</span>
                  </Link>
                ) : <span />}
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BrochuresPage; 