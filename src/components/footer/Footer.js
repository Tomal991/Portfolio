import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsSkype } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a className="logo">Intesarul</a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
      </ul>

      <div className="socials">
        <a
          href="https://www.facebook.com/intesarul.haque.1/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook className="social_icon" />
        </a>
        <a href="https://github.com/Tomal991" target="_blank" rel="noreferrer">
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

      <div className="copyright">
        <small>&copy;Intesarul Haque. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
