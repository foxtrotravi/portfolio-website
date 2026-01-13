"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function InteractiveGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const mousePosition = useRef({ x: -1000, y: -1000 }) // Start off-screen

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    
    // Configuration
    const gridSize = 40
    const reactionRadius = 200 // Radius of the glow effect
    
    const resize = () => {
      // Use container dimensions to ensure it matches the section exactly
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }
    
    window.addEventListener("resize", resize)
    resize()

    const handleMouseMove = (e: MouseEvent) => {
        // Calculate mouse position relative to the canvas
        const rect = canvas.getBoundingClientRect()
        mousePosition.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }
    }
    
    // Attach listener to window to track mouse even if it leaves the specific element slightly
    // but better to attach to the section container in the parent component?
    // Actually attaching to canvas's parent or window is fine. "Interactive only in Hero" -> attach to window but check bounds?
    // Simpler: simple mousemove on window, calculate relative pos.
    window.addEventListener("mousemove", handleMouseMove)

    const draw = () => {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const isDark = document.documentElement.classList.contains("dark")
      
      // Colors
      const baseStroke = isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"
      const highlightStroke = isDark ? "rgba(6, 182, 212, 0.2)" : "rgba(6, 182, 212, 0.3)" // Cyan glow
      
      ctx.lineWidth = 1
      
      // 1. Draw Base Static Grid
      ctx.strokeStyle = baseStroke
      ctx.beginPath()
      
      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
      }
      
      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }
      ctx.stroke()
      
      // 2. Draw Highlighted Grid around Mouse
      // Optimization: Only draw lines within the reaction radius
      const mx = mousePosition.current.x
      const my = mousePosition.current.y
      
      ctx.strokeStyle = highlightStroke
      ctx.beginPath()
      
      // Calculate grid range affecting the mouse area
      const startX = Math.floor((mx - reactionRadius) / gridSize) * gridSize
      const endX = Math.ceil((mx + reactionRadius) / gridSize) * gridSize
      const startY = Math.floor((my - reactionRadius) / gridSize) * gridSize
      const endY = Math.ceil((my + reactionRadius) / gridSize) * gridSize

      // Vertical Highlights
      for (let x = startX; x <= endX; x += gridSize) {
        if (x < 0 || x > canvas.width) continue;
        
        const dx = Math.abs(x - mx)
        if (dx < reactionRadius) {
          // Calculate the chord length of the circle at this x-distance
          // R^2 = dx^2 + dy^2  => dy = sqrt(R^2 - dx^2)
          const dy = Math.sqrt(reactionRadius * reactionRadius - dx * dx)
          const y1 = my - dy
          const y2 = my + dy
          
          ctx.moveTo(x, Math.max(0, y1))
          ctx.lineTo(x, Math.min(canvas.height, y2))
        }
      }

      // Horizontal Highlights
      for (let y = startY; y <= endY; y += gridSize) {
        if (y < 0 || y > canvas.height) continue;
        
        const dy = Math.abs(y - my)
        if (dy < reactionRadius) {
          const dx = Math.sqrt(reactionRadius * reactionRadius - dy * dy)
          const x1 = mx - dx
          const x2 = mx + dx
          
          ctx.moveTo(Math.max(0, x1), y)
          ctx.lineTo(Math.min(canvas.width, x2), y)
        }
      }
      
      ctx.stroke()
      
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme]) // Re-init key vars if theme changes slightly, though we check DOM class in draw loop

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}
