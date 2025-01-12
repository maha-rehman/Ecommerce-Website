import React, { useState } from 'react';
import { X } from 'lucide-react';

const QuickViewModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // Use the current quantity state directly when adding to cart
    const productToAdd = {
      ...product,
      quantity, // Use the current quantity state
    };
  
    // Call the onAddToCart function passed from parent
    onAddToCart(productToAdd);
  
    // Reset quantity to 1 after adding to cart
    setQuantity(1);
  
    // Close the quick view modal
    onClose();
  };
  

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white max-w-3xl w-full mx-4 flex relative animate-fadeIn">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
        >
          <X size={24} />
        </button>

        {/* Product Image */}
        <div className="w-1/2 bg-gray-100 group relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />
          {/* Sliding View Details Button */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <button className="w-full bg-black text-white py-3 px-4 text-sm hover:bg-[#b57b00] transition-colors font-bold">
              VIEW DETAILS
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="w-1/2 p-6">
          <h2 className="text-xl font-bold mb-3">{product.name}</h2>
          <p className="text-xl text-[#b57b00] mb-4">${product.price}</p>
          
          <p className="text-gray-600 mb-6 leading-relaxed text-sm">
            {product.description}
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <div className="flex border border-gray-300">
              <button 
                onClick={decrementQuantity}
                className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="w-12 text-center text-sm"
                readOnly
              />
              <button 
                onClick={incrementQuantity}
                className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            <button onClick={handleAddToCart} className="bg-[#b57b00] text-white px-6 py-2 text-sm hover:bg-[#946500] transition-colors">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;