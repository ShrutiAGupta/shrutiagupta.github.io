import { useEffect, useRef } from "react";

const HERO = "/assets/img/blog/the-right-thing.jpg";

const sections = [
  {
    heading: "The Whisper of Universal Truth",
    body: [
      `Sometimes it feels like moral truth must exist independently of us. When we see someone help a stranger in need, or witness profound injustice, something resonates beyond cultural boundaries — as if we're discovering something that was always there, like astronomers uncovering another star in the vast universe of truth.`,
      `Nearly every society protects children, aids those in immediate danger, and recognises basic reciprocity. When we see these patterns, it's tempting to think we're glimpsing something universal — something bigger than our human understanding.`,
    ],
  },
  {
    heading: "The Human Touch",
    body: [
      `Look closer, and things get wonderfully complex. What feels obviously right in one culture might seem strange in another. Our own moral certainties today might have been incomprehensible to our ancestors — and vice versa.`,
      `This diversity suggests morality might be more like language: something we create together, shaped by our needs, experiences, and relationships. Just as English isn't more "true" than Mandarin, maybe no moral system is universally "right."`,
    ],
    pull: "Maybe no moral system is universally right — just as English is no more true than Mandarin.",
  },
  {
    heading: "Finding Middle Ground",
    body: [
      `What if both perspectives hold pieces of the truth? Maybe morality is like music — we create it, but according to patterns that resonate with something deeper in reality and human consciousness.`,
      `Different cultures create different music, yet certain harmonies and rhythms appear again and again. Perhaps moral truth works similarly: while specific rules vary, they emerge from fundamental patterns in how conscious beings relate to each other and the world.`,
    ],
    list: [
      "Moral truth might grow from the soil of consciousness itself — the way we experience being and relating to others.",
      "It might reflect deep patterns in how societies function and flourish.",
      "It could emerge from logical necessities — rules any group of conscious beings must follow to coexist.",
    ],
  },
  {
    heading: "The View from Somewhere",
    body: [
      `When we grapple with ethical decisions, we often find ourselves reaching beyond our individual perspective — considering how our actions affect others, future generations, or the web of life itself.`,
      `This reaching-beyond-ourselves suggests that even if moral truth isn't metaphysically "bigger than us," the practice of moral reasoning asks us to grow bigger than our individual selves.`,
    ],
  },
  {
    heading: "Embracing the Mystery",
    body: [
      `Perhaps the most beautiful answer is that moral truth is both human-made and bigger than us — like a garden shaped by human hands yet growing according to deeper patterns in nature. We create moral systems, but in response to fundamental aspects of consciousness, cooperation, and existence.`,
      `This view invites both humility and wonder. We can acknowledge that our moral certainties are shaped by culture and context while remaining open to the possibility that our intuitions point toward something fundamental about the nature of being.`,
      `Asking whether "the right thing" is bigger than us becomes an invitation to explore both our human nature and our connection to something larger. A question that enriches without demanding a final answer.`,
    ],
  },
];

