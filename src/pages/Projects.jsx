import React from 'react';
import pythonLogo from '../assets/python.png';
import htmlCssJsLogo from '../assets/html.png';
import javaLogo from '../assets/java.png';
import mernLogo from '../assets/mern.png';
import './Pages.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="project">
        <img src={pythonLogo} alt="Python" className="logo" />
        <h2>Progression Outcome Predictor (Console)</h2>
        <p>Designed and implemented a Python application to accurately predict students' academic progression outcomes. - 2022</p>
      </div>

      <div className="project">
        <img src={htmlCssJsLogo} alt="HTML/CSS/JavaScript" className="logo" />
        <h2>Exploring the Mysteries of the Universe (Group)</h2>
        <p>A website including a quiz, feedback form, shopping cart, and sitemap - 2023</p>
      </div>

      <div className="project">
        <img src={javaLogo} alt="Java" className="logo" />
        <h2>Theater Program</h2>
        <p>A program to manage the ticketing process of theater using CRUD operations. - 2023</p>
      </div>

      <div className="project">
        <img src={javaLogo} alt="Java" className="logo" />
        <h2>Westminster Shopping System</h2>
        <p>A shopping system developed using Java, Swing, and OOP concepts - 2023-2024</p>
      </div>

      <div className="project">
        <img src={mernLogo} alt="MERN" className="logo" />
        <h2>Personal Portfolio Website</h2>
        <p>My personal portfolio website created with the MERN stack. - 2023-2024</p>
      </div>
    </div>
  );
};

export default Projects;
