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
    <section
      id="projects"
      className="section py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="mb-20"
      >
        <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-blue-500">
          Portfolio
        </p>

        <h2 className="text-gradient text-5xl font-black md:text-6xl">
          Featured Projects
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          A selection of software engineering, AI automation,
          frontend development and engineering projects that
          demonstrate practical problem solving and product
          development.
        </p>
      </motion.div>

      <div  className="grid gap-8 lg:grid-cols-2">

        {projects.map((project, index) => (

          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: index * .08,
            }}
            className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/10"
          >

            <div>

                            {/* LEFT IMAGE */}

              <div className="relative h-40 overflow-hidden bg-zinc-950">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={700}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute left-8 top-8">

                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">

                    {project.category}

                  </span>

                </div>

              </div>

              {/* RIGHT CONTENT */}

              <div className="p-6">

                <div>

                  <div className="mb-6 flex items-center gap-3 text-gray-400">

                    <FaCalendarAlt />

                    <span>{project.year}</span>

                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white">

                    {project.title}

                  </h3>

                  <p className="text-gray-400 leading-7">

                    {project.description}

                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="tech-tag rounded-full px-5 py-2 text-sm text-gray-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

                <div className="mt-8 flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-3 rounded-xl border border-zinc-700 px-6 py-4 font-semibold text-white transition duration-300 hover:border-blue-500"
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
        transition={{ duration: .6 }}
        className="mt-28 text-center"
      >

        <p className="mb-6 text-lg text-gray-400">
          Interested in seeing more of my work?
        </p>

        <a
          href="https://github.com/Zlatan10x"
          target="_blank"
          className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500"
        >

          <FaGithub />

          Visit My GitHub

        </a>

      </motion.div>

    </section>
  );
}