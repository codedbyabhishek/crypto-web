"use client"

import Link from "next/link"
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

const popularCryptos = [
  { name: "Bitcoin", symbol: "BTC", slug: "bitcoin", color: "orange" },
  { name: "Ethereum", symbol: "ETH", slug: "ethereum", color: "blue" },
  { name: "XRP", symbol: "XRP", slug: "xrp", color: "blue" },
  { name: "Solana", symbol: "SOL", slug: "solana", color: "purple" },
  { name: "Dogecoin", symbol: "DOGE", slug: "dogecoin", color: "yellow" },
  { name: "Cardano", symbol: "ADA", slug: "cardano", color: "blue" },
]

export default function PriceIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
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
                <BreadcrumbPage className="text-cyan-400 font-medium">Price</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Cryptocurrency Prices</h1>
          <p className="text-gray-300 text-lg">
            Track live prices and detailed information for popular cryptocurrencies
          </p>
        </div>

        {/* Popular Cryptocurrencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCryptos.map((crypto) => (
            <Link key={crypto.slug} href={`/price/${crypto.slug}`}>
              <Card className="backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{crypto.name}</span>
                    <Badge variant="secondary" className={`bg-${crypto.color}-500/20 text-${crypto.color}-300`}>
                      {crypto.symbol}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">View detailed price information and analysis</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
