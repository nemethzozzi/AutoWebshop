import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedContainer = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px',
  });

  return (
    <div
      ref={ref}
      className={`fade-in absolute inset-0 bg-cover bg-center opacity-70" ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

const Landing = () => {
  return (
    <div id="Landing">
      <div className="relative h-screen">
      <AnimatedContainer>
        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url('pictures/background.jpg')` }}></div>
        <div className="relative z-10 flex items-center justify-center text-black text-center">

            <div>
              <h1 className="text-8xl mb-4 mt-14 font-bold" style={{ fontFamily: 'Roboto' }}>Carshop</h1>
              <p className="text-3xl mt-10 font-semibold italic" style={{ fontFamily: 'Roboto' }}>
                "Transform dreams into reality: Seize your dream car and make it yours by tomorrow."
              </p>
            </div>

        </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Landing;
