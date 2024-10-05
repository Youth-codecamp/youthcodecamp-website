import React from 'react';
import { RiBankLine } from 'react-icons/ri';
import { MdMobileFriendly } from 'react-icons/md';
import '../styles/donatepage.css';
import donationImage from '../assets/donate.jpg';

const DonatePage = () => {
  return (
    <div>
      <div className="donate-page" id="donate">
        <div className="donate_container">
          <img src={donationImage} alt="Donation" className="donation-image" />
          <div className="donate-content">
            <h1 className="donate-title">Support Our Youth Code Camp</h1>
            <p className="donate-description">
            Your donation to Youth Code Camp helps young people learn coding and join fun events like hackathons and workshops. We believe coding is an important skill for their future. With your support, we can teach coding to more youth and give them the chance to take part in exciting coding challenges. These hackathons and workshops help them learn to code, solve problems, and work as a team. By donating, you help us create a space where youth can grow their coding skills, take part in fun coding events, and build a bright future!
            </p>
            
            <div className="donation-options">
              <a href="https://hcb.hackclub.com/donations/start/youth-code-camp-hackathon" className="donate-button bank" target="_blank" rel="noopener noreferrer">
                <RiBankLine className="icon" />
                Donate via Hack Club Bank
              </a>
              <a href="tel:*182*1*1*250789651172%23" className="donate-button momo" target="_blank" rel="noopener noreferrer">
                <MdMobileFriendly className="icon" />
                Donate via MOMO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
