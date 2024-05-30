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
          <h2> About me </h2>
          <p>I am a B.TECH CSE final year Undergrad with growing Excitement in Blockchain and Cryptography </p>
          
          
          <p>Full Stack Blockchain Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
