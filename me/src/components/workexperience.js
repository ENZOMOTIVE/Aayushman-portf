import React from 'react';
import './workexperience.css';
import bariflo from './bariflo-logo.jpg';
import pmn from './pmn-logo.jpg';
import linkedinLogo from './linkdln-logo.png'; // Add your LinkedIn logo here

function WorkExperience() {
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>

      <div className="work-experience-container">
        {/* Bariflo */}
        <div className="work-experience-item right">
          <div className="logo-container">
            <img src={bariflo} alt="Company Logo" className="company-logo"  />
          </div>
          <div className="work-experience-details">
            <h3>Blockchain Developer Intern</h3>
            <p>Bariflo Cybernetics, Bhubaneswar, India (15 May - 15 July 2024)</p>
          </div>
          <a href="https://www.linkedin.com/company/bariflo-labs" target="_blank" rel="noopener noreferrer" className="linkedin-logo-container">
            <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin-logo" />
          </a>
        </div>

        {/* PMN */}
        <div className="work-experience-item left">
          <div className="logo-container">
            <img src={pmn} alt="Company Logo" className="company-logo" />
          </div>
          <div className="work-experience-details">
            <h3>Web Developer Intern</h3>
            <p>Work from Home (Dec - March 2024)</p>
          </div>
          <a href="https://www.linkedin.com/company/pmnpatralok" target="_blank" rel="noopener noreferrer" className="linkedin-logo-container">
            <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin-logo" />
          </a>
        </div>
    

      </div>
    </div>
  );
}

export default WorkExperience;
