import React from "react";
import "./Projects.css";


const projects = [
    {
        title: "Shortest Path Finder",
        description:
            "A web app using Dijkstra's algorithm to find the shortest path between stations, integrated with maps and transport modes.",
        tech: "React, Symfony, MySQL, Leaflet.js",
        //image: project1,
        link: "#",
    },
    {
        title: "Competitive Programming Platform",
        description:
            "A platform for hosting competitions with a custom judge system and real-time leaderboard.",
        tech: "React, Node.js, MySQL",
        //image: project2,
        link: "#",
    },
    {
        title: "Linux Workshop Game",
        description:
            "A small game developed for workshops teaching Linux distributions and open source culture.",
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
