import React from 'react';
import { Award, Globe, FlaskConical } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <div className="relative bg-white">
      {/* Background Image Container */}
      <div className="relative h-[600px] w-full overflow-hidden group">
        {/* Actual Image */}
        <img
          src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2070&auto=format&fit=crop"
          alt="Industrial Refinery"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1a4b7c]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pb-16">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Premium Quality Ethanol & Alcoholic Products for Global Markets
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Serving industries worldwide with bulk chemical supply and reliable logistics.
            </p>
            <button
              onClick={onQuoteClick}
              className="opacity-0 animate-fade-in-up bg-[#1f5f9a] text-white px-8 py-3.5 rounded font-semibold text-lg hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-blue-500/30 border border-blue-400/30"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Overlapping Certifications Bar */}
      <div className="relative max-w-6xl mx-auto px-4 -mt-16 pb-12 z-10 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
        <div className="bg-white rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 hover:shadow-2xl transition-shadow duration-300">
          <div className="p-6 flex items-center justify-center gap-4 group cursor-default">
            <div className="bg-gray-100 p-3 rounded-full text-[#1a4b7c] group-hover:bg-[#1a4b7c] group-hover:text-white transition-colors duration-300">
              <Award size={32} strokeWidth={1.5} />
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base group-hover:text-[#1a4b7c] transition-colors">Government Recognized<br />Export House</span>
          </div>
          <div className="p-6 flex items-center justify-center gap-4 group cursor-default">
            <div className="bg-gray-100 p-3 rounded-full text-[#1a4b7c] group-hover:bg-[#1a4b7c] group-hover:text-white transition-colors duration-300">
              <Globe size={32} strokeWidth={1.5} />
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base group-hover:text-[#1a4b7c] transition-colors">ISO Certified</span>
          </div>
          <div className="p-6 flex items-center justify-center gap-4 group cursor-default">
            <div className="bg-gray-100 p-3 rounded-full text-[#1a4b7c] group-hover:bg-[#1a4b7c] group-hover:text-white transition-colors duration-300">
              <FlaskConical size={32} strokeWidth={1.5} />
            </div>
            <span className="font-semibold text-gray-800 text-sm md:text-base group-hover:text-[#1a4b7c] transition-colors">GMP Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;