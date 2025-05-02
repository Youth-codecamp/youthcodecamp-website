import React from 'react';
import { FaRocket, FaSchool, FaUser } from 'react-icons/fa';
import '../styles/countersection.css';

const CounterSection = () => {
  return (
    <div className="counter-container">
      <div className="counter-item">
        <FaRocket className="counter-icon" />
        <div className="counter-text">
          <h2>+6</h2>
          <p>Events</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="counter-item">
        <FaSchool className="counter-icon" />
        <div className="counter-text">
          <h2>+1</h2>
          <p>Schools</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="counter-item">
        <FaUser className="counter-icon" />
        <div className="counter-text">
          <h2>+150</h2>
          <p>Members</p>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;