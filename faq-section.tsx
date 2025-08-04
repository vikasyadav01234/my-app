"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Our 14-day free trial gives you full access to all Pro features without requiring a credit card. You can explore all functionality and decide if our platform is right for your business before committing to a paid plan.",
  },
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments. There are no long-term contracts or cancellation fees.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide comprehensive support including email support for all plans, priority support for Pro users, and 24/7 phone support for Enterprise customers. We also have extensive documentation, video tutorials, and a community forum.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption, are SOC 2 compliant, and follow industry best practices for data security. Your data is encrypted both in transit and at rest, and we perform regular security audits.",
  },
  {
    question: "Do you offer integrations with other tools?",
    answer:
      "Yes, we integrate with over 100+ popular business tools including Slack, Google Workspace, Microsoft 365, Salesforce, and many more. We also provide API access for custom integrations.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "We'll notify you when you're approaching your limits and offer options to upgrade. We never cut off access suddenly - you'll have time to either upgrade your plan or optimize your usage to stay within limits.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Got questions? We've got answers. If you can't find what you're looking for, feel free to contact our
              support team.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
