export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          Adnan<span className="text-blue-500">.</span>
        </h1>

        <ul className="flex gap-8 text-sm">
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Research</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}