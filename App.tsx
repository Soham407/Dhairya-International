import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const toggleQuoteModal = () => {
    setIsQuoteModalOpen(!isQuoteModalOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar onQuoteClick={toggleQuoteModal} />
      
      <main className="flex-grow">
        <Hero onQuoteClick={toggleQuoteModal} />
        <Products />
        <Features />
      </main>

      <Footer />
      
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <BackToTop />
    </div>
  );
};

export default App;