import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const topIterations = ["Iteration 1", "Iteration 3", "Iteration 5"];
const bottomIterations = ["Iteration 2", "Iteration 4", "Iteration 6"];

export default function IterationSection() {
  const [phase, setPhase] = useState(0);

  const topIndex = Math.floor(phase / 2);
  const bottomIndex = Math.max(0, Math.floor((phase - 1) / 2));

  return (
    <section className="w-full px-12 py-40" style={{ backgroundColor: "#0e2134" }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-6xl font-semibold mb-8">Iteration</h2>
        <p className="text-xl text-gray-600 max-w-3xl mb-10">
          Each concept progressed through multiple structured cycles of critique,
          refinement, and validation.
        </p>

        <div className="flex gap-6 text-gray-700">
          <span>Storyline checkpoint</span>
          <span>Red team review</span>
          <span>Final presentation</span>
        </div>
      </div>

      {/* Scroll Zone */}
      <div className="relative max-w-6xl mx-auto h-[400vh]">
        {/* Sticky Canvas */}
        <div className="sticky top-32 h-[70vh] flex items-center">
          <div className="relative w-full h-full">

            {/* Top Image */}
            <div className="absolute top-0 right-0 w-[60%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={topIterations[topIndex]}
                  className="h-72 border border-black bg-white flex items-center justify-center text-xl"
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.35 }}
                >
                  {topIterations[topIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Image */}
            <div className="absolute bottom-0 left-0 w-[60%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={bottomIterations[bottomIndex]}
                  className="h-72 border border-black bg-white flex items-center justify-center text-xl"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  {bottomIterations[bottomIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Orthogonal Arrows */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Bottom → Top */}
              <path
                d="M30 70 L30 40 L70 40"
                stroke="black"
                strokeWidth="0.6"
                fill="none"
                markerEnd="url(#arrow)"
              />

              {/* Top → Bottom */}
              <path
                d="M70 40 L70 70 L30 70"
                stroke="black"
                strokeWidth="0.6"
                fill="none"
                markerEnd="url(#arrow)"
              />

              <defs>
                <marker
                  id="arrow"
                  markerWidth="4"
                  markerHeight="4"
                  refX="2"
                  refY="2"
                  orient="auto"
                >
                  <path d="M0 0 L4 2 L0 4 Z" fill="black" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* Scroll Triggers (micro-steps) */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="h-screen"
            onViewportEnter={() => setPhase(i)}
            viewport={{ margin: "-45%" }}
          />
        ))}
      </div>
    </section>
  );
}
