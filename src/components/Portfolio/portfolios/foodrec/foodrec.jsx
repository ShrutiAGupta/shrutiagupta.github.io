import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const C = {
  ink:       "#0f1108",
  paper:     "#f5f0e8",
  sage:      "#4a6741",
  sageMid:   "#3a5232",
  sageDark:  "#273920",
  sageLight: "#e8efe6",
  rust:      "#c05a2d",
  rustLight: "#f7ede5",
  gold:      "#b8922a",
  muted:     "#6b6556",
  rule:      "#d8d2c4",
  white:     "#ffffff",
  dark:      "#0a0e09",
  darkCard:  "#141a12",
};

const FEATURES = [
  {
    emoji: "🧬",
    title: "CBM Ingredient Scoring",
    desc: "Each recipe receives a health score s(r)_h ∈ [0,1] computed from the cancer-beating molecules present in its ingredients — a stable, objective nutritional signal independent of any user data.",
  },
  {
    emoji: "🍽️",
    title: "Cuisine Preference Onboarding",
    desc: "New users select their cuisines, seeding the preference model without requiring a long history. The system immediately surfaces relevant recipes and begins refining its understanding of their palate.",
  },
  {
    emoji: "⭐",
    title: "Recipe Rating & Tagging",
    desc: "Explicit user feedback trains the collaborative filter. The more a user engages, the more personalised the recommendation list becomes over time.",
  },
  {
    emoji: "🤝",
    title: "Collaborative Filtering",
    desc: "The system clusters users by taste similarity using cosine distance, finds 15 nearest neighbours, and surfaces recipes those neighbours loved. Nearer neighbours carry proportionally greater influence.",
  },
  {
    emoji: "📄",
    title: "Content-Based Filtering",
    desc: "Recipes are filtered against stated cuisine preferences and ingredient affinities — handling cold-start gracefully before sufficient rating history exists.",
  },
  {
    emoji: "⚖️",
    title: "Health–Taste Slider",
    desc: "A user-facing control lets individuals set their own balance: pure taste discovery, strict health optimisation, or any hybrid point between. The list re-ranks in real time.",
  },
  {
    emoji: "🚫",
    title: "Blacklist Filtering",
    desc: "Recipes a user has already rated are automatically excluded from future sets — preventing repetition and continuously pushing toward new culinary territory.",
  },
  {
    emoji: "🔴🟢",
    title: "Visual Cancer-Beat Indicator",
    desc: "Every recipe card displays a colour-coded CBM rating at a glance — green for recipes scoring well against cancer-beating molecules, red for lower scores.",
  },
];

const RISKS = [
  {
    title: "Medical Disclaimer Complexity",
    body: "The app surfaces nutritional science in a consumer-facing context. There's a meaningful risk that users interpret CBM scores as clinical dietary guidance. Getting the tone right — informative without overpromising — was harder than any technical problem.",
  },
  {
    title: "Cold-Start Problem",
    body: "Collaborative filtering requires rating history to generate quality recommendations. New users receive recommendations driven almost entirely by content-based filtering and cuisine preferences, which are less nuanced until history accumulates.",
  },
  {
    title: "Dataset Coverage Gaps",
    body: "CBM scoring depends on ingredient-level molecular data. Many traditional, regional, or less-documented cuisines have sparse coverage. Recipes using hyperlocal ingredients may receive incomplete scores — disadvantaging nutritionally rich cuisines underrepresented in Western ML datasets.",
  },
  {
    title: "Evolving Nutritional Research",
    body: "The cancer-beating molecule literature is active and sometimes contradictory. A score hardcoded against today's research could become misleading as new evidence emerges. The architecture would benefit from a versioned scoring layer updatable independently of the recommendation engine.",
  },
];

