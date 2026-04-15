import { motion } from "framer-motion";

const C = {
  dark:      "#08080f",
  darkMid:   "#0f0f1a",
  darkCard:  "#14142a",
  accent:    "#6d5cff",
  accentMid: "#4c3de0",
  accentGlow:"rgba(109,92,255,0.15)",
  muted:     "#7a7a9a",
  white:     "#ffffff",
  offWhite:  "#f4f3ff",
  rule:      "#1e1e36",
};

const STEPS = [
  {
    num: "01",
    title: "One-click capture",
    body: "Click the extension on any job posting. It extracts title, company, location, URL, and deadline from the page DOM and pre-fills an editable popup. One button saves the entry to your tracker.",
  },
  {
    num: "02",
    title: "Email monitoring",
    body: "A background service polls your Gmail every 5–10 minutes. Incoming emails from job-related domains are classified — rejection, interview invite, assessment, offer — using an LLM call for ambiguous cases.",
  },
  {
    num: "03",
    title: "Automatic sync",
    body: "On classification, the matching row in your Google Sheet or Notion database is updated automatically. Rejections update silently. Interview invites and offers trigger an immediate browser notification.",
  },
];

const STATUSES = [
  { label: "Applied",    behavior: "—",                   color: C.muted },
  { label: "Confirmed",  behavior: "Silent update",        color: C.muted },
  { label: "Interview",  behavior: "Notifies immediately", color: C.accent },
  { label: "Assessment", behavior: "Notifies immediately", color: C.accent },
  { label: "Offer",      behavior: "Notifies immediately", color: "#22c55e" },
  { label: "Rejected",   behavior: "Silent update",        color: C.muted },
  { label: "Ghosted",    behavior: "Weekly digest",        color: "#f59e0b" },
  { label: "Archived",   behavior: "—",                   color: C.muted },
];

const COMPONENTS = [
  {
    num: "01",
    title: "Chrome Extension (MV3)",
    lines: [
      "Content script scrapes the active tab",
      "Popup UI presents an editable prefilled form",
      "Background service worker manages OAuth tokens",
      "Writes directly to the tracker destination",
    ],
  },
  {
    num: "02",
    title: "Email Monitor (Node.js)",
    lines: [
      "Polls Gmail API every 5–10 min",
      "Classifies emails using Claude — subject + snippet only, never full body",
      "Writes status updates to Sheets or Notion",
      "Sends push notifications for actionable events only",
    ],
  },
  {
    num: "03",
    title: "Tracker Destination",
    lines: [
      "Google Sheets (v1 MVP) or Notion",
      "The user owns the data entirely",
      "No proprietary dashboard, nothing stored server-side",
      "OAuth tokens stored locally in the extension",
    ],
  },
];

const DECISIONS = [
  {
    title: "MV3 service worker lifecycle",
    body: "MV3 service workers are terminated when idle — in-memory state doesn't survive. The architecture treats the worker as a stateless processor: every OAuth token and config value is persisted to chrome.storage immediately rather than held in memory. A fundamental design constraint, not an afterthought.",
  },
  {
    title: "DOM scraping across job boards",
    body: "LinkedIn, Indeed, Greenhouse, Lever, and Workday all have different DOM structures — and some aggressively block content scripts. The scraper uses board-specific fallback patterns and degrades gracefully to a pre-filled manual form when automated extraction fails, rather than showing an error state.",
  },
  {
    title: "LLM classification design",
    body: "Using Claude as the email classifier introduced a meaningful product decision: what data to pass to the API. The final design sends subject line and a short snippet only — never the full body — which satisfies both privacy principles and token efficiency. Unambiguous patterns bypass the LLM entirely.",
  },
  {
    title: "Multi-entry Vite build pipeline",
    body: "Bundling a React popup, a content script, and a background worker from a single Vite config required custom rollupOptions: the content and background scripts must land at flat paths in dist/, while popup assets can be hashed. Getting this wrong silently breaks the extension at install time.",
  },
];

const LEARNINGS = [
  "MV3's service worker termination model forces better architecture. Treating the background script as stateless from day one — rather than retrofitting persistence later — is the right mental model, not just best practice.",
  "Notification fatigue is a product problem as much as a technical one. Deciding that rejections should update silently was one of the earliest and most important product calls — and it shapes trust in the tool more than any feature does.",
  "Sending the minimum viable payload to an LLM is both a privacy principle and an engineering constraint. Subject-line-only classification is faster, cheaper, and easier to reason about — and it covers the vast majority of cases.",
  "DOM scraping at scale means writing for failure. The fallback to manual entry for blocking job boards was not a compromise — it was a deliberate product decision that made the extension usable on every site rather than reliable on some.",
  "Routing data into the user's own Google Sheet rather than a proprietary dashboard eliminated an entire class of trust, privacy, and maintenance problems in one decision.",
];

