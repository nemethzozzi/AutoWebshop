import React from 'react';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header = () => {
  return (
    <header className="bg-sky-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <button onClick={() => scrollToSection('Landing')}>AutoWebshop</button>
        </div>

        <nav className="space-x-4">
          <button onClick={() => scrollToSection('About')} className="hover:text-gray-300">About</button>
          <button onClick={() => scrollToSection('Product')} className="hover:text-gray-300">Products</button>
          <button onClick={() => scrollToSection('Contact')} className="hover:text-gray-300">Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
