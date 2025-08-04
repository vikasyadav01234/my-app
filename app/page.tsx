import NavigationHeader from "../navigation-header"
import HeroSection from "../hero-section"
import FeaturesSection from "../features-section"
import PricingSection from "../pricing-section"
import TestimonialsCarousel from "../testimonials-carousel"
import FAQSection from "../faq-section"
import GlassmorphismCards from "../glassmorphism-cards"
import FooterSection from "../footer-section"
import CTABanner from "../cta-banner"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />

      <main>
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Features Section */}
        <section id="features">
          <FeaturesSection />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <PricingSection />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialsCarousel />
        </section>

        {/* CTA Banner */}
        <CTABanner />

        {/* FAQ Section */}
        <section id="faq">
          <FAQSection />
        </section>

        {/* Glassmorphism Cards Section */}
        <section id="next-gen">
          <GlassmorphismCards />
        </section>
      </main>

      {/* Footer Section */}
      <section id="contact">
        <FooterSection />
      </section>
    </div>
  )
}
