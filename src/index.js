import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import Home from "./Home";
import reportWebVitals from './reportWebVitals';
import Projects from "./Projects";
import profilePic from "./marwa.jpeg";
import About from "./About";
import Experience from "./Education";
import Education from "./Education";
import Certifications from "./Certifications";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar />
        <Home />
        <About />
        <Education />
        <Certifications />






    </React.StrictMode>
);

reportWebVitals();
