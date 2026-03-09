export default function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "GitHub"
  ]

  return (
    <section id="skills" className="py-20 text-center">

      <h2 className="text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 px-6 py-3 rounded-lg text-white"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}