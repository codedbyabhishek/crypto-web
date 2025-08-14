"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, TrendingUp, TrendingDown, Users, DollarSign, Smartphone, Shield } from "lucide-react"
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

export default function PiNetworkPricePage() {
  const [coinData, setCoinData] = useState<CoinData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/pi-network?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
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
          id: "pi-network",
          name: "Pi Network",
          symbol: "PI",
          current_price: 0.0,
          price_change_percentage_24h: 0.0,
          market_cap: 0,
          market_cap_rank: 0,
          total_volume: 0,
          circulating_supply: 0,
          max_supply: 100000000000,
          ath: 0.0,
          ath_change_percentage: 0.0,
          ath_date: "2024-01-01T00:00:00.000Z",
          atl: 0.0,
          atl_change_percentage: 0.0,
          atl_date: "2024-01-01T00:00:00.000Z",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchCoinData()
    const interval = setInterval(fetchCoinData, 60000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    if (price === 0) return "Not Listed"
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }).format(price)
  }

  const formatLargeNumber = (num: number) => {
    if (num === 0) return "Not Available"
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
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              π
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {coinData?.name} ({coinData?.symbol})
              </h1>
              <div className="flex items-center gap-2">
                {coinData?.market_cap_rank && coinData.market_cap_rank > 0 ? (
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    Rank #{coinData.market_cap_rank}
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-gray-500/20 text-gray-300">
                    Pre-Launch
                  </Badge>
                )}
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                  Mobile Mining
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
              {coinData?.current_price === 0 ? (
                <div className="text-yellow-400">
                  <Shield className="h-4 w-4 inline mr-1" />
                  Mainnet Launch Pending
                </div>
              ) : (
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
              )}
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white">
            <CardHeader>
              <CardTitle>Market Cap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">{formatLargeNumber(coinData?.market_cap || 0)}</div>
              <div className="text-gray-400">
                {coinData?.market_cap_rank && coinData.market_cap_rank > 0
                  ? `Rank #${coinData.market_cap_rank}`
                  : "Pre-Launch Phase"}
              </div>
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
                  {coinData?.circulating_supply === 0
                    ? "Not Yet Released"
                    : `${(coinData?.circulating_supply || 0).toLocaleString()} ${coinData?.symbol}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Supply:</span>
                <span className="font-semibold">
                  {(coinData?.max_supply || 0).toLocaleString()} {coinData?.symbol}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                  style={{
                    width:
                      coinData?.circulating_supply === 0
                        ? "0%"
                        : `${((coinData?.circulating_supply || 0) / (coinData?.max_supply || 1)) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="text-sm text-gray-400">
                {coinData?.circulating_supply === 0
                  ? "Awaiting mainnet launch for token distribution"
                  : `${(((coinData?.circulating_supply || 0) / (coinData?.max_supply || 1)) * 100).toFixed(1)}% of max supply in circulation`}
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white">
            <CardHeader>
              <CardTitle>Network Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Active Miners:</span>
                  <span className="font-semibold">35M+ Users</span>
                </div>
                <div className="text-sm text-purple-400">Growing mobile mining community</div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Mining Method:</span>
                  <span className="font-semibold">Mobile App</span>
                </div>
                <div className="text-sm text-green-400">Energy-efficient consensus</div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Launch Status:</span>
                  <span className="font-semibold">Testnet Phase</span>
                </div>
                <div className="text-sm text-yellow-400">Preparing for mainnet</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About Pi Network */}
        <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              About Pi Network
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Pi Network is a revolutionary cryptocurrency project that enables users to mine Pi coins directly from
              their mobile phones without draining battery or consuming excessive data. Founded by Stanford PhDs Dr.
              Nicolas Kokkalis, Dr. Chengdiao Fan, and Vincent McPhillip, Pi Network aims to create the world's most
              widely distributed cryptocurrency.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Unlike traditional cryptocurrencies that require expensive mining equipment, Pi Network uses a novel
              consensus algorithm that allows ordinary people to mine Pi coins using their smartphones. The project is
              currently in its testnet phase, with over 35 million engaged Pioneers worldwide preparing for the mainnet
              launch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-400">Key Features</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Mobile-first mining</li>
                  <li>• Energy-efficient consensus</li>
                  <li>• User-friendly interface</li>
                  <li>• Global accessibility</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-purple-400">Development Phase</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Testnet operational</li>
                  <li>• KYC verification process</li>
                  <li>• Ecosystem development</li>
                  <li>• Mainnet preparation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
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
                href="https://minepi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">Official Website</h4>
                <p className="text-sm text-gray-400">minepi.com</p>
              </a>
              <a
                href="https://pinetwork.wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">Pi Network Wiki</h4>
                <p className="text-sm text-gray-400">Community documentation</p>
              </a>
              <a
                href="https://www.reddit.com/r/PiNetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">Reddit Community</h4>
                <p className="text-sm text-gray-400">r/PiNetwork discussion</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
