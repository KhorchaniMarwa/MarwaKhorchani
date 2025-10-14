import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">Marwa<span className="highlight">.</span></div>

                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#certifications">Certificaions</a></li>
                    <li><a href="#activities">Activities</a></li>
                </ul>

                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
