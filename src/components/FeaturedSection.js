import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  "https://new-basel.myshopify.com/cdn/shop/files/bg.jpg?v=1613573633",
  "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const FeaturedSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handlePrevClick = () => {
    setFade(true); // Trigger fade-out
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(false); // Trigger fade-in after changing image
    }, 200); // Delay should match CSS transition duration
  };

  // Handle Next Image
  const handleNextClick = () => {
    setFade(true); // Trigger fade-out
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setFade(false); // Trigger fade-in after changing image
    }, 200); // Delay should match CSS transition duration
  };

  return (
    <div className="relative h-[520px] mb-12 group">
      {/* Background Image with Fade Transition */}
      <div className="absolute inset-0 transition-opacity duration-300 ease-in-out" style={{ opacity: fade ? 0 : 1 }}>
        <img
          src={images[currentImageIndex]}
          alt="Shoe Collection"
          className="w-full h-full object-cover object-[center_top]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Text Overlay */}
      <div className="relative container mx-auto px-4 h-full flex flex-col items-end justify-center text-white">
        <div className="text-right">
          <h2 className="font-tangerine text-6xl font-bold text-[#b57b00] mb-4">Winter Collection 2024</h2>
          <p className="font-playfair text-7xl font-extrabold text-black mb-8">Man's Style</p>
          <button className="bg-[#b57b00] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Arrows (Show on Hover) */}
      <button
        onClick={handlePrevClick}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaArrowLeft size={24} />
      </button>

      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default FeaturedSection;