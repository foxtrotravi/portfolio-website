"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { TextReveal } from "@/components/ui/gsap-text-reveal"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30 flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl lg:text-6xl mb-6">
              <TextReveal>Engineering with </TextReveal>
              <br />
              <span className="text-cyan-500">
                <TextReveal delay={0.2}>Purpose</TextReveal>
              </span> 
              <TextReveal delay={0.4}> & Precision.</TextReveal>
            </h2>
          </ScrollReveal>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <ScrollReveal delay={0.2}>
              <p>
                My approach to software development is grounded in the belief that great code is not just functional—it is readable, maintainable, and efficient. I don't just build features; I engineer systems that scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>
                With deep expertise in both traditional Full-Stack development and the emerging Web3 landscape, I bridge the gap between user-centric interfaces and complex decentralized logic. Whether optimizing a React Native mobile app for performance or auditing a Solidity smart contract for security, I bring the same level of rigor to every task.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p>
                I thrive in environments that challenge me to solve hard problems, whether that's reducing render cycles in React or gas optimization on Ethereum.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
