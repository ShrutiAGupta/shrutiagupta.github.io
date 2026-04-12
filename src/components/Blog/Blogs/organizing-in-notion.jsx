import React from "react";

const img = (name) => `/assets/img/blog/notion/${name}`;

const OrganizingInNotion = () => {
  return (
    <article style={styles.root}>
      <style>{css}</style>

      {/* ── HERO ── */}
      <header className="ng-hero">
        <div className="ng-hero-img-wrap">
          <img src={img("dashboard.png")} alt="A personal Notion workspace" className="ng-hero-img" />
          <div className="ng-hero-overlay" />
        </div>
        <div className="ng-hero-content">
          <span className="ng-eyebrow">Productivity</span>
          <h1 className="ng-h1">
            One App. <br/> <em>Your Entire Life.</em>
          </h1>
          <p className="ng-subhead">
            A guide to getting organized with Notion — and actually staying that way.
          </p>
        </div>
      </header>

      {/* ── BODY ── */}
      <div className="ng-body">

        {/* INTRO */}
        <section className="ng-section">
          <p className="ng-lede">
            Most people don't have an organization problem. They have a <em>fragmentation</em> problem. Tasks in one app, notes in another, goals in a journal that hasn't been opened since January. Notion fixes this — not by being the best at any one thing, but by being good enough at everything that you never have to leave.
          </p>
          <p>
            I've used Notion long enough to say, without exaggeration, that there is nothing about me that I know that Notion doesn't know. That's not a dependency — it's a system. And building that system is what this guide is about.
          </p>
        </section>

        <div className="ng-rule" />

        {/* WHY NOTION */}
        <section className="ng-section">
          <span className="ng-label">Why Notion</span>
          <h2 className="ng-h2">The case for one place</h2>
          <p>
            Every productivity app makes a promise. To-do apps promise clarity. Note apps promise recall. Spreadsheets promise structure. Notion's promise is different: it lets you build exactly the system your brain needs, rather than forcing your brain to adapt to someone else's system.
          </p>
          <p>
            At its core, Notion is a block-based editor — text, images, tables, kanban boards, calendars, embeds — all combinable on any page, in any order. But the real power is <strong>databases</strong>: tables where every row is also a full page, viewable as a board, gallery, calendar, or list. One database, infinite ways to see it.
          </p>
          <p>
            The result is a workspace that genuinely bends to how you think. Whether you're a visual person who needs gallery views, or a list-maker who wants everything linear — Notion accommodates both, often on the same page.
          </p>
        </section>

        {/* PULL QUOTE */}
        <blockquote className="ng-pullquote">
          "There is nothing about me that I know that Notion doesn't know."
        </blockquote>

        {/* GETTING STARTED */}
        <section className="ng-section">
          <span className="ng-label">Getting Started</span>
          <h2 className="ng-h2">Start with one thing</h2>
          <p>
            The most common Notion mistake: trying to build everything on day one. You end up with a half-finished workspace that feels more overwhelming than a blank notebook. The better approach — pick the one area of your life that causes the most friction, and build just that.
          </p>
          <p>
            For some people it's work tasks. For others it's tracking what they're reading, or planning a trip, or finally writing down recipes instead of Googling the same one every week. Notion's template gallery has thousands of starting points — find one that's 80% right and adjust from there. You don't need to start from scratch.
          </p>
          <p>
            Once that first area is working well, the rest follows naturally. You add a page for something else. Then another. Before long you have a home base — one page that links to everything — and you've built yourself a personal operating system without really trying.
          </p>
        </section>

        {/* IMAGE — Bucket List */}
        <figure className="ng-figure ng-figure--full">
          <img src={img("bucketlist.png")} alt="Bucket list as a Notion gallery database" className="ng-figure-img" />
          <figcaption>A bucket list as a gallery database — each item is a page with its own notes, photos, and progress.</figcaption>
        </figure>

        {/* DATABASES */}
        <section className="ng-section">
          <span className="ng-label">The Core Feature</span>
          <h2 className="ng-h2">Databases: more than a spreadsheet</h2>
          <p>
            If you only learn one Notion concept, make it databases. A Notion database looks like a table, but every row is secretly a full page — meaning your "Books I've Read" table isn't just a list of titles, it's a collection of pages where you can store notes, ratings, quotes, and summaries.
          </p>
          <p>
            Switch the same database to Gallery view and it becomes a visual bookshelf. Switch to Calendar and your deadlines appear on a calendar. Filter it and only show books you're currently reading. The data never changes — only the lens you're using to look at it.
          </p>
          <p>
            This is why Notion scales so well across different parts of life. A travel database can show upcoming trips on a calendar, active plans on a board, and past trips in a gallery — all from the same database. The same logic works for groceries, goals, assignments, or anything else worth tracking.
          </p>
        </section>

        {/* TWO-UP IMAGES */}
        <div className="ng-figure-pair">
          <figure className="ng-figure">
            <img src={img("travel.png")} alt="Notion travel planning page" className="ng-figure-img" />
            <figcaption>Travel goals filtered by country, alongside upcoming trip planning — same database, different views.</figcaption>
          </figure>
          <figure className="ng-figure">
            <img src={img("food.png")} alt="Notion recipe database by course and cuisine" className="ng-figure-img" />
            <figcaption>A recipe database grouped by course and cuisine — with a separate grocery view built in.</figcaption>
          </figure>
        </div>

        {/* NOTION AI */}
        <section className="ng-section ng-section--dark">
          <span className="ng-label ng-label--light">Notion AI</span>
          <h2 className="ng-h2 ng-h2--light">Your workspace, now searchable by thought</h2>
          <p className="ng-p--light">
            Notion AI is where the workspace stops being passive storage and starts being an active collaborator. It's not a chatbot bolted on — it reads your actual pages and works within them.
          </p>
          <p className="ng-p--light">
            The most useful thing it does: answer questions about your own content. Ask it "what did I plan for my Seoul trip?" or "summarize my notes from last week" — and it pulls from what you've actually written. No searching, no scrolling.
          </p>
          <p className="ng-p--light">
            Beyond that: it drafts, summarizes, extracts action items from messy notes, and auto-fills database properties. Add an AI property to your reading database and it can auto-generate a one-line summary of every book you log. Set it on your task database and it can suggest priorities. The more you put into Notion, the more useful AI becomes — because it's working with your context, not generic prompts.
          </p>

          <div className="ng-ai-cards">
            {[
              { icon: "✦", title: "Ask your workspace", desc: "Search your own notes by asking plain questions." },
              { icon: "◈", title: "Autofill databases", desc: "AI properties that auto-tag, summarize, or classify entries." },
              { icon: "◻", title: "Draft & rewrite", desc: "Write within any page — no switching to another tool." },
              { icon: "◎", title: "Extract action items", desc: "Paste messy notes; get a clean list of what to do next." },
            ].map((c) => (
              <div className="ng-ai-card" key={c.title}>
                <span className="ng-ai-card-icon">{c.icon}</span>
                <strong>{c.title}</strong>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AUTOMATIONS */}
        <section className="ng-section">
          <span className="ng-label">Automations</span>
          <h2 className="ng-h2">Set it and forget it</h2>
          <p>
            Notion Automations let your workspace respond to changes without you. When a task is marked done, archive it. When a new book is added, stamp today's date and set status to "Want to Read." When a deadline is three days out, trigger a reminder. Small automations compound into a workspace that feels alive.
          </p>
          <p>
            Beyond internal automations, Notion connects to the outside world through integrations — Google Calendar, Slack, Gmail, and Zapier among them. Deadlines in Notion can appear in your calendar automatically. Form submissions can create database entries. The workspace stops being an island.
          </p>
        </section>

        {/* NOTION SITES */}
        <section className="ng-section">
          <span className="ng-label">Notion Sites</span>
          <h2 className="ng-h2">Publish what you build</h2>
          <p>
            Any Notion page can become a public website — no code, no hosting setup. Notion Sites lets you share a portfolio, a project page, a resume, or a personal wiki with a link. With a paid plan you can use a custom domain and control the navigation.
          </p>
          <p>
            It's a quiet but powerful feature. Whatever you're building in Notion for yourself can also be the thing you share with the world.
          </p>
        </section>

        <div className="ng-rule" />

        {/* HOW TO START */}
        <section className="ng-section">
          <span className="ng-label">Where to Begin</span>
          <h2 className="ng-h2">A practical starting point</h2>

          <div className="ng-steps">
            {[
              {
                n: "01",
                title: "Pick one friction point",
                body: "What slips through the cracks most? Start there. One well-built page beats ten half-finished ones.",
              },
              {
                n: "02",
                title: "Use a template",
                body: "Notion's template gallery is free and extensive. Don't reinvent the wheel — find something close and make it yours.",
              },
              {
                n: "03",
                title: "Build a home page",
                body: "Once you have a few pages, create a central hub that links to all of them. This becomes the first thing you open each day.",
              },
              {
                n: "04",
                title: "Learn one feature a week",
                body: "Databases, then filters, then automations. Notion rewards slow exploration. Each feature multiplies what you already have.",
              },
              {
                n: "05",
                title: "Turn on Notion AI",
                body: "Once your workspace has real content, AI becomes genuinely useful. Start asking it questions about your own notes.",
              },
            ].map((s) => (
              <div className="ng-step" key={s.n}>
                <span className="ng-step-n">{s.n}</span>
                <div>
                  <strong className="ng-step-title">{s.title}</strong>
                  <p className="ng-step-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING */}
        <section className="ng-section ng-closing">
          <p>
            Notion isn't for everyone. If you want something that works without any setup, a simpler app might serve you better. But if you've ever felt like your tools were working against your brain rather than with it — Notion is worth the investment of an afternoon. Build one small thing. See how it feels. The rest tends to follow.
          </p>
          <a href="https://notion.so" className="ng-cta" target="_blank" rel="noopener noreferrer">
            Try Notion free →
          </a>
        </section>

      </div>
    </article>
  );
}

const styles = {
  root: {},
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Mono:wght@400;500&display=swap');

  .ng-hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: #111;
  }

  .ng-hero-img-wrap {
    position: absolute;
    inset: 0;
  }

  .ng-hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    opacity: 0.55;
  }

  .ng-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #0f0f0f 0%, transparent 60%);
  }

  .ng-hero-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: clamp(32px, 6vw, 80px);
    max-width: 900px;
  }

  .ng-eyebrow {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #c8b97a;
    margin-bottom: 16px;
  }

  .ng-h1 {
    font-family: 'Lora', serif;
    font-size: clamp(2.4rem, 6vw, 5rem);
    font-weight: 700;
    line-height: 1.05;
    color: #f5f2ec;
    margin: 0 0 20px;
    letter-spacing: -0.02em;

    em {
    font-style: italic;
    color: #c8a96e;
  }
  }

  .ng-subhead {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: rgba(245,242,236,0.65);
    margin: 0;
    max-width: 520px;
  }

  .ng-body {
    max-width: 900px;
    margin: 0 auto;
    padding: clamp(48px, 8vw, 96px) clamp(24px, 5vw, 48px);
  }

  .ng-section {
    margin-bottom: 64px;
  }

  .ng-section--dark {
    background: #0f0f0f;
    color: #f5f2ec;
    padding: 56px clamp(24px, 5vw, 48px);
    margin-left: clamp(-24px, -5vw, -48px);
    margin-right: clamp(-24px, -5vw, -48px);
    border-radius: 4px;
  }

  .ng-label {
    display: inline-block;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #b07d3a;
    margin-bottom: 12px;
  }

  .ng-label--light {
    color: #c8b97a;
  }

  .ng-h2 {
    font-family: 'Lora', serif;
    font-size: clamp(1.5rem, 3.5vw, 2.2rem);
    font-weight: 600;
    line-height: 1.2;
    color: #1a1612;
    margin: 0 0 24px;
    letter-spacing: -0.01em;
  }

  .ng-h2--light {
    color: #f5f2ec;
  }

  .ng-body p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: #aaa199;
    margin: 0 0 20px;
  }

  p:last-child { margin-bottom: 0; }

  .ng-p--light {
    color: rgba(245,242,236,0.78);
  }

  .ng-lede {
    font-size: 1.15rem;
    color: #1a1612;
    line-height: 1.75;
  }

  em { font-style: italic; }
  strong { font-weight: 600; color: #1a1612; }

  .ng-rule {
    height: 1px;
    background: linear-gradient(to right, transparent, #d4c9b8, transparent);
    margin: 64px 0;
  }

  .ng-pullquote {
    font-family: 'Lora', serif;
    font-size: clamp(1.2rem, 2.8vw, 1.7rem);
    font-style: italic;
    font-weight: 400;
    color: #1a1612;
    border-left: 3px solid #c8b97a;
    padding: 8px 0 8px 28px;
    margin: 0 0 64px;
    line-height: 1.5;
  }

  /* FIGURES */
  .ng-figure {
    margin: 0 0 48px;
  }

  .ng-figure--full {
    margin-left: clamp(-24px, -5vw, -48px);
    margin-right: clamp(-24px, -5vw, -48px);
  }

  .ng-figure-img {
    width: 100%;
    display: block;
    border-radius: 4px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.12);
  }

  .ng-figure--full .ng-figure-img {
    border-radius: 0;
  }

  figcaption {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #9a8e82;
    margin-top: 12px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    padding-left: clamp(24px, 5vw, 48px);
  }

  .ng-figure--full figcaption {
    padding-left: clamp(24px, 5vw, 48px);
  }

  .ng-figure-pair {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 48px;
  }

  .ng-figure-pair figcaption {
    padding-left: 0;
  }

  @media (max-width: 600px) {
    .ng-figure-pair { grid-template-columns: 1fr; }
  }

  /* AI CARDS */
  .ng-ai-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 40px;
  }

  @media (max-width: 540px) {
    .ng-ai-cards { grid-template-columns: 1fr; }
  }

  .ng-ai-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.09);
    padding: 24px;
    border-radius: 4px;
  }

  .ng-ai-card-icon {
    display: block;
    font-size: 1.1rem;
    color: #c8b97a;
    margin-bottom: 10px;
  }

  .ng-ai-card strong {
    display: block;
    font-family: 'Outfit', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: #f5f2ec;
    margin-bottom: 6px;
  }

  .ng-ai-card p {
    font-size: 0.85rem;
    color: rgba(245,242,236,0.55);
    line-height: 1.55;
    margin: 0;
  }

  /* STEPS */
  .ng-steps {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .ng-step {
    display: grid;
    grid-template-columns: 52px 1fr;
    gap: 20px;
    padding: 28px 0;
    border-bottom: 1px solid #e8e0d4;
    align-items: start;
  }

  .ng-step:last-child { border-bottom: none; }

  .ng-step-n {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    color: #b07d3a;
    padding-top: 4px;
  }

  .ng-step-title {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: #1a1612;
    margin-bottom: 6px;
  }

  .ng-step-body {
    font-size: 0.9rem;
    color: #6b5f55;
    line-height: 1.65;
    margin: 0;
  }

  /* CLOSING */
  .ng-closing {
    padding-top: 16px;
  }

  .ng-closing p {
    font-size: 1rem;
    color: #4a3f35;
    margin-bottom: 32px;
  }

  .ng-cta {
    display: inline-block;
    font-family: monospace;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #f5f2ec;
    background: #1a1612;
    padding: 14px 32px;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;
    border-radius: 2px;
  }

  .ng-cta:hover {
    background: #b07d3a;
    transform: translateY(-1px);
  }
`;

export default OrganizingInNotion;