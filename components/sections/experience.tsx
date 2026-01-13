import { experience } from "@/data/experience"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

import { TextReveal } from "@/components/ui/gsap-text-reveal"

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 flex justify-center">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-12">
            <TextReveal>Professional Journey</TextReveal>
          </h2>
        </ScrollReveal>

        <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 md:ml-6 space-y-8">
          {experience.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="relative pl-8 md:pl-12">
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
