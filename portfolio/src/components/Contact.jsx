export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white">

      <h2 className="text-4xl text-center font-bold text-purple-400 mb-12">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">

        <form className="flex flex-col gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-black border border-gray-600"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-black border border-gray-600"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-3 rounded-lg bg-black border border-gray-600"
          ></textarea>

          <button
            className="bg-purple-600 hover:bg-purple-700 py-3 rounded-lg transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}