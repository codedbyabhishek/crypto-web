export interface CryptoPrice {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  market_cap_rank: number
  total_volume: number
  image: string
}

export interface MarketData {
  total_market_cap: { usd: number }
  total_volume: { usd: number }
  market_cap_percentage: { btc: number }
}

const COINGECKO_API = "https://api.coingecko.com/api/v3"

const fallbackPrices: CryptoPrice[] = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    current_price: 45000,
    price_change_percentage_24h: 2.5,
    market_cap: 850000000000,
    market_cap_rank: 1,
    total_volume: 25000000000,
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    current_price: 2800,
    price_change_percentage_24h: 1.8,
    market_cap: 340000000000,
    market_cap_rank: 2,
    total_volume: 15000000000,
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
]

const fallbackMarketData: MarketData = {
  total_market_cap: { usd: 1200000000000 },
  total_volume: { usd: 45000000000 },
  market_cap_percentage: { btc: 42.5 },
}

const API_CACHE = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 60000 // 1 minute cache
const REQUEST_DELAY = 1000 // 1 second delay between requests
let lastRequestTime = 0

async function rateLimitedFetch(url: string, options: RequestInit = {}): Promise<Response> {
  const now = Date.now()
  const timeSinceLastRequest = now - lastRequestTime

  if (timeSinceLastRequest < REQUEST_DELAY) {
    await new Promise((resolve) => setTimeout(resolve, REQUEST_DELAY - timeSinceLastRequest))
  }

  lastRequestTime = Date.now()

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 15000) // Increased timeout

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "User-Agent": "CryptoMoneyphobia/1.0",
        ...options.headers,
      },
    })

    clearTimeout(timeoutId)

    if (response.status === 429) {
      // Rate limited - wait longer and retry once
      await new Promise((resolve) => setTimeout(resolve, 5000))
      const retryResponse = await fetch(url, {
        ...options,
        headers: {
          Accept: "application/json",
          "User-Agent": "CryptoMoneyphobia/1.0",
          ...options.headers,
        },
      })
      return retryResponse
    }

    return response
  } finally {
    clearTimeout(timeoutId)
  }
}

function getCachedData(key: string): any | null {
  const cached = API_CACHE.get(key)
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }
  return null
}

function setCachedData(key: string, data: any): void {
  API_CACHE.set(key, { data, timestamp: Date.now() })
}

export async function fetchCryptoPrices(ids: string[] = ["bitcoin", "ethereum"]): Promise<CryptoPrice[]> {
  const cacheKey = `prices-${ids.join(",")}`
  const cached = getCachedData(cacheKey)
  if (cached) return cached

  try {
    const url = `${COINGECKO_API}/coins/markets?vs_currency=usd&ids=${ids.join(",")}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h`
    const response = await rateLimitedFetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const result = Array.isArray(data) ? data : fallbackPrices
    setCachedData(cacheKey, result)
    return result
  } catch (error) {
    console.error("Error fetching crypto prices:", error)
    return fallbackPrices
  }
}

export async function fetchTrendingCoins(): Promise<CryptoPrice[]> {
  const cacheKey = "trending-coins"
  const cached = getCachedData(cacheKey)
  if (cached) return cached

  try {
    const url = `${COINGECKO_API}/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    const response = await rateLimitedFetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const result = Array.isArray(data) ? data : fallbackPrices
    setCachedData(cacheKey, result)
    return result
  } catch (error) {
    console.error("Error fetching trending coins:", error)
    return [
      ...fallbackPrices,
      {
        id: "binancecoin",
        symbol: "bnb",
        name: "BNB",
        current_price: 320,
        price_change_percentage_24h: -1.2,
        market_cap: 52000000000,
        market_cap_rank: 3,
        total_volume: 1200000000,
        image: "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
      },
      {
        id: "cardano",
        symbol: "ada",
        name: "Cardano",
        current_price: 0.45,
        price_change_percentage_24h: 3.1,
        market_cap: 16000000000,
        market_cap_rank: 8,
        total_volume: 800000000,
        image: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
      },
    ]
  }
}

export async function fetchGlobalMarketData(): Promise<MarketData | null> {
  const cacheKey = "global-market-data"
  const cached = getCachedData(cacheKey)
  if (cached) return cached

  try {
    const response = await rateLimitedFetch(`${COINGECKO_API}/global`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (!data.data) {
      throw new Error("Invalid global market data format")
    }

    setCachedData(cacheKey, data.data)
    return data.data
  } catch (error) {
    console.error("Error fetching global market data:", error)
    return fallbackMarketData
  }
}

export function formatPrice(price: number): string {
  if (price >= 1) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  } else {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 4,
      maximumFractionDigits: 6,
    }).format(price)
  }
}

export function formatMarketCap(marketCap: number): string {
  if (marketCap >= 1e12) {
    return `$${(marketCap / 1e12).toFixed(2)}T`
  } else if (marketCap >= 1e9) {
    return `$${(marketCap / 1e9).toFixed(2)}B`
  } else if (marketCap >= 1e6) {
    return `$${(marketCap / 1e6).toFixed(2)}M`
  } else {
    return `$${marketCap.toLocaleString()}`
  }
}
