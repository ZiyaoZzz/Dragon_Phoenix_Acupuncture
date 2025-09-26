import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../common/header';
import { Footer } from '../common/footer';

// Import gallery images
import dragonPhoenix1 from '../asserts/dragon_phoenix_1.jpg';
import dragonPhoenix2 from '../asserts/dragon_phoenix_2.jpg';
import dragonPhoenix3 from '../asserts/dragon_phoenix_3.png';
import dragonPhoenix4 from '../asserts/dragon_phoenix_4.png';
import dragonPhoenix5 from '../asserts/dragon_phoenix_5.png';
import dragonPhoenix6 from '../asserts/dragon_phoenix_6.png';
import dragonPhoenix7 from '../asserts/dragon_phoenix_7.png';
import dragonPhoenix8 from '../asserts/dragon_phoenix_8.png';
import xiuFengSearcy from '../asserts/Xiu_Feng_Searcy.jpg';
import weiZhou from '../asserts/Physician_Wei_Zhou.jpeg';

export const GalleryPage: React.FC = () => {
  const { t } = useTranslation('gallery');

  const galleryImages = [
    { src: dragonPhoenix1, alt: t('images.clinic1') },
    { src: dragonPhoenix2, alt: t('images.clinic2') },
    { src: dragonPhoenix3, alt: t('images.treatmentRoom') },
    { src: dragonPhoenix4, alt: t('images.acupunctureTreatment') },
    { src: dragonPhoenix5, alt: t('images.clinicEquipment') },
    { src: dragonPhoenix6, alt: t('images.clinicFacilities') },
    { src: dragonPhoenix7, alt: t('images.treatmentArea') },
    { src: dragonPhoenix8, alt: t('images.clinicEnvironment') },
  ];

  const practitioners = [
    {
      src: xiuFengSearcy,
      name: t('practitioner.xiuFeng.name'),
      title: t('practitioner.xiuFeng.title')
    },
    {
      src: weiZhou,
      name: t('practitioner.weiZhou.name'),
      title: t('practitioner.weiZhou.title')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-[#f1f9f0]">
        <section className="max-w-6xl mx-auto px-5 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">{t('title')}</h1>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery-item group">
                  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Practitioners Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">{t('practitioner.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {practitioners.map((practitioner, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={practitioner.src} 
                      alt={practitioner.name}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <h3 className="text-white text-2xl font-bold mb-2">{practitioner.name}</h3>
                      <p className="text-white text-lg">{practitioner.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
