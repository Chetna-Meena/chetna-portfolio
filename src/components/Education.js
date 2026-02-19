import React from "react";
import "./Timeline.css";

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>

      <div className="timeline">

        <div className="timeline-item">
          <h3>B.Tech – Artificial Intelligence & Data Science</h3>
          <span>MRITIC College, Alwar • 2022 – 2026</span>
        </div>

        <div className="timeline-item">
          <h3>Senior Secondary (Class XII)</h3>
          <span>Adinath Public School • 2022</span>
        </div>

        <div className="timeline-item">
          <h3>Secondary (Class X)</h3>
          <span>Adinath Public School • 2020</span>
        </div>

      </div>
    </section>
  );
}

export default Education;
