import React from 'react';
import About from '../components/AboutUs';
import '../styles/aboutus.css';
import TeamSection from './TeamSection';

const AboutUs = () => {
  return (
    <div>
      <About />

      <div className="additional-content">

        <p className="section-title">Our Focus Areas</p>

        <div className="focus-cards">
          <div className="focus-card">
            <h3 className="focus-title">Hackathons</h3>
            <p className="focus-description">
            At Youth Code Camp, we organize hackathons that bring students together to build projects and solve real-world problems. 
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
