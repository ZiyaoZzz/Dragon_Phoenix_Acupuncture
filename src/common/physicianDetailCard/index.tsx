import React from 'react';
import { useTranslation } from 'react-i18next';
import type { DoctorData } from '../doctorCard/doctors';

interface PhysicianDetailCardProps {
  doctor: DoctorData;
}

const ListSection: React.FC<{ title: string; items: string[]; className?: string }> = ({ 
  title, 
  items, 
  className = "space-y-2" 
}) => (
  <div>
    <h2 className="text-2xl font-bold text-brand-primary mb-4">{title}</h2>
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start group">
          <span className="text-brand-gold mr-3 mt-1 group-hover:scale-110 transition-transform">•</span>
          <span className="text-gray-700 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

type ExperienceItem = NonNullable<DoctorData['experiences']>[number];
const ExperienceSection: React.FC<{ experiences: ExperienceItem[]; title: string }> = ({ experiences, title }) => (
  <div>
    <h2 className="text-2xl font-bold text-brand-primary mb-4">{title}</h2>
    <div className="space-y-4">
      {experiences?.map((exp, index) => (
        <div key={index} className="border-l-4 border-brand-gold pl-6 py-2 hover:bg-gray-50 transition-colors rounded-r-lg">
          {exp.period && (
            <p className="text-sm text-brand-gold font-semibold mb-1">{exp.period}</p>
          )}
          <p className="text-lg font-semibold text-gray-800 mb-1">{exp.role}</p>
          {exp.organization && (
            <p className="text-gray-600">{exp.organization}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

type EducationItem = NonNullable<DoctorData['education']>[number];
const EducationSection: React.FC<{ education: EducationItem[]; title: string }> = ({ education, title }) => (
  <div>
    <h2 className="text-2xl font-bold text-brand-primary mb-4">{title}</h2>
    <div className="space-y-6">
      {education?.map((edu, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">{edu.title}</h3>
          {edu.details && (
            <ul className="space-y-2">
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex items-start">
                  <span className="text-brand-gold mr-3 mt-1">•</span>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>
);

const SpecialtiesSection: React.FC<{ 
  title: string;
  specialties: DoctorData['specialties']; 
  description?: string 
}> = ({ title, specialties, description }) => (
  <div>
    <h2 className="text-2xl font-bold text-brand-primary mb-4">{title}</h2>
    <div className="flex flex-wrap gap-2 mb-4">
      {specialties?.map((specialty, index) => (
        <div
          key={index}
          className="px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-800 border border-gray-200 shadow-sm hover:border-gray-300"
        >
          {specialty}
        </div>
      ))}
    </div>
    {description && (
      <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">
        {description}
      </p>
    )}
  </div>
);

export const PhysicianDetailCard: React.FC<PhysicianDetailCardProps> = ({ doctor }) => {
  const { t } = useTranslation('physiciandetailcard');

  const tx = (key: string, fallback?: string) => {
    const res = t(key, { defaultValue: fallback }) as string;
    if (typeof res === 'string' && res === key) return fallback || '';
    return res || fallback || '';
  };
  const normalizeToArray = (value: unknown): string[] => {
    if (Array.isArray(value)) return value as string[];
    if (typeof value === 'string' && value.trim().length > 0) return [value];
    return [];
  };
  const txArr = (key: string, fallback?: string[]) => {
    const res = t(key, { returnObjects: true, defaultValue: fallback }) as unknown;
    if (typeof res === 'string' && res === key) return normalizeToArray(fallback ?? []);
    const base = res ?? fallback ?? [];
    return normalizeToArray(base);
  };

  const base = `doctors.${doctor.id}`;
  const name = tx(`${base}.name`, doctor.name);
  const title = tx(`${base}.title`, doctor.title);
  const license = tx(`${base}.license`, doctor.license);
  const address = tx(`${base}.address`, doctor.address);
  const description = tx(`${base}.description`, doctor.description);
  const summary = tx(`${base}.summary`, doctor.summary);
  const specialties = txArr(`${base}.specialties`, doctor.specialties);
  const specialtiesDescription = tx(`${base}.specialtiesDescription`, doctor.specialtiesDescription);
  const continuingEducation = txArr(`${base}.continuingEducation`, doctor.continuingEducation);
  const memberships = txArr(`${base}.memberships`, doctor.memberships);
  const credentials = txArr(`${base}.credentials`, doctor.credentials);
  const translatedEducation: EducationItem[] = (doctor.education ?? []).map((edu, idx) => ({
    title: tx(`${base}.education.${idx}.title`, edu.title),
    details: txArr(`${base}.education.${idx}.details`, edu.details),
  }));
  const translatedExperiences: ExperienceItem[] = (doctor.experiences ?? []).map((exp, idx) => ({
    period: tx(`${base}.experiences.${idx}.period`, exp.period),
    role: tx(`${base}.experiences.${idx}.role`, exp.role),
    organization: tx(`${base}.experiences.${idx}.organization`, exp.organization),
  }));

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="bg-white p-6 border-b border-gray-100">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-32 h-32 rounded-xl object-cover shadow-md border border-gray-100"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold border border-green-200">
              LAc
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-brand-primary mb-1">{name}</h1>
            <p className="text-lg text-gray-700 mb-2">{title}</p>
            {license && (
              <p className="text-base text-gray-600 mb-1">{license}</p>
            )}
            {address && (
              <p className="text-base text-gray-600 mb-2">{address}</p>
            )}
            {Array.isArray(credentials) && credentials.length > 0 && (
              <div className="space-y-1">
                {credentials.map((cred, idx) => (
                  <p key={idx} className="text-sm text-gray-700">{cred}</p>
                ))}
              </div>
            )}
            {(!credentials || credentials.length === 0) && doctor.certifications && doctor.certifications.length > 0 && (
              <div className="space-y-1">
                {doctor.certifications.map((cert, idx) => (
                  <p key={idx} className="text-sm text-gray-700">{cert}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {description && (
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
          </div>
        )}

        {summary && (
          <div>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">{t('sections.professionalBackground')}</h2>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">{summary}</p>
          </div>
        )}

        {Array.isArray(specialties) && specialties.length > 0 && (
          <SpecialtiesSection 
            title={t('sections.specialties')}
            specialties={specialties} 
            description={specialtiesDescription} 
          />
        )}

        {translatedEducation && translatedEducation.length > 0 && (
          <EducationSection title={t('sections.education')} education={translatedEducation} />
        )}

        {translatedExperiences && translatedExperiences.length > 0 && (
          <ExperienceSection title={t('sections.experience')} experiences={translatedExperiences} />
        )}

        {continuingEducation && continuingEducation.length > 0 && (
          <ListSection 
            title={t('sections.continuingEducation')} 
            items={continuingEducation} 
          />
        )}

        {memberships && memberships.length > 0 && (
          <ListSection 
            title={t('sections.organizations')} 
            items={memberships} 
          />
        )}
      </div>
    </div>
  );
};