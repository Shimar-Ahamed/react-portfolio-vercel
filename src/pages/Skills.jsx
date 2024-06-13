import React from 'react';
import pythonLogo from '../assets/python.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/java-script.png'; 
import reactLogo from '../assets/React.png'; 
import javaLogo from '../assets/java.png';
import sqlLogo from '../assets/sql-server.png'; 
import expressLogo from '../assets/express-js.png';
import nodeLogo from '../assets/node-js.jpg';
import mongodbLogo from '../assets/mongodb.png';
import phpLogo from '../assets/php.png';

import './Pages.css';

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        <div className="skill-item">
          <img src={pythonLogo} alt="Python" />
          <h3>Python</h3>
        </div>
        <div className="skill-item">
          <img src={htmlLogo} alt="HTML" />
          <h3>HTML</h3>
        </div>
        <div className="skill-item">
          <img src={cssLogo} alt="CSS" />
          <h3>CSS</h3>
        </div>
        <div className="skill-item">
          <img src={jsLogo} alt="JavaScript" />
          <h3>JavaScript</h3>
        </div>
        <div className="skill-item">
          <img src={reactLogo} alt="React" />
          <h3>React</h3>
        </div>
        <div className="skill-item">
          <img src={javaLogo} alt="Java" />
          <h3>Java</h3>
        </div>
        <div className="skill-item">
          <img src={sqlLogo} alt="SQL" />
          <h3>SQL</h3>
        </div>
        <div className="skill-item">
          <img src={expressLogo} alt="Express" />
          <h3>Express</h3>
        </div>
        <div className="skill-item">
          <img src={nodeLogo} alt="Node.js" />
          <h3>Node.js</h3>
        </div>
        <div className="skill-item">
          <img src={mongodbLogo} alt="Mongodb" />
          <h3>Mongodb</h3>
        </div>
        <div className="skill-item">
          <img src={phpLogo} alt="PHP" />
          <h3>PHP</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
