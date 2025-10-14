import React from "react";
import "./Activities.css";
import photo from './quality.jpeg'; // your rectangular photo

const Activities = () => {
    return (
        <section className="activities" id="activities">
            <h2 className="activities-title">💼 Activities & Roles</h2>

            <div className="activities-container">
                <div className="activities-photo">
                    <img src={photo} alt="Your portrait" className="profile-img" />
                </div>

                <div className="activities-content">
                    <div className="activity-card">
                        <h3>Chairwoman – ACM ENISo</h3>
                        <p>
                            Leading the ACM ENISo chapter to promote competitive programming,
                            open-source culture, and collaboration among engineering students.
                            Organized multiple internal and external competitions, workshops,
                            and events to strengthen students’ coding and teamwork skills.
                        </p>
                    </div>

                    <div className="activity-card">
                        <h3>Quality Manager – ENISo Club</h3>
                        <p>
                            Oversaw quality standards for internal activities, ensuring each
                            project met academic and technical expectations. Helped improve
                            project organization and member performance through effective
                            feedback and evaluation methods.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
