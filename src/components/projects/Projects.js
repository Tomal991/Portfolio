import React from "react";
import "./project.css";
import { projectData } from "../../data/projects_data";
const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="container projects_container">
        {projectData.map(({ id, image, title, github, live }) => {
          return (
            <article key={id} className="projects_item">
              <div className="projects_item_image">
                <img src={image} alt={title} className="image" />
              </div>
              <h3>{title}</h3>
              <div className="projects_item_button">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={live}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
