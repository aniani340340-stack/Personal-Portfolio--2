export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 text-center">

      <p>
        © {new Date().getFullYear()} Anish Agrawal
      </p>

      <p className="mt-2">
        Built with React & Tailwind CSS
      </p>

    </footer>
  )
}