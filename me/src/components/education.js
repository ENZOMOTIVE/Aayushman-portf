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
          <a href="https://www.nist.edu/" target="_blank" rel="noopener noreferrer" className="logo-link">
            <div className="logo-container">
              <img src={nistLogo} alt="NIST Logo" className="college-logo" />
            </div>
          </a>
          <div className="education-details">
            <h3>Bachelors in Computer Science Engineering</h3>
            <p>NIST University, Berhampur Odisha, India (2021-2021)</p>
          </div>
        </div>

        <div className="education-item left">
          <a href="https://kuu.ac.in/" target="_blank" rel="noopener noreferrer" className="logo-link">
            <div className="logo-container">
              <img src={khalikoteLogo} alt="Khalikote Logo" className="college-logo" />
            </div>
          </a>
          <div className="education-details">
            <h3>Higher Secondary Education</h3>
            <p>Khalikote Higher Secondary School, Berhampur, Odisha, India (2019 - 2021)</p>
          </div>
        </div>

        <div className="education-item right">
          <a href="https://stvcberhampur.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
            <div className="logo-container">
              <img src={svcsLogo} alt="SVCS Logo" className="college-logo" />
            </div>
          </a>
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
