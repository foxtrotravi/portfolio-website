"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Code2, Cpu, Lock } from "lucide-react"

export function Web3Focus() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 text-zinc-50 relative overflow-hidden flex justify-center">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-zinc-950 to-zinc-950" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">
              DeFi & Smart Contract <br />
              <span className="text-cyan-400">Architecture</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg">
              Specialized in building secure, gas-efficient on-chain systems. From automated market makers to governance protocols, I architect the future of finance.
            </p>
            <div className="grid gap-4">
              <Card className="bg-zinc-900/20 border-zinc-800 backdrop-blur-md">
                <CardContent className="flex items-start gap-4 p-4 text-zinc-100">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0">
                    <Code2 className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Smart Contract Development</h3>
                    <p className="text-zinc-400 text-sm">Solidity & Vyper contracts with 100% test coverage and formal verification.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-900/20 border-zinc-800 backdrop-blur-md">
                <CardContent className="flex items-start gap-4 p-4 text-zinc-100">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0">
                    <Lock className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Security Auditing</h3>
                    <p className="text-zinc-400 text-sm">Identifying vulnerabilities and reentrancy attacks before deployment.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-900/20 border-zinc-800 backdrop-blur-md">
                <CardContent className="flex items-start gap-4 p-4 text-zinc-100">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0">
                    <Cpu className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">DApp Integration</h3>
                    <p className="text-zinc-400 text-sm">Seamless connection between Web2 frontends and Web3 logic using Wagmi & Ethers.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Card className="relative bg-zinc-900 border-zinc-800 font-mono text-sm shadow-2xl overflow-hidden text-zinc-300">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/20 blur-3xl rounded-full" />
              
              <CardHeader className="border-b border-zinc-800/50 pb-4">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/50" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <span className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </CardHeader>
              
              <CardContent className="pt-4 space-y-2">
                <p><span className="text-purple-400">contract</span> <span className="text-yellow-400">DeFiProtocol</span> <span className="text-zinc-500">is</span> Ownable, ReentrancyGuard &#123;</p>
                <p className="pl-4"><span className="text-cyan-400">mapping</span>(address =&#62; uint256) <span className="text-purple-400">public</span> balances;</p>
                <p className="pl-4 text-zinc-500">// Optimized for gas efficiency</p>
                <p className="pl-4"><span className="text-purple-400">function</span> <span className="text-blue-400">deposit</span>() <span className="text-purple-400">external payable</span> &#123;</p>
                <p className="pl-8">require(msg.value &#62; 0, <span className="text-green-400">"Zero value"</span>);</p>
                <p className="pl-8">balances[msg.sender] += msg.value;</p>
                <p className="pl-8">emit <span className="text-yellow-400">Deposit</span>(msg.sender, msg.value);</p>
                <p className="pl-4">&#125;</p>
                <p>&#125;</p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
