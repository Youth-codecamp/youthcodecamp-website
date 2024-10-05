import React from 'react';
import { FaRocket, FaProjectDiagram, FaUser } from 'react-icons/fa';
import '../styles/countersection.css';

const CounterSection = () => {
  return (
    <div className="counter-container">
      <div className="counter-item">
        <FaRocket className="counter-icon" />
        <div className="counter-text">
          <h2>+4</h2>
          <p>Events</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="counter-item">
        <FaProjectDiagram className="counter-icon" />
        <div className="counter-text">
          <h2>+2</h2>
          <p>Projects</p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="counter-item">
        <FaUser className="counter-icon" />
        <div className="counter-text">
          <h2>+60</h2>
          <p>Members</p>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;