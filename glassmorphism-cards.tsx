"use client"

import { Sparkles, Zap, Shield, BarChart3 } from "lucide-react"

const cards = [
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Leverage machine learning to uncover hidden patterns and opportunities in your data.",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Experience blazing-fast speeds with our optimized infrastructure and edge computing.",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Enterprise-grade security with zero-trust architecture and end-to-end encryption.",
    gradient: "from-green-400 to-emerald-400",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor your business metrics in real-time with customizable dashboards and alerts.",
    gradient: "from-orange-400 to-red-400",
  },
]

export default function GlassmorphismCards() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 text-sm">
              2025 Design
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Next-Generation Features</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the future of business software with our cutting-edge glassmorphism design and advanced
              capabilities.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/15"
              >
                {/* Gradient border effect */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${card.gradient} mb-4`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>

                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                </div>

                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
