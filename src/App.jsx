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
    <div style={{backgroundColor: "#e5e7eb"}}>
      <Header />
      <div>
      <div>
      <Landing />
      </div>
      <div style={{ backgroundSize: 'cover', backgroundImage: `url('pictures/background1.jpg')` }}>
      <About />
      <Cars />
      <Contact />
      </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
