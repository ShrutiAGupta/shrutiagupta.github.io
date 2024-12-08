import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
// import heroBg from '../../assets/img/hero-bg.jpg';  // Import the image
import './Hero.scss';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Developer', 'Designer', 'Writer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="flex flex-column items-center justify-center">
      <h1>Hi, I'm Shruti!</h1>
      <h2>I am a <span ref={typedRef}></span></h2>
      <a className="btn-get-started scrollto" onClick={() => scrollToSection('about')}>
        <i className="bi bi-chevron-double-down"></i>
      </a>
    </section>
  );
};

export default Hero;