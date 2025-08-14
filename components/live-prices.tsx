"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, TrendingUp, Wifi, WifiOff, Bell } from "lucide-react"
import { type CryptoPrice, fetchCryptoPrices, fetchTrendingCoins } from "@/lib/crypto-api"
import { CryptoPriceCard } from "./crypto-price-card"

export function LivePrices() {
  const [majorCoins, setMajorCoins] = useState<CryptoPrice[]>([])
  const [trendingCoins, setTrendingCoins] = useState<CryptoPrice[]>([])
  const [previousMajorPrices, setPreviousMajorPrices] = useState<Record<string, number>>({})
  const [previousTrendingPrices, setPreviousTrendingPrices] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isConnected, setIsConnected] = useState(true)
  const [updateCount, setUpdateCount] = useState(0)
  const [significantChanges, setSignificantChanges] = useState<string[]>([])

  const loadPrices = async () => {
    setLoading(true)
    try {
      const [major, trending] = await Promise.all([
        fetchCryptoPrices(["bitcoin", "ethereum", "binancecoin", "cardano", "solana", "polkadot"]),
        fetchTrendingCoins(),
      ])

      if (majorCoins.length > 0) {
        const prevMajor: Record<string, number> = {}
        majorCoins.forEach((coin) => {
          prevMajor[coin.id] = coin.current_price
        })
        setPreviousMajorPrices(prevMajor)
      }

      if (trendingCoins.length > 0) {
        const prevTrending: Record<string, number> = {}
        trendingCoins.forEach((coin) => {
          prevTrending[coin.id] = coin.current_price
        })
        setPreviousTrendingPrices(prevTrending)
      }

      const changes: string[] = []
      major.forEach((coin) => {
        const prevPrice = previousMajorPrices[coin.id]
        if (prevPrice && Math.abs((coin.current_price - prevPrice) / prevPrice) > 0.05) {
          changes.push(`${coin.symbol.toUpperCase()} ${coin.current_price > prevPrice ? "📈" : "📉"}`)
        }
      })
      setSignificantChanges(changes)

      setMajorCoins(major)
      setTrendingCoins(trending.slice(0, 6))
      setLastUpdated(new Date())
      setUpdateCount((prev) => prev + 1)
      setIsConnected(true)
    } catch (error) {
      console.error("Error loading prices:", error)
      setIsConnected(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPrices()

    // Auto-refresh every 30 seconds
    const interval = setInterval(loadPrices, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="glass overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-display flex items-center min-w-0">
            <TrendingUp className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
            <span className="truncate">Live Prices</span>
            {isConnected ? (
              <Wifi className="ml-2 h-4 w-4 text-green-400 flex-shrink-0" />
            ) : (
              <WifiOff className="ml-2 h-4 w-4 text-red-400 flex-shrink-0" />
            )}
          </CardTitle>
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-muted-foreground">Updated: {lastUpdated.toLocaleTimeString()}</div>
              <div className="text-xs text-primary">
                Updates: {updateCount} • {isConnected ? "Connected" : "Disconnected"}
              </div>
            </div>
            {significantChanges.length > 0 && (
              <div className="relative flex-shrink-0">
                <Bell className="h-4 w-4 text-yellow-400 animate-pulse" />
                <div className="absolute -top-1 -right-1 h-2 w-2 bg-red-400 rounded-full"></div>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={loadPrices}
              disabled={loading}
              className="h-8 w-8 p-0 flex-shrink-0"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>
        {significantChanges.length > 0 && (
          <div className="mt-2 p-2 bg-yellow-400/10 border border-yellow-400/20 rounded-lg overflow-hidden">
            <div className="text-xs text-yellow-400 flex items-center">
              <Bell className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">Significant changes: {significantChanges.join(", ")}</span>
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {loading && majorCoins.length === 0 ? (
          <div className="flex items-center justify-center h-32">
            <RefreshCw className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : (
          <>
            {/* Major Cryptocurrencies */}
            <div className="min-w-0">
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Major Cryptocurrencies</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {majorCoins.map((crypto) => (
                  <CryptoPriceCard key={crypto.id} crypto={crypto} previousPrice={previousMajorPrices[crypto.id]} />
                ))}
              </div>
            </div>

            {/* Trending Coins */}
            {trendingCoins.length > 0 && (
              <div className="min-w-0">
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">Trending Today</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {trendingCoins.map((crypto) => (
                    <CryptoPriceCard
                      key={crypto.id}
                      crypto={crypto}
                      previousPrice={previousTrendingPrices[crypto.id]}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
