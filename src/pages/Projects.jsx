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
        <img src={mernLogo} alt="MERN" className="logo" />
        <h2>AI Quiz Generator - (RemEz)</h2>
        <p>RemEz is a learning platform for students in theoretical subjects, filling research gaps using NLP. Built with MERN stack, Tailwind, and Flask. Group Project. - 2024</p>
        <a href="https://github.com/aaqilruzzan/RemEz" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

      <div className="project">
        <img src={javaLogo} alt="Java" className="logo" />
        <h2>Westminster Shopping System</h2>
        <p>A shopping system developed using Java, Swing, and OOP concepts - 2023-2024</p>
        <a href="https://github.com/Shimar-Ahamed/Westminster-Shopping-System" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

      <div className="project">
        <img src={javaLogo} alt="Java" className="logo" />
        <h2>Theater Program</h2>
        <p>A program to manage the ticketing process of theater using CRUD operations. - 2023</p>
        <a href="https://github.com/Shimar-Ahamed/Theater-Management-System" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

      <div className="project">
        <img src={pythonLogo} alt="Python" className="logo" />
        <h2>Progression Outcome Predictor (Console)</h2>
        <p>Designed and implemented a Python application to accurately predict students' academic progression outcomes. - 2022</p>
        <a href="https://github.com/Shimar-Ahamed/Progression-Outcome-Predictor-Console-" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

      <div className="project">
        <img src={htmlCssJsLogo} alt="HTML/CSS/JavaScript" className="logo" />
        <h2>Exploring the Mysteries of the Universe (Group)</h2>
        <p>A website including a quiz, feedback form, shopping cart, and sitemap - 2023</p>
        
      </div>
      
    </div>
  );
};

export default Projects;
