import React from "react";
import "./Home.css";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <h1 className="hero-title">Hello, I'm Marwa Khorchani</h1>
                <p className="hero-quote">
                    I build intelligent and creative digital solutions.
                </p>
                <p className="hero-desc">
                    Software Engineer passionate about cloud technologies, AI, and
                    competitive programming. Currently focused on creating smart,
                    efficient, and impactful digital experiences.
                </p>

                {/* Social Icons */}
                <div className="social-icons">
                    <a href="mailto:mrwkhorchani@gmail.com" aria-label="Email">
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/marwakhorchani/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/KhorchaniMarwa"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>

                {/* Buttons */}
            </div>

            {/* Animated Background */}
            <div className="animated-bg">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    );
};

export default Home;
