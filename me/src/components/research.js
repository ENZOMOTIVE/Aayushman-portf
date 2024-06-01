import React from 'react';
import './research.css';

const researchWorks = [
  { id: 1, title: 'Smart HealthCare Systems: Integration of Blockchain and IoT', description: 'In process' },
  
  // Add more research works as needed
];

function Research() {
  return (
    <div className="research">
      <h2>Research Work</h2>
      <div className="research-buttons">
        {researchWorks.map((work) => (
          <button key={work.id} className="research-button">
            <h3>{work.title}</h3>
            <p className='status'>{work.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Research;
