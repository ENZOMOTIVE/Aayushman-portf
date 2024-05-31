import React from 'react';
import './education.css';
import nistLogo from './nist-logo.jpg';
import khalikoteLogo from './khalikote-logo.jpg';
import svcsLogo from './svcs-logo.jpg';
// Import your college logo file here

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>


      {/*NIST*/}
      <div className="education-item">
        <div className="education-details">
          <div className="logo-container">
            <img src={nistLogo} alt="College Logo" className="college-logo" />
          </div>
          <div className="education-text">
            <h3>Bachelors in Computer Science Engineering</h3>
            <p>NIST University, Berhampur Odisha, India (2021-2021) </p>
          </div>
        </div>
      </div>

      {/*Khalikote*/}
      <div className="education-item">
        <div className="education-details">
          <div className="logo-container">
            <img src={khalikoteLogo} alt="College Logo" className="college-logo" />
          </div>
          <div className="education-text">
            <h3>Higher Secondary Education</h3>
            <p>Khalikote Higher Secondary School, Berhampur, Odisha, India (2019 - 2021)</p>
          </div>
        </div>
      </div>

      {/*SVCS*/}
      <div className="education-item">
        <div className="education-details">
          <div className="logo-container">
            <img src={svcsLogo} alt="College Logo" className="college-logo" />
          </div>
          <div className="education-text">
            <h3>Primary Education</h3>
            <p>St. Vincent's Convent School Berhampur, Odisha, India (2019)</p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Education;
