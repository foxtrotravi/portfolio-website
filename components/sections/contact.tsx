"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const email = "ravisinghlodhi2357@gmail.com";
  const github = "https://github.com/foxtrotravi"
  const linkedin = "https://linkedin.com/in/ravi-singh-lodhi"
  const twitter = "https://x.com/RaviSinghLodhi"

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
              href={`mailto:${email}`} 
              className="text-2xl md:text-4xl font-bold hover:text-cyan-500 transition-colors mb-12"
            >
              {email}
            </Link>

            <div className="flex gap-6">
              <Link href={github} className="p-3 rounded-full bg-secondary hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors" target="_blank">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href={linkedin} className="p-3 rounded-full bg-secondary hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors" target="_blank">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={twitter} className="p-3 rounded-full bg-secondary hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors" target="_blank">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href={`mailto:${email}`} className="p-3 rounded-full bg-secondary hover:bg-cyan-500/10 hover:text-cyan-500 transition-colors" target="_blank">
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
