"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Clock } from "lucide-react"
import type { NewsArticle } from "@/lib/news-api"
import { formatTimeAgo, truncateText } from "@/lib/news-api"

interface NewsArticleCardProps {
  article: NewsArticle
  className?: string
}

export function NewsArticleCard({ article, className = "" }: NewsArticleCardProps) {
  const handleClick = () => {
    if (article.url && article.url !== "#") {
      window.open(article.url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <Card
      className={`glass hover:glass-strong transition-all duration-300 cursor-pointer group ${className}`}
      onClick={handleClick}
    >
      <CardContent className="p-0">
        {article.imageurl && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={article.imageurl || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=200&width=300"
              }}
            />
            <div className="absolute top-2 right-2">
              <ExternalLink className="h-4 w-4 text-white/80" />
            </div>
          </div>
        )}

        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {article.source}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {formatTimeAgo(article.published_on)}
            </div>
          </div>

          <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-3 mb-3">{truncateText(article.body, 120)}</p>

          {article.tags && (
            <div className="flex flex-wrap gap-1">
              {article.tags
                .split(",")
                .slice(0, 3)
                .map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs px-2 py-0">
                    {tag.trim()}
                  </Badge>
                ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
