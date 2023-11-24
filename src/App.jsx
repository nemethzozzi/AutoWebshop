import React from 'react';
import './styles.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cars from './Components/Cars';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div style={{backgroundColor: "#e5e7eb"}}>
      <Header />
      <div>
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
