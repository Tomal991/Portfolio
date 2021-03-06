import React from "react";

import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h2 className="title">About Me</h2>
      <h4 className="description">
        Ambitious, self motivated, passionate,proactive team player and a quick learner.
        Ability to adapt quickly out of the comfort zone, love challenges and
        have eagerness to learn.I have good communication, problem solving and
        analytical skills. To build career in a growing organization, where I
        can get the opportunities to prove my abilities, fulfilling the
        organizational goal and climb the career ladder through continuous
        learning and commitment.
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
