import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import bannerImg from '../assets/Dragon.jpg';
import s1 from '../assets/dragon_phoenix_3.png';
import s2 from '../assets/dragon_phoenix_6.png';
import s4 from '../assets/cupping.jpg';
import s5 from '../assets/herbal_medicine.jpg';
import s6 from '../assets/tuina.jpg';
import s7 from '../assets/Facial_Acupuncture.jpg';
import s8 from '../assets/Eye_Acupoint_Acupuncture.jpg';
import s9 from '../assets/Bioelectric_Therapy.jpg';
import faceImg from '../assets/face.jpg';
import Physician_Xiu_Feng_SearcyImg from '../assets/Xiu_Feng_Searcy.jpg';
import Physician_Wei_ZhouImg from '../assets/Physician_Wei_Zhou.jpeg';
import { ServiceCard } from '../common/ServiceCard';
import { useTranslation } from 'react-i18next';
import { HomepageBanner } from '../common/homepageBanner';
import { HistorySection } from '../common/historySection';
import { HoursSection } from '../common/hoursSection';
import { TrustBar } from '../common/trustBar';
import { Reveal } from '../common/reveal';
import { doctors, doctorPortraitObjectStyle } from '../common/doctorCard/doctors';
import { usePageSeo } from '../common/seo/usePageSeo';

export const HomePage: React.FC<{ localePath?: string }> = ({ localePath }) => {
  const { t } = useTranslation();
  usePageSeo('home', localePath ?? '/');
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
  <div className="min-h-screen flex flex-col overflow-x-hidden">
    <Header />
    {/* Wrapper height is pinned to the banner's post-squish aspect ratio (986 * 0.8 = 788.8)
        instead of h-auto, which would reserve the image's full pre-squish height and leave a
        dead gap below it — transforms affect paint only, not the layout box they create. */}
    <div className="w-full overflow-hidden -mt-1 mb-6" style={{ aspectRatio: '1512 / 788.8' }}>
      <img src={bannerImg} alt="Dragon Phoenix Acupuncture Banner" className="w-full h-auto object-contain" loading="eager" style={{ transform: 'scaleY(0.8)', transformOrigin: 'top center' }} />
    </div>
   <HomepageBanner />
    <section className="bg-white max-w-[1400px] mx-auto px-4 sm:px-5 pb-8 md:pb-14">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl sm:text-3xl text-brand-primary mb-2 md:mb-3">{t('doctorCard:ourTeam')}</h2>
        <p className="text-base sm:text-lg text-gray-600">{t('doctorCard:meetOurTeam')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 justify-items-center">
        <Reveal className="w-full max-w-md">
          <div className="bg-brand-surface rounded-lg overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 motion-reduce:transform-none w-full">
            <Link to="/physicians">
              <div className="h-64 sm:h-72 overflow-hidden">
                <img src={Physician_Xiu_Feng_SearcyImg} alt={t('doctorCard:doctors.dr-xiu.name')} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Link>
            <div className="p-4 sm:p-6">
              <h3 className="text-brand-primary text-lg sm:text-xl mb-1">{t('doctorCard:doctors.dr-xiu.name')}</h3>
              <p className="text-[#4a6e4c] italic mb-2 sm:mb-3 text-base sm:text-lg">{t('doctorCard:doctors.dr-xiu.title')}</p>
              <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">{t('doctorCard:doctors.dr-xiu.description')}</p>
              <Link to="/physicians" className="text-brand-primary font-bold text-base sm:text-lg">{t('doctorCard:viewProfile')}</Link>
            </div>
          </div>
        </Reveal>

        <Reveal className="w-full max-w-md" delay={120}>
          <div className="bg-brand-surface rounded-lg overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 motion-reduce:transform-none w-full">
            <Link to="/physicians">
              <div className="h-64 sm:h-72 overflow-hidden">
                <img
                  src={Physician_Wei_ZhouImg}
                  alt={t('doctorCard:doctors.dr-zhou.name')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={doctorPortraitObjectStyle(doctors.find((d) => d.id === 'dr-zhou'))}
                />
              </div>
            </Link>
            <div className="p-4 sm:p-6">
              <h3 className="text-brand-primary text-lg sm:text-xl mb-1">{t('doctorCard:doctors.dr-zhou.name')}</h3>
              <p className="text-[#4a6e4c] italic mb-2 sm:mb-3 text-base sm:text-lg">{t('doctorCard:doctors.dr-zhou.title')}</p>
              <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">{t('doctorCard:doctors.dr-zhou.description')}</p>
              <Link to="/physicians" className="text-brand-primary font-bold text-base sm:text-lg">{t('doctorCard:viewProfile')}</Link>
            </div>
          </div>
        </Reveal>
      </div>
      <TrustBar />
    </section>
    <section className="bg-brand-surface px-4 sm:px-5 py-8 md:py-14">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-brand-primary mb-2 md:mb-3">{t('services:title')}</h2>
        <p className="text-base sm:text-lg text-gray-600">{t('services:intro')}</p>
      </div>
      <div className="mt-6 md:mt-10 max-w-[1200px] mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {serviceItems.map((s, i) => (
          <Reveal
            key={s.key}
            delay={(i % 4) * 80}
            className="w-full sm:flex-[0_0_calc(33.33%_-_30px)] sm:min-w-[280px] max-w-[280px] sm:max-w-none"
          >
            <ServiceCard imageSrc={s.img} title={t(`services:items.${s.key}.title`)} description={t(`services:items.${s.key}.desc`)} />
          </Reveal>
        ))}
      </div>
    </section>
    <HistorySection backgroundImageUrl={faceImg} />
    <HoursSection />
    <section className="bg-gray-100">
      <div className="w-full h-[300px] sm:h-[350px] md:h-[450px]">
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
