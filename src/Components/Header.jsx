import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const animatedDivWidth = screenWidth / 3;

  const slideAnimation = useSpring({
    right: isMobileMenuOpen ? '0%' : '-100%', // Adjust the right property
    width: isMobileMenuOpen ? `${animatedDivWidth}px` : '0px',
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Close the mobile menu after clicking a section link
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-sky-800 text-white p-4 w-full flex justify-between items-center relative">
        {/* AutoWebshop text aligned to the left */}
        <div className="text-3xl font-bold">
          <button onClick={() => scrollToSection('Landing')}>AutoWebshop</button>
        </div>

        {/* Centered buttons for desktop */}
        <div className={`hidden lg:flex items-center space-x-4 flex-grow-2 justify-center ${isMobileMenuOpen ? 'hidden' : ''}`}>
          <button onClick={() => scrollToSection('About')} className="hover:text-gray-300">About</button>
          <button onClick={() => scrollToSection('Product')} className="hover:text-gray-300">Products</button>
          <button onClick={() => scrollToSection('Contact')} className="hover:text-gray-300">Contact</button>
          <button className="hover:text-gray-300">Favourites</button>
        </div>

        {/* Right-aligned buttons for desktop */}
        <div className={`hidden lg:flex items-center space-x-2 flex-grow-1 justify-end ${isMobileMenuOpen ? 'hidden' : ''}`}>
          <button className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg p-2 my-2" onTouchEnd={() => { /* Handle Login click in mobile */ }}>
            <Link to="/login" className="hover:text-gray-300 text-sm">Login</Link>
          </button>
          <button className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg p-2 my-2" onTouchEnd={() => { /* Handle Register click in mobile */ }}>
            <Link to="/register" className="hover:text-gray-300 text-sm">Sign Up</Link>
          </button>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="block lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu with sliding animation */}
        <animated.div
          className="lg:hidden fixed inset-y-0 right-0 bg-sky-800 z-50 overflow-hidden" // Adjust the positioning
          style={slideAnimation}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              ✕
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button onClick={() => scrollToSection('About')} className="hover:text-gray-300 my-2" onTouchEnd={() => scrollToSection('About')}>
              About
            </button>
            <button onClick={() => scrollToSection('Product')} className="hover:text-gray-300 my-2" onTouchEnd={() => scrollToSection('Product')}>
              Products
            </button>
            <button onClick={() => scrollToSection('Contact')} className="hover:text-gray-300 my-2" onTouchEnd={() => scrollToSection('Contact')}>
              Contact
            </button>
            <button className="hover:text-gray-300 my-2" onTouchEnd={() => { /* Handle Favorites click in mobile */ }}>
              Favourites
            </button>
            <button className="hover:text-gray-300 my-2" onTouchEnd={() => { /* Handle Login click in mobile */ }}>
              <Link to="/login">Login</Link>
            </button>
            <button className="hover:text-gray-300 my-2" onTouchEnd={() => { /* Handle Register click in mobile */ }}>
              <Link to="/register">Sign Up</Link>
            </button>
          </div>
        </animated.div>
    </nav>
  );
};

export default Header;
