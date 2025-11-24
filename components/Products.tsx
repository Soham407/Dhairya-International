import React from 'react';
import { Factory, FlaskRound, Fuel, Pipette } from 'lucide-react';
import { Product } from '../types';

const Products: React.FC = () => {
  const products: Product[] = [
    {
      id: 'ena',
      title: 'Extra Neutral Alcohol (ENA)',
      icon: Factory,
      description: 'High purity neutral alcohol for beverages and pharma.',
    },
    {
      id: 'denatured',
      title: 'Denatured Ethanol',
      icon: FlaskRound,
      description: 'Specially formulated ethanol for industrial use.',
    },
    {
      id: 'rectified',
      title: 'Rectified Spirit',
      icon: Fuel,
      description: 'Highly concentrated ethanol for versatile applications.',
    },
    {
      id: 'perfume',
      title: 'Ethanol for Perfumes',
      icon: Pipette,
      description: 'Odorless base perfect for fragrance formulation.',
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a4b7c]">Product Portfolio</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-gray-600 mb-6 group-hover:text-[#1a4b7c] transition-all duration-300 transform group-hover:scale-110">
                <product.icon size={64} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 h-14 flex items-center justify-center group-hover:text-[#1a4b7c] transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="mt-auto">
                <button className="inline-flex items-center text-[#1f5f9a] font-semibold border-b-2 border-transparent group-hover:border-[#1f5f9a] transition-all pb-0.5 text-sm uppercase tracking-wide">
                  View Specs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;