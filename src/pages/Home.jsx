import React from 'react';
import profilePhoto from '../assets/profile.jpg';
import { Link } from 'react-scroll';
import './Pages.css';

function Home() {
    return (
        <div className="home">
            <img src={profilePhoto} alt="Shimar Ahamed" className="profile-photo" />
            <div className="content">
                <h1>SHIMAR AHAMED</h1>
                <h2>Software Engineering Undergraduate</h2>
                <p>
                    I specialize in building modern, responsive web applications with a focus on performance and user experience. With expertise in both front-end and back-end technologies, I strive to create seamless and efficient digital solutions.
                </p>
                <div className="buttons">
                    <Link to="contact" smooth={true} duration={500}>
                        <button>Contact Me</button>
                    </Link>
                    <a href="/Shimar_Resume IIT.pdf" download>
                        <button className="download-cv">Download CV</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
