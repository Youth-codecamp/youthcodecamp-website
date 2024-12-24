import React from 'react';
import './App.css';

import AboutUs from './components/AboutUs';
import CounterSection from './components/CounterSection';
import Events from './components/Events';
import Community from './components/Community';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import HeroSection from './components/HeroSection';
import TrustedCompanies from './components/TrustedCompanies';
import FAQPage from './components/FaqPage';



function App() {
  return (
    <div className="App">
      <Navbar /> 
      <HeroSection />
      <BackToTop />
      <AboutUs />
      <CounterSection />
      <Events />
      <TrustedCompanies />
      <Community />
      <FAQPage />
      <Footer />
    </div>
  );
}

export default App;
