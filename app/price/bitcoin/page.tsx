import type { Metadata } from "next"
import BitcoinPriceClient from "./bitcoin-client"

export const metadata: Metadata = {
  title: "Bitcoin (BTC) Price - Live Bitcoin Price Chart & Analysis | MoneyPhobia",
  description:
    "Get real-time Bitcoin (BTC) price, market cap, trading volume, and comprehensive analysis. Track Bitcoin's performance with live charts and market data.",
  keywords:
    "bitcoin price, BTC price, bitcoin market cap, bitcoin analysis, bitcoin chart, cryptocurrency bitcoin, bitcoin trading, bitcoin investment, digital currency bitcoin",
  authors: [{ name: "MoneyPhobia" }],
  creator: "MoneyPhobia",
  publisher: "MoneyPhobia",
  metadataBase: new URL("https://crypto.moneyphobia.in"),
  alternates: {
    canonical: "https://crypto.moneyphobia.in/price/bitcoin",
  },
  openGraph: {
    title: "Bitcoin (BTC) Price - Live Bitcoin Price Chart & Analysis",
    description:
      "Get real-time Bitcoin (BTC) price, market cap, trading volume, and comprehensive analysis. Track Bitcoin's performance with live charts.",
    url: "https://crypto.moneyphobia.in/price/bitcoin",
    siteName: "MoneyPhobia Crypto Dashboard",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Bitcoin (BTC) Live Price Chart and Analysis",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin (BTC) Price - Live Bitcoin Price Chart & Analysis",
    description: "Get real-time Bitcoin (BTC) price, market cap, trading volume, and comprehensive analysis.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function BitcoinPricePage() {
  return <BitcoinPriceClient />
}
