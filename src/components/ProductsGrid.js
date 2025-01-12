import React, { useState } from 'react';
import ProductCard from './ProductCard';
import QuickViewModal from "./QuickViewModal";

const ProductsGrid = ({ onAddToCart }) => {
  // Add state for Quick View modal
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Handler for Quick View
  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  // Handler for closing Quick View
  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setSelectedProduct(null);
  };
  const allProducts = [
    {
      id: 1,
      category: "Loafers",
      image: "//lamaretail.com/cdn/shop/files/MFS24LF001-SAND-SUEDE-SLIP-ON-LOAFERS_3.jpg?v=1710412012&width=1080",
      hoverImage: "//lamaretail.com/cdn/shop/files/MFS24LF001-SAND-SUEDE-SLIP-ON-LOAFERS_5.jpg?v=1710412012&width=1000",
      title: "Loafers classic",
      price: "579.00",
    },
    {
      id: 2,
      category: "Loafers",
      image: "//lamaretail.com/cdn/shop/files/SHFMWS0029-SAND-TASSEL-LOAFERS_2.jpg",
      hoverImage: "//lamaretail.com/cdn/shop/files/SHFMWS0029-SAND-TASSEL-LOAFERS_5.jpg",
      title: "Loafers premium",
      price: "579.00",
    },
    {
      id: 3,
      category: "Loafers",
      image: "//lamaretail.com/cdn/shop/files/SHFMSS0010-COFFEE-SLIP-ON-LOAFERS_2.jpg",
      hoverImage: "//lamaretail.com/cdn/shop/files/SHFMSS0010-COFFEE-SLIPON-LOAFERS_5.jpg",
      title: "Loafers basic",
      price: "579.00",
    },
    {
      id: 4,
      category: "Loafers",
      image: "//lamaretail.com/cdn/shop/files/MFS24LF001-SAND-SUEDE-SLIP-ON-LOAFERS_3.jpg?v=1710412012&width=1080",
      hoverImage: "//lamaretail.com/cdn/shop/files/MFS24LF001-SAND-SUEDE-SLIP-ON-LOAFERS_5.jpg",
      title: "Loafers classic 2",
      price: "579.00",
    },
    {
      id: 5,
      category: "Loafers",
      image: "//lamaretail.com/cdn/shop/files/SHFMWS0029-COFFEE-TASSEL-LOAFERS_2.jpg?v=1709724579&width=1080",
      hoverImage: "//lamaretail.com/cdn/shop/files/SHFMWS0029-COFFEE-TASSEL-LOAFERS_2_3f8c409d-96b2-420d-8cc6-02a5a6ef4982.jpg?v=1709724579&width=1000",
      title: "Loafers Premium 2",
      price: "579.00",
    },
    {
      id: 6,
      category: "Loafers",
      image: "//lamaretail.com/cdn/shop/files/MFS24LF006-DARK-NAVY-CLASSIC-LEATHER-SLIP-ONS-20272f_7.jpg?v=1726064949&width=1080",
      hoverImage: "//lamaretail.com/cdn/shop/files/MFS24LF006-DARK-NAVY-CLASSIC-LEATHER-SLIP-ONS-20272f_11.jpg?v=1726064949&width=1000",
      title: "Loafers Stylish",
      price: "579.00",
    },
    {
      id: 7,
      category: "Derbies",
      image: "//www.dcshoes.com.au/cdn/shop/files/303190_dcshoes_bb2_frt1.jpg",
      hoverImage: "https://demo-basel2.myshopify.com/cdn/shop/products/shoes-product-7_370x.progressive.jpg?v=1512099592",
      hoverImage: "//lamaretail.com/cdn/shop/files/MFS24LF006-DARK-NAVY-CLASSIC-LEATHER-SLIP-ONS-20272f_11.jpg?v=1726064949&width=1000",
      title: "Derbies Basic",
      price: "579.00",
    },
    {
      id: 8,
      category: "Derbies",
      image: "https://demo-basel2.myshopify.com/cdn/shop/products/shoes-product-7_370x.progressive.jpg?v=1512099592",
      title: "Derbies Premium",
      price: "579.00",
    },
    {
      id: 9,
      category: "Derbies",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Derbies Classic",
      price: "579.00",
    },
    {
      id: 10,
      category: "Derbies",
      image: "//demo-basel2.myshopify.com/cdn/shop/products/shoes-product-7_1000x.progressive.jpg?v=1512099592",
      title: "Derbies Premium 2",
      price: "579.00",
    },
    {
      id: 11,
      category: "Derbies",
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Derbies Stylish",
      price: "579.00",
    },
    {
      id: 12,
      category: "Derbies",
      image: "https://demo-basel2.myshopify.com/cdn/shop/products/shoes-product-7_370x.progressive.jpg?v=1512099592",
      title: "Derbies Premium 3",
      price: "579.00",
    },
  ];

  // Filtered Products
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className="container mx-auto px-4">
      {/* Title Section */}
      <div className="text-center mb-8">
        <p className="text-5xl font-semibold text-[#b57b00] font-tangerine">New collection shoes</p>
        <h1 className="text-5xl font-bold font-playfair">Shoes best sellers</h1>
        <div className="flex justify-center items-center space-x-4 mt-4">
          {["Loafers", "Derbies", "Oxfords"].map((category, index, arr) => (
            <div key={category} className="flex items-center">
              <button
                onClick={() => setSelectedCategory(category)}
                className={` uppercase ${selectedCategory === category
                    ? "text-[#b57b00] font-bold underline underline-offset-4"
                    : "text-gray-500 font-bold"
                  } hover:text-[#b57b00] transition`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
              {index < arr.length - 1 && (
                <span className="text-gray-400 mx-2 select-none">/</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            hoverImage={product.hoverImage}
            title={product.title}
            price={product.price}
            product={product}
            onAddToCart={() => onAddToCart(product)} // Pass handler to child
            onQuickView={() => handleQuickView(product)}
            onAddToWishlist={() => {/* Add wishlist handler */}}
            onCompare={() => {/* Add compare handler */}}
          />
        ))}
      </div>


      {/* Quick View Modal */}
      {selectedProduct && (
        <QuickViewModal
          isOpen={isQuickViewOpen}
          onClose={handleCloseQuickView}
          product={{
            name: selectedProduct.title,
            price: selectedProduct.price,
            description: "Aenean tincidunt pharetra ullamcorper senectus nascetur sociis vestibulum hac a dui vestibulum a a suscipit suspendisse mi magnis parturient.", // Add description to your product data if needed
            image: selectedProduct.image
          }}
          onAddToCart={onAddToCart}  // Pass the onAddToCart function
        />
      )}
    </div>
  );
};

export default ProductsGrid;
