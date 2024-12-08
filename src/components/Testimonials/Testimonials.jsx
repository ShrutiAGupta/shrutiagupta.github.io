// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.scss';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "Collaborating with Shruti was an incredible experience. Her ability to combine web development expertise with a keen eye for UI/UX design resulted in a highly functional and visually stunning application for our company. We couldn't be happier with the outcome.",
    name: "Nitish Tiwary",
    position: "Senior Consultant"
  },
  {
    id: 2,
    quote: "I was thoroughly impressed by Shruti's versatility and talent. From creating sophisticated data analytics reports to developing our brand identity, she consistently delivered top-notch work that elevated our projects to new heights.",
    name: "Komal Pawar",
    position: "Senior Project Manager"
  },
  {
    id: 3,
    quote: "The comprehensive approach Shruti takes is truly exceptional. Her proficiency in graphic design, combined with her ability to transform data into actionable insights, has significantly boosted our marketing efforts and overall brand presence.",
    name: "Ashnish Sharma",
    position: "Consultant"
  }
];

const SWIPER_CONFIG = {
  modules: [Pagination, Autoplay],
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    // Mobile (default)
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // Tablet
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // Desktop
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="section-title">
          <h2>Testimonials</h2>
        </div>

        <div className="testimonials-slider">
          <Swiper {...SWIPER_CONFIG}>
            {TESTIMONIALS_DATA.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;