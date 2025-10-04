"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

const marketData = [
  { symbol: "BTC/USD", price: 67234.56, change: 3.24 },
  { symbol: "ETH/USD", price: 3456.78, change: 1.87 },
  { symbol: "SPY", price: 512.34, change: -0.45 },
  { symbol: "AAPL", price: 178.92, change: 2.15 },
  { symbol: "TSLA", price: 245.67, change: -1.23 },
  { symbol: "NVDA", price: 892.45, change: 4.56 },
  { symbol: "MSFT", price: 412.89, change: 1.34 },
  { symbol: "GOOGL", price: 156.78, change: 0.89 },
]

export function MarketTicker() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-card border-y border-border py-4 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marketData, ...marketData, ...marketData, ...marketData].map((item, index) => (
          <div key={index} className="inline-flex items-center gap-3 px-6 border-r border-border last:border-r-0">
            <span className="font-semibold text-foreground">{item.symbol}</span>
            <span className="text-muted-foreground">${item.price.toLocaleString()}</span>
            <span
              className={`flex items-center gap-1 text-sm font-medium ${
                item.change >= 0 ? "text-primary" : "text-destructive"
              }`}
            >
              {item.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {Math.abs(item.change)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
