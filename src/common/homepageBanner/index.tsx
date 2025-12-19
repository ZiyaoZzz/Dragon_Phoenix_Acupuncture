import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import whoImg from '../../asserts/Xiu_Feng_Searcy.jpg';

export const HomepageBanner: React.FC = () => {
  const { t, i18n } = useTranslation('homepageBanner');
  const [weekdayDisplay, setWeekdayDisplay] = useState('');
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(timezone);
  }, []);

  const getDateConstraints = () => {
    const today = new Date();
    const DaysLater = new Date();
    DaysLater.setDate(today.getDate() + 12);
    
    return {
      min: today.toISOString().split('T')[0],
      max: DaysLater.toISOString().split('T')[0]
    };
  };

  const dateConstraints = getDateConstraints();

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    if (selectedDate) {
      const date = new Date(selectedDate);
      const dayIndex = date.getDay();
      const weekdayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const weekday = t(`weekdays.${weekdayKeys[dayIndex]}`);
      setWeekdayDisplay(weekday);
    } else {
      setWeekdayDisplay('');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target as HTMLFormElement;
    const clientTimeInput = form.querySelector('#clientTime') as HTMLInputElement;
    
    if (clientTimeInput) {
      const now = new Date();
      const locale = i18n.language === 'zh' ? 'zh-CN' : i18n.language === 'es' ? 'es-ES' : 'en-US';
      const timezoneInfo = `${now.toLocaleString(locale, { timeZone: timezone })} (${timezone})`;
      clientTimeInput.value = timezoneInfo;
    }
  };

  return (
    <section id="appointment" className="max-w-[1500px] mx-auto px-4 sm:px-5 pb-8 md:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-stretch">
        <div className="flex flex-col gap-4 md:gap-10 pt-4 md:pt-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 md:mb-5 font-bold">{t('whoWeAreTitle')}</h2>
          <p className="italic text-gray-600 text-base sm:text-lg mb-3 md:mb-4">{t('whoWeAreLead')}</p>
          <p className="text-gray-700 mb-3 md:mb-4 text-sm sm:text-base">
            {t('whoWeAreP1')}
            <br />
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            {t('whoWeAreP2')}
          </p>
          <div className="my-3 md:my-4 h-px w-20 bg-gray-300" />
          <p className="italic text-gray-700 text-base sm:text-lg md:text-xl">{t('recognition')}</p>
          <Link to="/physicians#top" className="text-brand-secondary hover:text-brand-light inline-block mt-3 md:mt-4 text-sm sm:text-base">{t('whoWeAreCta')}</Link>
        </div>

        <div className="text-center order-first lg:order-none">
          <img src={whoImg} alt={t('altDoctor')} className="mx-auto max-w-full sm:max-w-md rounded-lg shadow" loading="lazy" />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">{t('formTitle')}</h2>
          <p className="text-gray-700 mb-4 md:mb-6 text-sm sm:text-base">
            {t('formLead')}
          </p>
          <form action="https://formspree.io/f/mkgranjq" method="POST" className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-gray-800 text-sm sm:text-base">{t('nameLabel')}<span className="text-red-600">*</span></label>
                <input id="name" name="name" required className="border border-gray-300 rounded px-3 py-2.5 text-sm sm:text-base" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-gray-800 text-sm sm:text-base">{t('emailLabel')}<span className="text-red-600">*</span></label>
                <input id="email" name="email" type="email" required className="border border-gray-300 rounded px-3 py-2.5 text-sm sm:text-base" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-gray-800 text-sm sm:text-base">{t('phoneLabel')}<span className="text-red-600">*</span></label>
                <input id="phone" name="phone" required maxLength={14} placeholder="(xxx) xxx-xxxx" className="border border-gray-300 rounded px-3 py-2.5 text-sm sm:text-base" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="new-client" className="mb-1 text-gray-800 text-sm sm:text-base">{t('newClientLabel')}<span className="text-red-600">*</span></label>
                <select id="new-client" name="new-client" required className="border border-gray-300 rounded px-3 py-2.5 text-sm sm:text-base">
                  <option value="">{t('selectPlaceholder')}</option>
                  <option value="Yes">{t('yes')}</option>
                  <option value="No">{t('no')}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col">
                <label htmlFor="appointment-date" className="mb-1 text-gray-800 text-sm sm:text-base">{t('dateLabel')}<span className="text-red-600">*</span></label>
                <input 
                  id="appointment-date" 
                  name="appointment-date" 
                  type="date" 
                  required 
                  min={dateConstraints.min}
                  max={dateConstraints.max}
                  className="border border-gray-300 rounded px-3 py-2.5 text-sm sm:text-base" 
                  onChange={handleDateChange}
                />
                {weekdayDisplay && (
                  <span className="text-gray-600 text-xs sm:text-sm mt-1">
                    {weekdayDisplay}
                  </span>
                )}
                <span id="date-warning" className="text-red-600 text-xs sm:text-sm mt-1 hidden" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="appointment-time" className="mb-1 text-gray-800 text-sm sm:text-base">{t('timeLabel')}<span className="text-red-600">*</span></label>
                <select id="appointment-time" name="appointment-time" required className="border border-gray-300 rounded px-3 py-2.5 text-sm sm:text-base">
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
              <label htmlFor="additional-info" className="mb-1 text-gray-800 text-sm sm:text-base">{t('additionalInfo')}</label>
              <textarea id="additional-info" name="additional-info" rows={4} className="border border-gray-300 rounded px-3 py-2 text-sm sm:text-base" />
            </div>

            <input type="hidden" id="clientTime" name="clientTime" />
            <input type="hidden" id="timezone" name="timezone" value={timezone} />
            <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#395c3b] text-white px-6 py-3 rounded hover:bg-[#2e7d32] transition-colors text-sm sm:text-base font-medium">{t('submit')}</button>
            <p className="text-gray-600 text-xs sm:text-sm">{t('formNote')}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomepageBanner; 