import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const animatedDivWidth = screenWidth / 3;

  const slideAnimation = useSpring({
    right: isMobileMenuOpen ? '0%' : '-100%',
    width: isMobileMenuOpen ? `${animatedDivWidth}px` : '0px',
  });

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`bg-sky-800 text-white p-4 w-full flex justify-between items-center relative ${isSticky ? 'sticky top-0 z-50' : ''}`}>
      <div className="text-3xl font-bold">
        <button onClick={() => scrollToSection('Landing')}>AutoWebshop</button>
      </div>

      <div className={`hidden lg:flex items-center space-x-4 flex-grow-2 justify-center ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <button onClick={() => scrollToSection('About')} className="hover:text-gray-300">About</button>
        <button onClick={() => scrollToSection('Product')} className="hover:text-gray-300">Products</button>
        <button onClick={() => scrollToSection('Contact')} className="hover:text-gray-300">Contact</button>
        <button className="hover:text-gray-300">Favourites</button>
      </div>

      <div className={`hidden lg:flex items-center space-x-2 flex-grow-1 justify-end ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <button className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg p-2 my-2">
          <Link to="/login" className="hover:text-gray-300 text-sm">Login</Link>
        </button>
        <button className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-md rounded-lg p-2 my-2">
          <Link to="/register" className="hover:text-gray-300 text-sm">Sign Up</Link>
        </button>
      </div>

      <div className="block lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="mt-2"
        >
          <img 
            src="./icons/hamburger_icon.png" 
            alt="Mobile Menu Icon" 
            style={{ width: '25px', height: '25px' }}
          />
        </button>
      </div>

      <animated.div
        className="lg:hidden fixed inset-y-0 right-0 bg-sky-800 z-50 overflow-hidden"
        style={slideAnimation}
      >
        <div className="flex justify-end p-4">
          <button 
           onClick={() => setMobileMenuOpen(false)}
           className="mt-2">
            <img 
              src="./icons/x.png" 
              alt="Mobile Menu Icon" 
              style={{ width: '30px', height: '30px' }}
            />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button onClick={() => scrollToSection('About')} className="hover:text-gray-300 my-2">
            About
          </button>
          <button onClick={() => scrollToSection('Product')} className="hover:text-gray-300 my-2">
            Products
          </button>
          <button onClick={() => scrollToSection('Contact')} className="hover:text-gray-300 my-2">
            Contact
          </button>
          <button className="hover:text-gray-300 my-2">
            Favourites
          </button>
          <button className="hover:text-gray-300 my-2">
            <Link to="/login">Login</Link>
          </button>
          <button className="hover:text-gray-300 my-2">
            <Link to="/register">Sign Up</Link>
          </button>
        </div>
      </animated.div>
    </nav>
  );
};

export default Header;
