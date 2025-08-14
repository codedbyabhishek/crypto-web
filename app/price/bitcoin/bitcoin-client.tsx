"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, Globe, Users, DollarSign, Link } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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

export default function BitcoinPriceClient() {
  const [coinData, setCoinData] = useState<CoinData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false",
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
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "BTC",
          current_price: 43250.0,
          price_change_percentage_24h: 2.45,
          market_cap: 847500000000,
          market_cap_rank: 1,
          total_volume: 28500000000,
          circulating_supply: 19600000,
          max_supply: 21000000,
          ath: 69045.0,
          ath_change_percentage: -37.4,
          ath_date: "2021-11-10T14:24:11.849Z",
          atl: 67.81,
          atl_change_percentage: 63650.2,
          atl_date: "2013-07-06T00:00:00.000Z",
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
          <Breadcrumb>
            <BreadcrumbList className="text-white/80">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/price" className="hover:text-cyan-400 transition-colors">
                  Price
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-orange-400 font-medium">Bitcoin</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              ₿
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {coinData?.name} ({coinData?.symbol})
              </h1>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-orange-500/20 text-orange-300">
                  Rank #{coinData?.market_cap_rank}
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                  Cryptocurrency
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
                  {(coinData?.max_supply || 0).toLocaleString()} {coinData?.symbol}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{
                    width: `${((coinData?.circulating_supply || 0) / (coinData?.max_supply || 1)) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="text-sm text-gray-400">
                {(((coinData?.circulating_supply || 0) / (coinData?.max_supply || 1)) * 100).toFixed(1)}% of max supply
                in circulation
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

        {/* About Bitcoin */}
        <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              About Bitcoin
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Bitcoin is the world's first and largest cryptocurrency by market capitalization. Created by the
              pseudonymous Satoshi Nakamoto in 2009, Bitcoin introduced the concept of a decentralized digital currency
              that operates without the need for a central authority or intermediary. Learn more about{" "}
              <Link href="/how-to-make-money-from-crypto" className="text-orange-400 hover:text-orange-300 underline">
                how to make money from Bitcoin and other cryptocurrencies
              </Link>
              .
            </p>
            <p className="text-gray-300 leading-relaxed">
              Built on blockchain technology, Bitcoin enables peer-to-peer transactions that are verified by network
              nodes through cryptography and recorded in a public distributed ledger. With a maximum supply of 21
              million coins, Bitcoin is designed to be deflationary, making it attractive as a store of value and hedge
              against inflation. For mining information, check our guide on{" "}
              <Link href="/what-is-crypto-mining" className="text-orange-400 hover:text-orange-300 underline">
                cryptocurrency mining and how Bitcoin mining works
              </Link>
              .
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-orange-400">Key Features</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Decentralized network</li>
                  <li>• Limited supply (21M coins)</li>
                  <li>• Proof-of-Work consensus</li>
                  <li>• Global accessibility</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <h4 className="font-semibold mb-2 text-orange-400">Use Cases</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Store of value</li>
                  <li>• Digital payments</li>
                  <li>• Investment asset</li>
                  <li>• Inflation hedge</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Cryptocurrencies */}
        <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Related Cryptocurrencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/price/ethereum" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h4 className="font-semibold mb-2 text-blue-400">Ethereum (ETH)</h4>
                <p className="text-sm text-gray-400">Smart contract platform and Bitcoin alternative</p>
              </Link>
              <Link href="/price/solana" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h4 className="font-semibold mb-2 text-purple-400">Solana (SOL)</h4>
                <p className="text-sm text-gray-400">High-performance blockchain for DeFi and NFTs</p>
              </Link>
              <Link href="/price/dogecoin" className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <h4 className="font-semibold mb-2 text-yellow-400">Dogecoin (DOGE)</h4>
                <p className="text-sm text-gray-400">Popular meme coin with strong community support</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Educational Resources */}
        <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Educational Resources
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/how-to-make-money-from-crypto"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2 text-orange-400">How to Make Money from Crypto</h4>
                <p className="text-sm text-gray-400">
                  Complete guide to cryptocurrency trading and investing strategies
                </p>
              </Link>
              <Link
                href="/what-is-crypto-mining"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2 text-orange-400">What is Cryptocurrency Mining?</h4>
                <p className="text-sm text-gray-400">Learn about Bitcoin mining, hardware, and profitability</p>
              </Link>
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
                href="https://bitcoin.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">Official Website</h4>
                <p className="text-sm text-gray-400">bitcoin.org</p>
              </a>
              <a
                href="https://github.com/bitcoin/bitcoin"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">GitHub Repository</h4>
                <p className="text-sm text-gray-400">Source code & development</p>
              </a>
              <a
                href="https://bitcointalk.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <h4 className="font-semibold mb-2">Community Forum</h4>
                <p className="text-sm text-gray-400">BitcoinTalk discussion</p>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
