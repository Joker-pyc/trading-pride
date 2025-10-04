"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="trading-pride-theme">
      {children}
      <Analytics />
    </ThemeProvider>
  )
}
