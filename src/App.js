import React from 'react';
import './App.css';
import Navbar from './pages/navbar';
import Homepage from './pages/homepage';
import Footer from './pages/footer';




function App() {
  return (
    <div Style= " width :100%; overflow:hidden;">
      <Navbar/>
      <Homepage Style="margin-top:0px "/>
      <Footer/>
    </div>

  );
}

export default App;
