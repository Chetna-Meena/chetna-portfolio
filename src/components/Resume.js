import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume">
      <h2>Resume & Certificates</h2>

      <div className="resume-container">

        <a 
          href="/Chetna Meena.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume
        </a>

        <a 
          href="https://drive.google.com/file/d/1UAG1-iEf_zEHqUyCc7spinwkZQocSHY6/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
          className="resume-btn outline"
        >
          Internship Certificates
        </a>
<a 
          href="https://drive.google.com/file/d/1TxNaQxSdCUGv5TjbHwvqrVwQNKxquoYW/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
          className="resume-btn outline"
        >
          Summer Training Certificates
        </a>
      </div>
    </section>
  );
}

export default Resume;
