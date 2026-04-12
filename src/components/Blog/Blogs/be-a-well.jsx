import { useEffect, useRef } from "react";
import './blog.css';

const paragraphs = [
  "Ever catch yourself turning a simple task into an epic quest? That was me, meticulously trying to cover every possible angle, every potential scenario, every little detail until what started as a straightforward project had somehow morphed into an ocean of complexity.",
  "That's when my friend dropped this gem of wisdom: \"Don't be an ocean, just be a nice well.\" He'd seen this pattern before — my tendency to overcomplicate things, to try and cover everything possible within a single task. While I was busy trying to boil the ocean, he recognized something I couldn't see: I was making things harder than they needed to be.",
  "It's funny how we do this to ourselves. We start with something manageable, then our minds begin to expand it: \"But what about this angle? And that possibility? Oh, and we can't forget about this other aspect!\" Before we know it, we're drowning in our own ambition to make everything perfect, complete, absolute.",
  "But here's what my friend understood: sometimes being thorough doesn't mean covering every possible thing. Sometimes it means doing the essential things well. Like a well — focused, deep, and serving its purpose perfectly without trying to span the horizons like an ocean.",
  "The beauty of being a \"nice well\" lies in its simplicity. A well doesn't try to contain every type of water or serve every possible purpose. It does one thing: it provides clean, fresh water to those who need it. And it does this reliably, consistently, without the drama of waves and storms.",
  "Now, when I catch myself spinning a simple task into an oceanic undertaking, I smile and remember these words. Sometimes the kindest thing we can do for ourselves is to stop trying to boil the ocean and just be a nice, reliable well instead. Find your depth, serve your purpose, and do it with kindness.",
  "After all, not everything needs to be vast to be valuable. Sometimes, being focused and doing less — but doing it well — is exactly what's needed.",
];

export default function BeAWell() {
  const parasRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("baw-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    parasRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .baw-root {
          color: #1a1a1a;
          background: #faf9f7;
          min-height: 100vh;
        }

        /* bl-hero-b img filter override */
        .bl-hero-b img { filter: brightness(0.55); }

        .baw-hero-h1 {
          font-family: 'Lora', serif;
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          font-weight: 600;
          color: #fff;
          line-height: 1.2;
          max-width: 680px;
          margin: 0 0 1rem;
        }

        .baw-body {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 2rem);
        }

        .baw-blockquote {
          border-left: 3px solid #c9b99a;
          margin: 0 0 3rem;
          padding: 1.25rem 0 1.25rem 1.75rem;
        }

        .baw-blockquote p {
          font-family: 'Lora', serif;
          font-size: clamp(1rem, 2.2vw, 1.25rem);
          font-style: italic;
          line-height: 1.7;
          color: #3a3a3a;
          margin: 0 0 0.5rem;
        }

        .baw-blockquote cite {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9a8c7e;
          font-style: normal;
        }

        .baw-para {
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          line-height: 1.85;
          color: #3a3a3a;
          font-weight: 300;
          margin-bottom: 1.75rem;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .baw-para.baw-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .baw-closing {
          margin-top: 3.5rem;
          padding-top: 2rem;
          border-top: 1px solid #e8e4df;
          font-size: 1rem;
          line-height: 1.8;
          color: #3a3a3a;
          font-style: italic;
        }
      `}</style>

      <article className="baw-root">
        <div className="bl-hero-b">
          <img
            src="/assets/img/blog/be-a-well.jpg"
            alt="A quiet well surrounded by nature"
          />
          <div className="bl-hero-b-overlay bl-hero-overlay">
            <p className="bl-tag-b">Philosophy · December 2, 2024</p>
            <h1 className="baw-hero-h1 bl-h1">Don't Be an Ocean, <em>Just Be a Nice Well</em></h1>
            {/* <p className="baw-meta">3 min read</p> */}
          </div>
        </div>

        <div className="baw-body">
          <blockquote className="baw-blockquote">
            <p>Shruti, DON'T Be an Ocean, JUST Be a Nice Well</p>
            <cite>Harshaan Arora, 2024</cite>
          </blockquote>

          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="baw-para"
              ref={(el) => (parasRef.current[i] = el)}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {text}
            </p>
          ))}

          <p className="baw-closing">
            Find your depth, serve your purpose, and do it with kindness.
          </p>
        </div>
      </article>
    </>
  );
}
