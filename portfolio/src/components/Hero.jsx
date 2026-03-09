import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-950 to-slate-950 text-white overflow-hidden">

      {/* Purple Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[160px] opacity-30 top-20 left-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-500 rounded-full blur-[140px] opacity-20 bottom-20 right-20"></div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center shadow-2xl"
      >

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-purple-400">Anish Agrawal</span>
        </h1>

        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Aspiring Software Developer passionate about building modern web
          applications using React and exploring Cloud Computing and AI.
        </p>

        <div className="mt-10 flex justify-center gap-6">

          <button className="px-7 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition transform hover:scale-105 shadow-lg">
            View Projects
          </button>

          <button className="px-7 py-3 border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white rounded-xl transition">
            Contact Me
          </button>

        </div>

      </motion.div>

    </section>
  )
}