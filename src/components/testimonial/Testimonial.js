import React from "react";
import "./Testimonial.css";
import { testimonialData } from "../../data/testimonial_data";

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials_container">
        {testimonialData.map(({ id, avatar, name, review }) => {
          return (
            <article key={id} className="testimonials">
              <div className="avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="name">{name}</h5>
              <small className="review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
