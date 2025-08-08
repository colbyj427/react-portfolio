import React from 'react';
import profilePicture from "../../../static/assets/images/bio/headshot.jpeg";

export default function() {
    return (
    <div className="content-page-wrapper">
        <div className="left-column">
            <img 
                src={profilePicture} 
                alt="Profile" 
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block"
                }} 
            />
        </div>

        <div className="right-column">
            I am a detail-oriented computer science student with a passion for building 
            impactful technology in mobile apps, software engineering, and emerging fields 
            like machine learning, AI, and cybersecurity. Skilled in Python, Java, Javascript, C, Swift, and 
            database systems, I take an iterative, design-focused approach to problem-solving, 
            ensuring solutions are both functional and user-friendly.
            <br /><br />
            With a proven academic track record—including a two-year scholarship, graduating 
            in the top 30 of a class of 850, and scoring a 34 on the ACT—I bring the same dedication 
            and precision to my projects as I do to my studies. My long-term goals include contributing 
            to the defense industry, developing innovative SaaS solutions, and advancing machine 
            learning engineering.
        </div>
        <div className="right-column">

        </div>
    </div>
    );
}