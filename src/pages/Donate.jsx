import React, { useEffect } from 'react';
import '../styles/donate.css';

const Donate = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://hcb.hackclub.com/donations/start/youth-code-camp";
    }, 3000);
  }, []);

  return (
    <div className="donate-page">
      <div className="loading-message">
        <div className="spinner"></div>
        <p>Redirecting you to the donation page...</p>
        <p>If not redirected, <a href="https://hcb.hackclub.com/donations/start/youth-code-camp">click here</a>.</p>
      </div>
    </div>
  );
};

export default Donate;
