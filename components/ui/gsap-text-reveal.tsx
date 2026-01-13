"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  scramble?: boolean
}

export const TextReveal = ({
  children,
  className,
  delay = 0,
  scramble = false
}: TextRevealProps) => {
  const elementRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const el = elementRef.current
    if (!el) return

    if (scramble) {
      const chars = children.split("")
      const totalChars = chars.length
      
      // Initial state: hidden or random chars
      // We'll just fade in from bottom with a stagger for now, 
      // but to do a true "scramble" properly requires a complex timeline swap.
      // A simpler high-quality "reveal" is often more elegant than a noisy scramble.
      // Let's implement a clean character-by-character stagger reveal from bottom.
      
      // Clear content to split manually if needed, but for better a11y & SEO, 
      // we'll manipulate opacity/y of chars if we split them.
      // For now, let's keep it simple: A clean sophisticated reveal.
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        delay: delay
      })

      // We will perform a "scramble" effect by iterating text content
      if (scramble) {
        const originalText = children
        const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
        let progress = { value: 0 }
        
        tl.to(progress, {
          duration: 1.5,
          value: 1,
          ease: "power2.out",
          onUpdate: () => {
             const iterations = Math.floor(progress.value * originalText.length)
             let result = ""
             for (let i = 0; i < originalText.length; i++) {
               if (i < iterations) {
                 result += originalText[i]
               } else {
                 result += possibleChars[Math.floor(Math.random() * possibleChars.length)]
               }
             }
             el.innerText = result
          },
          onComplete: () => {
            el.innerText = originalText // Ensure final text is correct
          }
        })
        
        tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0)
      }

    } else {
       // Standard Reveal
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
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }

  }, [children, delay, scramble])

  return (
    <span ref={elementRef} className={className}>
      {children}
    </span>
  )
}
