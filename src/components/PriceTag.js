import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const PriceTag = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [priceTagPosition, setPriceTagPosition] = useState('bottom-8'); // Initial position of PriceTag

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true); // Show arrow button
        setPriceTagPosition('bottom-20'); // Move PriceTag slightly above the arrow
      } else {
        setShowScrollButton(false); // Hide arrow button
        setPriceTagPosition('bottom-8'); // Reset PriceTag to initial position
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      {/* PriceTag */}
      <div
        className={`fixed right-8 ${priceTagPosition} transform -translate-y-1/2 bg-[#729c29] rounded-full w-18 h-18 shadow-lg flex items-center justify-center transition-all`}
      >
        <img
          src="//cdn.shopify.com/s/files/1/1933/6253/files/59.png"
          alt="Price $59"
          className="w-full object-contain"
        />
        <div className="absolute bottom-[-8px] right-[-2px] bg-[#7cb442] w-8 h-8 rounded-full flex items-center justify-center border-2">
          <img
            src="//cdn.shopify.com/s/files/1/1933/6253/files/envato-logo.png"
            alt="Seed Icon"
            className="w-4 h-4 object-contain"
          />
        </div>
      </div>

      {/* Arrow Button */}
      {showScrollButton && (
        <div className="fixed bottom-8 right-8">
          <button
            className="bg-white border-[1.5px] border-gray-950 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PriceTag;
