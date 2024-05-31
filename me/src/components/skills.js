import React from 'react';
import './skills.css';
import jsLogo from './assets/javascript-logo.png';
import reactLogo from './assets/reactJs-logo.png';
import nodejsLogo from './assets/nodeJs-logo.png';
import pythonLogo from './assets/Python-logo.jpg';
import solidityLogo from './assets/solidity-logo.png';
import etherJsLogo from './assets/ether.js-logo.png';
import metamaskLogo from './assets/metamask-logo.png';
import GanacheLogo from './assets/ganache-logo.png';
import TruffleLogo from './assets/truffle-logo.png';
import HardhatLogo from './assets/hardhat-logo.jpg';
import RemixLogo from './assets/remix-logo.png';
import HtmlLogo from './assets/html-logo.png';
import CssLogo from './assets/css-logo.png';
import ExpressLogo from './assets/Express.js-logo.png';
import IPFS from './assets/IPFS-logo.png';
import Docker from './assets/docker-logo.png';
import Git from './assets/git-logo.png';
import C from './assets/c-logo.jpg';
// Import additional logos as needed

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
          <img src={etherJsLogo} alt="Ether.js" className="skill-logo"  />

          </div>
          <div className="skill-item">
            <img src={metamaskLogo} alt="Metamask" className="skill-logo" style={{ width: '100%', height: '90%', objectFit: 'cover' }} />
          </div>

          <div className="skill-item">
            <img src={GanacheLogo} alt="Ganache" className="skill-logo"  />
          </div>

          <div className="skill-item">
            <img src={TruffleLogo} alt="Truffle" className="skill-logo"  />
          </div>

          <div className="skill-item">
            <img src={HardhatLogo} alt="Hardhat" className="skill-logo"  />
          </div>

          <div className="skill-item">
            <img src={RemixLogo} alt="RemixIDE" className="skill-logo"  />
          </div>

          <div className="skill-item">
            <img src={IPFS} alt="IPFS" className="skill-logo"  />
          </div>
          {/* Add more blockchain skill items here */}
        </div>
      </div>

      <div className="skills-section">
        <h3>Web Development</h3>
        <div className="skills-items">
        <div className="skill-item">
            <img src={ HtmlLogo} alt="HTML" className="skill-logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="skill-item">
            <img src={CssLogo} alt="CSS" className="skill-logo" style={{ width: '70%', height: '100%', objectFit: 'cover' }} />
          </div>

          
          <div className="skill-item">
            <img src={reactLogo} alt="React" className="skill-logo" />
          </div>
          <div className="skill-item">
            <img src={jsLogo} alt="JavaScript" className="skill-logo"  style={{ width: '91%', height: '120%', objectFit: 'cover' }}/>
          </div>

          <div className="skill-item">            
            <img src={nodejsLogo} alt="Node.js" className="skill-logo" style={{ width: '91%', height: '92%', objectFit: 'cover' }} />
          </div>

          <div className="skill-item" style={{ width: '114%', height: '80%', objectFit: 'cover' }} >
            <img src={ExpressLogo} alt="Express" className="skill-logo" />
          </div>

          {/* Add more front end skill items here */}
        </div>
      </div>

      <div className="skills-section">
        <h3>Other Technologies</h3>
        <div className="skills-items">
        

          <div className="skill-item">
            <img src={pythonLogo} alt="Python" className="skill-logo" />
          </div>

          <div className="skill-item">
            <img src={Git} alt="Python" className="skill-logo" />
          </div>

          <div className="skill-item">
            <img src={C} alt="C" className="skill-logo" style={{ width: '100%', height: '156%', objectFit: 'cover' }}/>
          </div>

          <div className="skill-item">
            <img src={Docker} alt="Docker" className="skill-logo" />
          </div>


          {/* Add more back end skill items here */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
