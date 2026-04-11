// src/components/Writer/Writer.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Writer.scss';

gsap.registerPlugin(ScrollTrigger);

const writerPanels = [
  { 
    id: 1, 
    title: 'Poetry',
    description: 'Collection of poems and verses'
  },
  { 
    id: 2, 
    title: 'Short Stories',
    description: 'Brief narratives and tales'
  },
  { 
    id: 3, 
    title: 'Articles',
    description: 'Essays and thought pieces'
  }
  // Add more panels as needed
];

const Writer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('portfolio-1');  // Reusing the same class for similar behavior
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
        trigger: '.panel-2',
        containerAnimation: scrollTween,
        start: () => 'left-=15px right-=' + (document.querySelector('.vertical-bar')?.offsetWidth * 2 + 15),
        end: () => 'left-=15px left+=' + document.querySelector('.vertical-bar')?.offsetWidth,
        scrub: true,
        invalidateOnRefresh: true
      }
    });

    return () => {
      document.body.classList.remove('portfolio-1');
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main id="main" className="portfolio">
      <div className="container" ref={containerRef}>
        {writerPanels.map((panel, index) => (
          <div 
            key={panel.id} 
            className={`panel panel-${index + 1}`} 
            style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#e6e6e6' }}
          >
            <section id="writer-details" className="portfolio-details">
              <div className="portfolio-details-container">
                <div className="writing-content">
                  <h2 className="text-3xl mb-4">{panel.title}</h2>
                  <p className="text-lg mb-8">{panel.description}</p>
                  {/* Add your content for each panel */}
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
      
      <nav className="sidebars">
        <ul className="sidebars__list">
          {writerPanels.map((panel, index) => (
            <li 
              key={panel.id} 
              className={`vertical-bar vertical-bar__panel-${index + 1}`}
            >
              <span className="rotate-90">{panel.title}</span>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default Writer;