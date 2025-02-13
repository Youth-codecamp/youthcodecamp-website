import React from "react";
import '../styles/event.css';

const Events = () => {
  return (
    <section className="events-container" id="events">
      <div className="head">OUR EVENTS</div>
      <h2 className="events-title">Join Our Fun and Learning Events</h2>
      <p className="events-description">
        We organize fun and exciting events where you can learn, build, and meet new people. Whether you're just starting or already experienced, there’s something for you!
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
          <p>Join our hackathons to work in teams, create awesome projects, and solve real-world problems. It's a great way to learn new skills and challenge yourself while having fun.</p>
        </div>
        <div className="highlight-card">
          <h3>Workshops</h3>
          <p>Attend hands-on workshops where we teach coding, design, and other important tech skills. Our sessions are easy to follow and open to all skill levels.</p>
        </div>
        <div className="highlight-card">
          <h3>Networking</h3>
          <p>Meet and connect with people who love coding just like you. Share ideas, make friends, and find teammates for your next big project.</p>
        </div>
      </div>
    </section>
  );
};

export default Events;
