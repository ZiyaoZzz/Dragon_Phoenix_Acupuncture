import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import img3 from '../../asserts/dragon_phoenix_3.png';
import img4 from '../../asserts/dragon_phoenix_4.png';
import img5 from '../../asserts/dragon_phoenix_5.png';
import img6 from '../../asserts/dragon_phoenix_6.png';
import img7 from '../../asserts/dragon_phoenix_7.png';
import img8 from '../../asserts/dragon_phoenix_8.png';

export const Footer: React.FC = () => {
  const { t } = useTranslation('footer');

  const sectionTitleClass = "text-white text-xl mb-5 font-normal";
  const contactLinkClass = "text-white hover:text-brand-secondary transition-colors duration-300 flex items-center";

  const galleryImages = [img3, img4, img5, img6, img7, img8];
  const dayKeys = [
    'hours.monday',
    'hours.tuesday',
    'hours.wednesday',
    'hours.thursday',
    'hours.friday',
    'hours.saturday',
  ] as const;

  return (
    <footer className="bg-brand-primary text-white py-10 px-5">
      <div className="flex justify-between max-w-6xl mx-auto gap-8 lg:flex-row flex-col text-center lg:text-left">
        <div className="flex-1">
          <h3 className="text-white text-xl mb-5 font-normal">{t('about.title')}</h3>
          <p className="text-base mb-4">{t('about.description')}</p>
          <Link 
            to="/physicians" 
            className="text-brand-secondary hover:text-brand-light transition-colors duration-300 inline-block mt-2"
          >
            {t('about.learnMore')}
          </Link>
        </div>

        <div className="flex-1">
          <h3 className={sectionTitleClass}>{t('contact.title')}</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://maps.app.goo.gl/Ga5r1nwyWbH2PsfE6" target="_blank" rel="noopener noreferrer" className={contactLinkClass}>
                {t('contact.address')}
              </a>
            </li>
            <li>
              <a href="tel:4079324818" className={contactLinkClass}>{t('contact.phone')}</a>
            </li>
            <li>
              <a href="fax:4079322888" className={contactLinkClass}>{t('contact.fax')}</a>
            </li>
            <li>
              <a href="mailto:dragonphoenix40@netscape.net" className={contactLinkClass}>{t('contact.email')}</a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className={sectionTitleClass}>{t('gallery.title')}</h3>
          <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-4 max-w-md mx-auto lg:mx-0">
            {galleryImages.map((src, idx) => (
              <Link key={idx} to="/gallery" className="block aspect-square overflow-hidden rounded">
                <img src={src} alt={`gallery-${idx + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <h3 className={sectionTitleClass}>{t('hours.title')}</h3>
          <ul className="space-y-2">
            {dayKeys.map((k) => (
              <li key={k} className="flex justify-between py-1">
                <span>{t(k)}</span>
                <span>{t('hours.schedule.operationTimeRange')}</span>
              </li>
            ))}
            <li className="flex justify-between py-1">
              <span>{t('hours.sunday')}</span>
              <span className="text-red-400 font-bold">{t('hours.schedule.closed')}</span>
            </li>
          </ul>
        </div>
      </div>    
    </footer>
  );
};