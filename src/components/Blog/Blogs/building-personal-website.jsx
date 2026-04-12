import { useEffect, useRef } from "react";
import './blog.css';

const HERO = "/assets/img/blog/building-personal-website.PNG";

const steps = [
  {
    number: "01",
    title: "What's Your Vision?",
    body: "Before diving into the fun stuff, dream a little. What amazing things do you want to share with the world? Who are the people you want to reach? What kind of content makes you excited to create? Having a clear picture makes every other decision easier — think of it as planning the perfect party.",
  },
  {
    number: "02",
    title: "Finding Your Web Address",
    body: "Your domain name is your digital street address — make it memorable and totally you. Something like \"yourname.com\" or a catchy phrase that captures what you do. Then pair it with a hosting service (think of it as your website's apartment building). Bluehost, SiteGround, or HostGator are solid landlords who'll keep your site running smoothly.",
  },
  {
    number: "03",
    title: "Mapping Out Your Space",
    body: "Think of your website like your dream house — which rooms do you need? A welcoming homepage, an \"about me\" that tells your story, a space to showcase your work, and a cozy corner where people can get in touch. Sketch it out first. Having a plan makes the building process way smoother.",
  },
  {
    number: "04",
    title: "Making It Look Amazing",
    body: "Here's where the magic happens. You've got two great options: a drag-and-drop builder like Wix or Squarespace (think digital LEGO sets), or WordPress for a full toolkit of creative possibilities. Either way — start with a template that makes you say wow, add colors and fonts that feel like you, and make sure it looks great on mobile.",
  },
  {
    number: "05",
    title: "Filling It With Content",
    body: "Now's your time to shine. Pour your personality into every page. Write like you're chatting with a friend over coffee — authentic, engaging, and totally you. Sprinkle in some SEO magic (the words and phrases that help people find you on Google), but keep it natural. Your voice is what makes it yours.",
  },
  {
    number: "06",
    title: "The Pre-Launch Checklist",
    checklist: [
      "Click every link — yes, all of them",
      "Test on phones, tablets, and desktop",
      "Ask a friend to take it for a test drive",
      "Confirm all forms and buttons actually work",
    ],
  },
  {
    number: "07",
    title: "Spread the Word",
    body: "Your website is live — now let's get people visiting. Share it on your social channels, tell your email list, explore some SEO basics, and most importantly: tell everyone you meet about your new corner of the internet.",
  },
  {
    number: "08",
    title: "Keep It Fresh",
    body: "Think of your website like a garden — it needs regular love to keep blooming. Update your content, fix anything that breaks, and keep an eye on what visitors love (and what they don't). The best websites grow and evolve alongside you.",
  },
];

export default function BuildingPersonalWebsite() {
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("bpw-visible");
        });
      },
      { threshold: 0.12 }
    );
    stepsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{css}</style>

      <article className="bpw-root">
        {/* Hero */}
        <div className="bl-hero-b">
          <img src={HERO} alt="Building a personal website" className="bpw-hero-img" />
          <div className="bl-hero-b-overlay bl-hero-overlay">
            <p className="bl-tag-b">Tech · June 28, 2021</p>
            <h1 className="bpw-hero-h1">Building a Website That <em>Feels Like You</em></h1>
            {/* <p className="bpw-meta">5 min read</p> */}
          </div>
        </div>

        {/* Intro */}
        <p className="bpw-intro">
          Tired of letting your amazing content live only on social media? Let's create something that's truly yours — a website that shows off exactly who you are and what you do. No tech wizard hat required.
        </p>

        {/* Steps */}
        <div className="bpw-body">
          {steps.map((step, i) => (
            <div key={step.number}>
              <div
                className="bpw-step"
                ref={(el) => (stepsRef.current[i] = el)}
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <span className="bpw-step-num">{step.number}</span>
                <div className="bpw-step-content">
                  <h2>{step.title}</h2>
                  {step.body && <p>{step.body}</p>}
                  {step.checklist && (
                    <ul className="bpw-checklist">
                      {step.checklist.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {i < steps.length - 1 && <div className="bpw-divider" />}
            </div>
          ))}

          <p className="bpw-closing">
            Building a website is like creating your perfect online playground. Take it step by step, have fun, and don't be afraid to make it uniquely yours. The best websites are the ones that grow and evolve with you — so just get started. You can always add more awesome later.
          </p>
        </div>
      </article>
    </>
  );
}

const css = `
  .bpw-root {
    color: #1a1a1a;
    background: #faf9f7;
    min-height: 100vh;
  }

  /* filter override for this blog's cover image */
  .bpw-hero-img { filter: brightness(0.55); }

  .bpw-hero-h1 {
    font-family: 'Lora', serif;
    font-size: clamp(1.8rem, 5vw, 3.5rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    max-width: 680px;
    margin: 0 0 1rem;

    em {
    font-style: italic;
    color: #c8a96e;
  }
  }

  .bpw-meta {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.55);
    font-weight: 300;
    letter-spacing: 0.04em;
  }

  .bpw-intro {
    max-width: 900px;
    margin: 0 auto;
    padding: clamp(2.5rem, 7vh, 5rem) clamp(1.5rem, 5vw, 3rem) clamp(2rem, 5vh, 3.5rem);
    font-size: clamp(1.05rem, 2vw, 1.2rem);
    font-style: italic;
    line-height: 1.8;
    color: #3a3a3a;
    border-bottom: 1px solid #e8e4df;
  }

  .bpw-body {
    max-width: 900px;
    margin: 0 auto;
    padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1.5rem, 5vw, 3rem) clamp(4rem, 10vh, 8rem);
  }

  .bpw-step {
    display: grid;
    grid-template-columns: 3rem 1fr;
    gap: 0 1.5rem;
    margin-bottom: 2.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .bpw-step.bpw-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .bpw-step-num {
    font-size: 0.75rem;
    color: #b0a898;
    padding-top: 0.3rem;
    text-align: right;
    letter-spacing: 0.05em;
  }

  .bpw-step-content h2 {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    color: #1a1a1a;
  }

  .bpw-step-content p {
    font-size: 0.95rem;
    line-height: 1.75;
    color: #4a4a4a;
    font-weight: 300;
    margin: 0;
  }

  .bpw-checklist {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .bpw-checklist li {
    font-size: 0.93rem;
    color: #4a4a4a;
    font-weight: 300;
    padding-left: 1.4rem;
    position: relative;
    line-height: 1.6;
  }

  .bpw-checklist li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #b8a07e;
    font-size: 0.8rem;
    top: 0.05rem;
  }

  .bpw-divider {
    width: 2.5rem;
    height: 1px;
    background: #d4cfc8;
    margin: 0 0 2.5rem 4.5rem;
  }

  .bpw-closing {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid #e8e4df;
    font-size: 1rem;
    font-style: italic;
    line-height: 1.85;
    color: #3a3a3a;
  }
`;
