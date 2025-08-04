import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your Business with Our SaaS Platform
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Streamline your workflow, boost productivity, and scale your business with our cutting-edge software
                solution. Join thousands of companies already transforming their operations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="inline-flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="inline-flex items-center justify-center bg-transparent">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="font-semibold text-gray-900">14-day</span> free trial
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <div className="flex items-center">No credit card required</div>
              <div className="h-4 w-px bg-gray-300" />
              <div className="flex items-center">Cancel anytime</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur-3xl opacity-20 animate-pulse" />
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="SaaS Platform Dashboard"
                className="relative rounded-lg shadow-2xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
