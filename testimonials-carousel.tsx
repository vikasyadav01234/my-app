"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "/placeholder.svg?height=60&width=60",
    review:
      "This platform has completely transformed how we manage our business operations. The intuitive interface and powerful features have increased our productivity by 300%.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    image: "/placeholder.svg?height=60&width=60",
    review:
      "The analytics and reporting capabilities are outstanding. We've gained insights into our business that we never had before, leading to better decision-making.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager, GrowthCo",
    image: "/placeholder.svg?height=60&width=60",
    review:
      "Customer support is exceptional. The team is always responsive and goes above and beyond to help us succeed. Highly recommend this platform!",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Founder, StartupXYZ",
    image: "/placeholder.svg?height=60&width=60",
    review:
      "The automation features have saved us countless hours every week. What used to take days now happens automatically. It's been a game-changer for our small team.",
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What our customers say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what real customers have to say about their experience.
            </p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto mt-12">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  "{testimonials[currentIndex].review}"
                </blockquote>

                <div className="flex flex-col items-center space-y-2">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-gray-500">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-transparent"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-transparent"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
