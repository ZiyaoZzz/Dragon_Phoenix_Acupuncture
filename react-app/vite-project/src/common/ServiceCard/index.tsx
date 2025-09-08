import React from 'react';

export interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex-[0_0_calc(33.33%_-_30px)] min-w-[280px] bg-white rounded shadow text-center overflow-hidden">
      <div className="h-56 overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-[#395c3b] mt-4 mb-2 px-4 text-lg">{title}</h3>
      <p className="text-gray-600 px-4 pb-5">{description}</p>
    </div>
  );
}; 