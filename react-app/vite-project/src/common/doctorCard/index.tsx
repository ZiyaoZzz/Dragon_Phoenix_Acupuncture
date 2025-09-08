import React from 'react';

export interface DoctorInfo {
  name: string;
  title: string;
  img: string;
  href: string;
  description?: string;
}

export const DoctorCard: React.FC<{ doctor: DoctorInfo }> = ({ doctor }) => {
  const { name, title, img, href, description } = doctor;
  return (
    <div className="bg-[#f0f9f1] rounded-lg overflow-hidden shadow w-full max-w-md">
      <a href={href}>
        <div className="h-72 overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
      </a>
      <div className="p-6">
        <h3 className="text-[#395c3b] text-xl mb-1">{name}</h3>
        <p className="text-[#4a6e4c] italic mb-3">{title}</p>
        {description ? (
          <p className="text-gray-600 mb-4">{description}</p>
        ) : (
          <p className="text-gray-600 mb-4">Experienced in traditional Chinese medicine and personalized care.</p>
        )}
        <a href={href} className="text-[#395c3b] font-bold">View Profile</a>
      </div>
    </div>
  );
};


