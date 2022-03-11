import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FrontendData } from "../../data/skillsData";
import { BackendData } from "../../data/skillsData";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            {FrontendData.map(({ id, title, level }) => {
              return (
                <article key={id} className="experience_details">
                  {" "}
                  <BsPatchCheckFill className="details_icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            {BackendData.map(({ id, title, level }) => {
              return (
                <article key={id} className="experience_details">
                  {" "}
                  <BsPatchCheckFill className="details_icon" />
                  <div>
                    <h4>{title}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
