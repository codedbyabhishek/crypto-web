"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Newspaper, ExternalLink } from "lucide-react"
import type { NewsArticle } from "@/lib/news-api"
import { fetchCryptoNews } from "@/lib/news-api"
import { NewsArticleCard } from "./news-article-card"

export function CryptoNewsFeed() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  const loadNews = async () => {
    setLoading(true)
    try {
      const news = await fetchCryptoNews(12)
      setArticles(news)
      setLastUpdated(new Date())
    } catch (error) {
      console.error("Error loading news:", error)
      // Don't clear articles on error, keep showing previous data
      if (articles.length === 0) {
        // Only show fallback if no articles are currently displayed
        setArticles([])
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadNews()

    // Auto-refresh every 10 minutes
    const interval = setInterval(loadNews, 600000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="glass overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-display flex items-center min-w-0">
            <Newspaper className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
            <span className="truncate">Latest Crypto News</span>
          </CardTitle>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-muted-foreground hidden sm:inline">
              Updated: {lastUpdated.toLocaleTimeString()}
            </span>
            <Button variant="ghost" size="sm" onClick={loadNews} disabled={loading} className="h-8 w-8 p-0">
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading && articles.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="glass animate-pulse overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-white/10 rounded-t-lg"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="h-3 bg-white/10 rounded w-full"></div>
                    <div className="h-3 bg-white/10 rounded w-2/3"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-4">
              {articles.slice(0, 6).map((article) => (
                <NewsArticleCard key={article.id} article={article} />
              ))}
            </div>

            {articles.length > 6 && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground border-t border-white/10 pt-4">
                  More Headlines
                </h3>
                <div className="space-y-2">
                  {articles.slice(6, 12).map((article) => (
                    <div
                      key={article.id}
                      className="glass p-3 rounded-lg hover:glass-strong transition-all duration-300 cursor-pointer group overflow-hidden"
                      onClick={() => {
                        if (article.url && article.url !== "#") {
                          window.open(article.url, "_blank", "noopener,noreferrer")
                        }
                      }}
                    >
                      <div className="flex items-start justify-between gap-3 min-w-0">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-muted-foreground truncate">{article.source}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground flex-shrink-0">
                              {new Date(article.published_on * 1000).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
