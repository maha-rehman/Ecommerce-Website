import React from 'react';
import { ShoppingCart, Search, Heart, Orbit } from 'lucide-react';

const ProductCard = ({ image, hoverImage, title, price, onAddToCart, onQuickView, onAddToWishlist, onCompare }) => {
return (
  <div className="bg-white">
    {/* Container for image and hover mask */}
    <div className="group relative overflow-hidden">
      {/* Product Images */}
      <div className="aspect-square overflow-hidden relative">
        {/* First Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover Image */}
        <img
          src={hoverImage}
          alt={`${title} - alternate view`}
          className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
      {/* Hover Mask with Icons */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        <div className="flex justify-center items-center gap-4 py-3">
          {/* Shopping Cart Button */}
          <div className="relative group/icon">
            <button className="text-white hover:text-[#b57b00] transition-colors" onClick={onAddToCart}>
              <ShoppingCart size={20} />
            </button>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity">
              <div className="relative bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Add to Cart
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Search/Quick View Button */}
          <div className="relative group/icon">
            <button className="text-white hover:text-[#b57b00] transition-colors" onClick={onQuickView}>
              <Search size={20} />
            </button>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity">
              <div className="relative bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Quick View
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Wishlist Button */}
          <div className="relative group/icon">
            <button className="text-white hover:text-[#b57b00] transition-colors" onClick={onAddToWishlist}>
              <Heart size={20} />
            </button>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity">
              <div className="relative bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Add to Wishlist
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black transform rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Compare Button */}
          <div className="relative group/icon">
            <button className="text-white hover:text-[#b57b00] transition-colors" onClick={onCompare}>
              <Orbit size={20} />
            </button>
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity">
              <div className="relative bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Compare
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Product Info */}
    <div className="text-center mt-4 pb-4">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-gray-600">${price}</p>
    </div>
  </div>
);
};

export default ProductCard;