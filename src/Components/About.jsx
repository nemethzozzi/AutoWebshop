import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedContainer = ({ children }) => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px',
  });

  return (
    <div
      ref={ref}
      className={`fade-in w-full md:w-3/4 bg-white bg-opacity-30 backdrop-filter backdrop-blur-md container mx-auto px-4 flex flex-col md:flex-row items-center justify-center rounded-md ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div id="About">
      <div className="container mx-auto mt-10 text-black grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatedContainer>
          <div>
            <h2 className="text-4xl font-extrabold">About Us</h2>
            <p className="text-lg text-gray-800 mb-6 mt-6 leading-relaxed">
              Welcome to AutoWebshop, where excellence meets automotive passion. At AutoWebshop, we take pride in delivering a curated selection of high-quality cars that redefine your driving experience.
            </p>
          </div>
        </AnimatedContainer>

        <AnimatedContainer>
          <div>
            <h2 className="text-4xl font-extrabold mt-4">Our Commitment to Quality</h2>
            <p className="text-lg text-gray-800 mb-6 mt-6 leading-relaxed">
              We understand that a car is not just a vehicle; it's an extension of your lifestyle and aspirations. That's why we are committed to providing you with a range of automobiles that stand out for their exceptional craftsmanship, performance, and reliability. Each car in our inventory undergoes rigorous inspection and testing to ensure it meets our stringent quality standards.
            </p>
          </div>
        </AnimatedContainer>

        <AnimatedContainer>
          <div>
            <h2 className="text-4xl font-extrabold mb-4 mt-5 ">Unparalleled Selection</h2>
            <p className="text-lg text-gray-800 mb-6 mt-6 leading-relaxed">
              Explore our showroom featuring a diverse range of vehicles, from sleek sedans to powerful SUVs. Whether you're seeking elegance, cutting-edge technology, or robust performance, our collection has been carefully curated to cater to varied preferences and needs. We believe in offering not just cars, but an elevated driving experience.
            </p>
          </div>
        </AnimatedContainer>

        <AnimatedContainer>
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Expert Guidance</h2>
            <p className="text-lg text-gray-800 mb-6 mt-6 leading-relaxed">
              Our team of knowledgeable and passionate automotive experts is dedicated to assisting you in finding the perfect car that aligns with your desires. From answering your questions to providing valuable insights, we are here to guide you through every step of the car-buying process.
            </p>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default About;
