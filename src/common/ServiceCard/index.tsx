import React from 'react';

export interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 motion-reduce:transform-none text-center overflow-hidden">
      <div className="h-56 overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-brand-primary mt-4 mb-2 px-4 text-lg">{title}</h3>
      <p className="text-gray-600 px-4 pb-5 text-base sm:text-lg">{description}</p>
    </div>
  );
};