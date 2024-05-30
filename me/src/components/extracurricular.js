import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './extracurricular.css';

const activities = [
  { id: 1, title: 'Activity One', description: 'Description for activity one.' },
  { id: 2, title: 'Activity Two', description: 'Description for activity two.' },
  // Add more activities as needed
];

function ExtraCurricular() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="extra-curricular">
      <h2>Extra-Curricular Activities</h2>
      <Slider {...settings}>
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ExtraCurricular;
