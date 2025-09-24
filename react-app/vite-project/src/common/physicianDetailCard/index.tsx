import React from 'react';
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

const ExperienceSection: React.FC<{ experiences: DoctorData['experiences'] }> = ({ experiences }) => (
  <div>
    <h2 className="text-2xl font-bold text-brand-primary mb-4">Professional Experience</h2>
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

const EducationSection: React.FC<{ education: DoctorData['education'] }> = ({ education }) => (
  <div>
    <h2 className="text-2xl font-bold text-brand-primary mb-4">Education & Credentials</h2>
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
  specialties: DoctorData['specialties']; 
  description?: string 
}> = ({ specialties, description }) => (
  <div>
    <h2 className="text-2xl font-bold text-brand-primary mb-4">Specialties & Techniques</h2>
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
            <h1 className="text-3xl font-bold text-brand-primary mb-1">{doctor.name}</h1>
            <p className="text-lg text-gray-700 mb-2">{doctor.title}</p>
            {doctor.license && (
              <p className="text-base text-gray-600 mb-1">{doctor.license}</p>
            )}
            {doctor.address && (
              <p className="text-base text-gray-600 mb-2">{doctor.address}</p>
            )}
            {doctor.credentials && doctor.credentials.length > 0 && (
              <div className="space-y-1">
                {doctor.credentials.map((cred, idx) => (
                  <p key={idx} className="text-sm text-gray-700">{cred}</p>
                ))}
              </div>
            )}
            {!doctor.credentials && doctor.certifications && doctor.certifications.length > 0 && (
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
        {doctor.description && (
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <p className="text-gray-700 text-lg leading-relaxed">{doctor.description}</p>
          </div>
        )}

        {doctor.summary && (
          <div>
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Professional Background</h2>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-100">{doctor.summary}</p>
          </div>
        )}

        {Array.isArray(doctor.specialties) && doctor.specialties.length > 0 && (
          <SpecialtiesSection 
            specialties={doctor.specialties} 
            description={doctor.specialtiesDescription} 
          />
        )}

        {doctor.education && doctor.education.length > 0 && (
          <EducationSection education={doctor.education} />
        )}

        {doctor.experiences && doctor.experiences.length > 0 && (
          <ExperienceSection experiences={doctor.experiences} />
        )}

        {doctor.continuingEducation && doctor.continuingEducation.length > 0 && (
          <ListSection 
            title="Recent Continuing Education" 
            items={doctor.continuingEducation} 
          />
        )}

        {doctor.memberships && doctor.memberships.length > 0 && (
          <ListSection 
            title="Professional Organizations" 
            items={doctor.memberships} 
          />
        )}
      </div>
    </div>
  );
};