import { FaCheckCircle, FaSpinner, FaRocket } from "react-icons/fa";

export default function Progress() {
  return (
    <section
      id="progress"
      className="py-24 bg-gradient-to-b from-black via-slate-950 to-black text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">
        Learning Journey
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {/* Completed */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-lg hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-6">
            <FaCheckCircle className="text-green-400 text-2xl" />
            <h3 className="text-xl font-bold text-green-400">Completed</h3>
          </div>

          <ul className="space-y-2 text-gray-300">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        {/* In Progress */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-lg hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-6">
            <FaSpinner className="text-yellow-400 text-2xl" />
            <h3 className="text-xl font-bold text-yellow-400">In Progress</h3>
          </div>

          <ul className="space-y-2 text-gray-300">
            <li>Backend Development</li>
            <li>REST APIs</li>
            <li>Data Structures & Algorithms</li>
          </ul>
        </div>

        {/* Next Goals */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-lg hover:scale-105 transition">
          <div className="flex items-center gap-3 mb-6">
            <FaRocket className="text-purple-400 text-2xl" />
            <h3 className="text-xl font-bold text-purple-400">Next Goals</h3>
          </div>

          <ul className="space-y-2 text-gray-300">
            <li>Cloud Computing</li>
            <li>System Design</li>
            <li>AI Projects</li>
          </ul>
        </div>

      </div>
    </section>
  );
}