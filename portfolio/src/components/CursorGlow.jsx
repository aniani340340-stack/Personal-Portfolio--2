import { useEffect, useState } from "react"

export default function CursorGlow() {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => window.removeEventListener("mousemove", moveCursor)

  }, [])

  return (
    <>
      {/* Small Dot Cursor */}
      <div
        className="pointer-events-none fixed w-3 h-3 bg-purple-400 rounded-full z-[9999]"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`
        }}
      />

      {/* Glow Aura */}
      <div
        className="pointer-events-none fixed w-40 h-40 bg-purple-600 opacity-20 rounded-full blur-3xl z-[9998] transition-transform duration-150"
        style={{
          transform: `translate(${position.x - 80}px, ${position.y - 80}px)`
        }}
      />
    </>
  )
}