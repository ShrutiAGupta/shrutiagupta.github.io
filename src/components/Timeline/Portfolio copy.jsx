// src/components/Portfolio/Portfolio.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Portfolio.scss';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Add body class
    document.body.classList.add('portfolio-1');

    // GSAP animations
    const sections = gsap.utils.toArray(".panel");
    const container = containerRef.current;

    const scrollTween = gsap.to(sections, {
      x: () => -(container.scrollWidth - window.innerWidth - document.querySelector('.vertical-bar')?.offsetWidth * 3 - 15),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        end: "+=9000",
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true
      },
    });

    gsap.to('.vertical-bar__panel-2', {
      x: () => -(window.innerWidth - document.querySelector('.vertical-bar')?.offsetWidth * 3 - 15),
      ease: 'none',
      scrollTrigger: {
        trigger: '.panel.panel-2',
        containerAnimation: scrollTween,
        start: () => 'left-=15px right-=' + (document.querySelector('.vertical-bar')?.offsetWidth * 2 + 15),
        end: () => 'left-=15px left+=' + document.querySelector('.vertical-bar')?.offsetWidth,
        scrub: true,
        invalidateOnRefresh: true
      }
    });

    // Cleanup
    return () => {
      document.body.classList.remove('portfolio-1');
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main id="main" className="portfolio">
      <div className="container" ref={containerRef}>
        <div className="panel panel-1">
          <section className="portfolio-details">
            <div className="portfolio-details-container">
              {/* Add your portfolio content here */}
            </div>
          </section>
        </div>
        <div className="panel panel-2">
          <section className="portfolio-details">
            <div className="portfolio-details-container">
              {/* Add your portfolio content here */}
            </div>
          </section>
        </div>
        <div className="panel panel-3" >
          <section className="portfolio-details">
            <div className="portfolio-details-container">
              {/* Add your portfolio content here */}
            </div>
          </section>
        </div>
        {/* Repeat for panel-2 and panel-3 */}
      </div>
      
      <nav className="sidebars">
        <ul className="sidebars__list">
          <li className="vertical-bar vertical-bar__panel-1">
            <span className="rotate-90">Panel-1</span>
          </li>
          <li className="vertical-bar vertical-bar__panel-2">
            <span className="rotate-90">Panel-2</span>
          </li>
          <li className="vertical-bar vertical-bar__panel-3">
            <span className="rotate-90">Panel-3</span>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Portfolio;