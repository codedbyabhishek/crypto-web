export interface PortfolioHolding {
  id: string
  symbol: string
  name: string
  amount: number
  averagePrice: number
  currentPrice: number
  image?: string
}

export interface PortfolioStats {
  totalValue: number
  totalInvested: number
  totalProfitLoss: number
  totalProfitLossPercentage: number
  topPerformer: PortfolioHolding | null
  worstPerformer: PortfolioHolding | null
}

export function calculateHoldingValue(holding: PortfolioHolding) {
  const currentValue = holding.amount * holding.currentPrice
  const investedValue = holding.amount * holding.averagePrice
  const profitLoss = currentValue - investedValue
  const profitLossPercentage = investedValue > 0 ? (profitLoss / investedValue) * 100 : 0

  return {
    currentValue,
    investedValue,
    profitLoss,
    profitLossPercentage,
  }
}

export function calculatePortfolioStats(holdings: PortfolioHolding[]): PortfolioStats {
  if (holdings.length === 0) {
    return {
      totalValue: 0,
      totalInvested: 0,
      totalProfitLoss: 0,
      totalProfitLossPercentage: 0,
      topPerformer: null,
      worstPerformer: null,
    }
  }

  let totalValue = 0
  let totalInvested = 0
  let topPerformer: PortfolioHolding | null = null
  let worstPerformer: PortfolioHolding | null = null
  let bestPerformance = Number.NEGATIVE_INFINITY
  let worstPerformance = Number.POSITIVE_INFINITY

  holdings.forEach((holding) => {
    const { currentValue, investedValue, profitLossPercentage } = calculateHoldingValue(holding)

    totalValue += currentValue
    totalInvested += investedValue

    if (profitLossPercentage > bestPerformance) {
      bestPerformance = profitLossPercentage
      topPerformer = holding
    }

    if (profitLossPercentage < worstPerformance) {
      worstPerformance = profitLossPercentage
      worstPerformer = holding
    }
  })

  const totalProfitLoss = totalValue - totalInvested
  const totalProfitLossPercentage = totalInvested > 0 ? (totalProfitLoss / totalInvested) * 100 : 0

  return {
    totalValue,
    totalInvested,
    totalProfitLoss,
    totalProfitLossPercentage,
    topPerformer,
    worstPerformer,
  }
}

export function savePortfolio(holdings: PortfolioHolding[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem("crypto-portfolio", JSON.stringify(holdings))
  }
}

export function loadPortfolio(): PortfolioHolding[] {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("crypto-portfolio")
    return saved ? JSON.parse(saved) : []
  }
  return []
}
