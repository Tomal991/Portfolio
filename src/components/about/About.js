import React from "react";

import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h2 className="title">About Me</h2>
      <h4 className="description">
        Ambitious, self motivated, passionate,team player and a quick learner.I
        always try to be organized,code efficiently and have eagerness to
        learn.I have good communication, problem solving and analytical skills.
        I am seeking a position in a growth-oriented company where I can use my
        skills for the benefit of the company while having the scope to develop
        my own skills.
      </h4>
      <div className="container about__container">
        <div>
          <h3 className="subject">Education</h3>
          <div class="timeline">
            <div class="contain right">
              <div class="content">
                <h4>B.S.C</h4>
                <h5>Daffodil International University</h5>
                <h5>CGPA - 3.86</h5>
                <h6>May 2018-April 2022</h6>
              </div>
            </div>

            <div class="contain right">
              <div class="content">
                <h4>H.S.C</h4>
                <h5>Savar Cantonment Public College</h5>
                <h5>GPA - 4.83</h5>
                <h6>2015-2017</h6>
              </div>
            </div>
            <div class="contain right">
              <div class="content">
                <h4>S.S.C</h4>
                <h5>Marine School</h5>
                <h5>GPA - 5.00</h5>
                <h6>2015</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="subject">Experience</h3>
          <div class="timeline">
            <div class="contain right">
              <div class="content">
                <h4>Internship</h4>
                <h5>MySoft Limited</h5>
                <h5>Java Based Microservice System Solutions</h5>
                <h6>03 July-30 september,2021</h6>
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
      </div>
    </section>
  );
};

export default About;
