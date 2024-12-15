import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Skills.scss';
import { skillsData } from '../../../data/skillsData';

const Skills = () => {
  return (
    <section id="skills" className="white-bg section-padding">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="skills-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            centeredSlides={false}
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