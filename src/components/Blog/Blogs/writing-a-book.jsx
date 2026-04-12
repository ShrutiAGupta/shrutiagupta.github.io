import { useEffect, useRef } from "react";
import './blog.css';

const steps = [
  {
    number: "01",
    title: "Finding Your Why",
    body: "Before you type your first word, connect with your inner voice. What's driving you to write this book? A story simmering in your imagination, wisdom to pass on, experiences that could help others. Whatever your reason — let it be your North Star when the writing gets tough.",
    image: { src: "/assets/img/blog/book/notebook.jpg", alt: "Open journal on a desk" },
  },
  {
    number: "02",
    title: "Nurturing Your Idea",
    body: "Give yourself permission to dream big. What message makes your heart sing? Who are the readers you're dying to reach? What magic will make your book stand out? Jot it down — a love letter to your future book.",
  },
  {
    number: "03",
    title: "Mapping Your Journey",
    body: "Your outline is a road trip plan — you need the major stops, but there's room for detours. Break your book into chapters that feel natural, like conversations with a friend.",
    image: { src: "/assets/img/blog/book/outline.jpg", alt: "Handwritten book outline" },
  },
  {
    number: "04",
    title: "Creating Your Writing Sanctuary",
    body: "Writing works best when it feels like coming home. Carve out time that's just for you — early mornings with coffee, quiet lunch breaks, peaceful evenings. Find your rhythm and protect it.",
  },
  {
    number: "05",
    title: "Embracing the First Draft",
    body: "Let your words flow freely. Think of your first draft as a heart-to-heart with yourself. Don't chase perfection — let your authentic voice shine. Even the most beloved books started as rough drafts.",
    image: { src: "/assets/img/blog/book/typing.jpg", alt: "Hands typing on a keyboard" },
  },
  {
    number: "06",
    title: "Polishing Your Gem",
    body: "After pouring your heart onto the page, take a breather. Return with fresh eyes. Editing is nurturing — strengthening the voice, clarifying the message, making every word count.",
  },
  {
    number: "07",
    title: "Gathering Your Tribe",
    body: "Share your work with people you trust — writers, avid readers, mentors who get your vision. Their insights help you see your book through new eyes. Take what resonates.",
  },
  {
    number: "08",
    title: "Preparing for Take-Off",
    body: "Focus on details that make your book shine — a cover that captures its essence, words that draw readers in. Traditional or self-publishing, there's no right path, only the one true to you.",
  },
  {
    number: "09",
    title: "Sharing Your Gift",
    body: "Share it with pride. Build genuine connections through social media, book events, or passionate conversation. Marketing isn't selling — it's helping your book find the people who need it.",
    image: { src: "/assets/img/blog/book/reader.jpg", alt: "Person reading a book" },
  },
  {
    number: "10",
    title: "Taking a Bow",
    body: "You did it. You turned a dream into reality. Whether your book touches millions or a precious few, you've created something meaningful and lasting. That's worth celebrating.",
  },
  {
    number: "11",
    title: "Keep the Story Going",
    body: "This might be your first book, but it doesn't have to be your last. Keep listening to those creative whispers, keep exploring new ideas, keep growing. Each book is a new adventure.",
  },
];

export default function WritingABook() {
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    stepsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .wab-root {
          color: #1a1a1a;
          background: #faf9f7;
          min-height: 100vh;
        }

        /* filter override for this blog's cover image */
        .wab-hero-img { filter: brightness(0.6); }

        .wab-hero-h1 {
          font-family: 'Lora', serif;
          font-size: clamp(2rem, 5vw, 3.75rem);
          font-weight: 600;
          color: #fff;
          line-height: 1.15;
          max-width: 720px;
          margin: 0 0 1rem;
        }

        .wab-body {
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 2rem);
        }

        .wab-intro {
          font-family: 'Lora', serif;
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          line-height: 1.8;
          color: #3a3a3a;
          margin-bottom: 3.5rem;
          font-style: italic;
        }

        .wab-step {
          display: grid;
          grid-template-columns: 3rem 1fr;
          gap: 0 1.5rem;
          margin-bottom: 2.75rem;
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        .wab-step.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .wab-step-num {
          font-family: 'Lora', serif;
          font-size: 0.75rem;
          color: #b0a898;
          padding-top: 0.3rem;
          text-align: right;
          letter-spacing: 0.05em;
        }

        .wab-step-content h2 {
          font-family: 'Lora', serif;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0 0 0.4rem;
          color: #1a1a1a;
        }

        .wab-step-content p {
          font-size: 0.95rem;
          line-height: 1.75;
          color: #4a4a4a;
          font-weight: 300;
          margin: 0;
        }

        .wab-inline-img {
          grid-column: 1 / -1;
          margin-top: 1.5rem;
          border-radius: 4px;
          overflow: hidden;
        }

        .wab-inline-img img {
          width: 100%;
          height: 350px;
          object-fit: cover;
          display: block;
          filter: brightness(0.95) saturate(0.9);
          transition: filter 0.4s ease;
        }

        .wab-inline-img img:hover {
          filter: brightness(1) saturate(1);
        }

        .wab-divider {
          width: 2.5rem;
          height: 1px;
          background: #d4cfc8;
          margin: 0 0 2.75rem 4.5rem;
        }

        .wab-closing {
          margin-top: 4rem;
          padding-top: 2.5rem;
          border-top: 1px solid #e8e4df;
          font-size: 1rem;
          line-height: 1.8;
          color: #3a3a3a;
          font-style: italic;
        }
      `}</style>

      <article className="wab-root">
        {/* Hero */}
        <div className="bl-hero-b">
          <img
            src="/assets/img/blog/book/hero.PNG"
            alt="Writer at a desk in soft light"
            className="wab-hero-img"
          />
          <div className="bl-hero-b-overlay bl-hero-overlay">
            <p className="bl-tag-b">Creative · May 12, 2023</p>
            <h1 className="wab-hero-h1">Dreams to Pages: A Book Writing Guide</h1>
            {/* <p className="wab-meta">5 min read</p> */}
          </div>
        </div>

        {/* Body */}
        <div className="wab-body">
          <p className="wab-intro">
            You know that spark of an idea that keeps you up at night? That story burning to be told?
            It's time to turn it into something incredible — your very own book.
          </p>

          {steps.map((step, i) => (
            <div key={step.number}>
              <div
                className="wab-step"
                ref={(el) => (stepsRef.current[i] = el)}
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <span className="wab-step-num">{step.number}</span>
                <div className="wab-step-content">
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                  {step.image && (
                    <div className="wab-inline-img">
                      <img src={step.image.src} alt={step.image.alt} />
                    </div>
                  )}
                </div>
              </div>
              {i < steps.length - 1 && <div className="wab-divider" />}
            </div>
          ))}

          <p className="wab-closing">
            Every author you admire started exactly where you are now — with an idea and the courage
            to pursue it. Your voice matters. Someone out there needs to read exactly what you have
            to write. ✨
          </p>
        </div>
      </article>
    </>
  );
}