const LEARNINGS = [
  {
    accent: C.sage,
    title: "Hybrid Systems Are About Blending, Not Bolting Together",
    body: "Early on I thought of the content-based and collaborative filtering layers as independent modules. In practice, the transition between them — normalisation, deduplication, how the blacklist interacts with both — is where the real design work happens. The seams matter as much as the modules.",
  },
  {
    accent: C.sage,
    title: "User Autonomy Improves Adoption of Health Features",
    body: "A purely health-optimised recommender would surface unfamiliar recipes that users reject simply because they're too far from their comfort zone. Giving users an explicit slider to tune health–taste balance created far more engagement than a hidden algorithm could.",
  },
  {
    accent: C.sage,
    title: "Research Translation Is a Design Problem",
    body: "Translating a peer-reviewed systems architecture into product decisions — what to show, what to hide, how to explain a score without a statistics degree — was as demanding as the engineering itself.",
  },
  {
    accent: C.gold,
    title: "The Stack Choice Paid Off",
    body: "Vite + React + TypeScript + shadcn/ui proved an unusually productive combination for a solo builder. shadcn's composable primitives let me reach production-quality UI faster than building from scratch, while TypeScript caught data-shape mismatches between algorithm outputs and component props early.",
  },
];

const STACK = [
  "React 18", "TypeScript", "Vite", "shadcn/ui", "Tailwind CSS",
  "TanStack Query", "React Router v6", "Recharts", "React Hook Form + Zod",
  "Django", "Django REST Framework", "Python",
  "scikit-learn", "NumPy / Pandas", "Google Colab", "SVC Classifier", "Matrix Factorisation (ALS)",
  "Apache Hadoop", "MapReduce", "HDFS",
  "AWS EC2", "AWS RDS", "AWS S3",
];

// App screenshots only — diagrams live inline with their explanatory text
const SCREENS = [
  { src: "/assets/img/projects/food-recommender/2.png", caption: "Home — cancer-beating score on every recipe card, hero recommendation surfaced immediately" },
  { src: "/assets/img/projects/food-recommender/3.png", caption: "Taste Profile — flavour sliders and cuisine preferences seed the personalisation model" },
  { src: "/assets/img/projects/food-recommender/4.png", caption: "Recipe Detail — full CBM score, rating, blacklist toggle, ingredients and cook details" },
  { src: "/assets/img/projects/food-recommender/5.png", caption: "Recipe Scanner — scan a dish to identify it and log it to your taste history" },
  { src: "/assets/img/projects/food-recommender/7.png", caption: "Recommended Grid — score badges on every card for at-a-glance health comparison" },
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
    {/* Sage glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 70% 55% at 8% 15%, rgba(74,103,65,0.22) 0%, transparent 70%)",
      }}
    />

    {/* Ghost letterform */}
    <div
      className="absolute bottom-0 left-0 right-0 overflow-hidden select-none pointer-events-none"
      style={{ lineHeight: 1 }}
    >
      <div
        style={{
          fontSize: "clamp(7rem, 18vw, 18rem)",
          fontWeight: 900,
          color: "rgba(74,103,65,0.07)",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          transform: "translateY(20%)",
        }}
      >
        RECIPE REC
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
          style={{ color: C.sage, border: `1px solid ${C.sage}` }}
        >
          Full-Stack Solo Project
        </span>
        <span
          className="text-xs font-bold uppercase tracking-[0.3em] px-3 py-1"
          style={{ color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          2021 · Published Research
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="font-black text-white mb-6"
        style={{
          fontSize: "clamp(3rem, 8vw, 7rem)",
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
        }}
      >
        Cancer-Beating
        <br />
        <span style={{ color: C.sage }}>Recipe</span> Recommender
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="text-xl font-light max-w-2xl mb-12"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        A hybrid AI system that scores recipes by their anti-cancer molecular
        content and personalises recommendations to each user's taste and history.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
      >
        {[
          { label: "Role",          value: "Solo Builder" },
          { label: "Stack",         value: "React · TypeScript · Vite · shadcn/ui" },
          // { label: "Research Base", value: "MIT World Peace University, 2021" },
          { label: "Domain",        value: "Health Tech · ML · Food Systems" },
        ].map((m) => (
          <div
            key={m.label}
            className="px-5 py-3"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: C.muted }}>
              {m.label}
            </div>
            <div className="text-sm font-semibold text-white">{m.value}</div>
          </div>
        ))}

        {/* Published paper link */}
        <a
          href="https://www.ijera.com/papers/vol11no6/Series-5/F1106053134.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
          style={{
            background: C.sage,
            border: `1px solid ${C.sageMid}`,
          }}
        >
          <svg
            className="w-3.5 h-3.5 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          <div>
            <div className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.65)" }}>
              Published Paper
            </div>
            <div className="text-sm font-semibold text-white">IJERA Vol. 11, Issue 6</div>
          </div>
        </a>
      </motion.div>
    </div>

    {/* Bottom sage bar */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-1"
      style={{ background: C.sage }}
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.2, delay: 0.9 }}
    />
  </div>
);

