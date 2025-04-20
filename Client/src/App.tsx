import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Reserve from './components/Reserve/Reserve';
import Services from './components/Services/Services';
import History from './components/History/History';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Reserve />
      <Services />
      <History />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 