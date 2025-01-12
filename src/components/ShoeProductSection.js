import React from 'react';

const ShoeProductSection = () => {
  return (
    <div className="max-w-full p-28 bg-[#c2c2c2]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Content Section */}
        <div className="flex flex-col justify-center space-y-6">
          <span className="text-[#b57b00] font-tangerine font-semibold text-4xl text-center">
            Craftsmanship in every pair
          </span>
          
          <h1 className="text-4xl font-bold tracking-tight font-playfair text-center">
            WHY OUR SHOES?
          </h1>
          
          <p className="text-gray-600 text-center">
            Our handcrafted footwear combines traditional artisanal techniques with modern comfort. 
            Each pair is meticulously constructed using premium materials and time-tested methods.
          </p>
          
          <p className="text-gray-600 text-center">
            From selecting the finest leather to the final polish, our master craftsmen ensure 
            every detail meets our exacting standards of quality and durability.
          </p>
          
          <div className="flex justify-center">
            <button 
              className="bg-[#b57b00] hover:bg-[#b37d00] text-white px-8 py-2 rounded-full transition-colors duration-200"
            >
              READ MORE
            </button>
          </div>
        </div>

        {/* Right Images Section */}
        <div className="relative grid grid-cols-2 gap-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772"
              alt="Craftsman working on shoe"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              alt="Detailed shoe craftsmanship"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeProductSection;