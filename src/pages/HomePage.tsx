import React from 'react';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import bannerImg from '../asserts/Dragon.jpg';
import s1 from '../asserts/dragon_phoenix_3.png';
import s2 from '../asserts/dragon_phoenix_6.png';
import s4 from '../asserts/cupping.jpg';
import s5 from '../asserts/herbal_medicine.jpg';
import s6 from '../asserts/tuina.jpg';
import s7 from '../asserts/Facial_Acupuncture.jpg';
import s8 from '../asserts/Eye_Acupoint_Acupuncture.jpg';
import s9 from '../asserts/Bioelectric_Therapy.jpg';
import faceImg from '../asserts/face.jpg';
import { OurTeam } from '../common/doctorCard';
import { ServiceCard } from '../common/ServiceCard';
import { useTranslation } from 'react-i18next';
import { HomepageBanner } from '../common/homepageBanner';
import { HistorySection } from '../common/historySection';
import { HoursSection } from '../common/hoursSection';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const serviceItems = [
    { key: 'traditional', img: s1 },
    { key: 'scalpEar', img: s2 },
    { key: 'bioelectric', img: s9 },
    { key: 'cupping', img: s4 },
    { key: 'herbal', img: s5 },
    { key: 'tuina', img: s6 },
    { key: 'facial', img: s7 },
    { key: 'eyePoints', img: s8 },
  ];
  return (
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="w-full h-[620px] overflow-hidden mb-8">
      <img src={bannerImg} alt="Dragon Phoenix Acupuncture Banner" className="w-full h-full object-fill" />
    </div>
   <HomepageBanner />
    <OurTeam />
    <section className="bg-[#f1f9f0] px-5 py-14">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl text-[#395c3b] mb-3">{t('services:title')}</h2>
        <p className="text-gray-600">{t('services:intro')}</p>
      </div>
      <div className="mt-10 max-w-[1200px] mx-auto flex flex-wrap justify-center gap-8">
        {serviceItems.map((s) => (
          <ServiceCard key={s.key} imageSrc={s.img} title={t(`services:items.${s.key}.title`)} description={t(`services:items.${s.key}.desc`)} />
        ))}
      </div>
    </section>
    <HistorySection backgroundImageUrl={faceImg} />
    <HoursSection />
    <section className="bg-gray-100">
      <div className="w-full h-[450px]">
        <iframe
          title="clinic-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14055.353746469302!2d-81.3390036!3d28.2729154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed674992cf3991ee!2sDragon%20Phoenix%20Acupuncture!5e0!3m2!1sen!2sin!4v1596731702074!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
    <Footer />
  </div>
  );
};
