import { useEffect, useRef } from "react";
import './blog.css';

export default function SixLayersOfCommunication() {
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
      <style>{css}</style>
      <article className="bl-root">

        {/* HERO */}
        <div className="bl-hero">
          <img
            src="/assets/img/blog/six-layers-of-communication.jpg"
            alt="Two people in quiet conversation"
            className="bl-hero-img"
          />
          <div className="bl-hero-overlay" />
          <div className="bl-hero-content">
            <span className="bl-tag">On Communication · April 12, 2026</span>
            <h1 className="bl-h1">The Six Layers of <em>Everything We Say</em></h1>
            <p className="bl-hero-meta">Every sentence carries more than its words. Learning to read all of it — and knowing when not to — might be the most human skill there is.</p>
          </div>
        </div>

        {/* BODY */}
        <div className="bl-body">

          <p className="bl-intro">
            There is a particular kind of person you have probably met — someone who walks into a room
            and seems to understand it immediately. They know when someone is upset before a word is
            spoken. They know when an agreement isn't really an agreement. They catch the thing
            underneath the thing. We tend to call people like this perceptive, emotionally intelligent,
            or simply good with people. But what they are actually doing is something more specific:
            they are reading all of the layers of communication at once, not just the one sitting on
            the surface.
          </p>

          <p className="bl-p" ref={ref(0)}>
            Most of us are only taught to listen to the first layer — the words themselves. Some of us
            naturally pick up two or three. But there are six, and they are operating every time anyone
            opens their mouth, whether we notice them or not. The gap between the people who navigate
            relationships well and those who don't is often not intelligence, or empathy, or emotional
            maturity in some abstract sense. It is simply this: how many layers they can read.
          </p>

          <div className="bl-rule" ref={ref(1)}><span>✦</span></div>

          <div className="bl-section" ref={ref(2)}>
            <h2 className="bl-h2">The Six Layers</h2>
            <p className="bl-p">
              These layers are not a formula. They are not steps in a checklist or a system for
              decoding people. They are more like dimensions of the same moment — each one real, each
              one carrying information, each one either confirming or complicating the others.
            </p>

            <div className="slc-layers">
              {[
                { num: "I", name: "Expression", desc: "The literal surface — the words chosen, the phrasing, the specific way something is said. This is what most people hear and respond to. It is also the layer most easily controlled, which is precisely why it is the least reliable on its own." },
                { num: "II", name: "Tone", desc: "The emotional colour behind the words — warmth, flatness, tension, brightness, hesitation. Tone is harder to fake than expression, and it often leaks the truth when expression is trying to conceal it. It is the layer most people notice without being able to name." },
                { num: "III", name: "Subtext", desc: "What the person feels or believes, beneath what they are saying. Not always a secret — sometimes subtext is just context the speaker assumes you already share. But it is always there, shaping the sentence from underneath." },
                { num: "IV", name: "Motivation", desc: "The reason this is being said at all — what the person wants, fears, needs, or is reaching toward. People rarely announce their motivation. But almost everything they say is in service of it. Reading motivation is not about cynicism; it is about understanding what someone actually cares about in this moment." },
                { num: "V", name: "Implication", desc: "What the act of saying something reveals — about the relationship, about how the speaker sees you, about what they are willing to risk. The words chosen are never neutral. The fact that something is being said at all is itself a statement." },
                { num: "VI", name: "Ramification", desc: "What happens next — the downstream consequence of the exchange. How you respond to the other five layers determines this one. Ramification is the layer that most directly shapes the relationship over time, and it is the one most people are thinking about least in the moment." },
              ].map((layer) => (
                <div key={layer.num} className="slc-layer">
                  <span className="slc-layer-num">{layer.num}</span>
                  <div className="slc-layer-content">
                    <span className="slc-layer-name">{layer.name}</span>
                    <p className="slc-layer-desc">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bl-rule" ref={ref(3)}><span>✦</span></div>

          <div className="bl-section" ref={ref(4)}>
            <h2 className="bl-h2">What "No, It's Fine" Actually Means</h2>
            <p className="bl-p">
              Consider a specific, ordinary moment. You are seeing someone — not long, maybe a few
              months, still in that early stage where everything carries a little more weight than it
              probably should. You cancel plans. It happens; life is complicated. They respond:
            </p>

            <div className="slc-example">
              <span className="slc-example-label">The sentence</span>
              <span className="slc-example-quote">"No, it's fine. Don't worry about it."</span>
              <div className="slc-example-rows">
                {[
                  { label: "Expression", text: "Short. Dismissive on the surface. The words themselves close the door on the subject." },
                  { label: "Tone", text: "This is where it diverges. Flat and clipped? Or genuinely easy, a little breezy, unbothered? The tone is doing enormous work here." },
                  { label: "Subtext", text: "Either: I'm hurt but I don't want to seem too invested. Or: I genuinely don't mind, things come up." },
                  { label: "Motivation", text: "Either: I want you to push back, to care enough to ask again. Or: I want to keep things light and easy between us." },
                  { label: "Implication", text: "Either: This matters to me more than I'm admitting. Or: I'm secure enough not to make a thing of this." },
                  { label: "Ramification", text: "If you read it wrong in either direction — something quietly breaks, or an unnecessary conversation happens." },
                ].map((row) => (
                  <div key={row.label} className="slc-example-row">
                    <span className="slc-example-row-label">{row.label}</span>
                    <p className="slc-example-row-text">{row.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="bl-p">
              The point here is not that "no, it's fine" is secretly always code for "it's not fine."
              That is actually the wrong lesson, and a kind of arrogance — the assumption that people
              are always performing, always hiding, always meaning the opposite of what they say.
              Sometimes it is fine. Genuinely. The words are accurate. And that matters, because
              treating someone's honesty like a puzzle to be decoded is its own form of not listening.
            </p>

            <blockquote className="bl-pull">
              The six layers are not a tool for finding hidden meaning. They are a tool for telling
              the difference between hidden meaning and none at all.
            </blockquote>

            <p className="bl-p">
              The sentence is the same either way. The six layers are what change. When someone means
              it — when they are genuinely unbothered — the tone is loose, the expression matches it,
              there is no gap between the layers. Everything aligns. When they don't mean it, the
              layers start to contradict each other. The words say one thing, the tone says another,
              the clipped brevity of the expression implies something the words deny. That tension,
              that small friction between the layers, is the signal. And you can only feel it if you
              are paying attention to all of them at once.
            </p>
          </div>

          <div className="bl-rule" ref={ref(5)}><span>✦</span></div>

          <div className="bl-section" ref={ref(6)}>
            <h2 className="bl-h2">The First Three Come Naturally. The Last Three Are a Practice.</h2>
            <p className="bl-p">
              Almost everyone reads expression, tone, and subtext to some degree. We do it
              automatically, the way we balance when we walk — without thinking about it, without
              having to be taught. When someone's voice drops at the end of a sentence, we register
              something. When the words are cheerful but the face is still, we notice. This is not
              sophistication; it is basic human wiring. We have been reading each other for survival
              far longer than we have been speaking.
            </p>
            <p className="bl-p">
              But motivation, implication, and ramification — these require something more deliberate.
              They require you to step slightly outside the immediate exchange and ask different kinds
              of questions. Not just what is being said, but why, and what the saying of it means
              about where things stand, and what is going to follow from how you respond. Most people
              never quite develop this habit, not because they are incapable, but because the first
              three layers feel sufficient. They mostly get you through. It is only in the moments
              where they don't — the misunderstanding that came from nowhere, the relationship that
              cooled and you never quite knew why — that the gap becomes visible.
            </p>
            <p className="bl-p">
              The people who navigate these things well are not doing anything magical. They have
              simply developed the reflex of asking the deeper questions without consciously deciding
              to. They hear "no, it's fine" and they do not just process the expression or even the
              tone — they register the whole picture, including what this person has shown them
              before, including what is at stake for both people in this moment, including what a
              wrong response would cost.
            </p>
          </div>

          <div className="bl-rule" ref={ref(7)}><span>✦</span></div>

          <div className="bl-section" ref={ref(8)}>
            <h2 className="bl-h2">What Changes Across Forms of Communication</h2>
            <p className="bl-p">
              All six layers exist regardless of the medium. But they are not equally visible in all
              of them.
            </p>
            <p className="bl-p">
              In person, you have everything. Expression, tone, the body, the pace, the eyes, the
              moment of hesitation before the words arrive. The layers are rich and overlapping and
              difficult to fully conceal. This is why certain conversations need to happen face to
              face — not because words are insufficient, but because all six layers need to be present
              for the exchange to be complete.
            </p>
            <p className="bl-p">
              On a phone call, you lose the visual dimension but you still have tone in full. The way
              someone breathes before they answer. The speed. The warmth or absence of it. You can
              still read most of what you need to read.
            </p>
            <p className="bl-p">
              In a text message, you are down to expression and whatever tone the person can convey
              through word choice, punctuation, or the deliberate absence of both. The sentence "no
              it's fine" — period or no period — is doing very different things. We have all been in
              the room where someone sent a "k." and destroyed the entire afternoon. What we have lost
              is the tone layer, which means subtext becomes harder to read, which means we start
              guessing, which is where most digital miscommunication is born.
            </p>
            <p className="bl-p">
              And this is worth naming directly: the medium you choose for a conversation is itself
              communication. Choosing to say something difficult over text instead of a call is a
              statement. Choosing to call instead of appearing in person is a statement. The form
              carries implication and ramification before a single word is exchanged.
            </p>
          </div>

          <div className="bl-rule" ref={ref(9)}><span>✦</span></div>

          <div className="bl-section" ref={ref(10)}>
            <h2 className="bl-h2">A Skill, Not a Suspicion</h2>
            <p className="bl-p">
              There is a version of this kind of awareness that goes wrong — that curdles into
              hypervigilance, into always searching for the thing beneath the thing, into treating
              every exchange as a layer of concealment to be peeled back. That is not what this is.
              That version of "reading people" is exhausting and ultimately isolating, because it
              cannot accept a thing at face value even when it deserves to be.
            </p>
            <p className="bl-p">
              The goal is calibration, not suspicion. The ability to take something at face value when
              the layers confirm it is just as important as the ability to read beneath the surface
              when they don't. Real communicators can do both. They are not always looking for the
              hidden thing. They are simply present enough to notice when something doesn't align, and
              trusting enough to let it go when it does.
            </p>
            <p className="bl-p">
              This is also what makes it useful beyond relationships, beyond the personal. In any
              collaboration, any negotiation, any conversation where two people are trying to
              understand each other across a gap — the six layers are running. The colleague who says
              "that sounds great" in a tone that says it doesn't. The friend who says they're fine in
              a way that confirms they actually are. The person you care about who says something
              small that carries a much larger weight. The ability to tell the difference is not a
              party trick. It is how understanding actually happens.
            </p>

            <blockquote className="bl-pull">
              Most misunderstandings are not caused by dishonesty. They are caused by someone
              responding to one layer while the other person was speaking in six.
            </blockquote>

            <p className="bl-p">
              Learning the six layers does not make you a better reader of people in some clinical,
              analytical sense. It makes you a better listener. And listening — fully, to all of it
              at once — is the rarest and most underrated thing one person can offer another.
            </p>
          </div>

          <div className="bl-rule" ref={ref(11)}><span>✦</span></div>

          <div className="bl-section" ref={ref(12)}>
            <h2 className="bl-h2">The Invitation to Pay Attention</h2>
            <p className="bl-p">
              Nobody teaches us this. There is no class on the architecture of a sentence, no formal
              practice in reading the space between what someone says and what they mean. We are
              handed language and told to use it, and most of us muddle through with varying degrees
              of success and varying degrees of wreckage left behind.
            </p>
            <p className="bl-p">
              But the six layers are always there. They are there when someone you love tells you
              they're fine. They are there when a new relationship is quietly beginning or quietly
              ending. They are there in the message you agonised over before sending, in the reply you
              got back in thirty seconds flat, in the conversation you replayed afterwards wondering
              what you missed.
            </p>
            <p className="bl-p">
              You do not need to analyse every exchange. You do not need to turn every conversation
              into an exercise in deconstruction. You only need to stay awake to all of it — to hold
              the whole thing in your attention, lightly, the way you hold a glass you do not want to
              drop. The layers will do the rest. They will tell you, more often than not, exactly what
              is happening and exactly what it needs from you.
            </p>
          </div>

          <p className="bl-closing">
            Most of the time, that is enough.
          </p>

          <p className="bl-footer-note">
            Expression · Tone · Subtext · Motivation · Implication · Ramification
          </p>

        </div>
      </article>
    </>
  );
}

/* Six-layers-specific styles: layers grid and example box */
const css = `
  /* SIX LAYERS GRID */
  .slc-layers {
    margin: 2rem 0 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .slc-layer {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 20px;
    align-items: start;
    padding: 18px 22px;
    background: #efe9e0;
    border: 1px solid #d4c9be;
  }

  .slc-layer:first-child { border-radius: 4px 4px 0 0; }
  .slc-layer:last-child { border-radius: 0 0 4px 4px; }

  .slc-layer-num {
    font-family: 'Lora', serif;
    font-size: 1.35rem;
    font-style: italic;
    color: #c4614e;
    line-height: 1;
    padding-top: 4px;
    opacity: 0.65;
  }

  .slc-layer-name {
    font-family: 'Lora', serif;
    font-size: 0.98rem;
    font-weight: 700;
    color: #1a1410;
    margin-bottom: 4px;
    display: block;
  }

  .slc-layer-desc {
    font-family: 'Lora', serif;
    font-size: 0.9rem;
    color: #7a6e68;
    line-height: 1.65;
    margin: 0;
    font-weight: 400;
  }

  /* EXAMPLE BOX */
  .slc-example {
    margin: 2.5rem 0;
    padding: 32px 36px;
    border: 1px solid #d4c9be;
    border-top: 3px solid #1a1410;
    background: #fff;
  }

  .slc-example-label {
    font-family: 'Lora', serif;
    font-size: 0.68rem;
    font-style: italic;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #7a6e68;
    display: block;
    margin-bottom: 14px;
  }

  .slc-example-quote {
    font-family: 'Lora', serif;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 400;
    color: #1a1410;
    line-height: 1.4;
    margin-bottom: 24px;
    display: block;
  }

  .slc-example-rows {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .slc-example-row {
    display: grid;
    grid-template-columns: 108px 1fr;
    gap: 14px;
    font-size: 0.88rem;
    line-height: 1.55;
  }

  .slc-example-row-label {
    font-family: 'Lora', serif;
    font-style: italic;
    color: #8b3a2a;
    font-weight: 700;
    padding-top: 1px;
  }

  .slc-example-row-text {
    font-family: 'Lora', serif;
    color: #3d3530;
    margin: 0;
    font-weight: 400;
  }

  @media (max-width: 600px) {
    .slc-example { padding: 24px 18px; }
    .slc-example-row { grid-template-columns: 88px 1fr; }
  }
`;
