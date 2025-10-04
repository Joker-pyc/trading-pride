"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (mounted) {
      console.log("[v0] Theme state - theme:", theme, "resolvedTheme:", resolvedTheme)
    }
  }, [mounted, theme, resolvedTheme])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="w-9 h-9 rounded-xl transition-all duration-500"
        style={{
          boxShadow: "3px 3px 8px rgba(17, 120, 98, 0.1), -3px -3px 8px rgba(255, 255, 255, 0.5)",
        }}
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const currentTheme = theme || "light"
  const isDark = currentTheme === "dark"

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark"
    console.log("[v0] Toggling theme. Current:", currentTheme, "New:", newTheme)
    setTheme(newTheme)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="w-9 h-9 rounded-xl transition-all duration-500 hover:bg-accent hover:scale-105"
      style={{
        boxShadow: isDark
          ? "3px 3px 8px rgba(0, 0, 0, 0.3), -3px -3px 8px rgba(255, 255, 255, 0.05)"
          : "3px 3px 8px rgba(17, 120, 98, 0.1), -3px -3px 8px rgba(255, 255, 255, 0.5)",
      }}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-foreground transition-all duration-500" />
      ) : (
        <Moon className="h-4 w-4 text-foreground transition-all duration-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
