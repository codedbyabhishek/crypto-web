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

export default function BNBPricePage() {
  const [coinData, setCoinData] = useState<CoinData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/binancecoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
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
        // Fallback data
        setCoinData({
          id: "binancecoin",
          name: "BNB",
          symbol: "BNB",
          current_price: 315.5,
          price_change_percentage_24h: 0.85,
          market_cap: 47200000000,
          market_cap_rank: 4,
          total_volume: 1800000000,
          circulating_supply: 149500000,
          max_supply: 200000000,
          ath: 686.31,
          ath_change_percentage: -54.0,
          ath_date: "2021-05-10T00:00:00.000Z",
          atl: 0.096749,
          atl_change_percentage: 326000.2,
          atl_date: "2017-10-19T00:00:00.000Z",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900 font-sans">
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
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              BNB
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {coinData?.name} ({coinData?.symbol})
              </h1>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300">
                  Rank #{coinData?.market_cap_rank}
                </Badge>
                <Badge variant="secondary" className="bg-orange-500/20 text-orange-300">
                  Exchange Token
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
                <span className="font-semibold">
                  {coinData?.max_supply ? (coinData?.max_supply || 0).toLocaleString() : "No Limit"} {coinData?.symbol}
                </span>
              </div>
              {coinData?.max_supply && (
                <>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{
                        width: `${((coinData?.circulating_supply || 0) / (coinData?.max_supply || 1)) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400">
                    {(((coinData?.circulating_supply || 0) / (coinData?.max_supply || 1)) * 100).toFixed(1)}% of max
                    supply in circulation
                  </div>
                </>
              )}
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

        {/* About BNB */}
        <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              About BNB
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              BNB is the native cryptocurrency of the Binance ecosystem, originally created as a utility token for the
              Binance exchange. It has evolved into a multi-purpose digital asset that powers the BNB Chain (formerly
              Binance Smart Chain), one of the most popular blockchain networks for DeFi and dApps.
            </p>
            <p className="text-gray-300 leading-relaxed">
              BNB offers various utilities including trading fee discounts on Binance, participation in token sales on
              Binance Launchpad, payment for transaction fees on BNB Chain, and staking rewards. The token follows a
              deflationary model with quarterly burns, reducing the total supply over time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-yellow-400">Key Features</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Trading fee discounts</li>
                  <li>• BNB Chain gas fees</li>
                  <li>• Quarterly token burns</li>
                  <li>• Staking rewards</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-yellow-400">Use Cases</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Exchange utility</li>
                  <li>• DeFi applications</li>
                  <li>• NFT marketplace</li>
                  <li>• Payment method</li>
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
                href="https://www.binance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">Binance Exchange</h4>
                <p className="text-sm text-gray-400">binance.com</p>
              </a>
              <a
                href="https://www.bnbchain.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">BNB Chain</h4>
                <p className="text-sm text-gray-400">Official blockchain</p>
              </a>
              <a
                href="https://github.com/bnb-chain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">GitHub</h4>
                <p className="text-sm text-gray-400">Source code</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
