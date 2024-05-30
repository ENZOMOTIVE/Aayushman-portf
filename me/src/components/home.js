import React from 'react';
import './home.css';

const image = require('./profile-pic.jpg');

function Home() {
  return (
    <div className="home">
      <div className="profile-container">
        <img className="profile-pic" src={image} alt="Profile" />
        <div className="profile-details">
          <h1>Aayushman Bhaba Padhy</h1>
          <p>Scroll down to explore more about me.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
