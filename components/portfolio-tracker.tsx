"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, TrendingUp, TrendingDown, Wallet, DollarSign, Target, Award } from "lucide-react"
import {
  type PortfolioHolding,
  type PortfolioStats,
  calculateHoldingValue,
  calculatePortfolioStats,
  savePortfolio,
  loadPortfolio,
} from "@/lib/portfolio"
import { fetchCryptoPrices, formatPrice } from "@/lib/crypto-api"
import { AddHoldingDialog } from "./add-holding-dialog"

export function PortfolioTracker() {
  const [holdings, setHoldings] = useState<PortfolioHolding[]>([])
  const [stats, setStats] = useState<PortfolioStats>({
    totalValue: 0,
    totalInvested: 0,
    totalProfitLoss: 0,
    totalProfitLossPercentage: 0,
    topPerformer: null,
    worstPerformer: null,
  })
  const [loading, setLoading] = useState(true)

  const updatePrices = async () => {
    if (holdings.length === 0) return

    const symbols = holdings.map((h) => h.symbol.toLowerCase()).join(",")
    try {
      const prices = await fetchCryptoPrices(symbols.split(","))

      const updatedHoldings = holdings.map((holding) => {
        const priceData = prices.find((p) => p.symbol.toUpperCase() === holding.symbol)
        return {
          ...holding,
          currentPrice: priceData?.current_price || holding.currentPrice,
          image: priceData?.image || holding.image,
        }
      })

      setHoldings(updatedHoldings)
      setStats(calculatePortfolioStats(updatedHoldings))
      savePortfolio(updatedHoldings)
    } catch (error) {
      console.error("Error updating prices:", error)
    }
  }

  const addHolding = (newHolding: Omit<PortfolioHolding, "id" | "currentPrice">) => {
    const holding: PortfolioHolding = {
      ...newHolding,
      id: Date.now().toString(),
      currentPrice: newHolding.averagePrice, // Will be updated by price fetch
    }

    const updatedHoldings = [...holdings, holding]
    setHoldings(updatedHoldings)
    setStats(calculatePortfolioStats(updatedHoldings))
    savePortfolio(updatedHoldings)
  }

  const removeHolding = (id: string) => {
    const updatedHoldings = holdings.filter((h) => h.id !== id)
    setHoldings(updatedHoldings)
    setStats(calculatePortfolioStats(updatedHoldings))
    savePortfolio(updatedHoldings)
  }

  useEffect(() => {
    const savedHoldings = loadPortfolio()
    setHoldings(savedHoldings)
    setStats(calculatePortfolioStats(savedHoldings))
    setLoading(false)
  }, [])

  useEffect(() => {
    if (holdings.length > 0) {
      updatePrices()
      const interval = setInterval(updatePrices, 60000) // Update every minute
      return () => clearInterval(interval)
    }
  }, [holdings.length])

  if (loading) {
    return (
      <Card className="glass animate-pulse">
        <CardContent className="p-6">
          <div className="h-64 bg-white/10 rounded"></div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6 min-w-0">
      {/* Portfolio Stats */}
      <Card className="glass overflow-hidden">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-display flex items-center min-w-0">
              <Wallet className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
              <span className="truncate">Portfolio Overview</span>
            </CardTitle>
            <div className="flex-shrink-0">
              <AddHoldingDialog onAddHolding={addHolding} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {holdings.length === 0 ? (
            <div className="text-center py-8">
              <Wallet className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">
                No holdings yet. Add your first cryptocurrency to get started!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="glass p-4 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground truncate">Total Value</span>
                  <DollarSign className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div className="text-2xl font-bold gradient-text truncate">{formatPrice(stats.totalValue)}</div>
              </div>

              <div className="glass p-4 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground truncate">Total Invested</span>
                  <Target className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div className="text-2xl font-bold truncate">{formatPrice(stats.totalInvested)}</div>
              </div>

              <div className="glass p-4 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground truncate">P&L</span>
                  {stats.totalProfitLoss >= 0 ? (
                    <TrendingUp className="h-4 w-4 text-green-400 flex-shrink-0" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-400 flex-shrink-0" />
                  )}
                </div>
                <div
                  className={`text-2xl font-bold truncate ${stats.totalProfitLoss >= 0 ? "text-green-400" : "text-red-400"}`}
                >
                  {formatPrice(stats.totalProfitLoss)}
                </div>
                <div className={`text-xs truncate ${stats.totalProfitLoss >= 0 ? "text-green-400" : "text-red-400"}`}>
                  {stats.totalProfitLossPercentage.toFixed(2)}%
                </div>
              </div>

              <div className="glass p-4 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground truncate">Holdings</span>
                  <Award className="h-4 w-4 text-primary flex-shrink-0" />
                </div>
                <div className="text-2xl font-bold">{holdings.length}</div>
                <div className="text-xs text-muted-foreground truncate">Cryptocurrencies</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Holdings List */}
      {holdings.length > 0 && (
        <Card className="glass overflow-hidden">
          <CardHeader>
            <CardTitle className="font-display truncate">Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {holdings.map((holding) => {
                const { currentValue, investedValue, profitLoss, profitLossPercentage } = calculateHoldingValue(holding)
                const isPositive = profitLoss >= 0

                return (
                  <div key={holding.id} className="glass p-4 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between min-w-0">
                      <div className="flex items-center space-x-3 min-w-0 flex-1">
                        {holding.image && (
                          <img
                            src={holding.image || "/placeholder.svg"}
                            alt={holding.name}
                            className="w-8 h-8 rounded-full flex-shrink-0"
                          />
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold truncate">{holding.name}</div>
                          <div className="text-sm text-muted-foreground truncate">
                            {holding.amount} {holding.symbol}
                          </div>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0 ml-4">
                        <div className="font-semibold truncate">{formatPrice(currentValue)}</div>
                        <div className={`text-sm flex items-center ${isPositive ? "text-green-400" : "text-red-400"}`}>
                          {isPositive ? (
                            <TrendingUp className="h-3 w-3 mr-1 flex-shrink-0" />
                          ) : (
                            <TrendingDown className="h-3 w-3 mr-1 flex-shrink-0" />
                          )}
                          <span className="truncate">
                            {formatPrice(Math.abs(profitLoss))} ({Math.abs(profitLossPercentage).toFixed(2)}%)
                          </span>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeHolding(holding.id)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10 flex-shrink-0 ml-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="truncate">
                        <span className="text-muted-foreground">Avg Price: </span>
                        <span>{formatPrice(holding.averagePrice)}</span>
                      </div>
                      <div className="truncate">
                        <span className="text-muted-foreground">Current: </span>
                        <span>{formatPrice(holding.currentPrice)}</span>
                      </div>
                      <div className="truncate">
                        <span className="text-muted-foreground">Invested: </span>
                        <span>{formatPrice(investedValue)}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
