import React from 'react';
import './skills.css';
import jsLogo from './assets/javascript-logo.png';
import reactLogo from './assets/reactJs-logo.png';
import nodejsLogo from './assets/nodeJs-logo.png';
import pythonLogo from './assets/Python-logo.jpg';
// import mlLogo from './ml-logo.png';
// import dataAnalysisLogo from './data-analysis-logo.png';
// import blockchainLogo from './blockchain-logo.png';
import solidityLogo from './assets/solidity-logo.png';
import etherJsLogo from './assets/ether.js-logo.png';

function Skills() {
  return (
    <div className="skills">
      <h2>Skills</h2>
      
      <div className="skills-section">
        <h3>Blockchain</h3>
        <div className="skills-items">
          <div className="skill-item">
            <img src={solidityLogo} alt="Solidity" className="skill-logo" />
          </div>
          <div className="skill-item">
            <img src={etherJsLogo} alt="Ether.js" className="skill-logo" />
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h3>Front End</h3>
        <div className="skills-items">
          <div className="skill-item">
            <img src={jsLogo} alt="JavaScript" className="skill-logo" />
          </div>
          <div className="skill-item">
            <img src={reactLogo} alt="React" className="skill-logo" />
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h3>Back End</h3>
        <div className="skills-items">
          <div className="skill-item">
            <img src={nodejsLogo} alt="Node.js" className="skill-logo" />
          </div>
          <div className="skill-item">
            <img src={pythonLogo} alt="Python" className="skill-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
