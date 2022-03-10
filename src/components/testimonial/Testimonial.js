import React from "react";
import "./testimonial.css";
import { testimonialData } from "../../data/testimonial_data";
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
        <Swiper
          className="testimonials_container"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {testimonialData.map(({ id, avatar, name, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="name">{name}</h5>
                <small className="review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
     
    </section>
  );
};

export default Testimonial;
