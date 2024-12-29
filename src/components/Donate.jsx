import React from 'react';
import '../styles/donate.css';

const Donate = () => {
  return (
    <div className="donate">
      <h1>Support Us</h1>
      <p>Your donations help us provide resources and opportunities for young coders.</p>
      <a
        href="https://hcb.hackclub.com/donations/start/youth-code-camp"
        target="_blank"
        rel="noreferrer"
        className="donate-button"
      >
        Donate Now
      </a>
    </div>
  );
};

export default Donate;
