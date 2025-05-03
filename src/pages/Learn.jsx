import React, { useEffect } from 'react';
import '../styles/learn.css';
import codecraftersLogo from '../assets/trusted/codecrafters.png';

const Learn = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="learn-container">
      <div className="learn-content">
        <img 
          src={codecraftersLogo} 
          alt="CodeCrafters Logo" 
          className="codecrafters-logo"
        />
        <h1 className="learn-heading">Learn Programming with CodeCrafters</h1>

        <p className="learn-paragraph">
          Ready to move beyond beginner tutorials? Our partnership with CodeCrafters gives you access to hands-on learning that mirrors real-world software engineering.
        </p>
        <p className="learn-paragraph">
          Build powerful tools like Redis, Git, and Docker from the ground up. Strengthen your understanding by actually creating the systems behind the tech you use every day.
        </p>
        <p className="learn-paragraph">
          Whether you're just getting started or aiming to sharpen your skills, CodeCrafters offers a guided path to becoming a better developer through project-based learning.
        </p>
        <p className="learn-paragraph">
          As part of our program, you’ll get 40% off a full-year plan. Try it out for free and upgrade when you’re ready to dive deeper.
        </p>

        <h2 className="apply-heading">Apply to Learn with Us</h2>
        <div 
          style={{ width: "100%", height: "500px" }}
          data-fillout-id="fyLoDPiXxmus"
          data-fillout-embed-type="standard"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize>
        </div>
      </div>
    </div>
  );
};

export default Learn;
