import React from 'react';
import Navbar from './Navbar';
import '../styles/herosection.css';

const HeroSection = () => {
  return (
    <>
      <Navbar /> 
      <section className="hero">
        <div className="hero-content">
          <h4 className="welcome-text">WELCOME TO YOUTH CODE CAMP</h4>
          <h1>Inspiring the Next<br /><span>Generation</span> of Coders</h1>
          <p>A community where young programmers come together to<br /> learn, create, and share ideas about coding and technology.</p>
          <div className="hero-buttons">
            <a href="#events" className="discover-btn">Discover Events</a>
            <a href="https://ed0azuo2uuh.typeform.com/to/LqAQgAdC" className="join-btn" target="_blank" rel="noopener noreferrer">Join Now</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={require('../assets/hero.png')} alt="Youth Code Camp" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;