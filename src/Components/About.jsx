import React from 'react';

const About = () => {
  return (
    <div id="About">
       <div className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url('background.jpg')` }}></div>
      <div className="relative z-10 flex items-center justify-center text-black text-center">
        <div>
        <h1 className="text-8xl mb-4 mt-14 font-bold" style={{ fontFamily: 'Roboto' }}>Carshop</h1>
          <p className="text-xl mt-10 font-semibold italic" style={{ fontFamily: 'Roboto' }}>
          "Transform dreams into reality: Seize your dream car and make it yours by tomorrow."
          </p>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default About;
