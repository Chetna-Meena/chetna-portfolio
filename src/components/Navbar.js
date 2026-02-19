import React from "react";
import "./Navbar.css";

function Navbar() {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = 80; // adjust if needed

    if (section) {
      const offsetTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Chetna Meena</div>

        <ul className="nav-links">
          <li onClick={() => handleScroll("about")}>About</li>
          <li onClick={() => handleScroll("skills")}>Skills</li>
          <li onClick={() => handleScroll("education")}>Education</li>
          <li onClick={() => handleScroll("projects")}>Projects</li>
         <li onClick={() => handleScroll("resume")}>Resume</li>


          <li onClick={() => handleScroll("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
