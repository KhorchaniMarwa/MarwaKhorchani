import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import Home from "./Home";
import reportWebVitals from './reportWebVitals';
import Projects from "./Projects";
import profilePic from "./marwa.jpeg";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar />
        <Home />
        <Projects />





    </React.StrictMode>
);

reportWebVitals();
