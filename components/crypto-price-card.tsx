"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { type CryptoPrice, formatPrice } from "@/lib/crypto-api"
import { useState, useEffect } from "react"

interface CryptoPriceCardProps {
  crypto: CryptoPrice
  className?: string
  previousPrice?: number
}

export function CryptoPriceCard({ crypto, className = "", previousPrice }: CryptoPriceCardProps) {
  const [priceChangeAnimation, setPriceChangeAnimation] = useState<"up" | "down" | null>(null)

  const isPositive = crypto.price_change_percentage_24h > 0
  const changeColor = isPositive ? "text-green-400" : "text-red-400"
  const TrendIcon = isPositive ? TrendingUp : TrendingDown

  useEffect(() => {
    if (previousPrice && previousPrice !== crypto.current_price) {
      const direction = crypto.current_price > previousPrice ? "up" : "down"
      setPriceChangeAnimation(direction)

      const timer = setTimeout(() => setPriceChangeAnimation(null), 2000)
      return () => clearTimeout(timer)
    }
  }, [crypto.current_price, previousPrice])

  return (
    <Card
      className={`glass hover:glass-strong transition-all duration-300 ${className} ${
        priceChangeAnimation === "up"
          ? "ring-2 ring-green-400/50 bg-green-400/5"
          : priceChangeAnimation === "down"
            ? "ring-2 ring-red-400/50 bg-red-400/5"
            : ""
      }`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <img src={crypto.image || "/placeholder.svg"} alt={crypto.name} className="w-6 h-6 rounded-full" />
          <div>
            <CardTitle className="text-sm font-medium">{crypto.name}</CardTitle>
            <p className="text-xs text-muted-foreground uppercase">{crypto.symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <div
            className={`text-lg font-bold transition-all duration-500 ${
              priceChangeAnimation === "up"
                ? "text-green-400 scale-110"
                : priceChangeAnimation === "down"
                  ? "text-red-400 scale-110"
                  : ""
            }`}
          >
            {formatPrice(crypto.current_price)}
          </div>
          <div className={`text-xs flex items-center ${changeColor}`}>
            <TrendIcon className="h-3 w-3 mr-1" />
            {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Rank #{crypto.market_cap_rank}</span>
          <span>Vol: ${(crypto.total_volume / 1e9).toFixed(2)}B</span>
        </div>
      </CardContent>
    </Card>
  )
}
