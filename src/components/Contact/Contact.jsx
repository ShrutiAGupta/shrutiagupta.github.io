// src/components/Contact/Contact.jsx
import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="col-lg-12 col-md-12">
            <div className="contact-about">
              <p className="lets-talk">Let's Talk</p>
              <div className="social-links">
                <a 
                  href="https://github.com/ShrutiAGupta" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a 
                  href="https://www.linkedin.com/in/shruti-a-gupta/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="linkedin"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a 
                  href="mailto:shruti.a.gupta02@gmail.com" 
                  className="email"
                >
                  <i className="bx bx-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;