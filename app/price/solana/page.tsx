"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, TrendingUp, TrendingDown, Globe, Users, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CoinData {
  id: string
  name: string
  symbol: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  market_cap_rank: number
  total_volume: number
  circulating_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
}

export default function SolanaPricePage() {
  const [coinData, setCoinData] = useState<CoinData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/solana?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
          {
            headers: {
              Accept: "application/json",
            },
          },
        )

        if (!response.ok) throw new Error("Failed to fetch")

        const data = await response.json()
        setCoinData({
          id: data.id,
          name: data.name,
          symbol: data.symbol.toUpperCase(),
          current_price: data.market_data.current_price.usd,
          price_change_percentage_24h: data.market_data.price_change_percentage_24h,
          market_cap: data.market_data.market_cap.usd,
          market_cap_rank: data.market_data.market_cap_rank,
          total_volume: data.market_data.total_volume.usd,
          circulating_supply: data.market_data.circulating_supply,
          max_supply: data.market_data.max_supply,
          ath: data.market_data.ath.usd,
          ath_change_percentage: data.market_data.ath_change_percentage.usd,
          ath_date: data.market_data.ath_date.usd,
          atl: data.market_data.atl.usd,
          atl_change_percentage: data.market_data.atl_change_percentage.usd,
          atl_date: data.market_data.atl_date.usd,
        })
      } catch (error) {
        setCoinData({
          id: "solana",
          name: "Solana",
          symbol: "SOL",
          current_price: 98.45,
          price_change_percentage_24h: 3.2,
          market_cap: 45200000000,
          market_cap_rank: 5,
          total_volume: 2800000000,
          circulating_supply: 459000000,
          max_supply: null,
          ath: 260.06,
          ath_change_percentage: -62.1,
          ath_date: "2021-11-06T21:54:35.825Z",
          atl: 0.500801,
          atl_change_percentage: 19550.8,
          atl_date: "2020-05-11T19:35:23.449Z",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchCoinData()
    const interval = setInterval(fetchCoinData, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  const formatLargeNumber = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    return `$${num.toLocaleString()}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
              SOL
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {coinData?.name} ({coinData?.symbol})
              </h1>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                  Rank #{coinData?.market_cap_rank}
                </Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-300">
                  Smart Contract Platform
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Current Price
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{formatPrice(coinData?.current_price || 0)}</div>
              <div
                className={`flex items-center gap-1 ${
                  (coinData?.price_change_percentage_24h || 0) >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {(coinData?.price_change_percentage_24h || 0) >= 0 ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {Math.abs(coinData?.price_change_percentage_24h || 0).toFixed(2)}% (24h)
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white">
            <CardHeader>
              <CardTitle>Market Cap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{formatLargeNumber(coinData?.market_cap || 0)}</div>
              <div className="text-gray-400">Rank #{coinData?.market_cap_rank}</div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white">
            <CardHeader>
              <CardTitle>24h Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatLargeNumber(coinData?.total_volume || 0)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Supply Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white">
            <CardHeader>
              <CardTitle>Supply Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Circulating Supply:</span>
                <span className="font-semibold">
                  {(coinData?.circulating_supply || 0).toLocaleString()} {coinData?.symbol}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Supply:</span>
                <span className="font-semibold">No Maximum Supply</span>
              </div>
              <div className="text-sm text-gray-400">
                Solana has an inflationary supply model with decreasing inflation rate over time.
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white">
            <CardHeader>
              <CardTitle>Price Extremes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">All-Time High:</span>
                  <span className="font-semibold">{formatPrice(coinData?.ath || 0)}</span>
                </div>
                <div className="text-sm text-red-400">{coinData?.ath_change_percentage?.toFixed(1)}% from ATH</div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">All-Time Low:</span>
                  <span className="font-semibold">{formatPrice(coinData?.atl || 0)}</span>
                </div>
                <div className="text-sm text-green-400">+{coinData?.atl_change_percentage?.toFixed(0)}% from ATL</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              About Solana
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Solana is a high-performance blockchain platform designed for decentralized applications and
              crypto-currencies. Founded by Anatoly Yakovenko in 2020, Solana aims to solve the blockchain trilemma by
              providing scalability, security, and decentralization without compromising on any aspect.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Using its innovative Proof of History (PoH) consensus mechanism combined with Proof of Stake (PoS), Solana
              can process over 65,000 transactions per second with sub-second finality and extremely low fees. This
              makes it one of the fastest and most cost-effective blockchain networks available.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-400">Key Features</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• 65,000+ TPS capability</li>
                  <li>• Sub-second finality</li>
                  <li>• Low transaction fees</li>
                  <li>• Proof of History consensus</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-400">Use Cases</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• DeFi applications</li>
                  <li>• NFT marketplaces</li>
                  <li>• Web3 gaming</li>
                  <li>• High-frequency trading</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Resources & Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href="https://solana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">Official Website</h4>
                <p className="text-sm text-gray-400">solana.com</p>
              </a>
              <a
                href="https://github.com/solana-labs/solana"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">GitHub Repository</h4>
                <p className="text-sm text-gray-400">Source code & development</p>
              </a>
              <a
                href="https://docs.solana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">Developer Docs</h4>
                <p className="text-sm text-gray-400">Technical documentation</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
