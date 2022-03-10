import React from "react";
import CV from "../../assets/Intesarul Haque's Resume.pdf";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="top">
          <div className="section1">
            <h5>Hello I'm</h5>
            <h1>Intesarul Haque</h1>
            <h5 className="text-light">Full Stack Developer</h5>

            <div className="contact">
              <a href={CV} className="btn" download>
                Download CV
              </a>
              <a href="#contact" className="btn btn-primary">
                Contact
              </a>
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
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
