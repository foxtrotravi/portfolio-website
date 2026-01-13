"use client"

import { projects } from "@/data/projects"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/30 flex justify-center">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Selected Work</h2>
            <Link href="#" className="hidden md:flex items-center text-cyan-500 hover:text-cyan-400 transition-colors">
              View all archives <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1} width="100%">
              <Link href={project.link} className="block h-full">
                <Card className="h-full hover:border-cyan-500/50 hover:shadow-lg dark:hover:shadow-cyan-500/10">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-xl group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-cyan-500 transition-colors" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex-wrap gap-2 mt-auto pt-0">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground group-hover:bg-cyan-500/10 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {t}
                      </span>
                    ))}
                  </CardFooter>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link href="#" className="flex items-center text-cyan-500 hover:text-cyan-400 transition-colors">
            View all archives <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
