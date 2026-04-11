import { useEffect } from "react";

const paragraphs = [
  {
    label: "The Builder",
    text: `My background is in tech — products, design, data. But the questions that stuck were never about the build; they were about the why, the for whom, the what next.`,
  },
  {
    label: "The Thinker",
    text: `I love conversations that start with "What if…" and poems that say in ten words what essays can't. Words are how I think.`,
  },
  {
    label: "The Human",
    text: `Enthusiastic about most things: cooking experiments, good books, elaborate organisation systems. My folders have folders, and I stand by it.`,
  },
  {
    label: "The Connector",
    text: `I believe the best ideas come from different minds in the same room. Every conversation is a chance to learn something that shifts how you see.`,
  },
  {
    label: "The Ambitious",
    text: `I'm pursuing an MBA because the problems I care about live at the intersection of people, strategy, and messy institutional realities. Less credential, more the next great set of questions.`,
  },
];

const About = () => {
  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.classList.add("project-individual");
      document.body.classList.add("project-individual");
    }
    return () => {
      mainContent?.classList.remove("project-individual");
      document.body.classList.remove("project-individual");
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(new Event("enableTransparentHeader"));
    return () => window.dispatchEvent(new Event("disableTransparentHeader"));
  }, []);

  return (
    <>
      <style>{css}</style>
      <div className="abt-root">

        {/* Hero */}
        <div className="abt-hero">
          <img src="/assets/img/about.JPG" alt="Shruti Gupta" className="abt-hero-img" />
          <div className="abt-hero-overlay" />
          <div className="abt-hero-content">
            {/* <p className="abt-eyebrow">About me</p> */}
            <h1 className="abt-name">My Story</h1>
            <p className="abt-tagline">Strategist · Designer · Poet · Curious human</p>
          </div>
        </div>

        {/* Intro pull */}
        <div className="abt-lead-wrap">
          <p className="abt-lead">
            A technologist-turned-strategist currently pursuing an MBA, I sit at the intersection of systems thinking, design, and organisational leadership — drawn less to the question of how something is built, and more to why it should be built at all, for whom, and what happens next.
          </p>
        </div>

        {/* Story cards */}
        <div className="abt-body">
          <div className="abt-cards">
            {paragraphs.map((p, i) => (
              <div key={i} className="abt-card">
                <span className="abt-label">{p.label}</span>
                <p className="abt-para">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default About;

const css = `
  .abt-root {
    background: #faf9f7;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .abt-hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .abt-hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 20%;
    filter: brightness(0.45) saturate(0.8);
  }

  .abt-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(14, 12, 10, 0.92) 0%,
      rgba(14, 12, 10, 0.2) 55%,
      transparent 100%
    );
  }

  .abt-hero-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 clamp(2rem, 8vw, 9rem) clamp(3.5rem, 9vh, 6rem);
  }

  .abt-eyebrow {
    font-size: 0.68rem;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--primary, #b8a07e);
    margin-bottom: 0.9rem;
  }

  .abt-name {
    font-family: 'Lora', serif;
    font-size: clamp(2.5rem, 7vw, 5.5rem);
    font-weight: 400;
    font-style: italic;
    color: #f5f0e8;
    line-height: 1.1;
    margin: 0 0 1.1rem;
  }

  .abt-tagline {
    font-size: clamp(0.75rem, 1.4vw, 0.9rem);
    color: rgba(245, 240, 232, 0.5);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin: 0;
  }

  .abt-lead-wrap {
    // max-width: 860px;
    margin: 0 auto;
    padding: clamp(2.5rem, 6vh, 5rem) clamp(1.5rem, 5vw, 5rem) clamp(5rem, 12vh, 8rem);
    border-bottom: 1px solid #e8e4df;
  }

  .abt-lead {
    font-size: clamp(1rem, 2vw, 1.2rem);
    font-weight: 400;
    line-height: 1.8;
    color: #3a3530;
    margin: 0;
  }

  .abt-body {
    padding: clamp(2.5rem, 6vh, 5rem) clamp(1.5rem, 5vw, 5rem) clamp(5rem, 12vh, 8rem);
  }

  .abt-cards {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1px;
    background: #e8e4df;
    border: 1px solid #e8e4df;
  }

  .abt-card {
    background: #faf9f7;
    padding: 2rem 1.5rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    transition: background 0.25s ease, transform 0.25s ease;
    position: relative;
  }

  .abt-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--primary, #b8a07e);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .abt-card:hover {
    background: #fff;
  }

  .abt-card:hover::before {
    transform: scaleX(1);
  }

  .abt-label {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--primary, #b8a07e);
  }

  .abt-para {
    font-size: 0.9rem;
    line-height: 1.75;
    color: #5a534b;
    margin: 0;
  }

  @media (max-width: 900px) {
    .abt-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 560px) {
    .abt-cards {
      grid-template-columns: 1fr;
    }
  }
`;
