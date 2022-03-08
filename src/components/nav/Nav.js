import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import "./nav.css";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <div className="navbar">
        <div className="intro">Intesarul Haque</div>

        <div className="nav_item">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contact
          </a>
          <a
            href="#services"
            onClick={() => setActiveNav("#services")}
            className={activeNav === "#services" ? "active" : ""}
          >
            Services
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
