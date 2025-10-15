import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">

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

            <p className="copyright">
                © {new Date().getFullYear()} Marwa Khorchani. All rights reserved.
            </p>
            <p className="funny-footer">Crafted with ❤️ debugged with tears 😅</p>

            <button className="back-to-top" onClick={scrollToTop}>
                Back to Top ↑
            </button>
        </footer>
    );
};

export default Footer;
