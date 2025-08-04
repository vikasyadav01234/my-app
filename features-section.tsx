import { Zap, Shield, BarChart3, Users, Clock, Smartphone } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights with real-time analytics, custom dashboards, and comprehensive reporting tools.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team using built-in communication tools and shared workspaces.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support with dedicated account managers and priority assistance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your data anywhere with our responsive design and native mobile applications.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything you need to succeed</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our comprehensive platform provides all the tools and features you need to streamline your business
              operations and drive growth.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
