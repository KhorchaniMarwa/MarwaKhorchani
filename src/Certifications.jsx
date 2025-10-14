import React from "react";
import "./Certifications.css";

const Certifications = () => {
    return (
        <section className="certifications" id="certifications">
            <h2 className="cert-title">🏅 Certifications</h2>

            <div className="cert-container">
                <div className="cert-card">
                    <h3>NVIDIA Fundamentals of Deep Learning</h3>
                    <p>Issued by NVIDIA Deep Learning Institute</p>
                    <span className="cert-date">2024</span>
                </div>

                <div className="cert-card">
                    <h3>Building Transformer-Based Natural Language Processing Applications</h3>
                    <p>Issued by Nvidia</p>
                    <span className="cert-date">2024</span>
                </div>

                <div className="cert-card">
                    <h3>Accelerating Data Engineering Pipelines</h3>
                    <p>Issued by Nvidia</p>
                    <span className="cert-date">2024</span>
                </div>


            </div>
        </section>
    );
};

export default Certifications;
