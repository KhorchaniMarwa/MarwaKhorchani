import React from "react";
import "./Projects.css";
//import astroImage from "./astro.jpg"; // place your project image in src folder

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-container">

                <div className="project-card">

                    <div className="project-content">
                        <h3>AstroPredict</h3>
                        <p>
                            A web application that predicts the stability of asteroid orbits and estimates
                            their future 3D positions using orbital elements. It combines a <b>PyTorch</b>
                            machine learning model with a <b>FastAPI</b> backend and a <b>React</b> frontend
                            to deliver real-time predictions.
                        </p>
                        <ul className="tech-list">
                            <li>React</li>
                            <li>FastAPI</li>
                            <li>PyTorch</li>
                            <li>Rebound</li>
                        </ul>
                        <a
                            href="https://github.com/KhorchaniMarwa/AstroPredict"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
