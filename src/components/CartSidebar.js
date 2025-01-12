import React from "react";

const CartSidebar = ({ cartItems, isOpen, onClose, onRemove }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-gray-900 font-bold"
        >
          Close &times;
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 overflow-y-auto h-[calc(100%-250px)]">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-b pb-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover"
              />
              <div className="flex-1 mx-4">
                <h3 className="font-bold text-sm">{item.title}</h3>
                <p className="text-gray-600 text-sm">
                  {item.quantity} × £{item.price}
                </p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">Your cart is empty.</p>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <p className="text-lg font-bold">
          Subtotal: £
          {cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          ).toFixed(2)}
        </p>
        <div className="flex flex-col gap-4 mt-4">
          {/* View Cart Button */}
          <button
            className="border border-gray-400 text-gray-800 w-full py-2 rounded hover:bg-gray-100 transition"
            onClick={() => alert("Navigating to Cart Page...")}
          >
            View Cart
          </button>

          {/* Checkout Button */}
          <button
            className="bg-[#b57b00] text-white w-full py-2 rounded hover:bg-[#914e00] transition"
            onClick={() => alert("Proceeding to Checkout...")}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
