"use client"

import Link from "next/link"
import { Search, Home, TrendingUp, BookOpen, ArrowRight } from "lucide-react"

export default function NotFound() {
  const popularCryptos = [
    { name: "Bitcoin", slug: "bitcoin" },
    { name: "Ethereum", slug: "ethereum" },
    { name: "Dogecoin", slug: "dogecoin" },
    { name: "Solana", slug: "solana" },
  ]

  const popularArticles = [
    { title: "How to Make Money from Crypto", slug: "how-to-make-money-from-crypto" },
    { title: "What is Crypto Mining", slug: "what-is-crypto-mining" },
    {
      title: "Ethereum Price Prediction",
      slug: "ethereum-price-prediction-2024-2025-2030-2050-is-eth-a-good-investment",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 font-sans">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sans">Page Not Found</h2>
          </div>

          <p className="text-lg text-white/80 mb-8 font-sans">
            Oops! The page you're looking for doesn't exist or is currently under development.
          </p>

          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
            <h3 className="text-white font-semibold mb-4 font-sans">What you can do:</h3>
            <ul className="text-white/70 space-y-2 text-left max-w-md mx-auto font-sans">
              <li>• Check if the URL is spelled correctly</li>
              <li>• Visit our main dashboard for live crypto data</li>
              <li>• Browse our available price pages</li>
              <li>• This page might be coming soon!</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-semibold font-sans">Popular Crypto Prices</h3>
              </div>
              <div className="space-y-3">
                {popularCryptos.map((crypto) => (
                  <Link
                    key={crypto.slug}
                    href={`/price/${crypto.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <span className="text-white/80 font-sans">{crypto.name}</span>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-cyan-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-semibold font-sans">Popular Articles</h3>
              </div>
              <div className="space-y-3">
                {popularArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/${article.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <span className="text-white/80 font-sans text-sm text-left">{article.title}</span>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-sans"
            >
              <Home className="w-5 h-5" />
              Go to Dashboard
            </Link>

            <Link
              href="/coming-soon"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-sans"
            >
              <Search className="w-5 h-5" />
              Coming Soon
            </Link>
          </div>
        </div>

        <p className="text-white/40 mt-8 text-sm font-sans">© 2024 crypto.moneyphobia.in</p>
      </div>
    </div>
  )
}
