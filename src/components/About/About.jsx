// src/components/About/About.jsx
import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section id="about" className="paddsection">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4">
            <div className="div-img-bg">
              <div className="about-img">
                <img src="/assets/img/about.JPG" className="img-responsive" alt="me" />
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-descr">
              <p className="p-heading">
                I'm a Jaipur-based web application developer with a keen eye for clean, simple, and unique design. 
                My passion extends to UI/UX design, brand identity creation, and illustration work.
              </p>
              <p className="separator">
                Beyond the digital realm, I'm an avid reader, movie enthusiast, and culinary explorer. 
                I find joy in organizing spaces and am constantly driven by my love for learning and acquiring new skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;