import React from 'react';
import './styles.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cars from './Components/Cars';
import Contact from './Components/Contact';
import Landing from './Components/Landing';
import About from './Components/About';

function App() {
  return (
    <div  style={{ backgroundSize: 'cover', backgroundImage: `url('pictures/background1.jpg')` }}>
      <Header />
      <div>
      <Landing />
      <About />
      <Cars />
      <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
