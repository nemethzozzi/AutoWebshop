import React from 'react';
import Landing from '../Components/Landing';
import About from '../Components/About';
import Model from '../Components/Model';
import Cars from '../Components/Cars';
import Contact from '../Components/Contact';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div style={{ backgroundSize: 'cover', backgroundImage: `url('pictures/background1.jpg')` }}>
      <div>
        <Header />
        <Landing />
        <About />
        <Model />
        <Cars />
        <Contact />
        <Footer />
      </div>
    </div>

  );
};

export default Home;
