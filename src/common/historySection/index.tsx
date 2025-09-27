import React from 'react';
import { useTranslation } from 'react-i18next';

export interface HistorySectionProps {
  backgroundImageUrl: string;
}

export const HistorySection: React.FC<HistorySectionProps> = ({ backgroundImageUrl }) => {
  const { t } = useTranslation('historySection');

  return (
    <section
      className="text-white text-center py-20 px-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl mb-6">{t('title')}</h2>
        <div className="text-left leading-8 text-[1.05rem]">
          <p className="mb-4">{t('p1')}</p>
          <p className="mb-4">{t('p2')}</p>
          <p className="text-right italic">{t('signature')}</p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection; 