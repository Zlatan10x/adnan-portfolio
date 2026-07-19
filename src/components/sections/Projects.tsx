"use client";

import Image from "next/image";
import { motion } from "motion/react";

import {
  FaGithub,
  FaArrowRight,
  FaJava,
  FaRobot,
  FaCubes,
  FaNetworkWired,
  FaReact,
  FaDrone,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiGooglesheets,
  SiN8N,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFusion360,
} from "react-icons/si";

const projects = [
  {
    title: "UIU Iron Slug Multiplayer",
    image: "/projects/ironslug.png",
    description:
      "A multiplayer 2D action game inspired by Metal Slug. Built using Java, Spring Boot and WebSockets featuring synchronized gameplay, enemy AI, boss battles and multiplayer networking.",

    technologies: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "WebSocket", icon: <FaNetworkWired /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],

    github: "https://github.com/Zlatan10x",
    demo: "#",
  },

  {
    title: "Frontend Development",
    image: "/projects/frontend.png",
    description:
      "Modern responsive web applications built using Next.js, React and Tailwind CSS with smooth animations, reusable components and performance-focused design.",

    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],

    github: "https://github.com/Zlatan10x",
    demo: "#",
  },

  {
    title: "AI Automation Workflows",
    image: "/projects/automation.png",
    description:
      "Business automation workflows built using n8n, OpenRouter and Google Sheets. Includes AI-powered restaurant order processing, data extraction and workflow automation.",

    technologies: [
      { name: "n8n", icon: <SiN8N /> },
      { name: "Google Sheets", icon: <SiGooglesheets /> },
      { name: "AI", icon: <FaRobot /> },
    ],

    github: "https://github.com/Zlatan10x",
    demo: "#",
  },

  {
    title: "Fusion 360 Designs",
    image: "/projects/fusion360.png",
    description:
      "Mechanical CAD designs including UAV components, engineering prototypes and precision product designs created in Autodesk Fusion 360.",

    technologies: [
      { name: "Fusion 360", icon: <SiFusion360 /> },
      { name: "CAD Design", icon: <FaCubes /> },
    ],

    github: "https://github.com/Zlatan10x",
    demo: "#",
  },

  {
    title: "Autonomous UAV",
    image: "/projects/uav.png",
    description:
      "Designed and developed an autonomous UAV for engineering competitions featuring mechanical design, payload systems, structural analysis and computer vision integration.",

    technologies: [
      { name: "Fusion 360", icon: <SiFusion360 /> },
      { name: "Computer Vision", icon: <FaRobot /> },
      { name: "UAV", icon: <FaDrone /> },
    ],

    github: "https://github.com/Zlatan10x",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mb-16">
          A collection of software engineering, AI automation,
          frontend development, mechanical engineering and research
          projects showcasing my passion for building impactful
          solutions.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl hover:border-blue-500 transition-all"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-black px-4 py-2 rounded-full text-sm border border-zinc-700"
                  >
                    <span className="text-blue-400 text-lg">
                      {tech.icon}
                    </span>

                    {tech.name}
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 border border-zinc-700 hover:border-blue-500 px-5 py-3 rounded-xl transition"
                >
                  View Project
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}