import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import CounterSection from './components/CounterSection';
import Events from './components/Events';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';


function App() {
  return (
    <div className="App">
      <HeroSection />
      <BackToTop />
      <AboutUs />
      <CounterSection />
      <Events />
      <Community />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
