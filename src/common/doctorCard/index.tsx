import React from 'react';
import { useTranslation } from 'react-i18next';
import type { DoctorInfo } from './doctorInfo';
import { doctors } from './doctorInfo';

export const DoctorCard: React.FC<{ doctor: DoctorInfo }> = ({ doctor }) => {
  const { t } = useTranslation();
  const { name, nameKey, title, titleKey, img, href, description, descriptionKey } = doctor;

  const localizedName = nameKey ? t(nameKey) : (name ?? '');
  const localizedTitle = titleKey ? t(titleKey) : (title ?? '');
  const localizedDescription = descriptionKey ? t(descriptionKey) : description;

  return (
    <div className="bg-[#f0f9f1] rounded-lg overflow-hidden shadow w-full max-w-md">
      <a href={href}>
        <div className="h-72 overflow-hidden">
          <img src={img} alt={localizedName} className="w-full h-full object-cover" />
        </div>
      </a>
      <div className="p-6">
        <h3 className="text-[#395c3b] text-xl mb-1">{localizedName}</h3>
        <p className="text-[#4a6e4c] italic mb-3">{localizedTitle}</p>
        {localizedDescription ? (
          <p className="text-gray-600 mb-4">{localizedDescription}</p>
        ) : (
          <p className="text-gray-600 mb-4">{t('doctorCard:defaultDescription')}</p>
        )}
        <a href={href} className="text-[#395c3b] font-bold">{t('doctorCard:viewProfile')}</a>
      </div>
    </div>
  );
};


export const OurTeam: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white max-w-[1400px] mx-auto px-5 pb-14">
      <div className="text-center mb-10">
        <h2 className="text-3xl text-[#395c3b] mb-3">{t('doctorCard:ourTeam')}</h2>
        <p className="text-gray-600">{t('doctorCard:meetOurTeam')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        {doctors.map((d) => (
          <DoctorCard key={d.id} doctor={d} />
        ))}
      </div>
    </section>
  );
};


