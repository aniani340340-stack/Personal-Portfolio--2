export default function Progress() {
  return (
    <section className="py-20 text-center">

      <h2 className="text-4xl font-bold mb-10">
        Learning Progress
      </h2>

      <div className="grid md:grid-cols-3 gap-6 px-10">

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-green-400 font-bold mb-4">Completed</h3>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-yellow-400 font-bold mb-4">In Progress</h3>
          <p>Backend Development</p>
          <p>REST APIs</p>
          <p>DSA</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-blue-400 font-bold mb-4">Next Goals</h3>
          <p>Cloud Computing</p>
          <p>System Design</p>
          <p>AI Projects</p>
        </div>

      </div>

    </section>
  )
}