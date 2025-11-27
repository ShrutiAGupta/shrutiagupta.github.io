import React, { useEffect, useRef, useState } from "react";
import "./Timeline.scss";
import { timelineEvents } from "../../data/resumeItems";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function Timeline() {
 const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0); // 0 (top) → 1 (bottom)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // When the section just enters the viewport → 0
      // When the section is about to leave the viewport → 1
      const raw =
        (windowHeight - rect.top) / (windowHeight + rect.height);

      const clamped = clamp(raw, 0, 1);
      setProgress(clamped);
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax offsets (tweak these numbers if you want stronger/weaker movement)
  const imageOffset = (progress - 0.5) * -40; // -20px → +20px
  const contentOffset = (progress - 0.5) * 40; // opposite direction

  return (
    <section className="parallax-block" ref={sectionRef}>
      <div
        className="parallax-block__image"
        style={{ transform: `translateY(${imageOffset}px)` }}
      >
        {/* You can use img tag if you prefer instead of background-image in SCSS */}
      </div>

      <div
        className="parallax-block__content"
        style={{ transform: `translateY(${contentOffset}px)` }}
      >
        <h2 className="parallax-block__title">A Moment in Time</h2>
        <p className="parallax-block__text">
          This is a simple parallax block. As you scroll, the image and the
          text move at slightly different speeds, creating depth.
        </p>
      </div>
    </section>
  );
}