import React from 'react';
import { useTranslation } from 'react-i18next';
import whoImg from '../../asserts/Xiu_Feng_Searcy.jpg';

export const HomepageBanner: React.FC = () => {
  const { t } = useTranslation('homepageBanner');

  return (
    <section id="appointment" className="max-w-[1500px] mx-auto px-5 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
        <div className="flex flex-col gap-10 pt-8">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-5 font-bold">{t('whoWeAreTitle')}</h2>
          <p className="italic text-gray-600 text-lg mb-4">{t('whoWeAreLead')}</p>
          <p className="text-gray-700 mb-4">
            {t('whoWeAreP1')}
            <br />
          </p>
          <p className="text-gray-700">
            {t('whoWeAreP2')}
          </p>
          <div className="my-4 h-px w-20 bg-gray-300" />
          <p className="italic text-gray-700 text-lg md:text-xl">{t('recognition')}</p>
          <a href="/physicians" className="text-brand-secondary hover:text-brand-light inline-block mt-4">{t('whoWeAreCta')}</a>
        </div>

        <div className="text-center">
          <img src={whoImg} alt={t('altDoctor')} className="mx-auto max-w-md rounded-lg shadow" />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{t('formTitle')}</h2>
          <p className="text-gray-700 mb-6">
            {t('formLead')}
          </p>
          <form action="https://formspree.io/f/mkgranjq" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-gray-800">{t('nameLabel')}<span className="text-red-600">*</span></label>
                <input id="name" name="name" required className="border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-gray-800">{t('emailLabel')}<span className="text-red-600">*</span></label>
                <input id="email" name="email" type="email" required className="border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-gray-800">{t('phoneLabel')}<span className="text-red-600">*</span></label>
                <input id="phone" name="phone" required maxLength={14} placeholder="(xxx) xxx-xxxx" className="border border-gray-300 rounded px-3 py-2" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="new-client" className="mb-1 text-gray-800">{t('newClientLabel')}<span className="text-red-600">*</span></label>
                <select id="new-client" name="new-client" required className="border border-gray-300 rounded px-3 py-2">
                  <option value="">{t('selectPlaceholder')}</option>
                  <option value="Yes">{t('yes')}</option>
                  <option value="No">{t('no')}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="appointment-date" className="mb-1 text-gray-800">{t('dateLabel')}<span className="text-red-600">*</span></label>
                <input id="appointment-date" name="appointment-date" type="date" required className="border border-gray-300 rounded px-3 py-2" />
                <span id="weekday-display" className="text-gray-600 text-sm mt-1" />
                <span id="date-warning" className="text-red-600 text-sm mt-1 hidden" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="appointment-time" className="mb-1 text-gray-800">{t('timeLabel')}<span className="text-red-600">*</span></label>
                <select id="appointment-time" name="appointment-time" required className="border border-gray-300 rounded px-3 py-2">
                  <option value="">{t('selectPlaceholder')}</option>
                  <option>9:00 AM – 10:00 AM</option>
                  <option>10:00 AM – 11:00 AM</option>
                  <option>11:00 AM – 12:00 PM</option>
                  <option>1:00 PM – 2:00 PM</option>
                  <option>2:00 PM – 3:00 PM</option>
                  <option>3:00 PM – 4:00 PM</option>
                  <option>4:00 PM – 5:00 PM</option>
                  <option>{t('anyTime')}</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="additional-info" className="mb-1 text-gray-800">{t('additionalInfo')}</label>
              <textarea id="additional-info" name="additional-info" rows={4} className="border border-gray-300 rounded px-3 py-2" />
            </div>

            <input type="hidden" id="clientTime" name="clientTime" />
            <button type="submit" className="inline-flex items-center justify-center bg-[#395c3b] text-white px-5 py-3 rounded hover:bg-[#2e7d32] transition-colors">{t('submit')}</button>
            <p className="text-gray-600 text-sm">{t('formNote')}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomepageBanner; 