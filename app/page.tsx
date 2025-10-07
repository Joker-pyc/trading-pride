import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { MarketTicker } from "@/components/market-ticker";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarketTicker />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
