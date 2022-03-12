import React, { useState, useEffect } from "react";
import "./nav.css";

import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const setToggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const closeNavbar = () => {
    this.toggleMenu();
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <nav>
      <div className="navbar">
        <div className="intro">Intesarul Haque</div>
        {(toggleMenu || screenWidth > 991) && (
          <div className="nav_item">
            <a
              href="#home"
              onClick={() => setActiveNav("#home") & setToggleNav()}
              className={activeNav === "#home" ? "active" : ""}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setActiveNav("#about") & setToggleNav()}
              className={activeNav === "#about" ? "active" : ""}
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setActiveNav("#experience") & setToggleNav()}
              className={activeNav === "#experience" ? "active" : ""}
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setActiveNav("#projects") & setToggleNav()}
              className={activeNav === "#projects" ? "active" : ""}
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact") & setToggleNav()}
              className={activeNav === "#contact" ? "active" : ""}
            >
              Contact
            </a>
            <a
              href="#services"
              onClick={() => setActiveNav("#services") & setToggleNav()}
              className={activeNav === "#services" ? "active" : ""}
            >
              Services
            </a>
          </div>
        )}

        <div className="hamburger-menu">
          <span href="#" onClick={() => setToggleNav()}>
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
