import React from "react";
import CV from "../../assets/Resume.pdf";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "./header.css";
import mypic2 from "../../assets/mypic2.jpg";

// import formalPic from "../../assets/formalPic.jpg"

import Typed from "react-typed";
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="top">
          <div className="section1">
            <h5>Hello I'm</h5>

            <h1>Intesarul Haque</h1>

            <h3>
              <Typed
                strings={[
                  "Full Stack Developer",
                  "Angular Developer",
                  "Spring Boot Developer",
                  "React Developer",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </h3>

            <div className="contact">
              <a href={CV} className="btn" download>
                Download CV
              </a>
              <a href="#contact" className="btn btn-primary">
                Contact
              </a>
            </div>
          </div>
          <div className="about__me">
            <div className="about__me__image">
              <img src={mypic2} alt="mypic" />
            </div>
          </div>
        </div>
        <div className="social">
          <a
            href="https://www.facebook.com/intesarul.haque.1/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="social_icon" />
          </a>
          <a
            href="https://github.com/Tomal991"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="social_icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/intesarul-haque-tomal-688a33198/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="social_icon" />
          </a>
        </div>
       
      </div>
    </header>
  );
};

export default Header;
