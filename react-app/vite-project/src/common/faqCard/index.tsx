import React from 'react';

export interface FAQCardProps {
  question: string;
  solution: string | string[];
  className?: string;
}

export const FAQCard: React.FC<FAQCardProps> = ({ question, solution, className }) => {
  const solutionArray = Array.isArray(solution) ? solution : [solution];

  return (
    <div className={`bg-white rounded-lg shadow-md p-8 ${className ?? ''}`.trim()}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{question}</h2>
      <div className="space-y-4">
        {solutionArray.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FAQCard;
