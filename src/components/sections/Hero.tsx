import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center gap-20 px-6">
      {/* Left Side */}
      <div className="max-w-3xl flex-1">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
          Hello, I'm
        </p>

        <h1 className="mt-4 text-8xl font-extrabold tracking-tight text-white">
          ADNAN
        </h1>

        <p className="mt-5 text-2xl text-gray-400">
          Computer Science Student
        </p>

        <div className="mt-10 space-y-3">
          <h2 className="text-3xl font-bold text-white">
            Front-End Developer
          </h2>

          <h2 className="text-3xl font-bold text-white">
            AI Automation Engineer
          </h2>

          <h2 className="text-3xl font-bold text-white">
            3D Designer
          </h2>
        </div>

        <p className="mt-10 max-w-xl text-xl leading-8 text-gray-400">
          Building the future through software, AI and engineering.
        </p>

        <div className="mt-12 flex gap-5">
          <button className="rounded-xl bg-blue-600 px-7 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700">
            View Projects
          </button>

          <button className="rounded-xl border border-gray-600 px-7 py-4 font-medium text-white transition-all duration-300 hover:scale-105 hover:border-white">
            Resume
          </button>
        </div>

        <div className="mt-12 flex gap-7 text-3xl text-gray-400">
          <FaGithub className="cursor-pointer transition hover:text-white" />
          <FaLinkedin className="cursor-pointer transition hover:text-white" />
          <FaEnvelope className="cursor-pointer transition hover:text-white" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1 justify-center">
        <div className="flex h-[600px] w-[420px] items-center justify-center rounded-3xl border border-gray-700 bg-zinc-900 text-xl text-gray-500 shadow-2xl">
          Your Photo
        </div>
      </div>
    </section>
  );
}