import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const FooterHeading = ({ children }) => (
  <div className="relative pb-2 mb-4">
    <h3 className="text-white text-sm font-bold uppercase">{children}</h3>
    <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-500"></div>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Logo and Social Icons */}
        <div className="mb-8 text-center">
          <div className="mb-4">
            <img 
              src="//demo-basel2.myshopify.com/cdn/shop/files/logo-white_330x.png" 
              alt="Basel & Co Logo" 
              className="max-w-lg mx-auto"
            />
          </div>
          <div className="flex justify-center space-x-4">
            <a href="" className="hover:text-white">
              <Facebook size={23}/>
              
            </a>
            <a href="#" className="hover:text-white">
            <Twitter size={23}/>
            </a>
            <a href="#" className="hover:text-white">
            <Instagram size={23}/>
            </a>
            <a href="#" className="hover:text-white">
            <Mail size={23}/>
            </a>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          {/* Our Stores */}
          <div>
            <FooterHeading>Our Stores</FooterHeading>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">New York</a></li>
              <li><a href="#" className="hover:text-white">London SF</a></li>
              <li><a href="#" className="hover:text-white">Cockfosters BP</a></li>
              <li><a href="#" className="hover:text-white">Los Angeles</a></li>
              <li><a href="#" className="hover:text-white">Chicago</a></li>
              <li><a href="#" className="hover:text-white">Las Vegas</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
          <FooterHeading>Information</FooterHeading>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Store</a></li>
              <li><a href="#" className="hover:text-white">New Collection</a></li>
              <li><a href="#" className="hover:text-white">Woman Dress</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Latest News</a></li>
              <li><a href="#" className="hover:text-white">Our Sitemap</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
          <FooterHeading>Useful Links</FooterHeading>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Latest News</a></li>
              <li><a href="#" className="hover:text-white">Our Sitemap</a></li>
            </ul>
          </div>

          {/* Footer Menu */}
          <div>
          <FooterHeading>Footer Menu</FooterHeading>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Instagram profile</a></li>
              <li><a href="#" className="hover:text-white">New Collection</a></li>
              <li><a href="#" className="hover:text-white">Woman Dress</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Latest News</a></li>
              <li><a href="#" className="italic">Purchase Theme</a></li>
            </ul>
          </div>

          {/* About The Store */}
          <div className="md:col-span-2 lg:col-span-1">
          <FooterHeading>About The Store</FooterHeading>
            <p className="mb-4">STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.</p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>451 Wall Street, USA, New York</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>Phone: (123) 456-7890</span>
              </div>
            </div>

            {/* Payment Methods Image */}
            <div className="mt-6">
              <img 
                src="//demo-basel2.myshopify.com/cdn/shop/files/payments_255x.png" 
                alt="Payment Methods" 
                className=""
              />
            </div>
          </div>
        </div>
      </div>

  {/* Copyright Section */}
  <div className="border-t border-gray-800">
  <div className="max-w-6xl mx-auto px-4 py-4">
    <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
      <div>
        © {currentYear} Created by <span className='font-semibold'>MahaRehman.</span>
      </div>
      <div className="mt-2 md:mt-0">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </li>
          <li>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</footer>
  );
};

export default Footer;