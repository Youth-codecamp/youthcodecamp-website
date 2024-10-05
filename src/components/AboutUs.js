import React from 'react';
import '../styles/aboutus.css';

const AboutUs = () => {
    return (
        <div className="about-us-container" id="about">
            <div className="image-container">
                <img src={require('../assets/about.jpg')} alt="Youth Code Camp" />
            </div>
            <div className="content-container">
                <h3>ABOUT US</h3>
                <h1>Our Story: Helping the Next<br/> Generation of Coders</h1>
                <p>
                    Youth Code Camp is a community where young programmers come together to learn, create, 
                    and share ideas about coding and technology. Our mission is to empower youth through 
                    technology, providing them a space to work together, learn, innovate, and show their projects.
                </p>
                <div className="features">
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>Building Practical Skills</span>
                    </div>
                    <div className="feature-item">
                        <i className="fas fa-check-circle"></i>
                        <span>We love what we do & who we do it for</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;