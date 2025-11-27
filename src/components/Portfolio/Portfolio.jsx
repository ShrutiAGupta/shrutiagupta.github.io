import React, { useEffect, useState, useRef } from "react";
import "./Portfolio.scss";
import Panel from "./Panel/Panel";
import { portfolioData } from "../../data/portfolioData";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRefs = useRef([]);

  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    const header =
      document.querySelector("#header") || document.querySelector("header");

    const footer =
      document.querySelector("#footer") || document.querySelector("footer");

    if (mainContent) {
      mainContent.classList.add("portfolio-active");
      document.body.classList.add("portfolio-page");
    }

    if (header) {
      header.classList.add("transparent-header");
    }

    if (footer) {
      footer.classList.add("transparent-footer");
    }

    // Intersection Observer to track active panel
    const observers = panelRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      if (ref) observer.observe(ref);
      return observer;
    });
    

    return () => {
      if (mainContent) {
        mainContent.classList.remove("portfolio-active");
        document.body.classList.remove("portfolio-page");
      }

      if (header) {
        header.classList.remove("transparent-header");
      }

      if (footer) {
        footer.classList.remove("transparent-footer");
      }

      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToYear = (index) => {
    panelRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-container">
      {/* Fixed timeline navigator on the left */}
      <div className="timeline-navigator">
        
        <div
  className="timeline-nav-wrapper"
  style={{ "--active-index": activeIndex }}
>
          {portfolioData.map((data, index) => {
            const offset = index - activeIndex; // -1, 0, +1, etc.
            const isActive = offset === 0;
            const isNeighbor = Math.abs(offset) === 1;
            const isHidden = Math.abs(offset) > 1;

            return (
              <div
                key={data.year}
                style={{ "--offset": offset }}
                className={[
                  "timeline-nav-item",
                  isActive ? "active" : "",
                  isNeighbor ? "neighbor" : "",
                  isHidden ? "hidden" : "",
                ].join(" ")}
                onClick={() => scrollToYear(index)}
              >
                <span className="timeline-nav-year">{data.year}</span>
                <div className="timeline-nav-dot" />
              </div>
            );
          })}
        </div>
        <div className="timeline-nav-line" />
      </div>

      <div className="panels-wrapper">
        {portfolioData.map((panelData, index) => (
          <Panel
            key={panelData.year}
            ref={(el) => (panelRefs.current[index] = el)}
            year={panelData.year}
            items={panelData.items}
            backgroundImage={panelData.background}
            isActive={activeIndex === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
