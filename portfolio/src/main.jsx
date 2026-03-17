import { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// Scroll Animation Hook
function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in")

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }
      })
    })

    elements.forEach((el) => observer.observe(el))
  }, [])
}

// Wrapper Component to use hook
function RootApp() {
  useScrollAnimation()
  return <App />
}

// Render App
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
)