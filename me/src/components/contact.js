import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>You can reach me via the following platforms:</p>
      <div className="contact-links">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src="linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <img src="github-icon.png" alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
