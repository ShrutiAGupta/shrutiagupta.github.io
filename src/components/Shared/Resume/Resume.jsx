import React, { useEffect, useState } from 'react';
import './Resume.scss';
import { Briefcase, GraduationCap } from 'lucide-react';

const ParallaxResume = ({ experiences }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
      };
  
      const handleResize = () => {
        setViewportHeight(window.innerHeight);
      };
  
      // Initial values
      handleScroll();
      handleResize();
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const Icon = ({ type }) => {
      switch(type) {
        case 'work':
          return <Briefcase className="w-6 h-6" />
        case 'education':
          return <GraduationCap className="w-6 h-6" />;
        default:
          return null;
      }
    };
  
    const calculateAnimation = (index) => {
      const cardTop = index * 400;
      const triggerPoint = scrollPosition + viewportHeight * 0.75;
      
      if (triggerPoint < cardTop) {
        return {
          transform: `translate(-13px,100vh) scale(0.8)`,
          opacity: 0
        };
      } else if (triggerPoint < cardTop + 200) {
        const progress = (triggerPoint - cardTop) / 200;
        const translateY = (1 - progress) * 100;
        const scale = 0.8 + (progress * 0.2);
        const opacity = progress;
        
        return {
          transform: `translate(-13px,${translateY}vh) scale(${scale})`,
          opacity: opacity
        };
      } else {
        return {
          transform: 'translate(-13px, 0) scale(1)',
          opacity: 1
        };
      }
    };

    const calculateAnimation1 = (index) => {
        const cardTop = index * 400;
        const triggerPoint = scrollPosition + viewportHeight * 0.75;
        
        if (triggerPoint < cardTop) {
          return {
            transform: `translateY(100vh) scale(0.8)`,
            opacity: 0
          };
        } else if (triggerPoint < cardTop + 200) {
          const progress = (triggerPoint - cardTop) / 200;
          const translateY = (1 - progress) * 100;
          const scale = 0.8 + (progress * 0.2);
          const opacity = progress;
          
          return {
            transform: `translateY(${translateY}vh) scale(${scale})`,
            opacity: opacity
          };
        } else {
          return {
            transform: 'translateY(0) scale(1)',
            opacity: 1
          };
        }
      };
  
    return (
        <div className="relative min-h-screen parallax-img">
          {/* Parallax background layers */}
          <div 
            className="parallax-layer-1"
            style={{ transform: `translateY(${scrollPosition * 0.02}px)` }}
          />
          <div 
            className="parallax-layer-2"
            style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
          />
    
          {/* Fixed header */}
          <div className="sticky top-0 z-50 backdrop-blur-sm ">
            <div className="container mx-auto px-4 py-4">
              <h1 className="text-3xl font-bold text-gray-800 section-title">Career Timeline</h1>
            </div>
          </div>
    
          {/* Timeline container */}
          <div className="relative container mx-auto px-4 py-20">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-[15rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600 line" />
    
            {experiences.map((exp, index) => (
              <>
              <div 
                key={index}
                className={`relative mb-32 flex items-center flex-row-reverse `}
              >
                {/* Timeline dot - adjusted positioning */}
                {/* <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {exp.period}
                      </span> */}
                <div 
                  className="absolute left-[30%] -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg z-10"
                  style={{
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                    ...calculateAnimation(index)
                  }}
                >
                  <Icon type={exp.icon} />
                </div>
    
                {/* Content card - adjusted spacing */}
                <div 
                  className={`w-7/12 bg-white`}
                  style={{
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    ...calculateAnimation1(index)
                  }}
                >
                  <div className="bg-white/80 backdrop-blur-lg rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow">
                    {/* Card content remains the same */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                      <p className="text-lg text-gray-600">{exp.company}</p>
                      
                    </div>
    
                    <p className="text-gray-700 mb-4">{exp.description}</p>
    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
            </>
            ))}
          </div>
        </div>
      );
    };

export default ParallaxResume;