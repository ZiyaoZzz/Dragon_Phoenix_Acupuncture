import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import { Sidebar } from '../common/sidebar';
import type { SidebarItem } from '../common/sidebar';
import { renderBrochureSection } from '../common/brochures/renderer';
import type { BrochureSectionId } from '../common/brochures/types';
import { useTranslation } from 'react-i18next';
import { usePageSeo } from '../common/seo/usePageSeo';

// Maps a brochure topic id to its seo.*.json key and its own URL. 'intro' is the default
// topic and lives at /brochures itself rather than /brochures/intro.
const SEO_KEY_BY_TOPIC: Record<BrochureSectionId, string> = {
  intro: 'brochuresIntro',
  fertility: 'brochuresFertility',
  fibromyalgia: 'brochuresFibromyalgia',
  'lower-back-pain': 'brochuresLowerBackPain',
  'stop-smoking': 'brochuresStopSmoking',
  'weight-loss': 'brochuresWeightLoss',
};

export const BrochuresPage: React.FC = () => {
  const { t } = useTranslation('brochures');
  const navigate = useNavigate();
  const { topic } = useParams<{ topic?: string }>();

  const items: SidebarItem[] = useMemo(() => [
    { id: 'intro', name: t('sidebar.items.intro') },
    { id: 'fertility', name: t('sidebar.items.fertility') },
    { id: 'fibromyalgia', name: t('sidebar.items.fibromyalgia') },
    { id: 'lower-back-pain', name: t('sidebar.items.lower-back-pain') },
    { id: 'stop-smoking', name: t('sidebar.items.stop-smoking') },
    { id: 'weight-loss', name: t('sidebar.items.weight-loss') },
  ], [t]);

  const selected = items.find((i) => i.id === topic) ?? items[0];

  usePageSeo(
    SEO_KEY_BY_TOPIC[selected.id as BrochureSectionId],
    selected.id === 'intro' ? '/brochures' : `/brochures/${selected.id}`
  );

  const handleSelect = (item: SidebarItem) => {
    navigate(item.id === 'intro' ? '/brochures' : `/brochures/${item.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#f1f9f0]">
        <section className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-10 md:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 text-center">{t('sidebar.title')}</h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
            <div className="md:col-span-3">
              <div className="md:sticky md:top-28 lg:top-32 max-h-[calc(100vh-8rem)] overflow-auto">
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BrochuresPage; 