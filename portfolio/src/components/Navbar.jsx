export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-lg border-b border-purple-500/20 text-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-purple-400">
          Anish.dev
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm md:text-base">

          <a
            href="#about"
            className="hover:text-purple-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-purple-400 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-purple-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-purple-400 transition duration-300"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}