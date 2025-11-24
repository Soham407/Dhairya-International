import React from 'react';
import { Ship, BadgeCheck, HandCoins } from 'lucide-react';
import { Feature } from '../types';

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      id: 'logistics',
      title: 'Global Logistics',
      description: 'Efficient shipping to deliver chemicals, with a lot of experience delivering worldwide.',
      icon: Ship,
    },
    {
      id: 'quality',
      title: 'Purest Quality Standards',
      description: 'Rigorous testing of one quality standards ensures the purest quality for every batch.',
      icon: BadgeCheck,
    },
    {
      id: 'pricing',
      title: 'Competitive Pricing',
      description: 'Market-leading rates in competitor custom by maintaining market-leading rates.',
      icon: HandCoins,
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#5b6c7c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
          <div className="w-16 h-1 bg-blue-300 mx-auto mt-4 rounded-full opacity-80"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center text-center group hover:bg-white/5 p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6 text-white p-4 border-2 border-white/20 rounded-full bg-white/5 group-hover:bg-white group-hover:text-[#5b6c7c] transition-colors duration-300 shadow-lg">
                <feature.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">{feature.title}</h3>
              <p className="text-gray-200 leading-relaxed max-w-sm group-hover:text-white transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;