"use client"

import { useRef, useLayoutEffect } from "react"
import { experience } from "@/data/experience"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { TextReveal } from "@/components/ui/gsap-text-reveal"

gsap.registerPlugin(ScrollTrigger)

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-card", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: 1
        }
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={containerRef} className="py-24 md:py-32 flex justify-center">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-12">
            <TextReveal>Professional Journey</TextReveal>
          </h2>
        </ScrollReveal>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 md:ml-6 space-y-8">
          {experience.map((item, index) => (
            <div key={index} className="experience-card relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <span className="absolute left-[-5px] top-6 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-background" />
              
              <Card className="hover:border-cyan-500/30">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <CardTitle className="text-xl">{item.role}</CardTitle>
                    <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400">{item.period}</span>
                  </div>
                  <div className="text-cyan-500 font-medium">{item.company}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
