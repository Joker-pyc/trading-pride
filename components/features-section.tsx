"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, Users, TrendingUp, Award, Shield, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Courses",
    description:
      "From beginner to advanced, master every aspect of trading with our structured curriculum designed by industry experts.",
  },
  {
    icon: Users,
    title: "Live Mentorship",
    description:
      "Get personalized guidance from professional traders with years of experience in stocks, options, and crypto markets.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Market Data",
    description:
      "Access live market insights, charts, and analytics to make informed trading decisions with confidence.",
  },
  {
    icon: Award,
    title: "Proven Strategies",
    description:
      "Learn battle-tested trading strategies that have generated consistent returns for our community members.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Master the art of protecting your capital with advanced risk management techniques and position sizing.",
  },
  {
    icon: Zap,
    title: "Fast-Track Learning",
    description: "Accelerate your trading journey with our intensive programs designed to get you profitable faster.",
  },
]

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the card animations
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 100)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden bg-secondary/30 border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 animate-fade-in-down">
            Why Choose Trading Pride
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance animate-fade-in-up animation-delay-100">
            Everything you need to become a <span className="text-primary">successful trader</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty animate-fade-in-up animation-delay-200">
            Join thousands of traders who have transformed their financial future with our comprehensive platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 lg:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border bg-card group cursor-pointer relative overflow-hidden ${
                visibleCards.includes(index) ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
