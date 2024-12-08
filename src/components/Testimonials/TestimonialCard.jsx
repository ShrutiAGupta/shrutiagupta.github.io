// src/components/Testimonials/TestimonialCard.jsx
import React from 'react';
import './Testimonials.scss';
const TestimonialCard = ({ quote, name, position }) => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-box">
        <p>
          <i className="bx bxs-quote-alt-left quote-icon-left"></i>
          {quote}
          <i className="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <h3>{name}</h3>
        <h4>{position}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;