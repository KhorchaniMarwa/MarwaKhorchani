import React from "react";
import "./About.css";
import marwaPhoto from "./marwa.jpeg";

const About = () => {
    return (
        <section className="about-me">
            <div className="about-me-content">
                <img src={marwaPhoto} alt="My Portrait" className="about-me-photo" />

                <div className="about-me-text">
                    <h2>Hello! I'm Marwa</h2>
                    <p>
                        I'm a passionate software engineer, full-stack developer, and problem-solver.
                        I love building interactive web applications and exploring new technologies.
                        When I'm not coding, you can find me reading, gaming, or learning new skills.
                    </p>
                    <button className="contact-btn">Contact Me</button>
                </div>
            </div>
        </section>
    );
};

export default About;
