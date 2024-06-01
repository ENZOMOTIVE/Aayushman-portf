import React from 'react';
import './contact.css';
import linkedinIcon from './linkdln-logo.png';
import githubIcon from './assets/github-logo.jpeg';
import emailIcon from './assets/gmail.png';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      
      <div className="contact-links">
        <a href="mailto:aayushmanbhabapadhy@gmail.com">
          <img src={emailIcon} alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/aayushman-bhaba-padhy/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/ENZOMOTIVE" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