// ─── Overview ─────────────────────────────────────────────────────────────────
const Overview = () => (
  <section style={{ background: C.paper }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: C.rust }}
          >
            Overview
          </div>
          <h2 className="text-5xl font-black leading-tight" style={{ color: C.ink }}>
            What it is
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xl leading-relaxed mb-6"
            style={{ color: "#2a2820" }}
          >
            An end-to-end web application that recommends recipes based on two
            simultaneously optimised signals:{" "}
            <strong>personal taste</strong> and{" "}
            <strong>cancer-preventive nutritional value</strong>. The underlying
            research, published in the{" "}
            <em>
              International Journal of Engineering Research and Applications
            </em>{" "}
            (2021), identifies which molecular compounds in everyday ingredients
            have anti-cancer properties — and the system uses that science to
            rank every recipe it surfaces.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-xl leading-relaxed mb-8"
            style={{ color: "#2a2820" }}
          >
            Unlike generic meal planners that treat "healthy" as a vague badge,
            this application quantifies healthiness as a{" "}
            <em>cancer-beating score</em> derived from specific bioactive
            molecules. Users can tune how much weight the system places on
            health versus personal preference — genuine agency without a rigid
            programme.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="p-6 rounded-sm"
            style={{
              background: C.sageLight,
              borderLeft: `3px solid ${C.sage}`,
            }}
          >
            <p className="text-base leading-relaxed font-medium" style={{ color: C.sageDark }}>
              <strong>The core insight:</strong> roughly 35% of cancer
              development is linked to diet. Most food apps optimise for
              calories or macros. This one optimises for the molecular
              compounds — antioxidants, antineoplastic agents,
              immunomodulators — that research associates with cancer
              prevention and survivorship.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Screenshot Gallery ────────────────────────────────────────────────────────
