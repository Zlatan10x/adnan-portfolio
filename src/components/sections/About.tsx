"use client";

import { motion } from "motion/react";
import {
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaMapMarkerAlt,
  FaBrain,
} from "react-icons/fa";

const cards = [
  {
    title: "Education",
    lines: ["United International University", "Computer Science & Engineering"],
    icon: FaGraduationCap,
  },
  {
    title: "Focus",
    lines: ["Frontend Development", "AI Automation", "Research"],
    icon: FaCode,
  },
  {
    title: "Projects",
    lines: ["5+", "Personal & Academic Projects"],
    icon: FaRocket,
  },
  {
    title: "Location",
    lines: ["Dhaka, Bangladesh"],
    icon: FaMapMarkerAlt,
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-32 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-500">
              ABOUT ME
            </p>
            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              Building Software That Solves Real Problems.
            </h2>
          </div>

          <div className="max-w-2xl space-y-6 text-base leading-8 text-gray-400 sm:text-lg">
            <p>
              I am a Computer Science student passionate about software
              engineering, frontend development, AI automation and mechanical
              design.
            </p>
            <p>
              I enjoy building complete products instead of only learning
              technologies. My projects range from multiplayer Java games and
              AI automation workflows to Fusion 360 engineering designs and
              autonomous UAV systems.
            </p>
            <p>
              Currently I am focused on improving my frontend development
              skills, building AI automation workflows and conducting research
              on Bangla Retrieval-Augmented Generation systems.
            </p>
          </div>

          <motion.blockquote
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[1.75rem] border border-blue-400/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.18),rgba(59,130,246,0.08))] p-6 text-lg font-medium italic leading-8 text-blue-100 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_50px_-24px_rgba(59,130,246,0.4)] backdrop-blur-xl"
          >
            “I believe the best way to learn is by building.”
          </motion.blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                whileHover={{ y: -5, scale: 1.015, boxShadow: "0 22px 60px -28px rgba(59,130,246,0.35)" }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(145deg,rgba(17,24,39,0.96),rgba(8,12,24,0.95))] p-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(147,197,253,0.12),transparent_40%)] opacity-90 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-px rounded-[1.75rem] border border-white/5" />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-2xl border border-blue-400/20 bg-blue-500/10 p-3 text-blue-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-[-0.01em] text-white">
                    {card.title}
                  </h3>
                  <div className="space-y-1 text-sm leading-7 text-gray-400">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
