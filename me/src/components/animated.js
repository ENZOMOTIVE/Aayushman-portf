import React, { useEffect } from 'react';
import './animated.css';

// Import logos
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

// Array of logos
const logos = [
  jsLogo,
  reactLogo,
  nodejsLogo,
  pythonLogo,
  solidityLogo,
  etherJsLogo,
  metamaskLogo,
  GanacheLogo,
  TruffleLogo,
  HardhatLogo,
  RemixLogo,
  HtmlLogo,
  CssLogo,
  ExpressLogo,
  IPFS,
  Docker,
  Git,
  C
];

function AnimatedLogos() {
  useEffect(() => {
    const container = document.querySelector('.logos-container');
    const numLogos = logos.length; // Number of logos

    // Create and position logos
    for (let i = 0; i < numLogos; i++) {
      const logo = document.createElement('img');
      logo.src = logos[i];
      logo.classList.add('logo');
      logo.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      logo.style.top = `${Math.random() * 100}vh`; // Random vertical position
      logo.style.animationDuration = `${Math.random() * 5 + 2}s`; // Random animation duration
      container.appendChild(logo);
    }
  }, []);

  return (
    <div className="logos-container">
      {/* Logos will be dynamically added here */}
    </div>
  );
}

export default AnimatedLogos;
