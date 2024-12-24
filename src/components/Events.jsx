import React from "react";
import '../styles/event.css';

const Events = () => {
  return (
    <section className="events-container" id="events">
      <div className="head">OUR EVENTS</div>
      <h2 className="events-title">Join Us for Hackathons, Workshops, and More</h2>
      <div className="calendar-embed">
        <iframe
          title="HackNoel Event Calendar"
          src="https://lu.ma/embed/calendar/cal-DsQvAnwAdgufVdE/events"
          className="responsive-iframe"
          style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </section>
  );
};

export default Events;
