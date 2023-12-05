import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-sky-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold">
          <button onClick={() => scrollToSection('Landing')}>AutoWebshop</button>
        </div>

        <div className="space-x-4 text-2xl">
          <button onClick={() => scrollToSection('About')} className="hover:text-gray-300">About</button>
          <button onClick={() => scrollToSection('Product')} className="hover:text-gray-300">Products</button>
          <button onClick={() => scrollToSection('Contact')} className="hover:text-gray-300">Contact</button>
          <button className="hover:text-gray-300">Favourites</button>
          <button className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded p-1 w-24">
          <Link to="/login" className="hover:text-gray-300 ">Login </Link>
          </button>
          <button className=" bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded p-1 w-28">
          <Link to="/register" className="hover:text-gray-300">Register</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