const STACK = [
  "React 18", "TypeScript 5.6", "Vite 5", "Chrome MV3", "Node.js",
  "Claude API", "Gmail API", "Google Sheets API v4", "Notion API",
  "Web Push API", "chrome.storage", "OAuth 2.0",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const stagger = { show: { transition: { staggerChildren: 0.09 } } };

// ─── Hero ─────────────────────────────────────────────────────────────────────
const Hero = () => (
  <div
    className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    style={{ background: C.dark }}
  >
    {/* Accent glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 65% 50% at 10% 20%, rgba(109,92,255,0.14) 0%, transparent 70%)",
      }}
    />

    {/* Ghost letterform */}
    <div
      className="absolute bottom-0 left-0 right-0 overflow-hidden select-none pointer-events-none"
      style={{ lineHeight: 1 }}
    >
      <div
        style={{
          fontSize: "clamp(8rem, 20vw, 20rem)",
          fontWeight: 900,
          color: "rgba(109,92,255,0.05)",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          transform: "translateY(18%)",
        }}
      >
        CATCHR
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-8 pb-20 pt-32 w-full">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-6 flex gap-3 flex-wrap"
      >
        <span
          className="text-xs font-bold uppercase tracking-[0.3em] px-3 py-1"
          style={{ color: C.accent, border: `1px solid ${C.accent}` }}
        >
          Chrome Extension + Backend Service
        </span>
        <span
          className="text-xs font-bold uppercase tracking-[0.3em] px-3 py-1"
          style={{ color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          April 2026 · Solo Build
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="font-black text-white mb-4"
        style={{
          fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
        }}
      >
        Catchr
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-2xl font-light mb-4"
        style={{ color: C.accent }}
      >
        Your job search, on autopilot.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg font-light max-w-2xl mb-12"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        A Chrome extension paired with an email monitoring service that captures
        job applications in one click and automatically tracks every status
        change — so your tracker is always current without you touching it.
      </motion.p>

      {/* Meta + CTA row */}
      <motion.div
        className="flex flex-wrap gap-4 items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        {[
          { label: "Role",         value: "Solo builder — product, design, engineering" },
          { label: "Stack",        value: "React · TypeScript · Chrome MV3 · Node.js · Claude API" },
          { label: "Integrations", value: "Gmail API · Google Sheets API · Notion API" },
        ].map((m) => (
          <div
            key={m.label}
            className="px-5 py-3"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: C.muted }}>
              {m.label}
            </div>
            <div className="text-sm font-semibold text-white">{m.value}</div>
          </div>
        ))}

        {/* GitHub */}
        <a
          href="https://github.com/ShrutiAGupta/catchr"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 flex items-center gap-2 transition-opacity duration-200 hover:opacity-75"
          style={{ background: C.accent, border: `1px solid ${C.accentMid}` }}
        >
          <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          <div>
            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>
              Source Code
            </div>
            <div className="text-sm font-semibold text-white">GitHub Repo</div>
          </div>
        </a>

        {/* PRD download */}
        <a
          href="/assets/Catchr_PRD.pdf"
          download
          className="px-5 py-3 flex items-center gap-2 transition-opacity duration-200 hover:opacity-75"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "rgba(255,255,255,0.7)" }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3M3 17H1m2 0h18m0 0h2" />
          </svg>
          <div>
            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              Download
            </div>
            <div className="text-sm font-semibold text-white">Product Spec (PRD)</div>
          </div>
        </a>
      </motion.div>
    </div>

    <motion.div
      className="absolute bottom-0 left-0 right-0 h-px"
      style={{ background: `linear-gradient(90deg, ${C.accent}, transparent)` }}
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.2, delay: 0.9 }}
    />
  </div>
);

