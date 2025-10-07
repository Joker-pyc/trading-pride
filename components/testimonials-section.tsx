"use client";
import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Full-Time Trader",
    content:
      "Trading Pride transformed my approach to the markets. Within 6 months, I went from losing money to consistent profitability. The mentorship program is worth every penny.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Options Trader",
    content:
      "The advanced strategies taught here are game-changing. I've doubled my portfolio in less than a year. The community support is incredible.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Crypto Investor",
    content:
      "Best investment I've made in my trading education. The real-time market insights and live sessions helped me navigate volatile markets with confidence.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Thompson",
    role: "Day Trader",
    content:
      "From complete beginner to profitable trader in 8 months. The structured curriculum and personal mentorship made all the difference.",
    rating: 5,
    initials: "DT",
  },
  {
    name: "Lisa Park",
    role: "Swing Trader",
    content:
      "The risk management techniques alone saved me thousands. This platform teaches you how to protect your capital while growing it steadily.",
    rating: 5,
    initials: "LP",
  },
  {
    name: "James Wilson",
    role: "Portfolio Manager",
    content:
      "Even as an experienced trader, I learned new strategies that significantly improved my returns. The elite tier is absolutely worth it.",
    rating: 5,
    initials: "JW",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonials.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 100);
            });
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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    const newIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth;
    const scrollLeft = scrollRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      setIsAutoPlaying(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-background relative overflow-hidden border-t border-border"
    >
      <div className="absolute inset-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6 animate-fade-in-down">
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance animate-fade-in-up animation-delay-100">
            Trusted by traders <span className="text-primary">worldwide</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty animate-fade-in-up animation-delay-200">
            Join thousands of successful traders who have transformed their
            financial future with Trading Pride.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            onClick={handlePrevious}
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur-md border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            onClick={handleNext}
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/80 backdrop-blur-md border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth gap-6 px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="flex-shrink-0 w-full snap-center"
              >
                <Card
                  className={`p-8 lg:p-10 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden ${
                    visibleCards.includes(index)
                      ? "animate-fade-in-up"
                      : "opacity-0"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform:
                      currentIndex === index ? "scale(1)" : "scale(0.95)",
                    opacity: currentIndex === index ? 1 : 0.6,
                    transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
                      animation: "shimmer 2s infinite",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary transition-transform duration-300 group-hover:scale-110"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <Avatar className="w-14 h-14 bg-primary/10 text-primary border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 group-hover:scale-110">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                  scrollToCard(index);
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentIndex === index
                    ? "w-8 bg-primary shadow-lg shadow-primary/50"
                    : "w-2 bg-primary/30 hover:bg-primary/50 hover:w-4"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
