import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">Python</div>
        <div className="skill-card">Machine Learning</div>
        <div className="skill-card">SQL</div>
        <div className="skill-card">OpenCV</div>
        <div className="skill-card">Power BI</div>
        <div className="skill-card">Git & GitHub</div>
      </div>
    </section>
  );
}

export default Skills;
