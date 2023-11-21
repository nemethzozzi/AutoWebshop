import React from 'react';
import './styles.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cars from './Components/Cars';

function App() {
  return (
    <div style={{backgroundColor: "#e5e7eb"}}>
      <Header />
      <div>
      <Cars />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
