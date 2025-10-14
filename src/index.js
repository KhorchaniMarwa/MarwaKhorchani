import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import Home from "./Home";
import reportWebVitals from './reportWebVitals';
import Projects from "./Projects";
import profilePic from "./marwa.jpeg";
import About from "./About";
import Education from "./Education";
import Certifications from "./Certifications";
import Activities   from "./Activities";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Education />
        <Certifications />
        <Activities />






    </React.StrictMode>
);

reportWebVitals();
