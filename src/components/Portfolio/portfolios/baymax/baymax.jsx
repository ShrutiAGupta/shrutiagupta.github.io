import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = {
  red: "#D62828",
  redDark: "#9B1B1B",
  redLight: "#FF4444",
  dark: "#0A0A0A",
  darkMid: "#141414",
  darkCard: "#1C1C1C",
  offWhite: "#F5F2EE",
  white: "#FFFFFF",
  muted: "#9A9A9A",
};

const FEATURES = [
  {
    emoji: "🏠",
    title: "Patient Dashboard",
    desc: "Personalized home view with upcoming appointments, quick-action shortcuts, live health overview — heart rate, blood pressure, temperature — and a persistent emergency banner. Surfaced at a glance, no hunting required.",
  },
  {
    emoji: "🚨",
    title: "Emergency Services",
    desc: "A dedicated emergency hub with three consultation modes — video, voice, and text — alongside one-tap actions to call an EMT, book an ambulance, and share GPS location with first responders.",
  },
  {
    emoji: "🫀",
    title: "CPR & First-Aid Guides",
    desc: 'Step-by-step emergency walkthroughs for Adult, Child (1–8 yrs), and Infant (<1 yr) patients. Progress-tracked, audio-narrated, hands-free mode enabled. A persistent "Video Call Doctor Now" CTA throughout.',
  },
  {
    emoji: "📅",
    title: "Appointments",
    desc: "Full appointment lifecycle — browse doctors, book consultations for routine or specialist care, view upcoming sessions, and join video or in-person sessions directly from the dashboard.",
  },
  {
    emoji: "📄",
    title: "Medical Reports",
    desc: "A document vault for all medical records — lab reports, radiology scans, prescriptions, and more. Filterable by category, searchable, and viewable in a split-pane reader with metadata like date and file size.",
  },
  {
    emoji: "💬",
    title: "Doctor Messaging",
    desc: "Real-time chat with treating physicians — full message thread, read receipts, voice input, and media attachments. In-chat video and voice call shortcuts accessible from the conversation header.",
  },
];

const RISKS = [
  {
    label: "Regulatory & Liability Exposure",
    body: "A platform that provides CPR instructions, dispatches ambulances, and connects patients to doctors sits squarely in HIPAA and medical device regulation territory. Without proper legal scaffolding and clinical review, this cannot handle real patient data or real emergencies.",
  },
  {
    label: "Trust Deficit at Launch",
    body: "Healthcare is the highest-stakes trust decision a person makes. A new platform asking someone to share GPS location during an emergency or discuss medication dosage via chat faces an enormous credibility gap that brand design alone cannot close.",
  },
  {
    label: "Doctor-Side Supply Problem",
    body: "The platform is only as useful as its physician network. Onboarding, credential verification, scheduling infrastructure, and malpractice considerations for telehealth providers are all non-trivial — and none of that is in the frontend.",
  },
  {
    label: "Clinical Accuracy of Emergency Guides",
    body: "CPR protocols differ by patient age and are updated periodically by bodies like the American Heart Association. Shipping incorrect or outdated procedural guidance in a life-threatening situation is a serious safety and liability risk.",
  },
];

const LEARNINGS = [
  {
    title: "Design for your highest-stress user, not your average one.",
    body: "Designing the emergency services page meant rethinking every instinct about information density and hierarchy. What I learned there — reduce choices, maximize clarity, never make the user think — made everything else in the product sharper.",
  },
  {
    title: "Two-portal architecture pays off in UX.",
    body: "The decision to build separate patient and doctor portals rather than a role-toggle added scope, but the result is two coherent products rather than one confused one. Patients never see doctor-facing complexity; doctors never wade through patient-facing onboarding.",
  },
  {
    title: "shadcn/ui is the right primitive for moving fast without losing ownership.",
    body: "Unlike a traditional component library, shadcn gives you the source. That meant I could iterate the Baymax red color system, adjust border radii, and tweak form states without fighting a library's design opinions.",
  },
  {
    title: "Health data surfaces require a different UX contract.",
    body: "Blood pressure readings, appointment schedules, and medication history are not ordinary data. Users read it with a different level of attention and anxiety. Be more conservative — fewer decorative choices, more legibility, stronger signal hierarchy.",
  },
  {
    title: "Scope discipline is the hardest solo skill.",
    body: "The feature set here is already ambitious. Knowing when to stop was as important as knowing what to build. Several features — prescription ordering, billing, lab integrations — stayed on the backlog intentionally.",
  },
];

