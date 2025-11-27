import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Hero.scss';

const Hero = () => {
  const typedRef = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(typedRef.current, {
  //     strings: ['Developer', 'Designer', 'Writer'],
  //     typeSpeed: 100,
  //     backSpeed: 50,
  //     backDelay: 2000,
  //     loop: true
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
<section id="hero" className="relative w-full h-screen">
  <img className="absolute w-full h-full object-cover hero-image" />
  <div className="absolute inset-0 bg-gradient-to-b from-[rgb(0,54,188,0.3)] to-[rgb(0,0,0,0.82)]" />
  <div className="relative z-10 h-full flex flex-col items-center justify-center hero-content ">
    <h1>Hi, I'm Shruti!</h1>
    <h2>Strategies on the clock, stories off it</h2>
    {/* <h2>I am a <span ref={typedRef}></span></h2> */}
    <a className="btn-get-started scrollto" onClick={() => scrollToSection('me')}>
      <i className="bi bi-chevron-double-down"></i>
    </a>
  </div>
</section>
  );
};

export default Hero;