// ─── Problem ──────────────────────────────────────────────────────────────────
const Problem = () => (
  <section style={{ background: C.offWhite }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.accent }}>
            The Problem
          </div>
          <h2 className="text-5xl font-black leading-tight" style={{ color: C.dark }}>
            Two bad habits
          </h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.p variants={fadeUp} className="text-xl leading-relaxed mb-6" style={{ color: "#1a1a2e" }}>
            Job searching involves two parallel habits that are both tedious and
            error-prone. The first is manually copying job details — title,
            company, link, deadline — into a spreadsheet every time you save or
            apply to a role. The second is periodically sifting through an inbox
            full of automated emails to figure out which applications have moved
            forward and which have been quietly rejected.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="p-6"
            style={{ background: C.dark, borderLeft: `3px solid ${C.accent}` }}
          >
            <p className="text-base leading-relaxed text-white">
              Both habits get dropped when time is short. The result is a tracker
              that is perpetually out of date: entries missing, rejections buried
              under newsletters, interview invites lost in noise.{" "}
              <span style={{ color: C.accent }}>
                Catchr was built to make both habits unnecessary.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── How It Works ─────────────────────────────────────────────────────────────
const HowItWorks = () => (
  <section style={{ background: C.dark }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
        <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.accent }}>
          What It Does
        </div>
        <h2
          className="font-black text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}
        >
          The full lifecycle,
          <br />
          <span style={{ color: "rgba(255,255,255,0.25)" }}>handled automatically.</span>
        </h2>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-px"
        style={{ background: C.rule }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {STEPS.map((s) => (
          <motion.div
            key={s.num}
            variants={fadeUp}
            className="p-10"
            style={{ background: C.dark }}
          >
            <div
              className="text-5xl font-black mb-6"
              style={{ color: C.accentGlow, WebkitTextStroke: `1px ${C.accent}` }}
            >
              {s.num}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              {s.body}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm mt-8 max-w-2xl leading-relaxed"
        style={{ color: C.muted }}
      >
        The notification model is deliberately conservative: you are only
        interrupted when there is something you need to act on. Rejections and
        confirmations update the tracker silently. The product earns attention
        by not wasting it.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16"
      >
        <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: C.muted }}>
          Extension popup
        </div>
        <img
          src="/assets/img/projects/catchr/popup.png"
          alt="Catchr extension popup — pre-filled job capture form"
          className="w-full max-w-sm rounded"
          style={{ border: `1px solid ${C.rule}` }}
        />
      </motion.div>
    </div>
  </section>
);

// ─── Status Model ─────────────────────────────────────────────────────────────
const StatusModel = () => (
  <section style={{ background: C.darkMid }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
        <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.accent }}>
          Application Status Model
        </div>
        <h2
          className="font-black text-white"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1 }}
        >
          Every row moves through a defined set of states.
        </h2>
        <p className="mt-4 text-base max-w-xl" style={{ color: "rgba(255,255,255,0.45)" }}>
          Set automatically by the email service, or manually by the user at
          any time.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-px"
        style={{ background: C.rule }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {STATUSES.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="p-6"
            style={{ background: C.darkCard }}
          >
            <div
              className="w-2 h-2 rounded-full mb-4"
              style={{ background: s.color }}
            />
            <div className="text-base font-bold text-white mb-2">{s.label}</div>
            <div className="text-xs" style={{ color: s.color === C.muted ? "rgba(255,255,255,0.3)" : s.color }}>
              {s.behavior}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Architecture ─────────────────────────────────────────────────────────────
const Architecture = () => (
  <section style={{ background: C.dark }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
        <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.accent }}>
          Architecture
        </div>
        <h2
          className="font-black text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}
        >
          Three components.
          <br />
          <span style={{ color: "rgba(255,255,255,0.25)" }}>One source of truth.</span>
        </h2>
        <p className="mt-5 text-base max-w-xl" style={{ color: "rgba(255,255,255,0.45)" }}>
          The user's own Google Sheet or Notion database is the single source of
          truth — no proprietary dashboard, no data stored server-side.
        </p>
      </motion.div>

      <motion.div
        className="space-y-px"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {COMPONENTS.map((comp) => (
          <motion.div
            key={comp.num}
            variants={fadeUp}
            className="grid md:grid-cols-[260px_1fr] gap-0"
            style={{ background: C.darkCard, border: `1px solid ${C.rule}` }}
          >
            <div
              className="p-8 flex flex-col justify-between"
              style={{ borderRight: `1px solid ${C.rule}` }}
            >
              <div
                className="text-xs font-black uppercase tracking-widest mb-2"
                style={{ color: C.accent }}
              >
                Component {comp.num}
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">{comp.title}</h3>
            </div>
            <div className="p-8 grid sm:grid-cols-2 gap-3">
              {comp.lines.map((line, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: C.accent }} />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-16"
      >
        <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: C.muted }}>
          Tracker dashboard
        </div>
        <img
          src="/assets/img/projects/catchr/dashboard.png"
          alt="Catchr tracker dashboard — application statuses in Google Sheets"
          className="w-full rounded"
          style={{ border: `1px solid ${C.rule}` }}
        />
      </motion.div>
    </div>
  </section>
);

// ─── Technical Decisions ──────────────────────────────────────────────────────
const TechDecisions = () => (
  <section style={{ background: C.darkMid }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
        <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.accent }}>
          Technical Decisions
        </div>
        <h2
          className="font-black text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}
        >
          Risks &amp; trade-offs
        </h2>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-px"
        style={{ background: C.rule }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {DECISIONS.map((d, i) => (
          <motion.div
            key={d.title}
            variants={fadeUp}
            className="p-8"
            style={{ background: C.darkMid }}
          >
            <div
              className="text-xs font-black uppercase tracking-widest mb-3"
              style={{ color: C.accent }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{d.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              {d.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Building with AI ─────────────────────────────────────────────────────────
const AISection = () => (
  <section style={{ background: C.accent }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <div className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            Building with AI
          </div>
          <h2
            className="font-black text-white mb-8"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1 }}
          >
            AI as development partner,<br />not decision-maker.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div variants={fadeUp}>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
              Catchr was built with AI as an active development partner — used
              throughout architecture planning, API integration, debugging
              cross-context messaging, and iterating on the email classification
              prompt. The entire product, from PRD to working extension, was
              scoped and shipped as a solo build.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.9)" }}>
              The leverage was highest in areas with high surface area and low
              judgment requirements: wiring up APIs, structuring TypeScript types
              for the message-passing layer, and iterating on the LLM
              classification prompt.
            </p>
            <div
              className="p-5"
              style={{ background: "rgba(0,0,0,0.2)", borderLeft: "3px solid rgba(255,255,255,0.4)" }}
            >
              <p className="text-base font-medium text-white leading-relaxed">
                The product decisions remained human-driven. AI accelerated
                execution; it didn't replace the thinking that determined what
                was worth building.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── Stack ────────────────────────────────────────────────────────────────────
const Stack = () => (
  <section style={{ background: C.offWhite }} className="py-20 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
        <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.accent }}>
          Stack
        </div>
        <h2 className="text-4xl font-black" style={{ color: C.dark }}>Built with</h2>
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-3"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {STACK.map((tech) => (
          <motion.span
            key={tech}
            variants={fadeUp}
            className="px-4 py-2 text-sm font-semibold"
            style={{ background: C.dark, color: C.white, letterSpacing: "0.02em" }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Learnings ────────────────────────────────────────────────────────────────
const Learnings = () => (
  <section style={{ background: C.dark }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14">
        <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: C.accent }}>
          Key Learnings
        </div>
        <h2
          className="font-black text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}
        >
          What I took away
        </h2>
      </motion.div>

      <motion.div
        className="space-y-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {LEARNINGS.map((l, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex gap-6 items-start p-7"
            style={{ background: C.darkCard, borderLeft: `3px solid ${C.accent}` }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: C.accent }}
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              {l}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Closing ──────────────────────────────────────────────────────────────────
const Closing = () => (
  <section style={{ background: C.darkMid }} className="py-28 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <div className="w-12 h-1 mx-auto mb-10" style={{ background: C.accent }} />
        <p
          className="text-2xl md:text-3xl font-light leading-relaxed mb-12"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          The v1 PRD deliberately scoped out Notion, ghosted detection, duplicate
          warnings, and offer/assessment notifications — deferring complexity in
          favour of a tight, shippable core:{" "}
          <span className="text-white font-semibold">
            one-click capture, Gmail classification, automatic status updates.
          </span>
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/ShrutiAGupta/catchr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-75"
            style={{ background: C.accent }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            View on GitHub
          </a>
          <a
            href="/assets/Catchr_PRD.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-75"
            style={{
              color: C.white,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" />
            </svg>
            Download PRD
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── Root ─────────────────────────────────────────────────────────────────────
const CatchrProject = () => (
  <section className="relative" style={{ background: C.dark }}>
    <Hero />
    <Problem />
    <HowItWorks />
    <StatusModel />
    <Architecture />
    <TechDecisions />
    <AISection />
    <Stack />
    <Learnings />
    <Closing />
  </section>
);

export default CatchrProject;
