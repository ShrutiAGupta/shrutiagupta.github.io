import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { InView } from "react-intersection-observer";
// import EvaluationFramework from "./ideas";
// import IterationSection from "./iteration";
import { THEME_COLORS, MY_IDEAS, OTHERS_IDEAS, CHECKLIST_ITEMS, RECOMMENDATIONS, VET_IMAGES, MEMBERSHIP_IMAGES, RESEARCH_DATA, PHASES, META, OBJECTIVES, DECISION_THRESHOLDS, EVALUATION_CRITERIA } from "./foodrecData";
// import RecommendationSection from "./recs";

const KeyLearningsSection = () => {
  return (
    <div
      className="px-10 pb-10"
      style={{ backgroundColor: THEME_COLORS.primary }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto"
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold pt-10 mr-[7.5rem] border-b-2 pb-2 text-white mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Key Learnings
        </motion.h2>
        <ul className="list-disc list-inside text-lg text-white space-y-2">
          <li>
            Iterative design and peer feedback sharpened strategic
            RECOMMENDATIONS.
          </li>
          <li>
            Aligning fragmented initiatives into cohesive customer experience is
            crucial.
          </li>
          <li>
            Balancing innovation with operational feasibility ensures practical
            RECOMMENDATIONS.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

const IdeationSection = () => {
  const [expandedIdea, setExpandedIdea] = useState(null);
  const [showTeamGrid, setShowTeamGrid] = useState(false);
  const [showMetric, setShowMetric] = useState(false);
  const [showFinalIdeas, setShowFinalIdeas] = useState(false);

  return (
    <section className="relative w-full">
      {/* BACKGROUND IMAGE - Sticky within viewport */}
      <div className="sticky top-0 h-screen w-full -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/assets/img/projects/petco/petco2.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: THEME_COLORS.ex1, opacity: "80%" }}
          ></div>
        </div>
      </div>

      {/* SCROLLING CONTENT - Moves over the sticky background */}
      <div className="relative -mt-[100vh]">
        {/* HEADER */}
        <div className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-8">
          <motion.h2
            className="text-[8rem] font-bold mb-6 mt-10 ml-1 mr-[7.5rem] border-b-2 pb-2 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Hypotheses
          </motion.h2>
          <motion.p
            className="text-xl text-gray-100 max-w-3xl drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Generating high level Hypotheses to address the core problem
            statements identified during research.
          </motion.p>
        </div>

        {/* MY THREE IDEAS - With extending rationale lines */}
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            {MY_IDEAS.map((idea, index) => (
              <InView
                key={idea.title}
                as="div"
                onChange={(inView) => {
                  if (inView && expandedIdea === null) {
                    setExpandedIdea(index);
                  } else if (inView && expandedIdea < index) {
                    setExpandedIdea(index);
                  }
                }}
                threshold={0.3}
              >
                <div className="relative">
                  {/* Main Idea Box */}
                  <motion.div
                    className="border-2 rounded-lg p-6 bg-white/95 backdrop-blur-sm shadow-lg relative z-10"
                    style={{ borderColor: THEME_COLORS.primary }}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <span
                      className="text-sm font-semibold uppercase tracking-wide"
                      style={{ color: THEME_COLORS.primary }}
                    >
                      Idea {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 mb-3">
                      {idea.title}
                    </h3>
                    <p className="text-gray-700">{idea.summary}</p>
                  </motion.div>

                  {/* Vertical Line extending down */}
                  <AnimatePresence>
                    {expandedIdea >= index && (
                      <motion.div
                        className="absolute left-1/2 top-full -translate-x-1/2 w-0.5 z-0"
                        style={{ backgroundColor: THEME_COLORS.secondary }}
                        initial={{ height: 0 }}
                        animate={{ height: "400px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Rationale points along the line */}
                  <AnimatePresence>
                    {expandedIdea >= index && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-8 w-80">
                        {idea.rationale.map((point, idx) => (
                          <motion.div
                            key={idx}
                            className="relative mb-12 last:mb-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.6 + idx * 0.2,
                            }}
                          >
                            {/* Text */}
                            <div
                              className="border rounded-lg p-4 shadow-sm bg-white/95 backdrop-blur-sm"
                              style={{ borderColor: THEME_COLORS.primary }}
                            >
                              <p className="text-sm text-gray-700 leading-relaxed">
                                {point}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </InView>
            ))}
          </div>

          {/* Scroll spacer to allow rationale to fully show */}
          <div className="h-[50vh]"></div>
        </div>

        {/* TEAM IDEATION CONTEXT - 2x2 Grid */}
        <InView
          as="div"
          onChange={(inView) => inView && setShowTeamGrid(true)}
          threshold={0.3}
        >
          <div
            className="mx-auto px-8 py-32"
            style={{ background: THEME_COLORS.ex4 }}
          >
            <motion.h3
              className="text-4xl font-bold mb-20 text-center text-white"
              initial={{ opacity: 0 }}
              animate={showTeamGrid ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              But I wasn't the only one ideating
            </motion.h3>

            {/* 2x2 Grid Container */}
            <div className="relative max-w-5xl mx-auto">
              {/* Grid Layout */}
              <div className="grid grid-cols-2 gap-8">
                {/* Cell 1,1 - YOUR CONCEPTS - Large Box with extended ideas */}
                <motion.div
                  className="relative row-span-1 col-span-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={showTeamGrid ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className="border-4 rounded-lg p-8 flex flex-col justify-center shadow-xl bg-white/95 backdrop-blur-sm h-64"
                    style={{ borderColor: THEME_COLORS.primary }}
                  >
                    <h4
                      className="text-3xl font-bold mb-6"
                      style={{ color: THEME_COLORS.primary }}
                    >
                      My Concepts
                    </h4>
                    <div className="space-y-3">
                      {MY_IDEAS.map((idea, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: THEME_COLORS.primary }}
                          ></div>
                          <span className="text-gray-700 font-medium">
                            {idea.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Extended concept labels for My Concepts - to the right */}
                  {/* {MY_IDEAS.map((idea, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute left-full ml-8"
                      style={{ top: `${30 + idx * 25}%` }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={showTeamGrid ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    >
                      {/* Connecting line *
                      <svg className="absolute right-full top-1/2 -translate-y-1/2" width="32" height="2">
                        <line x1="0" y1="1" x2="32" y2="1" stroke="white" strokeWidth="2"/>
                      </svg>
                      <div className="text-white text-lg font-medium whitespace-nowrap">
                        {idea.title}
                      </div>
                    </motion.div>
                  ))} */}
                </motion.div>

                {/* Cell 1,2 - TEAMMATE A */}
                <motion.div
                  className="relative flex items-end justify-start"
                  initial={{ opacity: 0 }}
                  animate={showTeamGrid ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div
                    className="w-48 h-48 border-2 rounded-lg p-6 flex flex-col justify-center items-center bg-white/95 backdrop-blur-sm shadow-lg"
                    style={{ borderColor: THEME_COLORS.primary }}
                  >
                    <p
                      className="font-bold text-xl mb-2"
                      style={{ color: THEME_COLORS.primary }}
                    >
                      Teammate A
                    </p>
                    <p className="text-sm text-gray-400">3 concepts</p>
                  </div>

                  {/* Extended concepts for Teammate A - to the right */}
                  <div>
                    {[1, 2, 3].map((num, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute left-full ml-8"
                        style={{ top: `${20 + idx * 30}%`, marginLeft: "-50%" }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={showTeamGrid ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                      >
                        {/* <svg className="absolute right-full top-1/2 -translate-y-1/2" width="32" height="2">
                        <line x1="0" y1="1" x2="32" y2="1" stroke="white" strokeWidth="2"/>
                      </svg> */}
                        <div className="text-white text-lg font-medium whitespace-nowrap">
                          {OTHERS_IDEAS[1][idx]}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Cell 2,1 - TEAMMATE B */}
                <motion.div
                  className="relative flex items-start justify-end"
                  initial={{ opacity: 0 }}
                  animate={showTeamGrid ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div
                    className="w-48 h-48 border-2 rounded-lg p-6 flex flex-col justify-center items-center bg-white/95 backdrop-blur-sm shadow-lg"
                    style={{ borderColor: THEME_COLORS.primary }}
                  >
                    <p
                      className="font-bold text-xl mb-2"
                      style={{ color: THEME_COLORS.primary }}
                    >
                      Teammate B
                    </p>
                    <p className="text-sm text-gray-400">3 concepts</p>
                  </div>

                  {/* Extended concepts for Teammate B - to the left */}
                  <div>
                    {[1, 2, 3].map((num, idx) => (
                      <motion.div
                        key={idx}
                        className="absolute right-full mr-8"
                        style={{
                          top: `${20 + idx * 30}%`,
                          marginRight: "-50%",
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={showTeamGrid ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.4 + idx * 0.1 }}
                      >
                        {/* <svg className="absolute left-full top-1/2 -translate-y-1/2" width="32" height="2">
                        <line x1="0" y1="1" x2="32" y2="1" stroke="white" strokeWidth="2"/>
                      </svg> */}
                        <div className="text-white text-lg font-medium whitespace-nowrap text-right">
                          {OTHERS_IDEAS[2][idx]}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Cell 2,2 - TEAMMATE C */}
                <motion.div
                  className="relative flex items-start justify-start"
                  initial={{ opacity: 0 }}
                  animate={showTeamGrid ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div
                    className="w-48 h-48 border-2 rounded-lg p-6 flex flex-col justify-center items-center bg-white/95 backdrop-blur-sm shadow-lg"
                    style={{ borderColor: THEME_COLORS.primary }}
                  >
                    <p
                      className="font-bold text-xl mb-2"
                      style={{ color: THEME_COLORS.primary }}
                    >
                      Teammate C
                    </p>
                    <p className="text-sm text-gray-400">3 concepts</p>
                  </div>

                  {/* Extended concepts for Teammate C - to the right */}
                  {[1, 2, 3].map((num, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute left-full ml-8"
                      style={{ top: `${20 + idx * 30}%`, marginLeft: "-50%" }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={showTeamGrid ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.6 + idx * 0.1 }}
                    >
                      {/* <svg className="absolute right-full top-1/2 -translate-y-1/2" width="32" height="2">
                        <line x1="0" y1="1" x2="32" y2="1" stroke="white" strokeWidth="2"/>
                      </svg> */}
                      <div className="text-white text-lg font-medium whitespace-nowrap">
                        {OTHERS_IDEAS[3][idx]}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Total count */}
            <motion.div
              className="text-center text-white mt-16 text-lg"
              initial={{ opacity: 0 }}
              animate={showTeamGrid ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <strong>12 total ideas</strong> from 4 team members
            </motion.div>
          </div>

          {/* Scroll spacer */}
          {/* <div className="h-[30vh]"></div> */}
        </InView>

        {/* EVALUATION METRIC */}
        <InView
          as="div"
          onChange={(inView) => inView && setShowMetric(true)}
          threshold={0.3}
        >
          <div className="mx-auto px-8 py-20 bg-white/10 backdrop-blur-md">
            <motion.h3
              className="text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0 }}
              animate={showMetric ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              We needed a way to evaluate these ideas
            </motion.h3>

            <motion.p
              className="text-gray-100 text-lg max-w-3xl mb-12"
              initial={{ opacity: 0 }}
              animate={showMetric ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Each concept was assessed against a shared framework measuring
              strategic alignment, customer value, operational feasibility, and
              revenue potential.
            </motion.p>

            {/* <motion.div
              className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={showMetric ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            > */}
            <EvaluationFramework />
            {/* </motion.div> */}
          </div>

          {/* Scroll spacer */}
          {/* <div className="h-[30vh]"></div> */}
        </InView>

        {/* SURVIVING IDEAS */}
        <InView
          as="div"
          onChange={(inView) => inView && setShowFinalIdeas(true)}
          threshold={0.3}
        >
          <div className="mx-auto px-8 py-20 pb-32 bg-[#0e2134]/10 backdrop-blur-md">
            <motion.h3
              className="text-4xl font-bold mb-4 text-center text-white"
              initial={{ opacity: 0 }}
              animate={showFinalIdeas ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Only the strongest ideas moved forward
            </motion.h3>

            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
              {RECOMMENDATIONS.map((concept, idx) => (
                <motion.div
                  key={concept.name}
                  className="flex-1 border-4 rounded-lg p-8 bg-white/95 backdrop-blur-sm shadow-xl"
                  style={{ borderColor: THEME_COLORS.primary }}
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={showFinalIdeas ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 + idx * 0.2 }}
                >
                  <div
                    className="text-sm font-bold mb-3 uppercase tracking-wide"
                    style={{ color: THEME_COLORS.primary }}
                  >
                    Selected Concept {idx + 1}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-900">
                    {concept.name}
                  </h4>
                  <p className="text-gray-600">{concept.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </InView>
      </div>
    </section>
  );
};

const RecommendationSection = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [currentSection, setCurrentSection] = useState(null);

  const handleCheck = (itemId) => {
    console.log(itemId);
    if (!checkedItems.includes(itemId)) {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  return (
    <section className="w-full bg-white">
      <InView
        as="div"
        onChange={(inView) => inView && handleCheck(1)}
        threshold={0.5}
      >
        <div className="min-h-screen flex">
          {/* Checklist - Left Half (Dark/Black) */}
          <motion.div
            className="w-1/3 flex items-start justify-center px-16 py-10"
            style={{ backgroundColor: THEME_COLORS.ex5 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-md">
              <h3 className="text-3xl font-bold text-white mb-10">
                Project Components
              </h3>
              <div className="space-y-6">
                {CHECKLIST_ITEMS.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.id * 0.1 }}
                  >
                    <div
                      className={`w-6 h-6 rounded-sm border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 mt-1 ${
                        checkedItems.includes(item.id)
                          ? "bg-white border-white"
                          : "border-white/40"
                      }`}
                    >
                      {checkedItems.includes(item.id) && (
                        <FaCheck className="text-[#1a1a1a] text-xs" />
                      )}
                    </div>
                    <span
                      className={`text-lg leading-relaxed ${
                        checkedItems.includes(item.id)
                          ? "text-white font-medium"
                          : "text-white/50"
                      }`}
                    >
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recommendations - Right Half (Gray with inner rust box) */}
          <motion.div
            className="w-2/3 flex items-start justify-center px-16 py-10"
            style={{ backgroundColor: THEME_COLORS.primary }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full max-w-3xl">
              <div className="max-w-6xl pr-8 pb-16">
                <motion.h2
                  className="text-5xl md:text-6xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Recommendations
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-600 max-w-3xl text-white/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Two high-impact initiatives designed to strengthen customer
                  loyalty, increase engagement, and drive sustainable revenue
                  growth.
                </motion.p>
              </div>
              {/* Inner rust/terracotta box */}
              <div
                className="p-12 rounded-sm"
                style={{ backgroundColor: THEME_COLORS.ex4 }}
              >
                <div className="space-y-12">
                  {RECOMMENDATIONS.map((rec, idx) => (
                    <motion.div
                      key={rec.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.15 }}
                    >
                      <div className="text-xs font-bold text-white/70 mb-3 uppercase tracking-widest">
                        Recommendation {idx + 1}
                      </div>
                      <h4 className="text-3xl font-bold mb-4 text-white">
                        {rec.title}
                      </h4>
                      <p className="text-white/90 text-lg leading-relaxed">
                        {rec.shortDesc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <div className="h-[20vh]"></div> */}
      </InView>

      {/* Recommendation1 */}
      <InView
        as="div"
        onChange={(inView) => inView && handleCheck(2)}
        threshold={0.5}
      >
        <div
          className="w-full bg-gray-50 p-20 flex justify-end flex-row items-end"
          style={{
            background: "url('/assets/img/projects/petco/rec (1).png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
          }}
        >
          {/* <div className="mx-auto"> */}
          {/* <div className="max-w-6xl mx-auto px-8 mb-12"> */}

          {/* </div> */}
          <motion.div
            className="w-2/5 self-end bg-white/70 overflow-hidden shadow-xl  backdrop-blur-sm p-10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {RECOMMENDATIONS[0].title}
            </motion.div>
            <motion.div
              className="text-gray-600 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {RECOMMENDATIONS[0].desc}
            </motion.div>
            <motion.div
              className="text-gray-600 text-lg mt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Services Include:
              <ul className="mt-2">
                <li className="list-disc ml-5">Annual exams</li>
                <li className="list-disc ml-5">Mild illness diagnostics</li>
                <li className="list-disc ml-5">
                  Dignified euthanasia & mortuary
                </li>
                <li className="list-disc ml-5">Vaccination services</li>
              </ul>
            </motion.div>
          </motion.div>
          {/* </div> */}
        </div>
      </InView>

      <InView
        as="div"
        onChange={(inView) => inView && handleCheck(3)}
        threshold={0.5}
      >
        <div className="px-10" style={{ background: THEME_COLORS.ex4 }}>
            {VET_IMAGES.map((imgblock, i) => (
            <div
              className={`grid items-start max-w-6xl mx-auto py-20 gap-12 md:grid-cols-${imgblock.gridSize}`}
            >
              {imgblock.imgs.map((imgname, idx) => (
                <motion.div
                  key={idx} // Don't forget the key!
                  className=""
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={`/assets/img/projects/petco/${imgname}`} // Use backticks for template literals
                    alt="Mobile Vet Data"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* <div className="h-[20vh]"></div> */}
      </InView>

      {/* Recommendation 2 */}
      <InView
        as="div"
        onChange={(inView) => inView && handleCheck(4)}
        threshold={0.5}
      >
        <div
          className="w-full p-20 flex justify-start flex-row items-end"
          style={{
            background: "url('/assets/img/projects/petco/rec (26).png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
          }}
        >
          {/* <div className="mx-auto"> */}
          {/* <div className="max-w-6xl mx-auto px-8 mb-12"> */}

          {/* </div> */}
          <motion.div
            className="w-2/5 self-end bg-[#1c446c]/80 overflow-hidden shadow-xl backdrop-blur-sm p-10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {RECOMMENDATIONS[1].title}
            </motion.div>
            <motion.div
              className="text-white text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {RECOMMENDATIONS[1].desc}
            </motion.div>
            <motion.div
              className="text-white text-lg mt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Include:
              <ul className="mt-2">
                <li className="list-disc ml-5">Flexible subscription</li>
                <li className="list-disc ml-5">Gamified rewards system</li>
                <li className="list-disc ml-5">
                  User vs. Company Value Proposition
                </li>
                <li className="list-disc ml-5">Execution Plan</li>
              </ul>
            </motion.div>
          </motion.div>
          {/* </div> */}
        </div>
      </InView>

      <InView as="div" threshold={0.5}>
        <div className="px-10" style={{ background: THEME_COLORS.ex4 }}>
            {MEMBERSHIP_IMAGES.map((imgblock, i) => (
            <div
              className={`grid items-start max-w-6xl mx-auto py-20 gap-12 md:grid-cols-${imgblock.gridSize}`}
            >
              {imgblock.imgs.map((imgname, idx) => (
                <motion.div
                  key={idx} // Don't forget the key!
                  className=""
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={`/assets/img/projects/petco/${imgname}`} // Use backticks for template literals
                    alt="Mobile Vet Data"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* <div className="h-[20vh]"></div> */}
      </InView>

      {/* RISK & MITIGATION - Alternating Layout */}
      <InView
        as="div"
        onChange={(inView) => inView && handleCheck(5)}
        threshold={0.4}
        style={{ backgroundColor: "white" }}
      >
        <div className="pb-20">
          <motion.h2
            className="text-5xl md:text-6xl font-bold pt-10 ml-10 mr-[7.5rem] border-b-2 pb-2 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Risk & Mitigation Strategies
          </motion.h2>

          <div className="flex flex-col md:flex-row items-start px-10 justify-between">
            <div className="justify-center bg-gray/70 w-[27%]">
              <h4 className="text-2xl font-bold mb-6">
                {RECOMMENDATIONS[0].title}
              </h4>
              <div className="">
                {RECOMMENDATIONS[0].risks.map((risk, idx) => (
                  <div key={idx} className="mb-6">
                    <p className="font-semibold mb-2">
                      {idx + 1}. {risk.title}
                    </p>
                    <p className="">Mitigation: {risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex h-full">
              <div className="vertical-shooter mr-4 h-0 -rotate-90 center-items self-center">
                Impact
              </div>
              <div className="h-full">
                <div className="border-b-2 pb-2 border-l-2 pl-2">
                  <div className="grid md:grid-cols-3 gap-1">
                    <div
                      className="h-[120px] w-[120px] flex justify-center items-center p-2 font-bold"
                      style={{ background: "#bd981b" }}
                    >
                      &nbsp;
                    </div>
                    <div
                      className="h-[120px] w-[120px] flex justify-center items-center p-2 font-bold"
                      style={{ background: "#8d0000" }}
                    >
                      &nbsp;
                    </div>
                    <div
                      className="h-[120px] w-[120px] flex justify-center items-center p-2 font-bold"
                      style={{ background: "#8d0000" }}
                    >
                      &nbsp;
                      <span className="w-[30%] h-[30%] flex bg-white self-center justify-center rounded-[50%] items-center">
                        5
                      </span>
                    </div>
                    <div
                      className="h-[120px] w-[120px] flex justify-center items-center p-2 font-bold"
                      style={{ background: "#005000" }}
                    >
                      &nbsp;
                    </div>
                    <div
                      className="h-[120px] w-[120px] flex p-2 font-bold"
                      style={{ background: "#bd981b" }}
                    >
                      <span className="w-[30%] h-[30%] flex bg-white self-start justify-center rounded-[50%] items-center">
                        2
                      </span>
                      <span className="w-[30%] h-[30%] flex bg-white self-center justify-center rounded-[50%] items-center">
                        3
                      </span>
                      <span className="w-[30%] h-[30%] flex bg-white self-end justify-center rounded-[50%] items-center">
                        4
                      </span>
                    </div>
                    <div
                      className="h-[120px] w-[120px] flex justify-center items-center p-2 font-bold"
                      style={{ background: "#8d0000" }}
                    >
                      &nbsp;
                    </div>
                    <div
                      className="h-[120px] w-[120px] flex justify-center items-center p-2 font-bold"
                      style={{ background: "#005000" }}
                    >
                      <span className="w-[30%] h-[30%] flex bg-white self-center justify-center rounded-[50%] items-center">
                        1
                      </span>
                    </div>
                    <div
                      className="h-[120px] w-[120px] flex justify-center items-center p-2 font-bold"
                      style={{ background: "#005000" }}
                    >
                      <span className="w-[30%] h-[30%] flex bg-white self-center justify-center rounded-[50%] items-center">
                        6
                      </span>
                    </div>
                    <div
                      className="h-[120px] w-[120px] flex justify-center items-center p-2 font-bold"
                      style={{ background: "#bd981b" }}
                    >
                      &nbsp;
                    </div>
                  </div>
                </div>
                <div className="horizontal-shooter w-full mt-2 text-center">
                  {"Likelihood (Low --> High)"}
                </div>
              </div>
            </div>
            <div className="justify-center bg-gray/70 w-[27%]">
              <h4 className="text-2xl font-bold mb-6">
                {RECOMMENDATIONS[1].title}
              </h4>
              <div className="">
                {RECOMMENDATIONS[1].risks.map((risk, idx) => (
                  <div key={idx} className="mb-6">
                    <p className="font-semibold mb-2">
                      {idx + 4}. {risk.title}
                    </p>
                    <p className="">Mitigation: {risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
};

const ImageAnnotation = () => {
  const [activePoint, setActivePoint] = useState(null);

  return (
    <section className="w-full pt-[5%] h-screen">
      <div className="mx-auto px-8 py-20">
        {/* Header */}

        {/* Image with Annotations */}
        <div className="relative items-center flex flex-col">
          {/* Main Image Container */}
          <div className="relative w-[60%]">
            <img
              src="/assets/img/projects/petco/petco3.png"
              alt="Analysis"
              className="w-full h-auto"
            />

            {/* Annotation Points */}
            {RESEARCH_DATA.map((point, idx) => (
              <div key={point.id}>
                {/* Point Marker */}
                <motion.div
                  className="absolute cursor-pointer"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  // viewport={{ once: true }}
                  // transition={{ delay: point.id * 0.2 }}
                  // onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                  // whileHover={{ scale: 1.2 }}
                >
                  {/* Pulsing Circle */}
                  <div className="relative">
                    <div className="w-6 h-6 bg-red-500 rounded-full  absolute opacity-75"></div>
                    <div className="w-6 h-6 bg-red-500 rounded-full relative flex items-center justify-center text-white text-xs font-bold">
                      {point.id}
                    </div>
                  </div>
                </motion.div>

                {/* Connecting Line */}
                <AnimatePresence>
                  {/* {activePoint === point.id && (
                    <motion.div
                      className="absolute border-t-2 border-gray-600"
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                        width: point.x > 50 ? '120px' : '120px',
                        transformOrigin: point.x > 50 ? 'left center' : 'right center',
                        transform: point.x > 50 ? 'translateY(-100%)' : 'translateY(0)'
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: '120px' }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )} */}
                </AnimatePresence>

                {/* Callout Box */}
                <AnimatePresence>
                  {
                    <motion.div
                      className="absolute z-10"
                      style={{
                        left: `${point.x_origin}%`,
                        top: `${point.y_origin}%`,
                        width: "500px",
                      }}
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        x: point.x > 50 ? 20 : -20,
                      }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        x: point.x > 50 ? 20 : -20,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white border-2 border-gray-800 rounded-lg p-4 shadow-2xl max-w-xs">
                        <h3 className="font-bold text-lg mb-3">
                          #{idx + 1}. {point.title}
                        </h3>
                        <p className="text-gray-700 text-sm">
                          {point.workflow}
                        </p>
                        {/* <ul className="space-y-2 text-sm text-gray-700 mb-4">
                          {point.lines.map((line, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="mr-2">-</span>
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul> */}
                        {/* <span 
                          className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                            point.priority === 'high' 
                              ? 'bg-red-100 text-red-700' 
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {point.priority === 'high' ? '🔺 High priority' : '✓ Low priority'}
                        </span> */}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <motion.p
            className="text-center text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Click on the numbered points to view insights
          </motion.p>
        </div>
      </div>
    </section>
  );
};

const ResearchSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <section className="relative">
      <motion.h2
        className="text-[8rem] md:text-6xl font-bold mb-6 mt-10 ml-10 mr-[7.5rem] border-b-2 pb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Research & Disaggregation
      </motion.h2>
      <ImageAnnotation />
      <div className="sticky top-0 h-screen flex items-center">
        <div className="mx-auto w-full flex flex-col md:flex-row items-center h-full">
          {/* Text - Left Side */}
          <div
            className="md:w-[25%] h-full p-10 pt-[5%] text-white"
            style={{ background: THEME_COLORS.ex5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between h-full"
              >
                <div className="">
                  <h2 className="text-4xl font-bold mb-4">
                    {RESEARCH_DATA[currentStep].title}
                  </h2>
                  <ul className="text-md leading-relaxed list-disc pl-5">
                    {RESEARCH_DATA[currentStep].problems.map((problem, idx) => (
                      <li key={idx} className="mb-3">
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-lg leading-relaxed pt-2 border-t-2 border-solid border-white">
                  {RESEARCH_DATA[currentStep].insight}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Window - Right Side */}
          <div
            className="md:w-[75%] h-full items-center flex flex-col p-10 pt-[8%]"
            style={{ background: THEME_COLORS.primary }}
          >
            {/* Sticky container for text and image */}
            <div
              className="drop-shadow-lg w-[90%]"
              style={{
                border: "21px solid black",
                borderRadius: "26px",
                background: "black",
              }}
            >
              <div
                className="relative h-[550px] overflow-hidden shadow-2xl"
                style={{
                  border: "10px solid gray",
                  borderRadius: "11px",
                  background: "white",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentStep}
                    src={RESEARCH_DATA[currentStep].image}
                    alt={RESEARCH_DATA[currentStep].title}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invisible scroll triggers */}
      <div className="relative">
        {RESEARCH_DATA.map((_, idx) => (
          <InView
            as="div"
            key={idx}
            onChange={(inView) => inView && setCurrentStep(idx)}
            threshold={0.6}
          >
            <div className="h-screen"></div>
          </InView>
        ))}
      </div>
    </section>
  );
};

const StepsSection = () => {
  return (
    <div
      className="m-0"
      style={{
        backgroundColor: THEME_COLORS.ex4,
        borderColor: THEME_COLORS.secondary,
      }}
    >
      <div>
        <motion.h2
          className="text-5xl md:text-6xl font-bold pt-10 ml-10 mr-[7.5rem] border-b-2 pb-2 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Process
        </motion.h2>
      </div>
      <div className="grid md:grid-cols-4 gap-8 px-8 py-8">
        {PHASES.map((phase, index) => {
          // const hasBgImage = Boolean(phase.bgImage);

          return (
            <div
              key={index}
              className="relative border-3 flex px-5 pb-5 pt-5 border-2 border-solid text-white h-[150px]"
              style={{ borderColor: THEME_COLORS.secondary }}
            >
              {/* optional overlay for readability */}

              <div className="relative z-10">
                <div className="items-start justify-end flex flex-col h-full">
                  <div className="text-5xl font-bold">{index + 1}.</div>
                  <div className="text-2xl font-semibold">{phase.title}</div>
                </div>

                {/* your content / images here */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AnalysisSection = () => {
  return (
    <section className="w-full bg-white">
      <motion.h2
        className="text-[8rem] md:text-6xl font-bold mb-6 pt-10 ml-10 mr-[7.5rem] border-b-2 pb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Analysis
      </motion.h2>
      Once we selected the strongest hypothesis, we designed an analytical plan
      to answer four decision-critical questions. What questions were we trying
      to answer? Is there real unmet demand, or just anecdotal frustration? Is
      Petco structurally advantaged vs competitors? Would customers pay for
      this, and at what level? Can this scale without breaking operations? Does
      this meaningfully move revenue or retention? What did we prioritize — and
      why? Given limited time and public data constraints, we prioritized
      analyses that directly affected go/no-go decisions. High-confidence,
      high-impact (we did these) Directional but imperfect (we used proxies) Out
      of scope (explicitly acknowledged) What insights actually changed our
      thinking? Convenience, not price, was the dominant driver of missed care
      Insights were tested and refined through multiple feedback loops — shaping
      the storyline, stress-tested in red team review, and validated in final
      presentation. ``
    </section>
  );
};

const DisaggregationSection = () => {
  const [visibleColumn, setVisibleColumn] = useState(0);

  return (
    <section className="w-full" style={{ background: THEME_COLORS.ex4 }}>
      <motion.h2
        className="text-[2rem] font-bold mb-6 pt-10 ml-10  pb-2 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Disaggregation framework at a glance to generate high-level hypothesis
      </motion.h2>

      <InView
        as="div"
        onChange={(inView) => inView && setVisibleColumn(5)}
        threshold={0.2}
      >
        <div className="relative">
          <div className="flex justify-between px-10">
            {/* COLUMN 0 - Category Label (Vertical) */}
            {/* <motion.div
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: '120px' }}
                initial={{ opacity: 0, x: -50 }}
                animate={visibleColumn >= 0 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center h-full">
                  <img src="/assets/img/projects/petco/petco3.png" className="-rotate-90"/>
                </div>
              </motion.div> */}

            {/* COLUMN 1 - Research Areas (using workflow as subtitle) */}
            <div className="flex-shrink-0 flex flex-col gap-6 py-4 w-[20%]">
              {RESEARCH_DATA.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="relative flex items-center h-full"
                  initial={{ opacity: 0, x: -30 }}
                  animate={visibleColumn >= 1 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div
                    className="w-full px-6 py-6 rounded-lg shadow-lg"
                    style={{ background: THEME_COLORS.ex1 }}
                    // style={{ minHeight: '140px' }}
                  >
                    <p className="font-bold text-white text-lg mb-2 leading-tight">
                      {item.title}
                    </p>
                    {/* <p className="text-white/70 text-xs leading-relaxed">{item.workflow}</p> */}
                  </div>

                  {/* Connector line to next column */}
                  {/* {visibleColumn >= 2 && (
                      <div className="absolute left-full w-8 top-1/2 -translate-y-1/2">
                        <div className="h-0.5 w-full bg-[#5B8FA3]"></div>
                      </div>
                    )} */}
                </motion.div>
              ))}
            </div>

            {/* COLUMN 2 - Problems */}
            <div className="flex-shrink-0 flex flex-col justify-between py-4 w-[28%]">
              {RESEARCH_DATA.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-2 justify-center my-2"
                  style={{ minHeight: "140px" }}
                >
                  {item.problemsBrief.map((problem, probIdx) => (
                    <motion.div
                      key={probIdx}
                      className="relative"
                      initial={{ opacity: 0, x: -30 }}
                      animate={visibleColumn >= 2 ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + idx * 0.1 + probIdx * 0.05,
                      }}
                    >
                      <div className="px-4 py-2 text-sm text-white flex items-center gap-2">
                        <span className="flex-shrink-0 mt-1">•</span>
                        <span className="leading-snug">{problem}</span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Connector line to next column */}
                  {/* {visibleColumn >= 3 && idx === 0 && (
                      <div className="absolute left-full w-8 top-1/2 -translate-y-1/2">
                        <div className="h-0.5 w-full bg-[#5B8FA3]"></div>
                      </div>
                    )} */}
                </div>
              ))}
            </div>

            {/* COLUMN 3 - Insights */}
            <div className="flex-shrink-0 flex flex-col justify-between py-4 w-[25%]">
              {RESEARCH_DATA.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="relative flex items-center"
                  style={{
                    minHeight: "140px",
                    background: THEME_COLORS.secondary,
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={visibleColumn >= 3 ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                >
                  <div className={`w-full px-6 py-6 rounded-lg shadow-lg`}>
                    {/* <div className="flex items-start gap-2 mb-2">
                        <span className="text-xl">💡</span>
                        <p className="text-xs font-bold text-amber-800 uppercase">Core Insight</p>
                      </div> */}
                    <p className="text-sm text-white leading-relaxed">
                      {item.insight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* COLUMN 5 - Strategic Recommendations (Combined) */}
            <div className="flex-shrink-0 flex flex-col py-4 w-[20%] justify-between">
              {RESEARCH_DATA.map(
                (idea, index) =>
                  index !== 2 && (
                    <motion.div
                      key={idea.id}
                      className={`relative`}
                      style={{ height: `${index === 1 ? 45 : 22}%` }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={visibleColumn >= 5 ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.6 + index * 0.15 }}
                    >
                      <div className="w-full h-full px-6 py-8 rounded-lg shadow-xl border-2 border-white text-white flex items-center">
                        <div>
                          <div className="text-xs font-bold uppercase mb-3">
                            Idea
                          </div>
                          <p className="text-sm leading-relaxed">
                            {idea.hypothesis}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ),
                  // </InView>
              )}
            </div>
          </div>
        </div>
      </InView>
    </section>
  );
};

const EvaluationFramework = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const criteria = EVALUATION_CRITERIA;
  const decisionThresholds = DECISION_THRESHOLDS;

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header */}

      {/* Criteria Cards */}
      <div style={{ marginBottom: "4rem" }}>
        {criteria.map((criterion, index) => (
          <div
            key={criterion.id}
            style={{
              marginBottom: "1.5rem",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${THEME_COLORS.ex7}22`,
              overflow: "hidden",
              transition: "all 0.3s ease",
              animation: `slideIn 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            {/* Criterion Header */}
            <div
              onClick={() =>
                setExpandedSection(
                  expandedSection === criterion.id ? null : criterion.id,
                )
              }
              style={{
                padding: "1.75rem 2rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: `linear-gradient(90deg, ${criterion.color}22 0%, transparent 100%)`,
                borderLeft: `4px solid ${criterion.color}`,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `linear-gradient(90deg, ${criterion.color}33 0%, transparent 100%)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(90deg, ${criterion.color}22 0%, transparent 100%)`;
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      margin: "0",
                      color: "#ffffff",
                    }}
                  >
                    {criterion.title}
                  </h2>
                  <span
                    style={{
                      background: criterion.color,
                      color: "#ffffff",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "20px",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      fontFamily: '"Courier New", monospace',
                    }}
                  >
                    {criterion.weight}%
                  </span>
                </div>
                <p
                  className="text-white"
                  style={{
                    margin: "0",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                    fontFamily: '"Trebuchet MS", sans-serif',
                  }}
                >
                  {criterion.description}
                </p>
              </div>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  background: `${THEME_COLORS.ex7}22`,
                  transition: "transform 0.3s ease",
                  transform:
                    expandedSection === criterion.id
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                }}
              >
                <span style={{ fontSize: "1.25rem", color: "white" }}>▼</span>
              </div>
            </div>

            {/* Expanded Sub-Criteria */}
            {expandedSection === criterion.id && (
              <div
                style={{
                  padding: "0 2rem 1.75rem",
                  animation: "fadeIn 0.4s ease-out",
                }}
              >
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "1rem",
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        background: `${THEME_COLORS.ex1}33`,
                        borderBottom: `2px solid ${criterion.color}`,
                      }}
                    >
                      <th
                        style={{
                          padding: "1rem",
                          textAlign: "left",
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          color: THEME_COLORS.ex5,
                          fontFamily: '"Trebuchet MS", sans-serif',
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                        }}
                      >
                        Sub-Criteria
                      </th>
                      <th
                        style={{
                          padding: "1rem",
                          textAlign: "center",
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          color: THEME_COLORS.ex5,
                          fontFamily: '"Trebuchet MS", sans-serif',
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          width: "100px",
                        }}
                      >
                        Weight
                      </th>
                      <th
                        style={{
                          padding: "1rem",
                          textAlign: "left",
                          fontSize: "0.875rem",
                          fontWeight: "600",
                          color: THEME_COLORS.ex5,
                          fontFamily: '"Trebuchet MS", sans-serif',
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                        }}
                      >
                        Scoring Guide
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {criterion.subCriteria.map((sub, subIndex) => (
                      <tr
                        key={subIndex}
                        style={{
                          borderBottom: `1px solid ${THEME_COLORS.ex7}15`,
                          transition: "background 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.03)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        <td
                          style={{
                            padding: "1.25rem 1rem",
                            fontSize: "1rem",
                            fontWeight: "500",
                            color: "#ffffff",
                          }}
                        >
                          {sub.name}
                        </td>
                        <td
                          style={{
                            padding: "1.25rem 1rem",
                            textAlign: "center",
                            fontSize: "0.9rem",
                            color: "white",
                            fontWeight: "600",
                          }}
                        >
                          {sub.weight}%
                        </td>
                        <td
                          style={{
                            padding: "1.25rem 1rem",
                            fontSize: "0.875rem",
                            color: "white",
                            lineHeight: "1.6",
                          }}
                        >
                          {sub.guide}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Decision Thresholds */}
      <div
        style={{
          background: `linear-gradient(135deg, ${THEME_COLORS.ex1}66 0%, ${THEME_COLORS.ex7}22 100%)`,
          borderRadius: "12px",
          padding: "2.5rem",
          border: `1px solid ${THEME_COLORS.ex7}44`,
          animation: "fadeIn 0.8s ease-out 0.6s both",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "2rem",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          Decision Thresholds
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {decisionThresholds.map((threshold, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "10px",
                padding: "1.75rem",
                border: `2px solid ${threshold.color}`,
                animation: `slideIn 0.6s ease-out ${0.8 + index * 0.15}s both`,
              }}
            >
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "1.25rem",
                  color: "white",
                  textAlign: "center",
                  letterSpacing: "0.1em",
                  fontFamily: '"Courier New", monospace',
                }}
              >
                {threshold.category}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                  margin: "0",
                }}
              >
                {threshold.rules.map((rule, ruleIndex) => (
                  <li
                    key={ruleIndex}
                    style={{
                      fontSize: "0.9rem",
                      color: "white",
                      marginBottom: "0.75rem",
                      paddingLeft: "1.5rem",
                      position: "relative",
                      lineHeight: "1.5",
                      fontFamily: '"Trebuchet MS", sans-serif',
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: "0",
                        color: threshold.color,
                        fontWeight: "bold",
                      }}
                    >
                      •
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

const PetcoDynamicPortfolio = () => {
  return (
    <section className="relative">
      {/* Hero */}
      <div
        className="h-screen flex flex-col justify-center self-start"
        style={{
          backgroundImage: "url('/assets/img/projects/petco/petco.png')",
          backgroundSize: "cover",
        }}
      >
        <motion.div
          className="h-screen flex flex-col justify-end items-left ml-10 max-w-[60%]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold mb-4 text-white drop-shadow-lg"
            style={{
              opacity: 1,
              transform: "none",
              fontSize: "7rem",
              lineHeight: "8rem",
            }}
          >
            Petco Strategic Growth Initiatives
          </motion.h1>
          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-white max-w-xl mt-[10%] mb-10"
          >
            {/* 5-week consulting project exploring new growth opportunities for PetCo. */}
            PetCo is a leading pet care company offering products, services, and
            solutions for pet parents. They face increasing competition from
            online retailers and changing consumer preferences.
          </motion.p>
        </motion.div>
      </div>

      {/* Role / Timeline / Stakeholders */}
      <section
        className="py-16"
        style={{ backgroundColor: THEME_COLORS.secondary }}
      >
        <div className="flex flex-row">
          <div className="w-1/3 mx-auto grid md:grid-cols-2 gap-8 px-8">
            {META.map((item, index) => (
              <div className="bg-white/70 backdrop-blur-sm p-6 shadow-lg">
                <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
          <div className="w-2/3 flex flex-col px-10 items-start">
            <motion.h2
              className="text-[8rem] md:text-6xl font-bold mb-2 border-b-2 pb-2 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Objectives
            </motion.h2>
            {OBJECTIVES.map((obj, idx) => (
              <div
                key={idx}
                className="text-white p-6 text-lg shadow-lg mt-8 mr-4 w-full"
                style={{ background: THEME_COLORS.primary }}
              >
                <p>{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StepsSection />
      <ResearchSection />
      <DisaggregationSection />
      <IdeationSection />
      <AnalysisSection />
      {/* <IterationSection /> */}
      <RecommendationSection />
      <KeyLearningsSection />
    </section>
  );
};

export default PetcoDynamicPortfolio;
