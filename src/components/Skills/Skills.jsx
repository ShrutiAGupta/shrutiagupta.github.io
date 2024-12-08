import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Skills.scss';

const skillsData = [
  {
    icon: 'bx bx-code-alt',
    title: 'WEB APPLICATION DESIGN',
    description: 'Building robust and scalable web applications using Python, Angular, React, SQL, MongoDB, AWS, etc.'
  },
  {
    icon: 'bx bx-customize',
    title: 'UI/UX DESIGN',
    description: 'Creating intuitive and engaging user interfaces with Figma and Sketch.'
  },
  {
    icon: 'bx bx-pen',
    title: 'GRAPHIC DESIGN',
    description: 'Designing visually compelling graphics using Illustrator and Photoshop.'
  },
  {
    icon: 'bx bx-scatter-chart',
    title: 'DATA ANALYTICS & REPORTING',
    description: 'Transforming data into actionable insights with Python, Tableau, and Google Analytics.'
  },
  {
    icon: 'bi bi-card-checklist',
    title: 'BRAND IDENTITY',
    description: 'Developing cohesive and impactful brand identities using Illustrator, InDesign, and Spark.'
  },
  {
    icon: 'bx bx-camera',
    title: 'PHOTOGRAPHY',
    description: 'Capturing and editing stunning photographs with Lightroom and Photoshop.'
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="skills-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {skillsData.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="services-block">
                  <i className={skill.icon}></i>
                  <span>{skill.title}</span>
                  <p className="separator">{skill.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;