"use client"

import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  width?: "fit-content" | "100%"
  delay?: number
}

export const ScrollReveal = ({ 
  children, 
  className,
  width = "fit-content",
  delay = 0 
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = elementRef.current
    if (!el) return

    gsap.fromTo(el,
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        delay: delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Trigger when top of element hits 85% of viewport height
          toggleActions: "play none none reverse" // Play on enter, reverse on leave back up
        }
      }
    )
    
     // Cleanup function automatically handled by React for simple GSAP animations 
     // but explicitly killing ScrollTriggers on unmount is good practice if complex
     return () => {
       ScrollTrigger.getAll().forEach(t => t.kill())
     }
  }, [delay])

  return (
    <div ref={elementRef} style={{ width }} className={className}>
      {children}
    </div>
  )
}
