import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import CounterSection from '../components/CounterSection';
import Events from '../components/Events';
import TrustedCompanies from '../components/TrustedCompanies';
import Community from '../components/Community';
import FaqPage from '../components/FaqPage';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <CounterSection />
      <Events />
      <TrustedCompanies />
      <Community />
      <FaqPage />
    </div>
  );
};

export default Home;
