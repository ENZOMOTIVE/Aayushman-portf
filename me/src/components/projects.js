import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './projects.css';

import medicareLogo from './assets/medicare-pic.png'; // Ensure this path is correct
import nistconnectLogo from './assets/nist-connectLogo.png';
const projects = [
  { id: 1, title: 'MediCare 2.O', description: 'This model helps the users store their health records safely on the BNB blockchain, along with the digital copy in an IPFS storage system provided by Pinata.', image: medicareLogo, codeLink: 'https://github.com/ENZOMOTIVE/MediCare-2.O', tryLink: 'https://medi-care-2-o.vercel.app/' },
  { id: 2, title: 'NIST Connect', description: 'A Decentralized Chatting Application ', image: nistconnectLogo, codeLink: 'https://github.com/ENZOMOTIVE/chatting_dapp', tryLink: 'https://nist-connect-three.vercel.app/' },
  // Add more projects as needed
];

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="button-container">
                <a href={project.codeLink} className="project-button" target="_blank" rel="noopener noreferrer">View Code</a>
                <a href={project.tryLink} className="project-button" target="_blank" rel="noopener noreferrer">Try it Out</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
