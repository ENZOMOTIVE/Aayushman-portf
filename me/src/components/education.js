import React from 'react';
import './education.css';
import Logo from './nist-logo.jpg'; // Import your college logo file here

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-item">
        <div className="education-details">
          <div className="logo-container">
            <img src={Logo} alt="College Logo" className="college-logo" />
          </div>
          <div className="education-text">
            <h3>Bachelors in Computer Science Engineering</h3>
            <p>NIST University, Berhampur Odisha, India (2021-2021) </p>
          </div>
        </div>
      </div>
      <div className="education-item">
        <div className="education-details">
          <div className="logo-container">
            <img src={Logo} alt="College Logo" className="college-logo" />
          </div>
          <div className="education-text">
            <h3>Higher Secondary Education</h3>
            <p>Khalikote Higher Secondary School, Berhampur, Odisha, India (2019 - 2021)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
