import React, { useState }  from 'react';
import Header from './components/Header';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import ProductsGrid from './components/ProductsGrid';
import Newsletter from './components/Newsletter';
import BlogPost from './components/BlogPost';
import ShoeProductSection from './components/ShoeProductSection';
import PriceTag from './components/PriceTag';
import CartSidebar from './components/CartSidebar';

const App = () => {

  // State for Cart
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product }]);
    }
    setCartOpen(true); // Open the sidebar when adding a product
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const handleCloseCart = () => setCartOpen(false);

  return (
    <div className="min-h-screen">
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={handleCloseCart} // Close cart on background click
        />
      )}
      <Header cartItems={cartItems} onOpenCart={() => setCartOpen(true)} />
      <FeaturedSection />
      <ProductsGrid cartItems={cartItems} onAddToCart={handleAddToCart} />
      <ShoeProductSection />
      <Newsletter />
      <BlogPost />
      <Footer />
      <PriceTag />
      <CartSidebar
        cartItems={cartItems}
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
