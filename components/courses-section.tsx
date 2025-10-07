"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const courses = [
  {
    name: "Basic",
    price: "₹38,000",
    period: "",
    description: "Perfect for those starting their trading journey",
    features: [
      "Fundamentals of stock market",
      "Basic technical analysis",
      "Risk management basics",
      "Community forum access",
      "Weekly market updates",
    ],
    popular: false,
  },
  {
    name: "Intermediate",
    price: "₹58,000",
    period: "",
    description: "For serious traders ready to level up",
    features: [
      "All basic features",
      "Advanced chart patterns",
      "Live trading sessions",
      "Personal mentor guidance",
      "Priority support",
      "Exclusive community access",
      "Real-time market alerts",
    ],
    popular: true,
  },
  {
    name: "Advanced",
    price: "₹99,000",
    period: "",
    description: "Ultimate package for professional traders",
    features: [
      "All intermediate features",
      "One-on-one coaching sessions",
      "Custom trading strategies",
      "Portfolio review & analysis",
      "VIP community access",
      "Lifetime course access",
      "Advanced options strategies",
      "24/7 dedicated support",
    ],
    popular: false,
  },
];

export function CoursesSection() {
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
      id="courses"
      className="py-24 lg:py-32 relative bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 transition-all duration-700 ${
              isVisible ? "animate-fade-in-down" : "opacity-0"
            }`}
          >
            Flexible Pricing
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance transition-all duration-700 animation-delay-100 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Choose the perfect plan for your{" "}
            <span className="text-primary">trading goals</span>
          </h2>
          <p
            className={`text-lg text-muted-foreground text-pretty transition-all duration-700 animation-delay-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Start with any plan and upgrade as you grow. All plans include a
            14-day money-back guarantee.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`p-8 relative vibrant-border card-3d cursor-pointer group ${
                course.popular
                  ? "border-primary shadow-2xl lg:scale-105 bg-card"
                  : "bg-card"
              } ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {course.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full flex items-center gap-1 animate-bounce-subtle">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

              <div className="relative z-10 card-3d-content">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {course.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {course.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {course.price}
                    </span>
                    <span className="text-muted-foreground">
                      {course.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-12 font-semibold group/btn hover:scale-105 transition-all duration-300 ${
                    course.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl"
                      : "bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground"
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
