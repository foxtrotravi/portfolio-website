"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border/40">
      <div className="container px-4 md:px-6 flex justify-center w-full mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">Let's Build the Future</h2>
            <p className="max-w-xl text-lg text-muted-foreground mb-12">
              Whether you're looking to launch a new DApp, optimize your mobile stack, or need a technical consultation, I'm always open to discussing new opportunities.
            </p>
            
            <Link 
              href="mailto:contact@example.com" 
              className="text-2xl md:text-4xl font-bold hover:text-cyan-500 transition-colors mb-12"
            >
              contact@example.com
            </Link>

            <div className="flex gap-6">
              <Link href="#" className="p-3 rounded-full bg-secondary hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="p-3 rounded-full bg-secondary hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="p-3 rounded-full bg-secondary hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:contact@example.com" className="p-3 rounded-full bg-secondary hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
