export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          Adnan<span className="text-blue-500">.</span>
        </h1>

        <ul className="hidden gap-8 text-sm md:flex">
          <li className="cursor-pointer hover:text-blue-400 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            Skills
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            Projects
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            Research
          </li>
          <li className="cursor-pointer hover:text-blue-400 transition">
            Contact
          </li>
        </ul>

        <button className="rounded-md border border-gray-700 px-3 py-2 text-sm md:hidden">
          ☰
        </button>
      </div>
    </nav>
  );
}