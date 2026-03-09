import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Progress from "./components/Progress"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ImageSlider from "./components/ImageSlider"

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Progress />
      <Projects />
      <ImageSlider />
      <Contact />
      <Footer />
    </>
  )
}

export default App