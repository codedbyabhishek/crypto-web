"use client"

import { useState } from "react"
import { Search, Menu, X, TrendingUp, Wallet, Newspaper, Settings, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LivePrices } from "@/components/live-prices"
import { MarketOverview } from "@/components/market-overview"
import { PortfolioTracker } from "@/components/portfolio-tracker"
import { CryptoNewsFeed } from "@/components/crypto-news-feed"
import { InteractiveChart } from "@/components/interactive-chart"
import { FeaturedArticles } from "@/components/featured-articles"

export default function CryptoDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", active: true, href: "/" },
    { icon: TrendingUp, label: "Markets", active: false, href: "/coming-soon" },
    { icon: Wallet, label: "Portfolio", active: false, href: "/coming-soon" },
    { icon: Newspaper, label: "News", active: false, href: "/coming-soon" },
    { icon: Settings, label: "Settings", active: false, href: "/coming-soon" },
  ]

  return (
    <>
      <div className="min-h-screen flex overflow-hidden">
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 glass-strong transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
            <Link
              href="/"
              className="text-xl font-display font-bold gradient-text truncate hover:opacity-80 transition-opacity"
              title="Crypto Dashboard - MoneyPhobia Home"
            >
              CryptoPhobia
            </Link>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="mt-8 px-4" role="navigation" aria-label="Main navigation">
            {sidebarItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <Button
                  variant={item.active ? "default" : "ghost"}
                  className={`w-full justify-start mb-2 truncate ${item.active ? "neon-glow bg-primary/20" : "hover:bg-white/5"}`}
                  aria-current={item.active ? "page" : undefined}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Button>
              </Link>
            ))}
          </nav>

          <div className="mt-8 px-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick Links</h3>
            <nav aria-label="Quick links">
              <div className="space-y-2">
                <Link
                  href="/price/bitcoin"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  title="Bitcoin (BTC) Live Price and Analysis"
                >
                  Bitcoin Price
                </Link>
                <Link
                  href="/price/ethereum"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  title="Ethereum (ETH) Live Price and Analysis"
                >
                  Ethereum Price
                </Link>
                <Link
                  href="/how-to-make-money-from-crypto"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  title="Complete Guide: How to Make Money from Cryptocurrency"
                >
                  Crypto Guide
                </Link>
                <Link
                  href="/disclaimer"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  title="Legal Disclaimer and Terms"
                >
                  Disclaimer
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0 overflow-hidden flex flex-col">
          <header className="glass-strong border-b border-white/10 px-6 py-4 flex-shrink-0" role="banner">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden flex-shrink-0"
                  onClick={() => setSidebarOpen(true)}
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <Input
                    placeholder="Search cryptocurrencies..."
                    className="pl-10 glass border-white/20 focus:border-primary/50 w-full"
                    aria-label="Search cryptocurrencies"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                <nav className="hidden md:flex items-center gap-4" aria-label="Popular cryptocurrencies">
                  <Link
                    href="/price/bitcoin"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    title="Bitcoin (BTC) Price"
                  >
                    BTC
                  </Link>
                  <Link
                    href="/price/ethereum"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    title="Ethereum (ETH) Price"
                  >
                    ETH
                  </Link>
                  <Link
                    href="/price/solana"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    title="Solana (SOL) Price"
                  >
                    SOL
                  </Link>
                </nav>
                <div className="text-sm text-muted-foreground hidden sm:block">
                  Last updated: <span className="text-primary">Live</span>
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-6 overflow-y-auto flex-1" role="main">
            <h1 className="sr-only">Cryptocurrency Dashboard - Live Prices and Market Analysis</h1>

            <MarketOverview />

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 min-w-0">
              <div className="xl:col-span-2 min-w-0">
                <LivePrices />
              </div>

              <div className="min-w-0">
                <PortfolioTracker />
              </div>
            </div>

            {/* Featured Articles Section */}
            <section className="mt-6" aria-labelledby="featured-articles">
              <h2 id="featured-articles" className="sr-only">
                Featured Cryptocurrency Articles
              </h2>
              <FeaturedArticles />
            </section>

            {/* News and Charts Section */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6 min-w-0">
              <section className="min-w-0" aria-labelledby="crypto-news">
                <h2 id="crypto-news" className="sr-only">
                  Latest Cryptocurrency News
                </h2>
                <CryptoNewsFeed />
              </section>

              <section className="min-w-0" aria-labelledby="interactive-charts">
                <h2 id="interactive-charts" className="sr-only">
                  Interactive Cryptocurrency Charts
                </h2>
                <InteractiveChart />
              </section>
            </div>

            <footer className="mt-12 pt-8 border-t border-white/10" role="contentinfo">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <Link
                    href="/price/bitcoin"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    title="Bitcoin Price"
                  >
                    Bitcoin
                  </Link>
                  <Link
                    href="/price/ethereum"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    title="Ethereum Price"
                  >
                    Ethereum
                  </Link>
                  <Link
                    href="/how-to-make-money-from-crypto"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    title="Crypto Guide"
                  >
                    Crypto Guide
                  </Link>
                  <Link
                    href="/disclaimer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    title="Disclaimer"
                  >
                    Disclaimer
                  </Link>
                </div>
                <div className="text-sm text-muted-foreground text-center md:text-right">
                  <p>
                    &copy; 2024{" "}
                    <Link href="/" className="text-primary hover:underline" title="Crypto Dashboard">
                      crypto.moneyphobia.in
                    </Link>
                  </p>
                </div>
              </div>
            </footer>
          </main>
        </div>

        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}
      </div>
    </>
  )
}