const Gallery = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: C.dark }} className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: C.sage }}
          >
            The Product
          </div>
          <h2
            className="font-black text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}
          >
            See it in action
          </h2>
        </motion.div>

        {/* Main image */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-sm overflow-hidden shadow-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <img
            src={SCREENS[active].src}
            alt={`Screen ${active + 1}`}
            className="w-full object-cover"
            style={{ maxHeight: "620px", objectPosition: "top" }}
          />
        </motion.div>

        {/* Caption */}
        <motion.p
          key={`cap-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="text-sm mt-4 mb-6"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          {SCREENS[active].caption}
        </motion.p>

        {/* Thumbnail strip */}
        <div className="flex gap-3 flex-wrap">
          {SCREENS.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative rounded-sm overflow-hidden shrink-0 transition-all duration-200"
              style={{
                width: "96px",
                height: "60px",
                border: `2px solid ${i === active ? C.sage : "rgba(255,255,255,0.08)"}`,
                opacity: i === active ? 1 : 0.45,
              }}
            >
              <img
                src={s.src}
                alt={`screen ${i + 1}`}
                className="w-full h-full object-cover"
                style={{ objectPosition: "top" }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Features ─────────────────────────────────────────────────────────────────
const Features = () => (
  <section style={{ background: C.ink }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">

      {/* Header + use case diagram side by side */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: C.sage }}
          >
            Feature Breakdown
          </div>
          <h2
            className="font-black mb-5"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: C.white,
              lineHeight: 1.05,
            }}
          >
            Eight signals.
            <br />
            <span style={{ color: "rgba(255,255,255,0.28)" }}>One ranked list.</span>
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            The system serves two user types — a general <strong style={{ color: "rgba(255,255,255,0.75)" }}>User</strong> interacting
            with the recommendation engine, and a <strong style={{ color: "rgba(255,255,255,0.75)" }}>DBA</strong> managing the
            underlying recipe and ingredient database. Each use case maps to a
            discrete surface in the product.
          </p>
        </motion.div>

        {/* Use case diagram */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <img
            src="/assets/img/projects/food-recommender/1.png"
            alt="Use case diagram"
            className="w-full rounded-sm"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: C.white,
              padding: "1rem",
            }}
          />
          <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.3)" }}>
            Use case diagram — User and DBA interaction paths
          </p>
        </motion.div>
      </div>

      {/* Feature grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            className="p-7"
            style={{ background: C.ink }}
            whileHover={{ backgroundColor: "#161a14" }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl mb-4">{f.emoji}</div>
            <h3
              className="text-base font-bold mb-2 text-white"
              style={{ letterSpacing: "-0.01em" }}
            >
              {f.title}
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
              {f.desc}
            </p>
            <motion.div
              className="h-px mt-5"
              style={{ background: C.sage }}
              initial={{ width: 0 }}
              whileInView={{ width: "1.75rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Filtering Architecture ────────────────────────────────────────────────────
const FilteringArchitecture = () => (
  <section style={{ background: C.paper }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Architecture diagram */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src="/assets/img/projects/food-recommender/6.png"
            alt="Filtering architecture"
            className="w-full rounded-sm"
            style={{
              border: `1px solid ${C.rule}`,
              background: C.white,
              padding: "1.5rem",
            }}
          />
          <p className="text-xs mt-3" style={{ color: C.muted }}>
            Filtering architecture — content-based and collaborative signals merge before post-processing
          </p>
        </motion.div>

        {/* Explanation text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: C.rust }}
            >
              How It Works
            </div>
            <h2 className="text-4xl font-black mb-8" style={{ color: C.ink, lineHeight: 1.1 }}>
              The filtering pipeline
            </h2>
          </motion.div>

          {[
            {
              label: "Content-Based (RL₁)",
              body: "Recipe Data and User Preferences feed the content-based filter, producing recommendation list RL₁ based on ingredient and cuisine affinity.",
            },
            {
              label: "Collaborative Filtering (RL₂)",
              body: "Full User History drives collaborative filtering — cosine distance across 15 nearest taste neighbours generates RL₂, weighted by neighbour proximity.",
            },
            {
              label: "Merge → Post-Process",
              body: "RL₁ and RL₂ are unioned and deduplicated into RL, then passed through the Post-Process step which applies the Blacklist — stripping already-rated recipes.",
            },
            {
              label: "CBM Score Calculator → RL_F",
              body: "The cleaned list hits the CBM Score Calculator, which computes each recipe's cancer-beating molecule score. The final ranked list RL_F is delivered to the User Interface.",
            },
          ].map((step, i) => (
            <motion.div
              key={step.label}
              variants={fadeUp}
              className="flex gap-4 mb-6 last:mb-0"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-black"
                style={{ background: C.sage, color: C.white }}
              >
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{ color: C.ink }}>{step.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{step.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Formula ──────────────────────────────────────────────────────────────────
const Formula = () => (
  <section style={{ background: C.sageDark }} className="py-20 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-8"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          The Scoring Model
        </div>
        <div
          className="text-3xl md:text-4xl font-black text-white mb-5 leading-snug"
          style={{ letterSpacing: "-0.01em" }}
        >
          s(r) = ( w<sub>p</sub> × s(r)<sub>p</sub> + w<sub>h</sub> × s(r)<sub>h</sub> ) ÷ ( w<sub>p</sub> + w<sub>h</sub> )
        </div>
        <p
          className="text-sm uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          preference weight × preference score + health weight × health score, normalised
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── Motivation ───────────────────────────────────────────────────────────────
const Motivation = () => (
  <section style={{ background: C.paper }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-12"
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: C.rust }}
        >
          Motivation
        </div>
        <h2
          className="font-black"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: C.ink,
            lineHeight: 1.05,
          }}
        >
          Why build this?
        </h2>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          {
            num: "01",
            body: "Calorie-counting apps and macro trackers are abundant, but they treat food as an arithmetic problem. The research literature on nutrition and oncology tells a more nuanced story: specific molecules in food interact directly with cancer pathways, drug metabolism, and immune function.",
          },
          {
            num: "02",
            body: "Existing cancer-nutrition tools focused on ingredient substitutions — swap white rice for brown rice. That's useful, but it doesn't help a user discover entirely new recipes or broaden their diet in a way that feels like exploration rather than restriction.",
          },
          {
            num: "03",
            body: "I wanted to build something that felt like a modern recipe discovery app — enjoyable, personalised, visually clear — while quietly doing the hard nutritional science in the background. Open the app and immediately see recipes worth trying, without needing to understand matrix factorisation or molecular biology.",
          },
        ].map((item) => (
          <motion.div
            key={item.num}
            variants={fadeUp}
            className="p-8"
            style={{ background: C.white, border: `1px solid ${C.rule}` }}
          >
            <div
              className="text-4xl font-black mb-5"
              style={{ color: C.rule }}
            >
              {item.num}
            </div>
            <p className="text-base leading-relaxed" style={{ color: C.muted }}>
              {item.body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Risks ────────────────────────────────────────────────────────────────────
const Risks = () => (
  <section style={{ background: C.ink }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-14"
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: C.rust }}
        >
          Risks &amp; Limitations
        </div>
        <h2
          className="font-black text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}
        >
          What could go wrong?
        </h2>
      </motion.div>

      <motion.div
        className="space-y-4"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {RISKS.map((r, i) => (
          <motion.div
            key={r.title}
            variants={fadeUp}
            className="flex gap-6 p-7"
            style={{
              background: "#141a12",
              borderLeft: `3px solid ${C.rust}`,
            }}
          >
            <div
              className="text-xs font-black pt-1 shrink-0"
              style={{ color: C.rust }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                {r.body}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Learnings ────────────────────────────────────────────────────────────────
const Learnings = () => (
  <section style={{ background: C.paper }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-14"
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: C.sage }}
        >
          Key Learnings
        </div>
        <h2
          className="font-black"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: C.ink,
            lineHeight: 1.05,
          }}
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
            key={l.title}
            variants={fadeUp}
            className="grid md:grid-cols-[auto_1fr] gap-6 items-start p-8"
            style={{
              background: C.white,
              border: `1px solid ${C.rule}`,
              borderLeft: `3px solid ${l.accent}`,
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: l.accent }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold mb-2" style={{ color: C.ink }}>
                {l.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                {l.body}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Stack ────────────────────────────────────────────────────────────────────
const Stack = () => (
  <section style={{ background: C.sageDark }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-14"
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Technical Stack
        </div>
        <h2 className="text-4xl font-black text-white mb-3">
          Five layers, built deliberately
        </h2>
        <p className="text-base max-w-2xl" style={{ color: "rgba(255,255,255,0.5)" }}>
          Each layer was chosen to handle the specific scale and complexity of
          processing large recipe and ingredient datasets through multiple ML
          models in parallel.
        </p>
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
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: C.white,
            }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Closing ──────────────────────────────────────────────────────────────────
const Closing = () => (
  <section style={{ background: C.dark }} className="py-28 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="w-12 h-1 mx-auto mb-10" style={{ background: C.sage }} />
        <p
          className="text-2xl md:text-3xl font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          The goal was for a cancer patient, a carer, or simply a
          health-conscious cook to open the app and immediately see{" "}
          <span className="text-white font-semibold">recipes worth trying</span> —
          without needing to understand matrix factorisation or molecular biology.
          The science runs quietly in the background.
        </p>
        <a
          href="https://www.ijera.com/papers/vol11no6/Series-5/F1106053134.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-12 transition-opacity duration-200 hover:opacity-70"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          <svg
            className="w-3 h-3 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          <span className="text-xs uppercase tracking-widest">
            Research published · IJERA Vol. 11, Issue 6 · MIT World Peace University
          </span>
        </a>
      </motion.div>
    </div>
  </section>
);

// ─── Root ─────────────────────────────────────────────────────────────────────
const FoodrecProject = () => (
  <section className="relative" style={{ background: C.dark }}>
    <Hero />
    <Overview />
    <Gallery />
    <Features />
    <FilteringArchitecture />
    <Formula />
    <Motivation />
    <Risks />
    <Learnings />
    <Stack />
    <Closing />
  </section>
);

export default FoodrecProject;
