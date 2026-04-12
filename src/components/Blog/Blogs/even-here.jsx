import { useEffect, useRef } from "react";
import './blog.css';

export default function EvenHere() {
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
          src="/assets/img/blog/even-here.jpg"
          alt="A quiet, distant landscape"
          className="bl-hero-img"
        />
        <div className="bl-hero-overlay" />
        <div className="bl-hero-content">
          <span className="bl-tag">On Being · April 12, 2026</span>
          <h1 className="bl-h1"><em>Even Here</em></h1>
          <p className="bl-hero-meta">
            I built the palatable version carefully — only the essentials, nothing that might
            weigh anyone down. I have been leaving the rest at the door for so long that sometimes
            I forget it's still there, waiting.
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="bl-body">

        <p className="bl-intro">
          There is a version of me that learned to be palatable. Learned to sit in rooms and talk
          about nothing with the kind of ease that makes people comfortable. I built that version
          carefully, the way you pack a bag for a long trip — only the essentials, nothing that
          might weigh anyone down. I left the rest at the door. And I have been leaving it at the
          door for so long that sometimes I forget it's still there, waiting. But it's always there.
        </p>

        <div className="bl-rule" ref={ref(0)}><span>✦</span></div>

        <div className="bl-section" ref={ref(1)}>
          <h2 className="bl-h2">Too Much, In Increments</h2>
          <p className="bl-p">
            The thing about being too much is that you don't find out all at once. You find out in
            increments. A conversation that goes quiet when you take it somewhere real. A room that
            shifts when you care about something too loudly. A friendship that works perfectly until
            it doesn't, until the moment you show up as the full version and watch something behind
            their eyes decide that's too far, too deep, too heavy.
          </p>
          <p className="bl-p">
            You learn to read that look early. And then you spend the rest of your life trying not
            to earn it.
          </p>
        </div>

        <div className="bl-rule" ref={ref(2)}><span>✦</span></div>

        <div className="bl-section" ref={ref(3)}>
          <h2 className="bl-h2">Living at the Bottom of Things</h2>
          <p className="bl-p">
            I have always lived at the bottom of things. Not by choice, just by nature. The surface
            has never been enough — not in conversations, not in work, not in the small things that
            quietly make a life. I find meaning in strange places. An obscure fact about a
            civilization that no longer exists. A piece of art that nobody else finds interesting.
            The way a mathematical principle can suddenly explain why people divide themselves, why
            groups form and fracture, why humans behave exactly like the equations we think are
            about something else entirely.
          </p>
          <p className="bl-p">
            A theory, a pattern, a question that probably doesn't matter to anyone but somehow
            matters completely to me. These are the things I carry. And they are, I have learned,
            deeply uninteresting to most people.
          </p>
          <p className="bl-p">
            Having too many interests, it turns out, can feel like having none at all. Because the
            ones you have don't map onto anyone else's. You can't bond over them. You can't
            casually bring them up. They sit in you, unshared, and after a while the weight of
            carrying things you can't put down becomes its own kind of exhaustion.
          </p>
          <p className="bl-p">
            And when you're exhausted enough, you don't want to fight anymore. You want to find
            new land. New air. Somewhere you could just exist without managing yourself.
          </p>
        </div>

        <div className="bl-rule" ref={ref(4)}><span>✦</span></div>

        <div className="bl-section" ref={ref(5)}>
          <h2 className="bl-h2">Crossing an Ocean</h2>
          <p className="bl-p">
            So I crossed a room. Then a country. Then an ocean.
          </p>
          <p className="bl-p">
            I thought it was geography. I thought if I could just get to the right place — the
            place where people thought a little more like me, valued what I valued, asked the kinds
            of questions I couldn't stop asking — then the loneliness would lift. That somewhere
            out there was a landscape that fit the shape of me. I came all the way across the world
            for that. And I found people who shared some of it, enough to make it feel close, close
            enough to make the distance between us hurt more, not less.
          </p>
          <p className="bl-p">
            Because the problem was never the city I was in. It was never the culture or the
            language or the zip code. The problem, if you can call it that, is just me. The full,
            unedited version that I keep leaving at the door.
          </p>
        </div>

        <div className="bl-rule" ref={ref(6)}><span>✦</span></div>

        <div className="bl-section" ref={ref(7)}>
          <h2 className="bl-h2">The Volcano</h2>
          <p className="bl-p">
            That's the thing about being a volcano. People see the surface and they sense the heat
            and they keep a careful distance. Not because they're cruel. Because they're careful.
            Because something in them knows that if they come closer they'll have to reckon with
            the depth, and the depth is inconvenient. It asks things of you. It doesn't let you
            stay shallow. And most people, most of the time, need to stay shallow just to get
            through the day. I understand that now. I don't hold it against them anymore.
          </p>
          <p className="bl-p">
            But understanding it doesn't make it hurt less.
          </p>

          <blockquote className="bl-pull">
            The volcano doesn't stop being a volcano because it learns to be quiet. The heat
            doesn't go anywhere. It just turns inward, and the pressure builds, and you become
            very good at looking like a mountain while feeling like an eruption.
          </blockquote>
        </div>

        <div className="bl-rule" ref={ref(8)}><span>✦</span></div>

        <div className="bl-section" ref={ref(9)}>
          <h2 className="bl-h2">The Loneliness That's Never Loud</h2>
          <p className="bl-p">
            What nobody tells you about being this way is that the loneliness isn't loud. It
            doesn't announce itself. It just sits beside you quietly while you're in a room full
            of people who like you, while you're making everyone laugh, while you're being the
            version of yourself that's easy to be around. It sits there and it knows, even when
            you pretend not to, that none of this is it. That you are performing a kind of
            smallness that doesn't belong to you. And the performance works. It always works.
            That's the cruelest part.
          </p>
          <p className="bl-p">
            I know better than to show the whole thing. I learned that early, and I learned it
            well. But knowing better and being okay are not the same thing.
          </p>
        </div>

        <div className="bl-rule" ref={ref(10)}><span>✦</span></div>

        <p className="bl-closing">
          And somewhere underneath all of it, underneath the easy smile and the palatable version
          and the bag packed with only the essentials — the rest of it is still there.
        </p>

        <p className="bl-footer-note">
          Still waiting. &nbsp;·&nbsp; Still too much. &nbsp;·&nbsp; Still yours.
        </p>

      </div>
    </article>
  );
}
