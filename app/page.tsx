import type { Metadata } from "next"
import CryptoDashboardClient from "./client-page"

export const metadata: Metadata = {
  title: "Crypto Dashboard - Live Cryptocurrency Prices & Market Analysis | MoneyPhobia",
  description:
    "Real-time cryptocurrency dashboard featuring live prices for Bitcoin, Ethereum, and 1000+ cryptocurrencies with portfolio tracking, market insights, and crypto news.",
  keywords:
    "cryptocurrency dashboard, bitcoin price, ethereum price, crypto market, live crypto prices, cryptocurrency news, portfolio tracker, crypto analysis, digital currency, blockchain",
  authors: [{ name: "MoneyPhobia" }],
  creator: "MoneyPhobia",
  publisher: "MoneyPhobia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://crypto.moneyphobia.in"),
  alternates: {
    canonical: "https://crypto.moneyphobia.in",
  },
  openGraph: {
    title: "Crypto Dashboard - Live Cryptocurrency Prices & Market Analysis",
    description:
      "Real-time cryptocurrency dashboard featuring live prices for Bitcoin, Ethereum, and 1000+ cryptocurrencies with portfolio tracking and market insights.",
    url: "https://crypto.moneyphobia.in",
    siteName: "MoneyPhobia Crypto Dashboard",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Crypto Dashboard - Live Cryptocurrency Prices",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Dashboard - Live Cryptocurrency Prices & Market Analysis",
    description:
      "Real-time cryptocurrency dashboard featuring live prices for Bitcoin, Ethereum, and 1000+ cryptocurrencies.",
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

export default function HomePage() {
  return <CryptoDashboardClient />
}
