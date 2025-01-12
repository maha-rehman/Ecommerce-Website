import React from "react";

const Newsletter = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-20 h-fit" // Use h-screen to set full viewport height
      style={{ backgroundImage: "url('//cdn.pixabay.com/photo/2023/09/28/01/35/shoes-8280520_1280.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Connect to Basel & Co.</h2>
        <p className="text-lg mb-6">
          Hey you, sign up! It only takes a second to be the first to find out about our latest news and promotions...
        </p>
        <form className="flex justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-2/3 px-4 py-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-100 focus:ring-2 focus:ring-gray-300"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
