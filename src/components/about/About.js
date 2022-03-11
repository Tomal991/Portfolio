import React from "react";

import { FaAward } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h2 className="title">About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            <article className="about__card">
              <AiOutlineUser className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
            <article className="about__card">
              <FaFolder className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
            quaerat?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