export default function TheRightThing() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{css}</style>

      <article className="rtt-root">

        {/* HERO */}
        <section className="rtt-hero">
          <img
            ref={heroRef}
            src={HERO}
            alt="Philosophy — the right thing"
            className="rtt-hero-img"
          />
          <div className="rtt-hero-overlay" />
          <div className="rtt-hero-content">
            <span className="rtt-tag">Philosophy · Nov 28, 2022</span>
            <h1>Is the right thing <em>bigger</em> than all of us?</h1>
            <p className="rtt-hero-meta">What exactly are the dimensions of right? And who decides them?</p>
          </div>
        </section>

        {/* INTRO */}
        <p className="rtt-intro">
          Think about the last time you knew, deep in your bones, that something was the right thing to do. Where did that certainty come from? This opens one of philosophy's most fascinating puzzles: Is moral truth something bigger than humanity, or something we create together?
        </p>

        {/* SECTIONS */}
        <div className="rtt-body">
          {sections.map((s, i) => (
            <AnimatedSection key={i} className="rtt-section">
              <h2 className="rtt-h2">{s.heading}</h2>
              {s.body.map((para, j) => (
                <p key={j} className="rtt-p">{para}</p>
              ))}
              {s.list && (
                <ul className="rtt-list">
                  {s.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              {s.pull && (
                <blockquote className="rtt-pull">"{s.pull}"</blockquote>
              )}
            </AnimatedSection>
          ))}

          <p className="rtt-closing">
            In this light, asking whether "the right thing" is bigger than us becomes an invitation to explore both our human nature and our connection to something larger — a question that doesn't need a final answer to enrich how we live.
          </p>
        </div>

      </article>
    </>
  );
}

function AnimatedSection({ children, className }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("rtt-visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');

  .rtt-root {
    color: #1a1714;
    background: #f5f0e8;
    line-height: 1.8;
  }

  /* HERO */
  .rtt-hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
  }

  .rtt-hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 120%;
    object-fit: cover;
    will-change: transform;
    filter: brightness(0.6);
  }

  .rtt-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,12,9,0.88) 0%, rgba(15,12,9,0.1) 55%, transparent 100%);
  }

  .rtt-hero-content {
    position: relative;
    z-index: 2;
    padding: 0 clamp(1.5rem, 6vw, 6rem) clamp(2rem, 7vh, 5rem);
    max-width: 860px;
  }

  .rtt-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #c8a96e;
    margin-bottom: 1.2rem;
  }

  .rtt-hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.4rem, 6vw, 5rem);
    font-weight: 300;
    line-height: 1.1;
    color: #f5f0e8;
    margin: 0 0 1.2rem;
  }

  .rtt-hero h1 em {
    font-style: italic;
    color: #c8a96e;
  }

  .rtt-hero-meta {
    font-size: 0.8rem;
    color: rgba(245,240,232,0.5);
    letter-spacing: 0.08em;
    margin: 0;
  }

  /* INTRO */
  .rtt-intro {
    max-width: 900px;
    margin: 0 auto;
    padding: clamp(2.5rem, 7vh, 5rem) clamp(1.5rem, 5vw, 3rem) clamp(2rem, 5vh, 3.5rem);
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.15rem, 2vw, 1.4rem);
    font-weight: 300;
    font-style: italic;
    color: #3d3630;
    border-bottom: 1px solid rgba(200,169,110,0.3);
  }

  /* BODY */
  .rtt-body {
    max-width: 900px;
    margin: 0 auto;
    padding: clamp(2.5rem, 6vh, 4.5rem) clamp(1.5rem, 5vw, 3rem) clamp(4rem, 10vh, 8rem);
  }

  .rtt-section {
    margin-bottom: 4.5rem;
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }

  .rtt-section.rtt-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .rtt-h2 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.4rem, 2.8vw, 1.9rem);
    font-weight: 400;
    color: #1a1714;
    margin: 0 0 1.1rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid rgba(200,169,110,0.35);
  }

  .rtt-p {
    font-size: 1rem;
    line-height: 1.85;
    color: #3d3630;
    font-weight: 300;
    margin: 0 0 1rem;
  }

  .rtt-p:last-child {
    margin-bottom: 0;
  }

  .rtt-list {
    margin: 1.5rem 0 0;
    padding: 1.5rem 1.75rem;
    background: rgba(200,169,110,0.08);
    border-left: 2px solid #c8a96e;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .rtt-list li {
    font-size: 0.95rem;
    color: #3d3630;
    font-weight: 300;
    padding-left: 1rem;
    position: relative;
    line-height: 1.7;
  }

  .rtt-list li::before {
    content: '—';
    position: absolute;
    left: -0.2rem;
    color: #c8a96e;
  }

  .rtt-pull {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.1rem, 2.2vw, 1.45rem);
    font-style: italic;
    font-weight: 300;
    color: #c8a96e;
    text-align: center;
    padding: 2rem 1.5rem;
    margin: 2rem 0 0;
    border-top: 1px solid rgba(200,169,110,0.3);
    border-bottom: 1px solid rgba(200,169,110,0.3);
    line-height: 1.55;
  }

  .rtt-closing {
    font-size: 1.05rem;
    font-style: italic;
    line-height: 1.85;
    color: #3d3630;
    padding-top: 2rem;
    border-top: 1px solid rgba(200,169,110,0.25);
    margin-top: 1rem;
  }
`;
