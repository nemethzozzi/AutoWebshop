import React from 'react';

const Header = () => {
  return (
    <header className="bg-sky-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">AutoWebshop</a>
        </div>

        {/* Navigation */}
        <nav className="space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/products" className="hover:text-gray-300">Products</a>
          <a href="/about" className="hover:text-gray-300">About Us</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </nav>

        {/* Search bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border rounded-md focus:outline-none focus:border-gray-800"
          />
          <button className="bg-sky-500 text-white px-4 py-2 rounded-md">Search</button>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
