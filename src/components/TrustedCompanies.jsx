import React from "react";
import '../styles/trusted.css';
import logo1 from '../assets/trusted/bktechouse.png';
import logo2 from '../assets/trusted/codecrafters.png';
import logo3 from '../assets/trusted/techinika.png';
import logo4 from '../assets/trusted/one world coders.png';
import logo5 from '../assets/trusted/GDG_Kigali_Logo.png';

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies" id="companies">
      <h2 className="trusted-title">Companies That Trust Us</h2>
      <div className="logo-carousel">
        <a href="https://www.example1.com" target="_blank" rel="noopener noreferrer">
          <img src={logo1} alt="BKTechouse" className="company-logo" />
        </a>
        <a href="https://www.example2.com" target="_blank" rel="noopener noreferrer">
          <img src={logo2} alt="CodeCrafters" className="company-logo" />
        </a>
        <a href="https://www.example3.com" target="_blank" rel="noopener noreferrer">
          <img src={logo3} alt="Techinika" className="company-logo" />
        </a>
        <a href="https://www.example4.com" target="_blank" rel="noopener noreferrer">
          <img src={logo4} alt="OneWorldCoders" className="company-logo" />
        </a>
        <a href="https://www.example4.com" target="_blank" rel="noopener noreferrer">
          <img src={logo5} alt="GDG Kigali" className="company-logo" />
        </a>
      </div>
    </section>
  );
};

export default TrustedCompanies;
