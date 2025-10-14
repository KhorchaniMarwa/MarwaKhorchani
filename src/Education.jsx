import React from "react";
import "./Education.css";

const Education = () => {
    return (
        <section className="education" id="education">
            <h2 className="education-title">🎓 My Education</h2>

            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>National Engineering School of Sousse (ENISo)</h3>
                        <p className="degree">Engineering Degree in Applied Computer Science</p>
                        <span className="date">2023 – Present</span>
                        <p>
                            Focused on software engineering, cloud computing, and artificial intelligence.
                            Active member and president of the ACM ENISo club, organizing programming events and workshops.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <h3>Preparatory Institute for Engineering Studies of Nabeul (IPEIN)</h3>
                        <p className="degree">Preparatory Classes for Engineering Studies</p>
                        <span className="date">2021 – 2023</span>
                        <p>
                            Intensive coursework in mathematics, physics, and chimstry,
                            building a strong foundation for engineering studies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
