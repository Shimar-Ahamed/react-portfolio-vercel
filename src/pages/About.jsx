import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Pages.css';

const About = () => {
    return (
        <div className="about">
            <h2>Hello, I'm Shimar Ahamed</h2>
            <p className="about-text">
                Having completed my second year at the Informatics Institute of Technology (IIT), I am pursuing a Software Engineering Honours Degree. My academic journey has been enriched by a variety of projects, each contributing significantly to my professional development.
            </p>
            
        

            <h3>Professional Experience</h3>
            <p className="about-text">
                Alongside my academic journey, I have undertaken several projects that have provided me with practical experience in software development. I have worked on web development projects using technologies like Python, JavaScript, and the MERN stack, which have honed my skills in both front-end and back-end development.
            </p>
            
            <div className="social-links">
                <a href="https://github.com/Shimar-Ahamed" className="social-icon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/shimar-ahamed-25454724a/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/shimar__ahamed/" className="social-icon" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            
            <p className="email-text">
                Email me at: <a href="mailto:shimar10106@gmail.com">shimar10106@gmail.com</a>
            </p>
        </div>
    );
}

export default About;
