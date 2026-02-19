import React from "react";
import "./Timeline.css";

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="timeline">

        <div className="timeline-item">
          <h3>Data Analyst Intern</h3>
          <span>Codingsthan Technologies • Jaipur</span>
          <p>
            Worked on data cleaning, exploratory analysis,
            dashboard creation using Python, SQL, and Power BI.
          </p>
        </div>

        <div className="timeline-item">
          <h3>Data Science & AI Intern</h3>
          <span>Upflairs Pvt. Ltd. • Online</span>
          <p>July 2025 – 6 Weeks</p>
          <ul>
            <li>Worked on Machine Learning models using Python.</li>
            <li>Performed data preprocessing and visualization.</li>
            <li>Built predictive models using supervised learning techniques.</li>
            <li>Gained hands-on experience in AI workflows.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Experience;
