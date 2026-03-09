import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

export default function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> }
  ]

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-black via-slate-950 to-black text-white"
    >

      <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">
        Skills & Technologies
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:scale-110 transition duration-300 shadow-lg"
          >

            <div className="text-4xl text-purple-400 mb-3">
              {skill.icon}
            </div>

            <p className="text-gray-200 font-medium">
              {skill.name}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}