import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingCart } from 'lucide-react';

const Header = ({ cartItems = [], onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100); // Adjust scroll threshold
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header Section */}
      <header className="py-4 px-6 flex items-center justify-between border-b">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <img
              src="//cdn.shopify.com/s/files/1/2285/2483/files/clock.png?12452726799929430206"
              alt="Clock Icon"
              className="w-7 h-7"
            />
            <span className="text-sm">
              <strong>05:00 à 20:00</strong>
              <br />
              Monday to Friday
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="//cdn.shopify.com/s/files/1/2285/2483/files/location-marker.png?12452726799929430206"
              alt="Location Icon"
              className="w-7 h-7"
            />
            <span className="text-sm">
              <strong>Shoe Palace</strong>
              <br />
              New York, NY 10001
            </span>
          </div>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="//new-basel.myshopify.com/cdn/shop/files/logo-basel.svg?v=11944076954395008056"
            alt="Shoes & Co Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <span className="text-sm">Login / Register</span>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5" />
            <div className="relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-[#b57b00] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </div>

            {/* Cart Icon */}
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={onOpenCart}
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#b57b00] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {totalQuantity}
                  </span>
                )}
              </div>
              <span>£{totalPrice}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav
        className={`border-b bg-white ${
          isScrolled ? 'fixed top-0 left-0 w-full shadow-lg z-50' : ''
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo on Scroll */}
          {isScrolled && (
            <div className="flex-shrink-0">
              <img
                src="//new-basel.myshopify.com/cdn/shop/files/logo-basel.svg?v=11944076954395008056"
                alt="Shoes & Co Logo"
                className="h-8 w-auto"
              />
            </div>
          )}

          {/* Centered Navigation Links */}
          <ul className="flex justify-center space-x-8 mx-auto">
            <li className="py-4">
              <a href="/" className="text-sm font-semibold hover:text-[#b57b00]">HOME</a>
            </li>
            <li className="py-4">
              <a href="/shop" className="text-sm font-semibold hover:text-[#b57b00]">SHOP</a>
            </li>
            <li className="py-4">
              <a href="/blog" className="text-sm font-semibold hover:text-[#b57b00]">BLOG</a>
            </li>
            <li className="py-4">
              <a href="/pages" className="text-sm font-semibold hover:text-[#b57b00]">PAGES</a>
            </li>
            <li className="py-4">
              <a href="/features" className="text-sm font-semibold hover:text-[#b57b00]">FEATURES</a>
            </li>
          </ul>

          {/* Icons on Scroll */}
          {isScrolled && (
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5" />
              <div className="relative">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-[#b57b00] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
              </div>
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={onOpenCart}
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#b57b00] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {totalQuantity}
                    </span>
                  )}
                </div>
                <span>£{totalPrice}</span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
