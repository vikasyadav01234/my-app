import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTABanner() {
  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
            Join over 10,000+ companies already using our platform to streamline their operations and boost
            productivity.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" className="inline-flex items-center justify-center">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="inline-flex items-center justify-center bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-blue-200">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
