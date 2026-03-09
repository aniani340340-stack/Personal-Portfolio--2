export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Anish Agrawal"
            className="w-72 h-72 object-cover rounded-2xl border border-purple-500 shadow-lg"
          />
        </div>

        {/* About Content */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">

          <h2 className="text-4xl font-bold mb-6 text-purple-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a Computer Science student at <span className="text-purple-400">SRM University</span>
            specializing in Cloud Computing. I enjoy building modern web
            applications using <span className="text-purple-400">React</span> and
            continuously improving my problem-solving skills through
            <span className="text-purple-400"> Data Structures and Algorithms</span>.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            My goal is to become a skilled software developer who can design
            scalable systems, create impactful digital products, and solve
            real-world problems using modern technologies.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="bg-purple-600/20 border border-purple-500 rounded-lg p-4 text-center">
              <h3 className="text-2xl font-bold text-purple-400">React</h3>
              <p className="text-sm text-gray-300">Frontend Development</p>
            </div>

            <div className="bg-purple-600/20 border border-purple-500 rounded-lg p-4 text-center">
              <h3 className="text-2xl font-bold text-purple-400">DSA</h3>
              <p className="text-sm text-gray-300">Problem Solving</p>
            </div>

            <div className="bg-purple-600/20 border border-purple-500 rounded-lg p-4 text-center">
              <h3 className="text-2xl font-bold text-purple-400">Cloud</h3>
              <p className="text-sm text-gray-300">Scalable Systems</p>
            </div>

            <div className="bg-purple-600/20 border border-purple-500 rounded-lg p-4 text-center">
              <h3 className="text-2xl font-bold text-purple-400">AI</h3>
              <p className="text-sm text-gray-300">Future Learning</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}