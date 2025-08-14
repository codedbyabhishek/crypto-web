"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, BarChart3, TrendingUp, Activity } from "lucide-react"
import { type MarketData, fetchGlobalMarketData, formatMarketCap } from "@/lib/crypto-api"

export function MarketOverview() {
  const [marketData, setMarketData] = useState<MarketData | null>(null)
  const [loading, setLoading] = useState(true)
  const [previousData, setPreviousData] = useState<MarketData | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  useEffect(() => {
    const loadMarketData = async () => {
      try {
        const data = await fetchGlobalMarketData()
        if (data) {
          setPreviousData(marketData)
          setMarketData(data)
          setLastUpdated(new Date())
        }
        setLoading(false)
      } catch (error) {
        console.error("Error loading market data:", error)
        setLoading(false)
      }
    }

    loadMarketData()

    // Refresh every 5 minutes
    const interval = setInterval(loadMarketData, 300000)
    return () => clearInterval(interval)
  }, [])

  const calculateChange = (current: number, previous: number | undefined) => {
    if (!previous) return 0
    return ((current - previous) / previous) * 100
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="glass animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-white/10 rounded mb-2"></div>
              <div className="h-8 bg-white/10 rounded mb-1"></div>
              <div className="h-3 bg-white/10 rounded w-20"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="glass neon-glow overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium truncate">Total Market Cap</CardTitle>
          <DollarSign className="h-4 w-4 text-primary flex-shrink-0" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold gradient-text truncate">
            {marketData ? formatMarketCap(marketData.total_market_cap.usd) : "$2.1T"}
          </div>
          <p className="text-xs text-green-400 flex items-center mt-1">
            <TrendingUp className="h-3 w-3 mr-1 flex-shrink-0" />
            <span className="truncate">+2.4% (24h)</span>
          </p>
        </CardContent>
      </Card>

      <Card className="glass overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium truncate">24h Volume</CardTitle>
          <BarChart3 className="h-4 w-4 text-primary flex-shrink-0" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold truncate">
            {marketData ? formatMarketCap(marketData.total_volume.usd) : "$89.2B"}
          </div>
          <p className="text-xs text-red-400 flex items-center mt-1 truncate">-1.2% (24h)</p>
        </CardContent>
      </Card>

      <Card className="glass overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium truncate">BTC Dominance</CardTitle>
          <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold truncate">
            {marketData ? `${marketData.market_cap_percentage.btc.toFixed(1)}%` : "54.2%"}
          </div>
          <p className="text-xs text-green-400 flex items-center mt-1 truncate">+0.8% (24h)</p>
        </CardContent>
      </Card>

      <Card className="glass overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium truncate">Market Activity</CardTitle>
          <Activity className="h-4 w-4 text-primary flex-shrink-0" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">High</div>
          <p className="text-xs text-muted-foreground mt-1 truncate">Updated: {lastUpdated.toLocaleTimeString()}</p>
        </CardContent>
      </Card>
    </div>
  )
}
