import React from "react";

import "./about.css";
const About = () => {
  return (
    <section id="about">
      <h2 className="title">About Me</h2>
      <h4 className="description">
        Ambitious, self motivated, passionate,proactive team player and a quick
        learner.I have good communication,problem solving and analytical skills.
        To build career in an organization, where I can get the opportunities to
        prove my abilities, fulfilling the organizational goal and climb the
        career ladder through continuous learning and commitment.I have 1 years
        of experience in Angular, Typescript, Tailwind and Responsive design.
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
                <h6>Java Based Microservice System Solutions</h6>
                <h6>(Java,SpringBoot,Hibernate,Angular,MySQL)</h6>
                <small>03 July-30 september,2021</small>
              </div>
            </div>
            <div class="contain right">
              <div class="content">
                <h4>Junior Software Engineer (Frontend)</h4>
                <h5>Aits Idea Limited</h5>
                <small>01 June-currently working</small>
                <h6>
                  - Worked in Frontend part with Angular,Tailwind and Responsive
                  Design
                </h6>
                <h6>
                  - Building web applications (mostly medium/large scale ERP)
                </h6>
                <h6> -Creating reusable components and templates</h6>
                <h6>- write clean and maintainable code</h6>
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
