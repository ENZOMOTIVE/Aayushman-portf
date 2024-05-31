import React from 'react';
import './education.css';
import nistLogo from './nist-logo.jpg';
import khalikoteLogo from './khalikote-logo.jpg';
import svcsLogo from './svcs-logo.jpg';

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>

      <div className="education-container">
        <div className="education-item right">
          <div className="logo-container">
            <img src={nistLogo} alt="College Logo" className="college-logo" />
          </div>
          <div className="education-details">
            <h3>Bachelors in Computer Science Engineering</h3>
            <p>NIST University, Berhampur Odisha, India (2021-2021) </p>
          </div>
        </div>

        <div className="education-item left">
          <div className="logo-container">
            <img src={khalikoteLogo} alt="College Logo" className="college-logo" />
          </div>
          <div className="education-details">
            <h3>Higher Secondary Education</h3>
            <p>Khalikote Higher Secondary School, Berhampur, Odisha, India (2019 - 2021)</p>
          </div>
        </div>

        <div className="education-item right">
          <div className="logo-container">
            <img src={svcsLogo} alt="College Logo" className="college-logo" />
          </div>
          <div className="education-details">
            <h3>Primary Education</h3>
            <p>St. Vincent's Convent School Berhampur, Odisha, India (2019)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
