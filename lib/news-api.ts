export interface NewsArticle {
  id: string
  title: string
  body: string
  url: string
  imageurl?: string
  published_on: number
  source: string
  tags: string
  categories: string
}

export interface CryptoNewsResponse {
  Data: NewsArticle[]
  HasWarning: boolean
  Message: string
  RateLimit: object
  Response: string
  Type: number
}

const CRYPTOCOMPARE_API = "https://min-api.cryptocompare.com/data/v2/news"

export async function fetchCryptoNews(limit = 20): Promise<NewsArticle[]> {
  try {
    const response = await fetch(`${CRYPTOCOMPARE_API}/?lang=EN&sortOrder=latest&limit=${limit}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: CryptoNewsResponse = await response.json()

    if (data.Response === "Success" || (data.Data && Array.isArray(data.Data))) {
      return data.Data.map((article) => ({
        ...article,
        id: `${article.published_on}-${article.title.slice(0, 20)}`,
      }))
    }

    if (data.Message && data.Message.toLowerCase().includes("success")) {
      console.log("API returned success message:", data.Message)
      return (
        data.Data?.map((article) => ({
          ...article,
          id: `${article.published_on}-${article.title.slice(0, 20)}`,
        })) || []
      )
    }

    throw new Error(data.Message || "Failed to fetch news")
  } catch (error) {
    console.error("Error fetching crypto news:", error)
    if (error instanceof Error && !error.message.toLowerCase().includes("success")) {
      // Return fallback news data
      return [
        {
          id: "fallback-1",
          title: "Bitcoin Reaches New All-Time High",
          body: "Bitcoin has surged to unprecedented levels as institutional adoption continues to grow...",
          url: "#",
          imageurl: "/placeholder.svg?height=200&width=300",
          published_on: Date.now() / 1000,
          source: "CryptoNews",
          tags: "BTC,Bitcoin,ATH",
          categories: "BTC",
        },
        {
          id: "fallback-2",
          title: "Ethereum 2.0 Staking Rewards Hit Record High",
          body: "Ethereum staking rewards have reached new heights as more validators join the network...",
          url: "#",
          imageurl: "/placeholder.svg?height=200&width=300",
          published_on: Date.now() / 1000 - 3600,
          source: "EthNews",
          tags: "ETH,Ethereum,Staking",
          categories: "ETH",
        },
        {
          id: "fallback-3",
          title: "DeFi Protocol Launches Revolutionary Yield Farming",
          body: "A new DeFi protocol has introduced innovative yield farming mechanisms that promise higher returns...",
          url: "#",
          imageurl: "/placeholder.svg?height=200&width=300",
          published_on: Date.now() / 1000 - 7200,
          source: "DeFiDaily",
          tags: "DeFi,Yield,Farming",
          categories: "DeFi",
        },
      ]
    }

    throw error
  }
}

export function formatTimeAgo(timestamp: number): string {
  const now = Date.now() / 1000
  const diff = now - timestamp

  if (diff < 60) {
    return "Just now"
  } else if (diff < 3600) {
    const minutes = Math.floor(diff / 60)
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
  } else if (diff < 86400) {
    const hours = Math.floor(diff / 3600)
    return `${hours} hour${hours > 1 ? "s" : ""} ago`
  } else {
    const days = Math.floor(diff / 86400)
    return `${days} day${days > 1 ? "s" : ""} ago`
  }
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + "..."
}
