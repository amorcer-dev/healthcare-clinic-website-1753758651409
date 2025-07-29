import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ClinicFeaturesGridProps {
  features: Feature[];
  className?: string;
}

export const ClinicFeaturesGrid: React.FC<ClinicFeaturesGridProps> = ({ features, className = '' }) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl p-8 shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              role="article"
              aria-labelledby={`feature-title-${idx}`}
            >
              <div className="mb-4 text-blue-600 text-4xl">{feature.icon}</div>
              <h3 id={`feature-title-${idx}`} className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-blue-900">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 