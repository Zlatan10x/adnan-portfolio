"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[160px]" />
    </div>

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col-reverse items-center justify-between gap-20 px-6 py-20 lg:flex-row">
        {/* LEFT */}

        <div className="max-w-3xl">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            Available for Internship & Freelance
          </span>

          <h1 className="mt-8 text-6xl font-black leading-none tracking-tight text-white md:text-8xl">
            ADNAN
          </h1>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-200 md:text-5xl">
            Software Engineer
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            I design and build modern software, AI automation workflows and
            engineering solutions that solve real-world problems through clean
            design and practical innovation.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-gray-300">
              Frontend Development
            </span>

            <span className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-gray-300">
              AI Automation
            </span>

            <span className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-gray-300">
              Java Development
            </span>

            <span className="rounded-full border border-zinc-700 px-5 py-2 text-sm text-gray-300">
              Fusion 360
            </span>
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="#projects"
              className="flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-500"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 px-7 py-4 font-semibold text-white transition duration-300 hover:border-blue-500"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <a
              href="https://github.com/Zlatan10x"
              target="_blank"
              className="rounded-full border border-zinc-700 p-4 text-2xl text-gray-400 transition hover:border-blue-500 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="rounded-full border border-zinc-700 p-4 text-2xl text-gray-400 transition hover:border-blue-500 hover:text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:"
              className="rounded-full border border-zinc-700 p-4 text-2xl text-gray-400 transition hover:border-blue-500 hover:text-white"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">
          <div className="absolute h-[430px] w-[430px] rounded-full bg-blue-600/20 blur-[90px]" />

          <div className="relative overflow-hidden rounded-[36px] border border-zinc-800 bg-zinc-900 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="Adnan"
              width={430}
              height={560}
              priority
              className="h-[560px] w-[430px] object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}