import React from 'react';
import About from '../components/AboutUs';
import '../styles/aboutus.css';
import TeamSection from './TeamSection';

const AboutUs = () => {
  return (
    <div>
      <About />

      <div className="additional-content">
        <p className="intro-text">
          Youth Code Camp, founded by Shyaka Chaste, is here to help young people learn programming in an engaging and fun way. 
          We organize exciting events and activities where they can explore coding, collaborate, and build amazing projects.
        </p>

        <p className="section-title">Our Focus Areas</p>

        <div className="focus-cards">
          <div className="focus-card">
            <h3 className="focus-title">Hackathons</h3>
            <p className="focus-description">
              Inspiring events like HackNoel, where students solve real-world problems in healthcare, education, and community services, and Hack With Me, designed to promote creativity and teamwork.
            </p>
          </div>
          <div className="focus-card">
            <h3 className="focus-title">Workshops</h3>
            <p className="focus-description">
              Hands-on sessions that teach web development, mobile app creation, and other valuable coding skills for future success.
            </p>
          </div>
          <div className="focus-card">
            <h3 className="focus-title">Project Support</h3>
            <p className="focus-description">
              Offering mentorship and resources to help turn ideas from events into impactful projects.
            </p>
          </div>
        </div>
      </div>

      <TeamSection />
    </div>
  );
};

export default AboutUs;
