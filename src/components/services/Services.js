import React from "react";
import { BiCheck } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FiCodepen } from "react-icons/fi";
import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_top">
            <FaCode className="service_icon" />
            <h3>Frontend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="list_icon" />
              <p>I can make pixel perfect responsive design in</p>
            </li>
            <li>
              <BiCheck className="list_icon" />
              <p>Html,CSS,Bootstrap</p>
            </li>
            <li>
              <BiCheck className="list_icon" />
              <p>Angular,Angular Material</p>
            </li>
            <li>
              <BiCheck className="list_icon" />
              <p>React,Material UI</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_top">
            <FaLaptopCode className="service_icon" />
            <h3>Backend Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="list_icon" />
              <p>I can build REST API,handle database,server,ORM in </p>
            </li>
            <li>
              <BiCheck className="list_icon" />
              <p>Spring Boot(Java)</p>
            </li>
            <li>
              <BiCheck className="list_icon" />
              <p>Hibernate</p>
            </li>
            <li>
              <BiCheck className="list_icon" />
              <p>MySql</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_top">
            <FiCodepen className="service_icon" />
            <h3>Full Stack Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="list_icon" />
              <p>I can make Robust Scalable Web Applications using</p>
            </li>
            <li>
              <BiCheck className="list_icon" />
              <p>Spring Boot(Java)</p>
            </li>
            <li>
              <BiCheck className="list_icon" />
              <p>Angular</p>
            </li>
            <li>
              <BiCheck className="list_icon" />
              <p>React</p>
            </li>
            <li>
              <BiCheck className="list_icon" />
              <p>MySql</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
