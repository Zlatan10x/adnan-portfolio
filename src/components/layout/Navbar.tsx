"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-zinc-800/80 bg-black/75 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a
            href="#home"
            className="text-2xl font-black tracking-tight text-white"
          >
            ADNAN
            <span className="text-blue-500">.</span>
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-gray-300 transition hover:text-white"
                >
                  {link.name}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 lg:block"
          >
            Hire Me
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white lg:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed left-0 top-20 z-40 w-full border-b border-zinc-800 bg-black lg:hidden">
          <div className="flex flex-col px-6 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-zinc-800 py-4 text-gray-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </>
  );
}