"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/mentorship", label: "Mentorship" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-out w-[92%] max-w-6xl",
          isScrolled
            ? "shadow-[8px_8px_20px_var(--color-shadow-hover),-8px_-8px_20px_var(--color-surface)] dark:shadow-[8px_8px_20px_var(--color-shadow),-8px_-8px_20px_var(--color-shadow)]"
            : "shadow-[6px_6px_16px_var(--color-shadow),-6px_-6px_16px_var(--color-surface)] dark:shadow-[6px_6px_16px_var(--color-shadow),-6px_-6px_16px_var(--color-shadow)]"
        )}
        style={{
          background: "var(--color-gradient-start)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: "1px solid var(--color-border)",
        }}
      >
        <div className="px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 group relative"
            >
              <img
                src="/BlueLogo.png"
                alt="Trading Pride Logo"
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 aspect-square object-contain group-hover:scale-105 transition-all duration-500"
              />
              <span className="text-sm sm:text-base lg:text-lg font-bold text-foreground tracking-tight font-brand">
                Trading Pride
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-500 rounded-xl",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    style={
                      isActive
                        ? {
                            background: "var(--color-gradient-start)",
                            boxShadow:
                              "inset 2px 2px 5px var(--color-shadow), inset -2px -2px 5px var(--color-surface)",
                          }
                        : {}
                    }
                  >
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="default"
                className="font-medium transition-all duration-500 rounded-xl hover:bg-transparent"
                style={{
                  background: "var(--color-gradient-start)",
                  boxShadow:
                    "inset 2px 2px 5px var(--color-shadow), inset -2px -2px 5px var(--color-surface)",
                }}
              >
                Login
              </Button>
              <Button
                size="default"
                className="font-medium transition-all duration-500 text-white relative overflow-hidden group rounded-xl border-0"
                style={{
                  background: "var(--color-primary)",
                  boxShadow:
                    "inset 2px 2px 5px var(--color-shadow), inset -2px -2px 5px var(--color-surface)",
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Get Started
                  <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-500" />
                </span>
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground rounded-xl transition-all duration-500 hover:scale-105"
              aria-label="Toggle menu"
              style={{
                background: "var(--color-gradient-start)",
                boxShadow:
                  "inset 2px 2px 5px var(--color-shadow), inset -2px -2px 5px var(--color-surface)",
              }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 transition-transform duration-500 rotate-90" />
              ) : (
                <Menu className="w-5 h-5 transition-transform duration-500" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-24 animate-in fade-in slide-in-from-top-5 duration-500">
          <div
            className="absolute inset-0 backdrop-blur-xl"
            style={{ background: "var(--color-gradient-start)" }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative container mx-auto px-4">
            <nav
              className="rounded-2xl p-5 flex flex-col gap-1.5 animate-in slide-in-from-top-10 duration-500"
              style={{
                background: "var(--color-gradient-start)",
                backdropFilter: "blur(20px)",
                border: "1px solid var(--color-border)",
                boxShadow:
                  "8px 8px 20px var(--color-shadow-hover), -8px -8px 20px var(--color-surface)",
              }}
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-500 animate-in slide-in-from-top-5",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    style={
                      isActive
                        ? {
                            background: "var(--color-gradient-start)",
                            boxShadow:
                              "inset 2px 2px 5px var(--color-shadow), inset -2px -2px 5px var(--color-surface)",
                            animationDelay: `${index * 50}ms`,
                          }
                        : { animationDelay: `${index * 50}ms` }
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-border">
                <div className="flex items-center justify-between px-4 py-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
                <Button
                  variant="outline"
                  size="default"
                  className="w-full font-medium transition-all duration-500 bg-transparent rounded-xl border-border"
                  style={{
                    background: "var(--color-gradient-start)",
                    boxShadow:
                      "inset 2px 2px 5px var(--color-shadow), inset -2px -2px 5px var(--color-surface)",
                  }}
                >
                  Login
                </Button>
                <Button
                  size="default"
                  className="w-full font-medium transition-all duration-500 rounded-xl border-0 text-white"
                  style={{
                    background: "var(--color-primary)",
                    boxShadow:
                      "inset 2px 2px 5px var(--color-shadow), inset -2px -2px 5px var(--color-surface)",
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    Get Started
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
