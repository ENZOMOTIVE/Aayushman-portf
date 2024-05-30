import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './projects.css';

const projects = [
  { id: 1, title: 'Project One', description: 'Description for project one.' },
  { id: 2, title: 'Project Two', description: 'Description for project two.' },
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
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
