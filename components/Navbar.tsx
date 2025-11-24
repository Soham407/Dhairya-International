import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Logistics', href: '#features' },
    { label: 'Contact Us', href: '#footer' },
  ];

  return (
    <nav className="bg-[#1a4b7c] text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center font-bold text-2xl">
              D
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-wide">DHAIRYA</span>
              <span className="text-xs font-light tracking-wider text-gray-300">INTERNATIONAL</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onQuoteClick}
              className="bg-white text-[#1a4b7c] px-5 py-2.5 rounded font-semibold text-sm hover:bg-gray-100 transition-colors shadow-sm"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#153e66] border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-blue-800"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onQuoteClick();
                setIsOpen(false);
              }}
              className="w-full text-left mt-4 block px-3 py-3 rounded-md text-base font-bold bg-white text-[#1a4b7c]"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;