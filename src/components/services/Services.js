import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_top">
            <h3>UI Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_top">
            <h3>web Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_top">
            <h3>Web dev</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className="list_icon"/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
