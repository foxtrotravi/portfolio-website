"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[800px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Grid - Minimalist Engineering Feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ 
             backgroundImage: "linear-gradient(#9ca3af 1px, transparent 1px), linear-gradient(90deg, #9ca3af 1px, transparent 1px)", 
             backgroundSize: "40px 40px" 
           }} 
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative z-10 flex flex-col items-start justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="mb-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground font-mono">
            Available for new opportunities
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          Senior <span className="text-cyan-500">Full-Stack</span> & <br />
          <span className="text-cyan-500">Blockchain</span> Engineer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Architecting high-performance mobile applications, robust web platforms, and secure decentralized systems.
          Focused on intentional design and scalable engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
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
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  )
}