const STACK = [
  "React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Radix UI",
  "React Query", "React Router v6", "React Hook Form", "Zod", "Recharts", "date-fns",
  "Flask", "Python", "SQL", "REST API",
  "Video Conferencing SDK", "Push Notifications", "WebSockets",
  "AWS EC2", "AWS RDS", "AWS S3",
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
const HeroSection = () => (
  <div
    className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    style={{ background: COLORS.dark }}
  >
    {/* Subtle red gradient glow top-left */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 5% 10%, rgba(214,40,40,0.18) 0%, transparent 70%)",
      }}
    />
    {/* Large background text */}
    <div
      className="absolute bottom-0 left-0 right-0 overflow-hidden select-none pointer-events-none"
      style={{ lineHeight: 1 }}
    >
      <div
        style={{
          fontSize: "clamp(10rem, 22vw, 22rem)",
          fontWeight: 900,
          color: "rgba(214,40,40,0.06)",
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          transform: "translateY(15%)",
        }}
      >
        BAYMAX
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-8 pb-20 pt-32 w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-6"
      >
        <span
          className="text-xs font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full"
          style={{
            color: COLORS.red,
            border: `1px solid ${COLORS.red}`,
          }}
        >
          Full-Stack Design &amp; Engineering
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        className="font-black text-white mb-6"
        style={{
          fontSize: "clamp(3.5rem, 9vw, 8rem)",
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
        }}
      >
        Baymax
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="text-xl font-light max-w-xl mb-12"
        style={{ color: "rgba(255,255,255,0.65)" }}
      >
        A full-stack telehealth platform — appointments, emergency dispatch, real-time doctor messaging, and everything in between.
      </motion.p>

      {/* Meta pills */}
      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.6 }}
      >
        {[
          { label: "Role", value: "Solo Designer & Engineer" },
          { label: "Stack", value: "React · TypeScript · shadcn/ui" },
          { label: "Domain", value: "Telehealth / Consumer Health" },
        ].map((m) => (
          <div
            key={m.label}
            className="px-5 py-3"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: COLORS.muted }}
            >
              {m.label}
            </div>
            <div className="text-sm font-semibold text-white">{m.value}</div>
          </div>
        ))}
      </motion.div>
    </div>

    {/* Bottom red bar */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-1"
      style={{ background: COLORS.red }}
      initial={{ scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
    />
  </div>
);

// ─── Overview ─────────────────────────────────────────────────────────────────
const OverviewSection = () => (
  <section style={{ background: COLORS.offWhite }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: COLORS.red }}
          >
            Overview
          </div>
          <h2
            className="text-5xl font-black leading-tight"
            style={{ color: COLORS.dark }}
          >
            What is it?
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
            className="text-xl leading-relaxed mb-8"
            style={{ color: "#2a2a2a" }}
          >
            Baymax is a telehealth web application that covers the full spectrum
            of patient care — from routine appointment booking and medical record
            management, to real-time doctor messaging, to step-by-step emergency
            procedures when every second counts.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-xl leading-relaxed mb-8"
            style={{ color: "#2a2a2a" }}
          >
            The platform supports two distinct user types — patients and doctors
            — each with their own authenticated portal and purpose-built
            interface. Patients get a personal health dashboard, appointment
            management, and direct access to emergency tools. Doctors get a
            professional interface to manage consultations, review patient
            history, and communicate in real time.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="border-l-4 pl-6 py-2"
            style={{ borderColor: COLORS.red }}
          >
            <p
              className="text-lg italic leading-relaxed"
              style={{ color: COLORS.darkCard }}
            >
              Named after the healthcare robot from Big Hero 6, the brand
              commitment is intentional: healthcare software should feel like a{" "}
              <strong>companion</strong>, not a system you survive.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── Features ─────────────────────────────────────────────────────────────────
const FeaturesSection = () => (
  <section style={{ background: COLORS.dark }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: COLORS.red }}
        >
          Feature Breakdown
        </div>
        <h2
          className="font-black"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: COLORS.white,
            lineHeight: 1.05,
          }}
        >
          Six core areas.
          <br />
          <span style={{ color: "rgba(255,255,255,0.35)" }}>
            Each a complete experience.
          </span>
        </h2>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
        style={{ background: "rgba(255,255,255,0.07)" }}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            className="p-8 group"
            style={{ background: COLORS.dark }}
            whileHover={{ backgroundColor: COLORS.darkCard }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-4xl mb-5">{f.emoji}</div>
            <h3
              className="text-xl font-bold mb-3 text-white"
              style={{ letterSpacing: "-0.01em" }}
            >
              {f.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {f.desc}
            </p>
            <motion.div
              className="h-px mt-6"
              style={{ background: COLORS.red }}
              initial={{ width: 0 }}
              whileInView={{ width: "2rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Design Decisions ─────────────────────────────────────────────────────────
const DesignSection = () => {
  const callouts = [
    {
      headline: "Two-portal architecture",
      body: "Rather than a single interface that toggles roles, each portal was designed independently with its own navigation, terminology, and task hierarchy. More upfront work — dramatically cleaner experience.",
    },
    {
      headline: "Emergency surfaces must be panic-proof",
      body: "Large tap targets, no ambiguity, one action per card. The emergency section had to feel instantly usable under panic — not clever, not feature-rich.",
    },
    {
      headline: "CPR guides are not CRUD",
      body: "Age-segmented protocols (Adult / Child / Infant), progress tracking, audio narration, and hands-free mode. Every interaction had to be operable with one hand, in a high-stress situation, potentially without looking at the screen.",
    },
    {
      headline: "Ambient awareness, not clinical overload",
      body: "The health overview — heart rate, blood pressure, temperature — required careful thinking about what belongs at the top level versus what belongs in a dedicated records view.",
    },
  ];

  return (
    <section style={{ background: COLORS.darkMid }} className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: COLORS.red }}
          >
            Design Decisions
          </div>
          <h2
            className="font-black text-white"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              lineHeight: 1.05,
            }}
          >
            How it was built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {callouts.map((c, i) => (
            <motion.div
              key={c.headline}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-sm"
              style={{ background: COLORS.darkCard }}
            >
              <div
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: COLORS.red }}
              >
                Decision {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {c.headline}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Stack ────────────────────────────────────────────────────────────────────
const StackSection = () => (
  <section style={{ background: COLORS.offWhite }} className="py-20 px-8">
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
          style={{ color: COLORS.red }}
        >
          Stack
        </div>
        <h2 className="text-4xl font-black" style={{ color: COLORS.dark }}>
          Built with
        </h2>
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
            className="px-4 py-2 text-sm font-semibold rounded-sm"
            style={{
              background: COLORS.dark,
              color: COLORS.white,
              letterSpacing: "0.02em",
            }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Motivation ───────────────────────────────────────────────────────────────
const MotivationSection = () => (
  <section
    style={{ background: COLORS.red }}
    className="py-24 px-8"
  >
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-6"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Motivation
        </div>
        <h2
          className="font-black text-white leading-tight mb-8"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            lineHeight: 1.1,
          }}
        >
          Why build this?
        </h2>
      </motion.div>
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-start"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.p
          variants={fadeUp}
          className="text-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Most telehealth products treat the emergency case as an afterthought —
          a "call 911" disclaimer buried in the footer. But emergency situations
          are exactly when digital tools can provide the most value: step-by-step
          guidance while waiting for an ambulance, location sharing for
          responders, immediate triage with a doctor via video call.
        </motion.p>
        <motion.p
          variants={fadeUp}
          className="text-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          I wanted to build a product that took that responsibility seriously.
          That meant designing the emergency flow{" "}
          <strong>first, not last</strong> — and letting it set the bar for
          clarity and responsiveness across the rest of the product.
        </motion.p>
      </motion.div>
    </div>
  </section>
);

// ─── Risks ────────────────────────────────────────────────────────────────────
const RisksSection = () => (
  <section style={{ background: COLORS.dark }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: COLORS.red }}
        >
          Risks
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
            key={r.label}
            variants={fadeUp}
            className="flex gap-6 p-7 rounded-sm"
            style={{
              background: COLORS.darkCard,
              borderLeft: `3px solid ${COLORS.red}`,
            }}
          >
            <div
              className="text-xs font-black pt-1 shrink-0"
              style={{ color: COLORS.red }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">{r.label}</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
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
const LearningsSection = () => (
  <section style={{ background: COLORS.offWhite }} className="py-24 px-8">
    <div className="max-w-6xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <div
          className="text-xs font-bold uppercase tracking-widest mb-4"
          style={{ color: COLORS.red }}
        >
          Learnings
        </div>
        <h2
          className="font-black"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: COLORS.dark,
            lineHeight: 1.05,
          }}
        >
          What I took away
        </h2>
      </motion.div>

      <motion.div
        className="space-y-5"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {LEARNINGS.map((l, i) => (
          <motion.div
            key={l.title}
            variants={fadeUp}
            className="grid md:grid-cols-[auto_1fr] gap-6 items-start p-8 rounded-sm"
            style={{ background: COLORS.white }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: COLORS.red }}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: COLORS.dark }}
              >
                {l.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#555" }}
              >
                {l.body}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

// ─── Closing ──────────────────────────────────────────────────────────────────
const ClosingSection = () => (
  <section style={{ background: COLORS.dark }} className="py-28 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div
          className="w-12 h-1 mx-auto mb-10"
          style={{ background: COLORS.red }}
        />
        <p
          className="text-2xl md:text-3xl font-light leading-relaxed"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Baymax pushed me into product territory I hadn't designed in before —
          procedures that run under panic, information that carries medical
          weight, two-sided platforms with fundamentally different user needs.
          It's the kind of project that teaches you more than a tutorial ever
          could, because the constraints are real and{" "}
          <span className="text-white font-semibold">
            the stakes feel real
          </span>
          , even in prototype form.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── App Showcase ─────────────────────────────────────────────────────────────
const SCREENS = [
  {
    src: "/assets/img/projects/baymax/login.png",
    label: "Login",
    caption: "Dual-portal entry — patient or doctor — with a branded login screen that sets the tone immediately.",
  },
  {
    src: "/assets/img/projects/baymax/dashboard.png",
    label: "Patient Dashboard",
    caption: "Everything surfaced at a glance: emergency banner, quick actions, upcoming appointments, and live health vitals.",
  },
  {
    src: "/assets/img/projects/baymax/emergency.png",
    label: "Emergency Services",
    caption: "One tap to video call, voice call, or text a doctor. Plus direct EMT dispatch, ambulance booking, and GPS sharing.",
  },
  {
    src: "/assets/img/projects/baymax/cpr.png",
    label: "CPR Guide",
    caption: "Step-by-step CPR for Adult, Child, and Infant. Progress-tracked, audio-narrated, hands-free. A persistent 'Video Call Doctor Now' CTA throughout.",
  },
  {
    src: "/assets/img/projects/baymax/reports.png",
    label: "Medical Reports",
    caption: "A split-pane document vault — filter by category, search, and preview lab results, scans, and prescriptions inline.",
  },
  {
    src: "/assets/img/projects/baymax/messages.png",
    label: "Doctor Messaging",
    caption: "Real-time chat with treating physicians. Read receipts, voice input, and in-chat video and voice call shortcuts.",
  },
  {
    src: "/assets/img/projects/baymax/dashboard-health.png",
    label: "Health Overview",
    caption: "Ambient health vitals — heart rate, blood pressure, temperature — always visible without cluttering the primary workflow.",
  },
];

const AppShowcase = () => {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: COLORS.darkMid }} className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: COLORS.red }}
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

        {/* Main screenshot */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-sm overflow-hidden mb-6 shadow-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <img
            src={SCREENS[active].src}
            alt={SCREENS[active].label}
            className="w-full object-cover"
            style={{ maxHeight: "600px", objectPosition: "top" }}
          />
        </motion.div>

        {/* Caption */}
        <motion.div
          key={`cap-${active}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="mb-8"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest mr-3"
            style={{ color: COLORS.red }}
          >
            {SCREENS[active].label}
          </span>
          <span
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {SCREENS[active].caption}
          </span>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="flex gap-3 flex-wrap">
          {SCREENS.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className="relative rounded-sm overflow-hidden shrink-0 transition-all duration-200"
              style={{
                width: "100px",
                height: "64px",
                border: `2px solid ${i === active ? COLORS.red : "rgba(255,255,255,0.1)"}`,
                opacity: i === active ? 1 : 0.5,
              }}
            >
              <img
                src={s.src}
                alt={s.label}
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

// ─── Root ─────────────────────────────────────────────────────────────────────
const BaymaxProject = () => {
  return (
    <section className="relative" style={{ background: COLORS.dark }}>
      <HeroSection />
      <OverviewSection />
      <AppShowcase />
      <FeaturesSection />
      <DesignSection />
      <StackSection />
      <MotivationSection />
      <RisksSection />
      <LearningsSection />
      <ClosingSection />
    </section>
  );
};

export default BaymaxProject;
