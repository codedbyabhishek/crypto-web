import { Calendar, Clock, User, Shield, TrendingUp, Zap, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata = {
  title: "What is Cryptocurrency? Complete Beginner's Guide to Crypto | Crypto MoneyPhobia",
  description:
    "Learn what cryptocurrency is, how it works, and why it matters. Complete beginner's guide covering Bitcoin, blockchain technology, and digital currencies.",
  keywords:
    "what is cryptocurrency, crypto basics, blockchain explained, Bitcoin guide, digital currency, cryptocurrency for beginners",
  canonical: "https://crypto.moneyphobia.in/what-is-crypto",
  openGraph: {
    title: "What is Cryptocurrency? Complete Beginner's Guide to Crypto",
    description:
      "Learn what cryptocurrency is, how it works, and why it matters. Complete beginner's guide covering Bitcoin, blockchain technology, and digital currencies.",
    url: "https://crypto.moneyphobia.in/what-is-crypto",
    siteName: "Crypto MoneyPhobia",
    images: [
      {
        url: "https://crypto.moneyphobia.in/og-what-is-crypto.jpg",
        width: 1200,
        height: 630,
        alt: "What is Cryptocurrency Guide",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Cryptocurrency? Complete Beginner's Guide to Crypto",
    description:
      "Learn what cryptocurrency is, how it works, and why it matters. Complete beginner's guide covering Bitcoin, blockchain technology, and digital currencies.",
    images: ["https://crypto.moneyphobia.in/og-what-is-crypto.jpg"],
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

export default function WhatIsCrypto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-cyan-400 hover:text-cyan-300">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-500" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/guides" className="text-cyan-400 hover:text-cyan-300">
                Guides
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-gray-500" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-300">What is Crypto</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
          <CardHeader className="pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30">
                Education
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                Beginner Guide
              </Badge>
              <Badge variant="outline" className="border-green-500/30 text-green-400">
                Fundamentals
              </Badge>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-white leading-tight font-sans">
              What is Cryptocurrency? Complete Beginner's Guide to Digital Currency
            </CardTitle>
            <div className="flex items-center gap-6 text-sm text-gray-300 mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>August 13, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>MoneyPhobia Team</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="prose prose-invert max-w-none space-y-6">
            <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-cyan-400 mb-3">What You'll Learn</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• What cryptocurrency is and how it differs from traditional money</li>
                <li>• How blockchain technology powers cryptocurrencies</li>
                <li>• Popular cryptocurrencies and their use cases</li>
                <li>• Benefits and risks of using digital currencies</li>
                <li>• How to get started with cryptocurrency safely</li>
              </ul>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What is Cryptocurrency?</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                Cryptocurrency is a digital or virtual form of currency that uses cryptography for security and operates
                independently of traditional banking systems. Unlike conventional money issued by governments (fiat
                currency), cryptocurrencies are decentralized and typically built on blockchain technology.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                The term "cryptocurrency" comes from the combination of "cryptography" (the practice of secure
                communication) and "currency" (a medium of exchange). The first and most famous cryptocurrency,{" "}
                <Link href="/price/bitcoin" className="text-cyan-400 hover:text-cyan-300 underline">
                  Bitcoin
                </Link>
                , was created in 2009 by an anonymous person or group known as Satoshi Nakamoto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Key Characteristics of Cryptocurrency</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="h-6 w-6 text-green-400" />
                      <h3 className="font-semibold text-white">Decentralized</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      No central authority controls cryptocurrency. It operates on a distributed network of computers
                      worldwide.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="h-6 w-6 text-yellow-400" />
                      <h3 className="font-semibold text-white">Secure</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Advanced cryptographic techniques protect transactions and prevent counterfeiting or
                      double-spending.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="h-6 w-6 text-blue-400" />
                      <h3 className="font-semibold text-white">Global</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Cryptocurrencies can be sent anywhere in the world without traditional banking intermediaries.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="h-6 w-6 text-purple-400" />
                      <h3 className="font-semibold text-white">Transparent</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      All transactions are recorded on a public ledger (blockchain) that anyone can verify.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How Does Blockchain Technology Work?</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                Blockchain is the underlying technology that makes cryptocurrencies possible. Think of it as a digital
                ledger that records all transactions across a network of computers. Here's how it works:
              </p>

              <div className="space-y-4">
                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 font-semibold">1</span>
                      </div>
                      <h3 className="font-semibold text-white">Transaction Initiation</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      When someone sends cryptocurrency, the transaction is broadcast to the network of computers
                      (nodes).
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 font-semibold">2</span>
                      </div>
                      <h3 className="font-semibold text-white">Verification</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Network participants verify the transaction using complex mathematical algorithms to ensure it's
                      legitimate.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 font-semibold">3</span>
                      </div>
                      <h3 className="font-semibold text-white">Block Creation</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Verified transactions are grouped together into a "block" along with other recent transactions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <span className="text-cyan-400 font-semibold">4</span>
                      </div>
                      <h3 className="font-semibold text-white">Chain Addition</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      The new block is added to the existing chain of blocks, creating a permanent, unalterable record.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Popular Cryptocurrencies</h2>
              <div className="space-y-4">
                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">
                        <Link href="/price/bitcoin" className="text-cyan-400 hover:text-cyan-300 underline">
                          Bitcoin (BTC)
                        </Link>
                      </h3>
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Digital Gold</Badge>
                    </div>
                    <p className="text-gray-300 text-sm">
                      The first and most valuable cryptocurrency, often called "digital gold." Used as a store of value
                      and medium of exchange.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">
                        <Link href="/price/ethereum" className="text-cyan-400 hover:text-cyan-300 underline">
                          Ethereum (ETH)
                        </Link>
                      </h3>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Smart Contracts</Badge>
                    </div>
                    <p className="text-gray-300 text-sm">
                      A programmable blockchain platform that enables smart contracts and decentralized applications
                      (DApps).
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">
                        <Link href="/price/tether" className="text-cyan-400 hover:text-cyan-300 underline">
                          Tether (USDT)
                        </Link>
                      </h3>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Stablecoin</Badge>
                    </div>
                    <p className="text-gray-300 text-sm">
                      A stablecoin pegged to the US Dollar, designed to maintain a stable value for trading and
                      transactions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">
                        <Link href="/price/solana" className="text-cyan-400 hover:text-cyan-300 underline">
                          Solana (SOL)
                        </Link>
                      </h3>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">High Speed</Badge>
                    </div>
                    <p className="text-gray-300 text-sm">
                      A high-performance blockchain known for fast transactions and low fees, popular for DeFi and NFTs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Benefits of Cryptocurrency</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-400">Advantages</h3>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • <strong>Lower transaction fees</strong> compared to traditional banking
                    </li>
                    <li>
                      • <strong>24/7 availability</strong> - no banking hours restrictions
                    </li>
                    <li>
                      • <strong>Financial inclusion</strong> for unbanked populations
                    </li>
                    <li>
                      • <strong>Inflation hedge</strong> potential with limited supply coins
                    </li>
                    <li>
                      • <strong>Programmable money</strong> with smart contracts
                    </li>
                    <li>
                      • <strong>Pseudonymous transactions</strong> for privacy
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-red-400">Risks to Consider</h3>
                  <ul className="space-y-2 text-gray-200">
                    <li>
                      • <strong>High volatility</strong> - prices can fluctuate dramatically
                    </li>
                    <li>
                      • <strong>Regulatory uncertainty</strong> in many jurisdictions
                    </li>
                    <li>
                      • <strong>Technical complexity</strong> for beginners
                    </li>
                    <li>
                      • <strong>Security risks</strong> - lost keys mean lost funds
                    </li>
                    <li>
                      • <strong>Limited acceptance</strong> as payment method
                    </li>
                    <li>
                      • <strong>Environmental concerns</strong> with some mining processes
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How to Get Started with Cryptocurrency</h2>
              <div className="backdrop-blur-xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Step-by-Step Beginner's Guide</h3>
                <ol className="space-y-3 text-gray-200">
                  <li>
                    <strong className="text-white">1. Educate Yourself:</strong> Learn about different cryptocurrencies
                    and their use cases. Read our{" "}
                    <Link href="/how-to-make-money-from-crypto" className="text-cyan-400 hover:text-cyan-300 underline">
                      guide on making money from crypto
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-white">2. Choose a Wallet:</strong> Select a secure cryptocurrency wallet to
                    store your digital assets. Check our{" "}
                    <Link href="/whats-the-best-crypto-wallet" className="text-cyan-400 hover:text-cyan-300 underline">
                      best crypto wallet guide
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-white">3. Select an Exchange:</strong> Find a reputable cryptocurrency
                    exchange to buy your first coins.
                  </li>
                  <li>
                    <strong className="text-white">4. Start Small:</strong> Begin with a small investment you can afford
                    to lose while learning.
                  </li>
                  <li>
                    <strong className="text-white">5. Secure Your Investment:</strong> Use strong passwords, enable
                    two-factor authentication, and backup your wallet.
                  </li>
                  <li>
                    <strong className="text-white">6. Stay Informed:</strong> Follow market trends and news to make
                    informed decisions.
                  </li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Common Use Cases for Cryptocurrency</h2>
              <div className="space-y-4">
                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-2">Digital Payments</h3>
                    <p className="text-gray-300 text-sm">
                      Send money globally without traditional banking intermediaries, often with lower fees and faster
                      settlement times.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-2">Investment and Trading</h3>
                    <p className="text-gray-300 text-sm">
                      Buy and hold cryptocurrencies as an investment, or actively trade them for potential profits.
                      Learn more about{" "}
                      <Link
                        href="/ethereum-price-prediction-2024-2025-2030-2050-is-eth-a-good-investment"
                        className="text-cyan-400 hover:text-cyan-300 underline"
                      >
                        Ethereum investment potential
                      </Link>
                      .
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-2">Decentralized Finance (DeFi)</h3>
                    <p className="text-gray-300 text-sm">
                      Access financial services like lending, borrowing, and earning interest without traditional banks.
                    </p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-xl bg-white/5 border border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-2">Smart Contracts</h3>
                    <p className="text-gray-300 text-sm">
                      Automate agreements and transactions using programmable contracts that execute automatically when
                      conditions are met.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">The Future of Cryptocurrency</h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                Cryptocurrency continues to evolve rapidly, with developments in areas such as:
              </p>
              <ul className="space-y-2 text-gray-200 mb-4">
                <li>
                  • <strong>Central Bank Digital Currencies (CBDCs)</strong> - Government-issued digital currencies
                </li>
                <li>
                  • <strong>Improved scalability</strong> - Faster and more efficient blockchain networks
                </li>
                <li>
                  • <strong>Enhanced privacy features</strong> - Better protection of user data and transactions
                </li>
                <li>
                  • <strong>Mainstream adoption</strong> - Integration with traditional financial systems
                </li>
                <li>
                  • <strong>Environmental sustainability</strong> - More energy-efficient consensus mechanisms
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Conclusion</h2>
              <p className="text-gray-200 leading-relaxed">
                Cryptocurrency represents a revolutionary approach to money and finance, offering new possibilities for
                payments, investments, and financial services. While it comes with risks and challenges, understanding
                the basics of cryptocurrency can help you make informed decisions about whether and how to participate
                in this digital financial revolution. Start with education, begin small, and always prioritize security
                when dealing with digital assets.
              </p>
            </section>

            <div className="backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-red-400 mb-3">Important Disclaimer</h3>
              <p className="text-sm text-gray-300">
                This article is for educational purposes only and does not constitute financial advice. Cryptocurrency
                investments are highly volatile and risky. Always do your own research and consider consulting with a
                financial advisor before making investment decisions. Never invest more than you can afford to lose.
              </p>
            </div>

            {/* Related Articles Section */}
            <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/how-to-make-money-from-crypto"
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h4 className="font-semibold text-cyan-400 mb-2">How to Make Money from Crypto</h4>
                  <p className="text-sm text-gray-300">
                    Discover various ways to earn money from cryptocurrency including trading, staking, and mining
                  </p>
                </Link>
                <Link
                  href="/what-is-crypto-mining"
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h4 className="font-semibold text-cyan-400 mb-2">What is Cryptocurrency Mining</h4>
                  <p className="text-sm text-gray-300">
                    Complete guide to crypto mining, hardware requirements, and profitability analysis
                  </p>
                </Link>
                <Link
                  href="/whats-the-best-crypto-wallet"
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h4 className="font-semibold text-cyan-400 mb-2">Best Cryptocurrency Wallets</h4>
                  <p className="text-sm text-gray-300">
                    Comprehensive guide to choosing the right crypto wallet for security and convenience
                  </p>
                </Link>
                <Link
                  href="/ethereum-price-prediction-2024-2025-2030-2050-is-eth-a-good-investment"
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h4 className="font-semibold text-cyan-400 mb-2">Ethereum Price Prediction Guide</h4>
                  <p className="text-sm text-gray-300">
                    Detailed analysis of Ethereum's investment potential and future price forecasts
                  </p>
                </Link>
              </div>
            </div>
          </CardContent>
        </article>
      </div>
    </div>
  )
}
