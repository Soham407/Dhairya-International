import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#10406e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Registered Office */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">Registered Office</h3>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm">
              Dhairya International is a<br />
              Registered Office 434 Road,<br />
              Damwon, Dharrat Roaot, 79053,<br />
              Mumbai, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center">Home</a></li>
              <li><a href="#about" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center">About</a></li>
              <li><a href="#products" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center">Products</a></li>
              <li><a href="#" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b-2 border-blue-500 inline-block pb-1">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group cursor-pointer transition-transform hover:translate-x-1 duration-300">
                <div className="bg-green-500 p-2 rounded-full text-white shadow-md group-hover:scale-110 transition-transform">
                    <Phone size={16} fill="white" className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white text-sm transition-colors">+91 9847333852</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer transition-transform hover:translate-x-1 duration-300">
                <div className="bg-white/10 p-2 rounded-full shadow-md group-hover:bg-white/20 group-hover:scale-110 transition-all">
                    <Mail size={16} />
                </div>
                <span className="text-gray-300 group-hover:text-white text-sm transition-colors">dhairya.international.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-800/50 bg-[#0d365c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-xs text-gray-400">
            © 2024 Dhairya International. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;