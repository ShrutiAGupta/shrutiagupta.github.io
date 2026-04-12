import { useEffect, useRef } from "react";
import './blog.css';

export default function IKnowBetter() {
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
    <article className="bl-root">

      {/* HERO */}
      <div className="bl-hero">
        <img
          src="/assets/img/blog/i-know-better.jpg"
          alt="A quiet, contemplative moment"
          className="bl-hero-img"
        />
        <div className="bl-hero-overlay" />
        <div className="bl-hero-content">
          <span className="bl-tag">Philosophy · April 12, 2026</span>
          <h1 className="bl-h1">I Know <em>Better</em></h1>
          <p className="bl-hero-meta">
            Wisdom is a practice. And most of us are terrible at it — not because we don't know
            better, but because we do.
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="bl-body">

        <p className="bl-intro">
          We talk about wisdom like it's something you either have or you don't. Like it sits in
          you, quiet and certain, and when the moment comes, it speaks. It doesn't work like that.
          Wisdom is a practice. And most of us are terrible at it — not because we don't know
          better, but because we do. That's the part nobody tells you.
        </p>

        <div className="bl-rule" ref={ref(0)}><span>✦</span></div>

        <div className="bl-section" ref={ref(1)}>
          <h2 className="bl-h2">The Knowing Doesn't Save You</h2>
          <p className="bl-p">
            You know isolation is bad for you. You know it, clinically, the way you know sugar is
            bad or sleep matters. And yet. The door closes, the phone goes face down, and it feels
            like the wisest thing you've done all week. Self-preservation dressed up as
            self-awareness. You can't even call it a mistake because it felt so deliberate.
          </p>
          <p className="bl-p">
            That's what wisdom actually does to you. It makes everything feel justified.
          </p>
        </div>

        <div className="bl-rule" ref={ref(2)}><span>✦</span></div>

        <div className="bl-section" ref={ref(3)}>
          <h2 className="bl-h2">The Loneliness That Doesn't Look Like Loneliness</h2>
          <p className="bl-p">
            The kind that walks into a room and makes everyone comfortable. Remembers names, laughs
            easy, never says the wrong thing. Everybody's glad you're there. Nobody calls to check
            if you're okay.
          </p>
          <p className="bl-p">
            Because you seem fine. You're always fine. You've practiced being fine the way some
            people practice instruments — quietly, consistently, alone. And somewhere in that
            practice you got so good at making space for everyone else that you forgot to leave any
            for yourself. Or maybe you didn't forget. Maybe you just didn't know how to ask.
          </p>
          <p className="bl-p">
            That's the thing about a certain kind of wisdom — it makes you very easy to be around
            and very hard to reach. You're not intense enough to make people curious. Not difficult
            enough to make them lean in. You don't push buttons, you don't demand things, you don't
            make people feel like they owe you a deeper conversation. So they don't have one. And
            you let them not have one, because you're wise enough to know you can't force it.
          </p>
          <p className="bl-p">
            And then you go home and you are very, very alone in a way that has no clean name.
          </p>
        </div>

        <div className="bl-rule" ref={ref(4)}><span>✦</span></div>

        <div className="bl-section" ref={ref(5)}>
          <h2 className="bl-h2">The Diagnosis Without a Cure</h2>
          <p className="bl-p">
            The worst part isn't that it happens. It's that you know it's happening. You can see
            the dynamic clearly — the way your easiness keeps people comfortable and distant at the
            same time. You can diagnose it like a doctor reading someone else's chart. And still
            you smile, still you make it easy, still you don't reach for the deeper thing.
          </p>
          <p className="bl-p">
            Because knowing and changing are two completely different skills. And wisdom, apparently,
            only gives you one.
          </p>

          <blockquote className="bl-pull">
            Wisdom gives you the diagnosis. It doesn't give you the cure.
          </blockquote>
        </div>

        <div className="bl-rule" ref={ref(6)}><span>✦</span></div>

        <div className="bl-section" ref={ref(7)}>
          <h2 className="bl-h2">Too Careful to Move</h2>
          <p className="bl-p">
            And then there's the paralysis. The wiser you try to be, the more you see — every
            angle, every consequence, every way a thing could go wrong. Someone less careful just
            acts. Gets it done, moves on, figures it out later. Meanwhile you're still in the same
            spot you were three weeks ago, turning the thing over, being responsible about it. The
            clock runs out on you quietly. Not because you were reckless. Because you were too
            careful to move.
          </p>
        </div>

        <div className="bl-rule" ref={ref(8)}><span>✦</span></div>

        <div className="bl-section" ref={ref(9)}>
          <h2 className="bl-h2">Wisdom Isn't Absolute</h2>
          <p className="bl-p">
            What's wise for you might be exactly wrong for me. It shifts with the person, the
            moment, the cost. And yet we chase it like it's a fixed thing. Like if we just think
            hard enough, feel enough, we'll arrive somewhere steady.
          </p>
          <p className="bl-p">
            Maybe the wisest thing is knowing you won't.
          </p>
          <p className="bl-p">
            That you'll keep practicing, keep getting it wrong in new ways, keep being the person
            everyone knows and no one quite reaches — and showing up anyway. Leaving the door
            slightly open even when closing it feels wiser.
          </p>

          <blockquote className="bl-pull">
            Not because you've figured it out. But because you haven't. And you're still here.
          </blockquote>
        </div>

        <div className="bl-rule" ref={ref(10)}><span>✦</span></div>

        <p className="bl-closing">
          Still here.
        </p>

        <p className="bl-footer-note">
          Wisdom · Practice · Knowing · Changing
        </p>

      </div>
    </article>
  );
}
