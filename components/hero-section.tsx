"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Award } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex items-start justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 bg-background hero-full-height">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between min-h-[85vh] gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8 flex flex-col">
            {/* Mobile Layout: Logo and Text side by side */}
            <div className="lg:hidden w-full space-y-4">
              {/* Featured Badge for Mobile */}
              <div className="flex justify-center">
                <div
                  className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-[10px] sm:text-xs font-semibold text-primary shadow-lg transition-all duration-700 ${
                    isVisible ? "animate-fade-in-down" : "opacity-0"
                  }`}
                >
                  <Award className="w-3 h-3" />
                  <span className="whitespace-nowrap">
                    Featured on CNBC Awaaz, Bloomberg & ET Now
                  </span>
                </div>
              </div>

              {/* Logo and Text side by side */}
              <div className="flex flex-row items-center gap-4 w-full">
                {/* Logo - Left side on mobile */}
                <div className="flex-1 flex justify-center">
                  <img
                    src="/BlueLogo.png"
                    alt="Trading Pride Logo"
                    className={`w-48 h-48 object-contain transition-all duration-700 ${
                      isVisible ? "animate-fade-in-down" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Text - Right side on mobile */}
                <div className="flex-1">
                  <h1
                    className={`text-2xl font-black leading-[1.1] text-balance transition-all duration-700 animation-delay-100 uppercase tracking-tight ${
                      isVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                  >
                    Leave the herd, Join the
                    <span className="text-primary relative block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent font-black uppercase tracking-tight">
                      Pride
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            {/* Desktop Layout: Original structure */}
            <div className="hidden lg:flex flex-col space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="flex justify-center lg:justify-start">
                <div
                  className={`inline-flex items-center gap-1.5 px-2 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-[10px] sm:text-xs font-semibold text-primary shadow-lg transition-all duration-700 ${
                    isVisible ? "animate-fade-in-down" : "opacity-0"
                  }`}
                >
                  <Award className="w-3 h-3" />
                  <span className="whitespace-nowrap">
                    Featured on CNBC Awaaz, Bloomberg & ET Now
                  </span>
                </div>
              </div>

              {/* Logo */}
              <div className="flex justify-center lg:justify-start mb-4">
                <img
                  src="/BlueLogo.png"
                  alt="Trading Pride Logo"
                  className={`w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 object-contain transition-all duration-700 ${
                    isVisible ? "animate-fade-in-down" : "opacity-0"
                  }`}
                />
              </div>

              <h1
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-[0.9] text-balance transition-all duration-700 animation-delay-100 uppercase tracking-tight ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              >
                Leave the herd, Join the
                <span className="text-primary relative block bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent font-black uppercase tracking-tight">
                  Pride
                </span>
              </h1>
            </div>

            <p
              className={`text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0 transition-all duration-700 animation-delay-200 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              Master stock market trading with expert guidance from Mr.
              Sarvendra Shrivastava, a Global Market Strategist with 20+ years
              of experience. Transform your trading journey with ethical,
              research-driven education.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-700 animation-delay-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="text-sm sm:text-base font-semibold bg-primary hover:bg-primary/90 h-12 sm:h-14 px-6 sm:px-8 group hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                Explore Courses
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-sm sm:text-base font-semibold h-12 sm:h-14 px-6 sm:px-8 group bg-transparent hover:bg-primary/5 hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Stock Chart */}
          <div
            className={`flex-1 flex items-center lg:items-start justify-center lg:justify-end relative transition-all duration-1000 animation-delay-200 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            {/* 3D Stock Chart - Enhanced and Prominent */}
            <div className="relative flex items-start justify-center lg:self-start">
              <img
                src="/3Dstock.png"
                alt="3D Stock Chart"
                className="w-80 h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[538px] object-contain transition-all duration-500 hero-visual-image"
              />
            </div>

            {/* Enhanced background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl -z-10 animate-rotate-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/25 rounded-full blur-2xl -z-10 animate-rotate-slow hero-glow-delay" />
          </div>
        </div>

        <div
          className={`grid grid-cols-3 gap-6 items-center justify-center text-center mt-4 mb-6 bg-transparent transition-all duration-700 animation-delay-400 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
              10K+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Traders Trained
            </div>
          </div>
          <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
              20+
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Years Experience
            </div>
          </div>
          <div className="group cursor-pointer hover:scale-110 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
              100%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Ethical Training
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
