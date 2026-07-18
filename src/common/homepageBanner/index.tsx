import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import whoImg from '../../assets/Xiu_Feng_Searcy.jpg';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

export const HomepageBanner: React.FC = () => {
  const { t, i18n } = useTranslation('homepageBanner');
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

  const parseDateValue = (dateValue: string) => {
    const [year, month, day] = dateValue.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  const formatDateValue = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  const isSunday = (dateValue: string) => {
    if (!dateValue) return false;
    return parseDateValue(dateValue).getDay() === 0;
  };

  // Native <input type="date"> has no way to grey out individual weekdays in its
  // picker, so a Sunday can still be clicked there. Instead of silently blanking
  // the field (which looks like the click did nothing), bump the selection forward
  // to the next open day so the field always visibly lands on a bookable date.
  const nextAvailableDate = (dateValue: string) => {
    const next = parseDateValue(dateValue);
    next.setDate(next.getDate() + 1);
    return formatDateValue(next);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const warning = input.nextElementSibling as HTMLElement | null;

    if (isSunday(input.value)) {
      const adjusted = nextAvailableDate(input.value);
      input.value = adjusted <= dateConstraints.max ? adjusted : '';
      input.setCustomValidity('');
      if (warning) {
        warning.textContent = t('sundayWarning');
        warning.classList.remove('hidden');
      }
    } else {
      input.setCustomValidity('');
      if (warning) {
        warning.classList.add('hidden');
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.target as HTMLFormElement;
    const dateInput = form.querySelector('#appointment-date') as HTMLInputElement;

    // Fail-safe in case a Sunday reaches submit without the change handler
    // catching it (e.g. a pasted value): bump it forward the same way, or
    // block submission if there's no valid day left in the bookable window.
    if (dateInput && isSunday(dateInput.value)) {
      const adjusted = nextAvailableDate(dateInput.value);
      if (adjusted <= dateConstraints.max) {
        dateInput.value = adjusted;
      } else {
        event.preventDefault();
        dateInput.setCustomValidity(t('sundayWarning'));
        dateInput.reportValidity();
        return;
      }
    }

    const clientTimeInput = form.querySelector('#clientTime') as HTMLInputElement;

    if (clientTimeInput) {
      const now = new Date();
      const locale = i18n.language === 'zh' ? 'zh-CN' : i18n.language === 'es' ? 'es-ES' : 'en-US';
      const timezoneInfo = `${now.toLocaleString(locale, { timeZone: timezone })} (${timezone})`;
      clientTimeInput.value = timezoneInfo;
    }

    // Fire-and-forget API call to record appointment for admin dashboard
    try {
      const formData = new FormData(form);
      const payload = {
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        phone: String(formData.get('phone') ?? ''),
        newClient: String(formData.get('new-client') ?? '') === 'Yes',
        appointmentDate: String(formData.get('appointment-date') ?? ''),
        appointmentTime: String(formData.get('appointment-time') ?? ''),
        additionalInfo: String(formData.get('additional-info') ?? ''),
      };

      if (API_BASE) {
        void fetch(`${API_BASE}/api/appointments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
    } catch {
      // ignore tracking errors; keep Formspree submission working
    }
  };

  return (
    <section id="appointment" className="max-w-[1500px] mx-auto px-4 sm:px-5 pb-8 md:pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-10 items-start">
        <div className="flex flex-col gap-4 md:gap-10 pt-4 md:pt-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-3 md:mb-5 font-bold">{t('whoWeAreTitle')}</h2>
          <p className="italic text-gray-600 text-base sm:text-lg mb-3 md:mb-4">{t('whoWeAreLead')}</p>
          <p className="text-gray-700 mb-3 md:mb-4 text-base sm:text-lg">
            {t('whoWeAreP1')}
            <br />
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
            {t('whoWeAreP2')}
          </p>
          <div className="my-3 md:my-4 h-px w-20 bg-gray-300" />
          <p className="italic text-gray-700 text-base sm:text-lg md:text-xl">{t('recognition')}</p>
          <Link to="/physicians#top" className="text-brand-primary hover:text-brand-accent underline underline-offset-2 inline-block mt-3 md:mt-4 text-base sm:text-lg">{t('whoWeAreCta')}</Link>
        </div>

        <div className="text-center order-first lg:order-none">
          <img src={whoImg} alt={t('altDoctor')} className="mx-auto max-w-full sm:max-w-md rounded-lg shadow" loading="lazy" />
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3 md:mb-4">{t('formTitle')}</h2>
          <p className="text-brand-primary font-medium mb-3 md:mb-4 text-base sm:text-lg">
            {t('formConvenience')}
          </p>
          <p className="text-gray-700 mb-4 md:mb-6 text-base sm:text-lg">
            {t('formLead')}
          </p>
          <form action="https://formspree.io/f/mkgranjq" method="POST" className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-gray-800 text-base sm:text-lg">{t('nameLabel')}<span className="text-red-600">*</span></label>
                <input id="name" name="name" required className="border border-gray-300 rounded px-3 py-2.5 text-base sm:text-lg" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-gray-800 text-base sm:text-lg">{t('emailLabel')}<span className="text-red-600">*</span></label>
                <input id="email" name="email" type="email" required className="border border-gray-300 rounded px-3 py-2.5 text-base sm:text-lg" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-gray-800 text-base sm:text-lg">{t('phoneLabel')}<span className="text-red-600">*</span></label>
                <input id="phone" name="phone" required maxLength={14} placeholder="(xxx) xxx-xxxx" className="border border-gray-300 rounded px-3 py-2.5 text-base sm:text-lg" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="new-client" className="mb-1 text-gray-800 text-base sm:text-lg">{t('newClientLabel')}<span className="text-red-600">*</span></label>
                <select id="new-client" name="new-client" required className="border border-gray-300 rounded px-3 py-2.5 text-base sm:text-lg">
                  <option value="">{t('selectPlaceholder')}</option>
                  <option value="Yes">{t('yes')}</option>
                  <option value="No">{t('no')}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex flex-col">
                <label htmlFor="appointment-date" className="mb-1 text-gray-800 text-base sm:text-lg">{t('dateLabel')}<span className="text-red-600">*</span></label>
                <input 
                  id="appointment-date" 
                  name="appointment-date" 
                  type="date" 
                  required 
                  min={dateConstraints.min}
                  max={dateConstraints.max}
                  onChange={handleDateChange}
                  className="border border-gray-300 rounded px-3 py-2.5 text-base sm:text-lg"
                />
                <span id="date-warning" className="text-red-600 text-sm sm:text-base mt-1 hidden" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="appointment-time" className="mb-1 text-gray-800 text-base sm:text-lg">{t('timeLabel')}<span className="text-red-600">*</span></label>
                <select id="appointment-time" name="appointment-time" required className="border border-gray-300 rounded px-3 py-2.5 text-base sm:text-lg">
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
              <label htmlFor="additional-info" className="mb-1 text-gray-800 text-base sm:text-lg">{t('additionalInfo')}</label>
              <textarea id="additional-info" name="additional-info" rows={4} className="border border-gray-300 rounded px-3 py-2 text-base sm:text-lg" />
            </div>

            <input type="hidden" id="clientTime" name="clientTime" />
            <input type="hidden" id="timezone" name="timezone" value={timezone} />
            <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-primary text-white px-6 py-3 rounded hover:bg-brand-accent transition-colors text-base sm:text-lg font-medium">{t('submit')}</button>
            <p className="text-gray-600 text-sm sm:text-base">{t('formNote')}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomepageBanner; 