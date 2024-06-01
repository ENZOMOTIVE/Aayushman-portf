import React from 'react';
import './extracurricular.css';

import activity1Image1 from './assets/pic-1.png';


// Import additional images as needed

function ExtraCurricular() {
  return (
    <div className="extracurricular">
      <h2>Extra-Curricular Activities</h2>
      <div className="activity">
        
        <div className="image-container">
        <img src={activity1Image1} alt="Activity 1" className="activity-image" />

      
          
          
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
}

export default ExtraCurricular;
