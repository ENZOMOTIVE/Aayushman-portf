import React from 'react';
import { Link, Element} from 'react-scroll';
import './App.css';
import Home from './components/home';
import Education from './components/education';
import WorkExperience from './components/workexperience'; 
import Skills from './components/skills';
import Projects from './components/projects';
import Research from './components/research';
import ExtraCurricular from './components/extracurricular';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
            <li><Link to="work-experience" smooth={true} duration={500}>Work Experience</Link></li> 
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="research" smooth={true} duration={500}>Research</Link></li>
            <li><Link to="extra-curricular" smooth={true} duration={500}>Extra-Curricular</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      </header>

      <Element name="home"><Home /></Element>
      <Element name="education"><Education /></Element>
      <Element name="work-experience"><WorkExperience /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="research"><Research /></Element>
      <Element name="extra-curricular"><ExtraCurricular /></Element>
      <Element name="contact"><Contact /></Element>
    </div>
  );
}

export default App;
