import React from "react";
import "./Home.css";

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <h1 className="hero-title">Hello, I'm Marwa Khorchani</h1>
                <p className="hero-quote">I build intelligent and creative digital solutions.</p>
                <p className="hero-desc">
                    Software Engineer passionate about cloud technologies, AI, and competitive programming.
                    Currently focused on creating smart, efficient, and impactful digital experiences.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">Get In Touch</button>
                    <button className="btn-secondary">View My Work</button>
                </div>
            </div>
            <div className="animated-bg">
                <span></span><span></span><span></span><span></span>
            </div>
        </section>
    );
};

export default HeroSection;
