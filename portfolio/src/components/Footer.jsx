export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-purple-500/20">

      <div className="max-w-6xl mx-auto text-center">

        <h3 className="text-xl text-purple-400 font-bold mb-2">
          Anish.dev
        </h3>

        <p>
          Aspiring Software Developer • React • Cloud Computing
        </p>

        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} Anish Agrawal
        </p>

      </div>

    </footer>
  )
}