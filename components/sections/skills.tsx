"use client"

import { skills } from "@/data/skills"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

import { TextReveal } from "@/components/ui/gsap-text-reveal"

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 flex justify-center">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-12">
            <TextReveal>Technical Expertise</TextReveal>
          </h2>
        </ScrollReveal>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, index) => (
            <ScrollReveal key={skillGroup.category} delay={index * 0.1} width="100%">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>
                    <span className="bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-cyan-200">
                      {skillGroup.category}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {skillGroup.items.map((item) => (
                      <li key={item} className="flex items-center text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors group-hover:text-zinc-900 dark:group-hover:text-zinc-200">
                        <div className="mr-3 flex h-1.5 w-1.5 items-center justify-center">
                          <span className="absolute h-1.5 w-1.5 rounded-full bg-cyan-500/50 opacity-0 transition-opacity group-hover:opacity-100 animate-ping" />
                          <span className="relative h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors group-hover:bg-cyan-500" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
