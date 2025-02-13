import React from "react";
import '../styles/event.css';

const Events = () => {
  return (
    <section className="events-container" id="events">
      <div className="head">OUR EVENTS</div>
      <h2 className="events-title">Join Us for Hackathons, Workshops, and More</h2>
      <p className="events-description">
        Explore our upcoming events designed to inspire, educate, and connect. Whether you're a beginner or an expert, there's something for everyone!
      </p>
      <div className="calendar-embed">
        <iframe
          title="Youth Code Camp Events Calendar"
          src="https://lu.ma/embed/calendar/cal-DsQvAnwAdgufVdE/events"
          className="responsive-iframe"
        ></iframe>
      </div>
      <div className="events-highlights">
        <div className="highlight-card">
          <h3>Hackathons</h3>
          <p>Collaborate, innovate, and compete in our exciting hackathons.</p>
        </div>
        <div className="highlight-card">
          <h3>Workshops</h3>
          <p>Learn new skills and technologies from industry experts.</p>
        </div>
        <div className="highlight-card">
          <h3>Networking</h3>
          <p>Connect with like-minded individuals and industry professionals.</p>
        </div>
      </div>
    </section>
  );
};

export default Events;
