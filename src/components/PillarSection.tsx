import React from 'react';

interface PillarSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

const PillarSection: React.FC<PillarSectionProps> = ({ icon, title, description, points }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-1">
              <span className="text-green-600 text-sm">✓</span>
            </span>
            <span className="text-gray-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PillarSection;