"use client";

import Image from "next/image";
import { motion } from "motion/react";

import {
  FaGithub,
  FaArrowRight,
  FaCalendarAlt,
} from "react-icons/fa";

type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "UIU Iron Slug Multiplayer",
    category: "Software Engineering",
    year: "2026",
    image: "/images/projects/ironslug.png",
    description:
      "A multiplayer side-scrolling action game inspired by Metal Slug featuring real-time networking, synchronized gameplay, enemy AI, bosses, power-ups and multiplayer support built using Java and Spring Boot.",

    technologies: [
      "Java",
      "Spring Boot",
      "WebSocket",
      "MySQL",
    ],

    github: "https://github.com/Zlatan10x",
    demo: "#",
  },

  {
    title: "Autonomous UAV",
    category: "Mechanical Engineering",
    year: "2026",
    image: "/images/projects/uav.png",
    description:
      "Designed and developed an autonomous UAV for engineering competitions including structural design, payload mechanisms, CAD modelling, computer vision integration and flight system development.",

    technologies: [
      "Fusion 360",
      "PX4",
      "Jetson",
      "Computer Vision",
    ],

    github: "https://github.com/Zlatan10x",
    demo: "#",
  },

  {
    title: "AI Automation Workflows",
    category: "Artificial Intelligence",
    year: "2026",
    image: "/images/projects/automation.png",
    description:
      "Business automation workflows developed using n8n and OpenRouter APIs including intelligent restaurant order processing, webhook automation and Google Sheets integration.",

    technologies: [
      "n8n",
      "OpenRouter",
      "Google Sheets",
      "Automation",
    ],

    github: "https://github.com/Zlatan10x",
    demo: "#",
  },

  {
    title: "Frontend Development",
    category: "Web Development",
    year: "2026",
    image: "/images/projects/frontend.png",
    description:
      "Modern responsive websites built with Next.js, React, Tailwind CSS and TypeScript focusing on clean UI, reusable components, responsive layouts and smooth user experiences.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind",
      "TypeScript",
    ],

    github: "https://github.com/Zlatan10x",
    demo: "#",
  },

  {
    title: "Fusion 360 Mechanical Designs",
    category: "Product Design",
    year: "2026",
    image: "/images/projects/fusion360.png",
    description:
      "Collection of mechanical engineering projects including tablet mounts, UAV parts, housings, fixtures and precision CAD models created using Autodesk Fusion 360.",

    technologies: [
      "Fusion 360",
      "CAD",
      "Rendering",
      "Mechanical Design",
    ],

    github: "https://github.com/Zlatan10x",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section py-28 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 md:mb-16"
      >
        <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-blue-500">
          Portfolio
        </p>

        <h2 className="text-gradient text-4xl font-black sm:text-5xl md:text-6xl">
          Featured Projects
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
          A selection of software engineering, AI automation, frontend
          development and engineering projects that demonstrate practical
          problem solving and product development.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            className="group relative overflow-hidden rounded-[1.5rem] border border-zinc-800/80 bg-[linear-gradient(145deg,rgba(17,24,39,0.95),rgba(9,12,20,0.96))] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_60px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.16),0_26px_80px_-28px_rgba(59,130,246,0.35)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(147,197,253,0.08),transparent_35%)] opacity-80 transition duration-300 group-hover:opacity-100" />
            <div className="absolute inset-px rounded-[1.5rem] border border-white/5" />
            <div className="relative flex h-full flex-col">
              <div className="relative h-56 overflow-hidden rounded-t-[1.5rem] bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(3,7,18,1))] sm:h-60">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.16),transparent_55%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={700}
                  className="relative h-full w-full object-contain bg-transparent p-3 shadow-inner transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                  <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-[11px] font-medium text-blue-200 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md sm:text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaCalendarAlt className="text-[0.8rem]" />
                  <span>{project.year}</span>
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-tight text-white sm:text-[1.3rem]">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-gray-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(135deg,#2563eb,#3b82f6)] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(59,130,246,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,#3b82f6,#60a5fa)] hover:shadow-[0_14px_30px_-12px_rgba(96,165,250,0.85)]"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-white/10"
                  >
                    View Project
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center md:mt-24"
      >
        <p className="mb-5 text-base text-gray-400">
          Interested in seeing more of my work?
        </p>

        <a
          href="https://github.com/Zlatan10x"
          target="_blank"
          className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition duration-300 hover:scale-[1.01] hover:bg-blue-500"
        >
          <FaGithub />
          Visit My GitHub
        </a>
      </motion.div>

    </section>
  );
}