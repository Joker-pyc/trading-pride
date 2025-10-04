"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Award } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary transition-all duration-700 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
            >
              <Award className="w-4 h-4" />
              Featured on CNBC Awaaz, Bloomberg & ET Now
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-balance transition-all duration-700 animation-delay-100 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              Learn the Market with{" "}
              <span className="text-primary relative inline-block">Discipline, Strategy & Pride</span>
            </h1>

            <p
              className={`text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0 transition-all duration-700 animation-delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              Master stock market trading with expert guidance from Mr. Sarvendra Shrivastava, a Global Market
              Strategist with 20+ years of experience. Transform your trading journey with ethical, research-driven
              education.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 animation-delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <Button
                size="lg"
                className="text-base font-semibold bg-primary hover:bg-primary/90 h-14 px-8 group hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold h-14 px-8 group bg-transparent hover:bg-primary/5 hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div
              className={`grid grid-cols-3 gap-6 transition-all duration-700 animation-delay-400 pt-2.5 my-[26px] border-t-2 border-popover ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  10K+
                </div>
                <div className="text-sm text-muted-foreground">Traders Trained</div>
              </div>
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Ethical Training</div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 animation-delay-200 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            {/* Main Dashboard Card */}
            <div className="bg-card rounded-2xl shadow-2xl border border-primary/20 p-6 space-y-6 hover:shadow-3xl transition-shadow duration-500 backdrop-blur-sm bg-card/95">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">Portfolio Value</div>
                  <div className="text-3xl font-bold text-foreground">₹32,50,000</div>
                  <div className="text-sm text-primary font-medium flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +12.5% (₹3,62,500)
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center animate-pulse-glow">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-end justify-around p-4 gap-2 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/60 rounded-t-lg transition-all duration-500 hover:bg-primary hover:scale-110 cursor-pointer relative z-10"
                    style={{
                      height: `${height}%`,
                      animationDelay: `${i * 100}ms`,
                    }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-secondary rounded-lg p-3 hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer group border border-primary/10">
                  <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                    Win Rate
                  </div>
                  <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    87%
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3 hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer group border border-primary/10">
                  <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Trades</div>
                  <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    1,247
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3 hover:bg-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer group border border-primary/10">
                  <div className="text-xs text-muted-foreground group-hover:text-primary transition-colors">ROI</div>
                  <div className="text-lg font-bold text-primary">+156%</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-rotate-slow" />
          </div>
        </div>
      </div>
    </section>
  )
}
