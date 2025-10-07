"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-8 transition-all duration-700 ${
              isVisible ? "animate-fade-in-down" : "opacity-0"
            }`}
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            Limited Time Offer
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-balance transition-all duration-700 animation-delay-100 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Start your trading journey{" "}
            <span className="text-primary">today</span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto transition-all duration-700 animation-delay-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Join 50,000+ traders who are already mastering the markets. Get
            started with our 14-day free trial and see the difference
            professional education makes.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 animation-delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Button
              size="lg"
              className="text-base font-semibold bg-primary hover:bg-primary/90 h-14 px-8 group hover:scale-105 hover:shadow-xl transition-all duration-300 animate-pulse-glow"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold h-14 px-8 bg-transparent hover:bg-primary/5 hover:scale-105 transition-all duration-300"
            >
              Schedule a Demo
            </Button>
          </div>

          <p
            className={`text-sm text-muted-foreground mt-6 transition-all duration-700 animation-delay-400 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            No credit card required • Cancel anytime • 14-day money-back
            guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
