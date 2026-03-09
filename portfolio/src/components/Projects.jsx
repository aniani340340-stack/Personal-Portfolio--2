export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern personal portfolio built with React and Tailwind.",
      tech: "React • Tailwind • Vite",
      image: "/images/project1.jpg"
    },
    {
      title: "AI Disease Detection",
      desc: "AI model that detects diseases from medical images.",
      tech: "Python • CNN • AI",
      image: "/images/project2.jpg"
    },
    {
      title: "AI Chatbot Assistant",
      desc: "NLP powered chatbot that answers user queries.",
      tech: "Python • NLP • React",
      image: "/images/project3.jpg"
    }
  ]

  return (
    <section id="projects" className="py-24 bg-black text-white">

      <h2 className="text-4xl font-bold text-center text-purple-400 mb-16">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:scale-105 transition shadow-lg"
          >

            <img
              src={project.image}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.desc}
              </p>

              <p className="text-purple-400 text-sm">
                {project.tech}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}