import React, { useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/Logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Youth Code Camp Logo" />
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#community">Community</a>
        <a href="#donate">Donate</a>
        <a href="#projects">Projects</a>
        <a href="#learn" className="learn-button">Learn</a>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
};

export default Navbar;