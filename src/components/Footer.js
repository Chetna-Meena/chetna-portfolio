import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3 className="footer-name">Chetna Meena</h3>

        <p className="footer-tagline">
          AI Engineer | Data Analyst | Building intelligent systems
        </p>

        <div className="social-links">
          <a
            href="mailto:chetnasulaniya07@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

          <a
            href="https://github.com/Chetna-Meena"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/chetna-sulaniya-5b0732315/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.reddit.com/user/chetnasulaniya01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reddit
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Chetna Meena. Built with React.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
