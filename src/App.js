import React from "react";
import "./About.css";
import marwaPhoto from "../public/marwa.jpeg"; // replace with your image path

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <img src={marwaPhoto} alt="Marwa Khorchani" className="about-photo" />

                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        I'm <span className="highlight">Marwa Khorchani</span>, a passionate
                        software engineer who enjoys building intelligent and creative digital
                        solutions. I specialize in <strong>full-stack development</strong>,
                        <strong> cloud computing</strong>, and <strong>AI</strong>.
                    </p>
                    <p>
                        I love exploring new technologies, solving complex problems, and helping
                        others grow in the tech community through workshops and competitions.
                    </p>
                    <p>
                        My goal is to create meaningful projects that blend creativity,
                        efficiency, and innovation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
