import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Crypto Dashboard - Live Prices, Portfolio Tracker & Market Analysis | MoneyPhobia",
  description:
    "Professional cryptocurrency dashboard with real-time prices, portfolio tracking, market insights, and crypto news. Track Bitcoin, Ethereum, and 1000+ cryptocurrencies with advanced charts and analysis tools.",
  keywords:
    "cryptocurrency, crypto dashboard, bitcoin price, ethereum price, crypto portfolio, market analysis, crypto news, live prices, trading charts",
  authors: [{ name: "MoneyPhobia", url: "https://crypto.moneyphobia.in" }],
  creator: "MoneyPhobia",
  publisher: "MoneyPhobia",
  generator: "v0.app",
  applicationName: "Crypto Dashboard",
  referrer: "origin-when-cross-origin",
  category: "Finance",
  classification: "Cryptocurrency Dashboard",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crypto.moneyphobia.in",
    siteName: "Crypto Dashboard - MoneyPhobia",
    title: "Professional Crypto Dashboard - Live Prices & Market Analysis",
    description:
      "Track cryptocurrency prices, manage your portfolio, and stay updated with the latest crypto news. Real-time data for Bitcoin, Ethereum, and 1000+ cryptocurrencies.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Crypto Dashboard - Live cryptocurrency prices and market analysis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@moneyphobia",
    creator: "@moneyphobia",
    title: "Professional Crypto Dashboard - Live Prices & Market Analysis",
    description:
      "Track cryptocurrency prices, manage your portfolio, and stay updated with the latest crypto news. Real-time data for Bitcoin, Ethereum, and 1000+ cryptocurrencies.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://crypto.moneyphobia.in",
  },
  other: {
    "msapplication-TileColor": "#00f2fe",
    "theme-color": "#00f2fe",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Crypto Dashboard - MoneyPhobia",
              url: "https://crypto.moneyphobia.in",
              description:
                "Professional cryptocurrency dashboard with real-time prices, portfolio tracking, and market analysis",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "MoneyPhobia",
                url: "https://crypto.moneyphobia.in",
              },
              publisher: {
                "@type": "Organization",
                name: "MoneyPhobia",
                url: "https://crypto.moneyphobia.in",
              },
            }),
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1794162364844220"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
