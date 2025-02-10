import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(true);
  };

  const toggleClose = () => {
    setIsOpen(false);
  };

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Events", href: "/events" },
    { label: "Projects", href: "/projects" },
    { label: "Learn", href: "/learn" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Youth Code Camp Logo" />
      </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul>
          <div className="close-icon" onClick={toggleClose}>
            <i className="fa-solid fa-times"></i>
          </div>
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu-button" onClick={toggleOpen}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
