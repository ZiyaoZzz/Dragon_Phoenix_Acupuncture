import React from 'react';
import { useTranslation } from 'react-i18next';
import Physician_Xiu_Feng_SearcyImg from '../../asserts/Xiu_Feng_Searcy.jpg';
import Physician_Wei_ZhouImg from '../../asserts/Physician_Wei_Zhou.jpeg';

export interface DoctorInfo {
  id: string;
  name?: string;
  nameKey?: string;
  title?: string;
  titleKey?: string;
  img: string;
  href: string;
  description?: string;
  descriptionKey?: string;
}

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

export const doctors: DoctorInfo[] = [
  {
    id: 'dr-xiu',
    nameKey: 'doctorProfiles:dr-xiu.name',
    titleKey: 'doctorProfiles:dr-xiu.title',
    img: Physician_Xiu_Feng_SearcyImg,
    href: '/physicians#dr-xiu',
    descriptionKey: 'doctorProfiles:dr-xiu.description'
  },
  {
    id: 'dr-zhou',
    nameKey: 'doctorProfiles:dr-zhou.name',
    titleKey: 'doctorProfiles:dr-zhou.title',
    img: Physician_Wei_ZhouImg,
    href: '/physicians#dr-zhou',
    descriptionKey: 'doctorProfiles:dr-zhou.description'
  }
];


