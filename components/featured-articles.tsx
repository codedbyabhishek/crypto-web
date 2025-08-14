"use client"

import { Calendar, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const featuredArticles = [
  {
    title: "How to Make Money from Crypto? - Simple Ways to Earn from...",
    url: "/how-to-make-money-from-crypto",
    date: "3 Dec 2024",
    excerpt:
      "Cryptocurrency has become a popular way to make money, but with so many options, it can be difficult to know where to start. Whether you're looking to trade, mine, or earn...",
    category: "Guide",
    readTime: "8 min read",
  },
  {
    title: "Ethereum Price Prediction 2024, 2025, 2030, 2050 – Is ETH a...",
    url: "/ethereum-price-prediction-2024-2025-2030-2050-is-eth-a-good-investment",
    date: "28 Nov 2024",
    excerpt:
      "Welcome to another analysis of crypto by crypto.moneyphobia.in. Today, in this post, we will discuss Ethereum, its features, and why it is a key player in the cryptocurrency...",
    category: "Analysis",
    readTime: "12 min read",
  },
  {
    title: "TRC20 USDT: Everything You Need to Know",
    url: "/trc20-usdt-everything-you-need-to-know",
    date: "28 Nov 2024",
    excerpt:
      "What Is TRC20 USDT? TRC20 USDT is a stablecoin issued on the TRON blockchain. It is pegged 1:1 to the US Dollar and follows the TRC20 token standard, which...",
    category: "Education",
    readTime: "10 min read",
  },
  {
    title: "Dogecoin (DOGE) Price Prediction 2024, 2025, 2030, 2050",
    url: "/dogecoin-doge-price-prediction-2024-2025-2030-2050-is-doge-worth-investing-in",
    date: "15 Dec 2024",
    excerpt:
      "Comprehensive analysis of Dogecoin's price potential, market factors, and investment considerations for the coming years...",
    category: "Price Prediction",
    readTime: "15 min read",
  },
  {
    title: "What is Crypto Mining? Complete Beginner's Guide",
    url: "/what-is-crypto-mining",
    date: "10 Dec 2024",
    excerpt:
      "Learn everything about cryptocurrency mining, from basic concepts to advanced techniques, hardware requirements, and profitability...",
    category: "Education",
    readTime: "12 min read",
  },
]

export function FeaturedArticles() {
  return (
    <Card className="glass border-white/20 overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-display gradient-text">Featured Articles</CardTitle>
          <Badge variant="secondary" className="glass border-primary/30 text-primary">
            MoneyPhobia.in
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-6 pt-0">
        {featuredArticles.map((article, index) => (
          <div
            key={index}
            className="group p-4 rounded-lg glass-subtle border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{article.excerpt}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                {article.category}
              </Badge>
            </div>

            <Link
              href={article.url}
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group-hover:underline"
            >
              Read Full Article
            </Link>
          </div>
        ))}

        <div className="pt-4 border-t border-white/10">
          <p className="text-sm text-muted-foreground">
            More educational crypto content coming soon to crypto.moneyphobia.in
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
