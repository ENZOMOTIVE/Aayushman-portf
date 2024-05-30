import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './research.css';

const researchWorks = [
  { id: 1, title: 'Research Work One', description: 'Description for research work one.' },
  { id: 2, title: 'Research Work Two', description: 'Description for research work two.' },
  // Add more research works as needed
];

function Research() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="research">
      <h2>Research Work</h2>
      <Slider {...settings}>
        {researchWorks.map((work) => (
          <div key={work.id} className="research-item">
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Research;
