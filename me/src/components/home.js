import React, { useEffect, useRef } from 'react';
import './home.css';
import { Link } from 'react-scroll';
import AnimatedLogos from './animated';

const image = require('./profile-pic.jpg');

function Home() {
  const educationRef = useRef(null); // Create ref for the education section

  useEffect(() => {
    const handleScroll = () => {
      const nameElement = document.querySelector('.profile-details h1');
      nameElement.classList.remove('typing');
      // Trigger a reflow
      void nameElement.offsetWidth;
      nameElement.classList.add('typing');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <div className="profile-container">
        <img className="profile-pic" src={image} alt="Profile" />
        <div className="profile-details">
          <h1 className="typing">Aayushman Bhaba Padhy</h1>
          <div className="about-box" ref={educationRef}>
            <h2>About me</h2>
            <p>I am a B.TECH CSE final year Undergrad with growing Excitement in Blockchain and Cryptography</p>
            <p>Full Stack Blockchain Developer</p>
          </div>
        </div>
      </div>
      <AnimatedLogos />
      <Link to="education" smooth={true} duration={500}>
        <div className="scroll-down">
          Scroll down to see more
        </div>
      </Link>
    </div>
  );
}

export default Home;
