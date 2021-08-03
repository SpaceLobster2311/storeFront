import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer';
import Catagories from './components/Catagories';

function App() {
  return (
    <div className="App">
      <Header />
      <Catagories />
      <Footer />
    </div>
  );
}

export default App;
