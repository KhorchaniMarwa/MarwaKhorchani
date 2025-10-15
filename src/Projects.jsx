import React from "react";
import "./Projects.css";


const projects = [
    {
        title: "AstroPredict",
        description: "Predicts asteroid orbit stability and future positions using a PyTorch ML model, FastAPI backend, and React frontend. Outputs stability probability, classification, and predicted coordinates.",
        tech: "Python, React, FastAPI, PyTorch",
        // image: astroPredictImage, // optional
        link: "https://github.com/KhorchaniMarwa/AstroPredict"
    },
    {
        title: "Few-Shot Classification of Thermal Images Using Prototypical Networks",
        description:
            "A semester project applying Few-Shot Learning with Prototypical Networks to classify thermal images of induction motors, handling limited data scenarios.",
        tech: "PyTorch, NumPy, Matplotlib, Scikit-learn",
        //image: project2,
        link: "#",
    },
    {
        title: "Build My Own Shell",
        description:
            "Inspired by the 'Do It Yourself' principle, this project explores low-level programming in C to deepen my understanding of memory management and operating system interaction.",
        tech: "C++, SDL, Linux",
        image: null,
        link: "#",
    },
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">🚀 My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {project.image && (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-img"
                            />
                        )}
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p className="tech-used">Tech: {project.tech}</p>
                        {project.link && (
                            <a href={project.link} className="project-link">
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
