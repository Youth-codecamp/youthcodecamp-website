import React from 'react';
import '../styles/community.css';

const Community = () => {
  return (
    <div className="community-page" id="community">
      <header>
        <h1>Join Youth Code Camp Community</h1>
        <p>
          Apply to join our growing community at Youth Code Camp! Here, you can connect with other students, get help with coding, share your projects, and stay updated on our latest events. It’s a friendly place where you can learn, collaborate, and make new friends.
        </p>
        <a href="/community" className="join-button">Join Our Community</a>
      </header>
    </div>
  );
};

export default Community;