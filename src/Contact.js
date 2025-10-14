import React, { useState } from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // only icons

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:youremail@example.com?subject=Message from ${formData.name}&body=${formData.message} (${formData.email})`;
        window.location.href = mailtoLink;
    };

    return (
        <section className="contact" id="contact">
            <h2 className="contact-title">📬 Contact Me</h2>

            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>

                <div className="contact-info">
                    <h3>Other Contacts</h3>
                    <p>📧 Email: youremail@example.com</p>
                    <p>📞 Phone: +123456789</p>
                    <div className="social-icons">
                        <a href="https://github.com/KhorchaniMarwa" target="_blank" rel="noreferrer">
                            <FaGithub className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/marwakhorchani/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
