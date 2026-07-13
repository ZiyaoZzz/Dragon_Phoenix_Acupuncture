import React from 'react';
import { useTranslation } from 'react-i18next';

export const HoursSection: React.FC = () => {
  const { t } = useTranslation('hoursSection');
  const start = t('weekdayStart');
  const end = t('weekdayEnd');

  return (
    <section className="bg-brand-surface py-6">
      <div className="max-w-[1600px] mx-auto flex justify-around gap-6 px-5">
        <div className="text-center p-6 min-w-[200px]">
          <h3 className="text-3xl text-gray-800 mb-2">
            {start}<span className="text-2xl">AM</span> — {end}<span className="text-2xl">PM</span>
          </h3>
          <p className="uppercase tracking-widest text-gray-600">{t('weekdays')}</p>
        </div>
        <div className="text-center p-6 min-w-[200px]">
          <h3 className="text-3xl">{t('closed')}</h3>
          <p className="uppercase tracking-widest text-gray-600">{t('sunday')}</p>
        </div>
      </div>
    </section>
  );
};

export default HoursSection; 