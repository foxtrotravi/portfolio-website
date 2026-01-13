import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/ui/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Web3Focus } from "@/components/sections/web3-focus"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-cyan-500/30 selection:text-cyan-500">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Web3Focus />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
