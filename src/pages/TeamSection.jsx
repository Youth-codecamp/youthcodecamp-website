import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import '../styles/teamsection.css';
import image1 from '../assets/team/chaste.jpg';
import image2 from '../assets/team/akuzwe.jpg';
import image3 from '../assets/team/vain.jpg';
import image4 from '../assets/team/caleb.jpg';
import image5 from '../assets/team/tola.jpg';
import image6 from '../assets/team/chris.jpg';
import image7 from '../assets/team/david.jpg';

const teamMembers = [
  {
    name: 'Shyaka Chaste',
    role: 'Founder & Event Organizer',
    linkedin: 'https://www.linkedin.com/in/shyakachaste/',
    img: image1,
  },
  {
    name: 'Akuzwe Gisele',
    role: 'Technical Lead ',
    linkedin: 'https://www.linkedin.com/in/gisele-akuzwe-migisha-40426a256/',
    img: image2,
  },


  {
    name: 'Michel Vainqueur',
    role: 'Frontend developer',
    linkedin: 'https://www.linkedin.com/in/vainqueur-niyonyungu/',
    img: image3,
  },

  {
    name: 'Ishimwe Caleb',
    role: 'Frontend developer',
    linkedin: 'https://www.linkedin.com/in/caleb-ishimwe-ganza-021076261/',
    img: image4,
  },

  {
    name: 'Caleb Tola',
    role: 'Community Manager',
    linkedin: 'https://www.linkedin.com/in/caleb-tola-b75b63328/',
    img: image5,
  },
  {
    name: 'Shema Chris',
    role: 'Finance Manager',
    linkedin: 'https://www.linkedin.com/',
    img: image6,
  },
  {
    name: 'Ndizeye David',
    role: 'Full Stack developer',
    linkedin: 'https://www.linkedin.com/in/david-ndizeye-960844343/',
    img: image7,
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
