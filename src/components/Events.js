import React from "react";
import '../styles/event.css';
import hacknoel from '../assets/hacknoel.png';
const Events = () => {
  return (
    <section className="events-container" id="events">
      <div className="head">OUR EVENTS</div>
      <h2 className="events-title">Join Us for Hackathons, Workshops, and More</h2>
      <div className="events-cards">

        {/* Card 1 */}
        <div className="event-card-container">
          <div className="event-card">
            <img src={hacknoel} alt="ZacodeCraft" className="event-image" />
            <div className="event-status">Open</div>
          </div>
          <div className="event-words">
            <h3>Hack Noel</h3>
            <p>HackNoel is an end-of-year hackathon hosted by Youth Code Camp in the name of Lycee de Kigali.It brings together students from 10 top secondary schools in Rwanda.</p>
            <a href="https://www.hacknoel.live/" className="read-more" target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Events;