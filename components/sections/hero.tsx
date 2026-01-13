"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/gsap-text-reveal"
import { InteractiveGridBackground } from "@/components/ui/interactive-grid-background"

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[800px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Grid - Interactive & Minimalist */}
      <InteractiveGridBackground />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative z-10 flex flex-col items-start justify-center px-4 md:px-6">
        <ScrollReveal delay={0.2}>
          <span className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground font-mono">
            Available for new opportunities
          </span>
        </ScrollReveal>
        
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl mb-6">
          <TextReveal delay={0.3}>Senior </TextReveal>
          <span className="text-cyan-500">
             <TextReveal delay={1.0}>Full-Stack</TextReveal>
          </span> 
          <TextReveal delay={1.2}> & </TextReveal>
          <br />
          <span className="text-cyan-500">
            <TextReveal delay={1.5}>Blockchain</TextReveal>
          </span> 
          <TextReveal delay={0.6}> Engineer.</TextReveal>
        </h1>

        <ScrollReveal delay={2.0} width="100%">
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Architecting high-performance mobile applications, robust web platforms, and secure decentralized systems.
            Focused on intentional design and scalable engineering.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2.8}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Contact Me
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="animate-bounce text-muted-foreground">
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  )
}
