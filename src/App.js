import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { ContactUs } from './pages/Contact'; // Change the import statement

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './pages/Pages.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <ContactUs /> {/* Use ContactUs component */}
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
