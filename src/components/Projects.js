import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Sign Language Detection System",
    description:
      "Real-time hand gesture recognition system using CNN and OpenCV for converting gestures into text.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "#"
  },
  {
    title: "Data Analysis & Visualization",
    description:
      "Performed data cleaning, exploratory analysis, and dashboard creation using Python, SQL, and Power BI.",
    tech: ["Python", "SQL", "Power BI"],
    github: "#"
  },
  {
    title: "Python Automation Scripts",
    description:
      "Developed automation tools for file handling and workflow optimization.",
    tech: ["Python", "Automation"],
    github: "#"
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
