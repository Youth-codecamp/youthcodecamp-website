import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/teamsection.css';
import image1 from '../assets/team/chaste.jpg';
import image2 from '../assets/team/akuzwe.jpg';
import image3 from '../assets/team/marius.jpg';

const teamMembers = [
  {
    name: 'Shyaka Chaste',
    role: 'Founder & Event Organizer',
    linkedin: 'https://www.linkedin.com/in/shyakachaste/',
    img: image1,
  },
  {
    name: 'Akuzwe Gisele',
    role: 'Vice President',
    linkedin: 'https://www.linkedin.com/in/gisele-akuzwe-migisha-40426a256/',
    img: image2,
  },
  {
    name: 'marius kevin',
    role: 'Project Manager',
    linkedin: 'https://www.linkedin.com/in/mariuskevinikuzwe/',
    img: image3,
  },

];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="team-heading">Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.img} alt={member.name} className="team-img" />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
