import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-container">

        <div className="hero-text">
          <h1>Chetna Meena</h1>

          <p className="subtitle">
            B.Tech – Artificial Intelligence & Data Science
          </p>

          <p className="tagline">
            Python Developer • AI • Data • Automation
          </p>
        </div>

        <div className="hero-image">
          <img src="/Profile.jpg" alt="Chetna Meena" />
        </div>

      </div>
    </header>
  );
}

export default Hero;
