import React from "react";

import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h2 className="title">About Me</h2>
      <div className="title">
        <h3>Education</h3>
        <h3>Experience</h3>
      </div>

      <div className="container about__container">
        <div class="timeline">
          <div class="contain right">
            <div class="content">
              <h4>B.S.C</h4>
              <h5>Daffodil International University</h5>
            </div>
          </div>

          <div class="contain right">
            <div class="content">
              <h4>H.S.C</h4>
              <h5>Savar Cantonment Public College</h5>
            </div>
          </div>
          <div class="contain right">
            <div class="content">
              <h4>S.S.C</h4>
              <h5>Marine School</h5>
            </div>
          </div>
        </div>

        <div class="timeline">
          <div class="contain right">
            <div class="content">
              <h4>Internship</h4>
              <h5>MySoft Limited</h5>
              <h5>Java Based Microservice System Solutions</h5>
              <h6>03 July,2021-30 september,2021</h6>
              <h6>Java</h6>
              <h6>Spring Boot</h6>
              <h6>Angular</h6>
              <h6>MySql</h6>
              <h6>Hibernate</h6>
            </div>
          </div>
          {/* <div class="contain right">
            <div class="content">
              <h4>2016</h4>
              <p>Lorem ipsum..</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
