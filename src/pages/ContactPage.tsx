import React, { type FormEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import xiuImg from '../asserts/Xiu_Feng_Searcy.jpg';
import weiImg from '../asserts/Physician_Wei_Zhou.jpeg';
import reviewImg from '../asserts/google_review.jpg';

export const ContactPage: React.FC = () => {
  const { t } = useTranslation('contact');

  const subjectRef = useRef<HTMLInputElement | null>(null);
  const bodyRef = useRef<HTMLTextAreaElement | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
    const body = (form.elements.namedItem('body') as HTMLTextAreaElement).value;
    const mailto = `mailto:${t('info.email')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#f1f9f0]">
        <section className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-gray-800 mb-8 sm:mb-12 md:mb-16 lg:mb-24">{t('title')}</h1>

          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-10 lg:p-14 mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">{t('sendMessage')}</h2>
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:gap-6 w-full">
              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-800 mb-2">{t('form.subject')}:</label>
                <input
                  id="subject"
                  name="subject"
                  ref={subjectRef}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-brand-primary transition"
                />
              </div>
              <div>
                <label htmlFor="body" className="block text-sm sm:text-base font-medium text-gray-800 mb-2">{t('form.message')}:</label>
                <textarea
                  id="body"
                  name="body"
                  ref={bodyRef}
                  rows={6}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-brand-primary transition"
                />
              </div>
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-brand-primary text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-sm hover:bg-clinic-green-dark transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-white font-medium"
                >
                  {t('form.send')}
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-12 md:mb-16 lg:mb-24">
            <div className="p-0 md:col-span-7 order-2 md:order-1">
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe 
                  title="Google Map"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14055.353746469302!2d-81.3390036!3d28.2729154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed674992cf3991ee!2sDragon%20Phoenix%20Acupuncture!5e0!3m2!1sen!2sin!4v1596731702074!5m2!1sen!2sin"
                  loading="lazy"
                  allowFullScreen
                  aria-hidden="false"
                />
              </div>
            </div>

            <div className="p-0 md:col-span-3 order-1 md:order-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 md:mb-6">{t('info.title')}</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{t('info.addressLabel')}</h3>
                  <p>{t('info.address')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{t('info.phoneLabel')}</h3>
                  <p>{t('info.phone')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{t('info.faxLabel')}</h3>
                  <p>{t('info.fax')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{t('info.emailLabel')}</h3>
                  <p>{t('info.email')}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">{t('info.hoursLabel')}</h3>
                  <p>{t('info.hoursWeek')}</p>
                  <p>{t('info.hoursSun')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full min-h-screen py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-10 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="md:col-span-7 order-2 md:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-800 mb-4 md:mb-6">{t('review.title')}</h2>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-3 md:mb-4 leading-relaxed">{t('review.p1')}</p>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed">{t('review.p2')}</p>
                <a 
                  href="https://www.google.com/search?q=dragon+phoenix+acupuncture+reviews#lrd=0x88dd8f626219351d:0xed674992cf3991ee,1,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg rounded-full shadow-sm hover:bg-clinic-green-dark transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 font-medium"
                >
                  {t('review.button')}
                </a>

                <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <img src={xiuImg} alt="Xiu Feng Searcy" className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0" loading="lazy" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-gray-900">{t('practitioners.xiu.name')}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{t('practitioners.phone')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6">
                    <img src={weiImg} alt="Wei Zhou" className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover flex-shrink-0" loading="lazy" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-gray-900">{t('practitioners.wei.name')}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{t('practitioners.phone')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center md:col-span-3 order-1 md:order-2">
                <img src={reviewImg} alt="Google Review" className="max-w-full h-auto rounded-xl" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
