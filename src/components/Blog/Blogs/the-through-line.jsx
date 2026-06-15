import { useEffect, useRef } from "react";
import './blog.css';

export default function TheThroughLine() {
  const blocksRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("bl-visible");
        });
      },
      { threshold: 0.1 }
    );
    blocksRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ref = (i) => (el) => (blocksRef.current[i] = el);

  return (
    <>
      <article className="bl-root">

        {/* HERO */}
        <div className="bl-hero">
          <img
            src="/assets/img/blog/the-through-line.jpg"
            alt="A winding path through a forest"
            className="bl-hero-img"
          />
          <div className="bl-hero-overlay" />
          <div className="bl-hero-content">
            <span className="bl-tag">Leadership · April 23, 2026</span>
            <h1 className="bl-h1">The <em>Through-Line</em></h1>
            <p className="bl-hero-meta">A conversation with a second-year MBA student who taught me that a winding path and a clear purpose are not contradictions.</p>
          </div>
        </div>

        {/* BODY */}
        <div className="bl-body">

          <p className="bl-intro">
            I chose to speak with her because her path looked nothing like a straight line — and I
            wanted to understand how someone navigates that without losing themselves. A second-year
            MBA student heading into renewable energy, she had worked in government, nonprofits, and
            tech before business school. What I was really asking was: how do you stay grounded when
            the road keeps changing?
          </p>

          <p className="bl-p" ref={ref(0)}>
            The answer, it turned out, was that she never lost the question. From Capitol Hill to the
            Obama Foundation to a tech startup to an MBA, one thing stayed constant: how do I make
            this institution good for people? The industry changed. The question didn't. That's what
            I kept coming back to — not the resume, but the thread running through it.
          </p>

          <blockquote className="bl-pull">
            "A lot of the thesis of my life has just been around how I can help corporations be good
            to people. I stumbled upon energy as one that can do that."
          </blockquote>

          <div className="bl-rule" ref={ref(1)}><span>✦</span></div>

          <div className="bl-section" ref={ref(2)}>
            <h2 className="bl-h2">The most valuable insight: purpose as a compass, not a destination</h2>
            <p className="bl-p">
              What struck me most was how she talked about purpose — not as a fixed role she was
              chasing, but as a lens she brought to every room. She didn't need the title of
              congresswoman to do the work she cared about. When one door closed, she found another
              that pointed in the same direction. That reframe was genuinely new to me. Purpose
              doesn't have to be a job description. It can be the reason you show up, regardless of
              what the role is called.
            </p>
            <p className="bl-p">
              She also talked about the discipline of working within constraints — of accepting what
              you can actually accomplish in the time and position you have, rather than overreaching.
              "There's much more I could do," she said of a stint early in her career, "but I had to
              just lock in." That kind of focused intentionality, she suggested, is itself a form of
              leading with purpose.
            </p>
          </div>

          <div className="bl-rule" ref={ref(3)}><span>✦</span></div>

          <div className="bl-section" ref={ref(4)}>
            <h2 className="bl-h2">What surprised me: how quietly bias shows up</h2>
            <p className="bl-p">
              I asked her about navigating a conservative, male-dominated industry as a woman of
              color, half expecting a story of overt conflict. What I got was more subtle — and more
              instructive. She described receiving advice from a senior woman that was really a
              warning in disguise: dress carefully, carry yourself deliberately, don't assume the room
              will meet you halfway. It wasn't hostility. It was just the reality of spaces that
              weren't built with her in mind.
            </p>
            <p className="bl-p">
              That landed differently than I expected. Bias doesn't always announce itself. Sometimes
              it arrives as well-meaning counsel. Sometimes it's a room that doesn't quite engage with
              you the way it engages with everyone else. She noticed it, named it privately, and kept
              going — not by ignoring it, but by understanding where it came from.
            </p>
          </div>

          <div className="bl-rule" ref={ref(5)}><span>✦</span></div>

          <div className="bl-section" ref={ref(6)}>
            <h2 className="bl-h2">How I plan to apply this</h2>
            <p className="bl-p">
              The first thing is leading through influence rather than confrontation. She modeled this
              instinctively — building relationships before making asks, understanding how people see
              the world before trying to shift it. People don't move because you're right. They move
              because you've taken the time to understand them first. That's a practice, not a
              personality trait, and I want to build it deliberately.
            </p>
            <p className="bl-p">
              The second is extending more judgment-free curiosity to the people around me. When
              someone holds a view I don't share, my instinct is sometimes to push back. What she
              modeled — and what I want to carry forward — is asking first: where did this come from?
              What did they experience that made this feel true? That kind of openness doesn't mean
              agreeing. It means leading from a place of understanding rather than reaction.
            </p>
          </div>

          <div className="bl-rule" ref={ref(7)}><span>✦</span></div>

          <p className="bl-closing">
            And the third, maybe the simplest: know your through-line and trust it. The path doesn't
            have to be clean. The purpose just has to hold.
          </p>

        </div>
      </article>
    </>
  );
}
