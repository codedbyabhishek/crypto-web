import { ArrowLeft, Calendar, User, Zap, Cpu, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhatIsCryptoMining() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6 text-white hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>

        <article className="glass border-white/20 rounded-xl overflow-hidden">
          <CardHeader className="pb-6">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">Education</Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                Mining
              </Badge>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-display gradient-text leading-tight">
              What is Crypto Mining? Complete Beginner's Guide to Cryptocurrency Mining
            </CardTitle>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>12 min read</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="prose prose-invert max-w-none space-y-6">
            <div className="glass-subtle p-6 rounded-lg border border-primary/20">
              <h2 className="text-xl font-semibold text-primary mb-3">What You'll Learn</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• What cryptocurrency mining is and how it works</li>
                <li>• Different types of mining algorithms and methods</li>
                <li>• Hardware requirements and profitability considerations</li>
                <li>• Environmental impact and future of mining</li>
              </ul>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What is Cryptocurrency Mining?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cryptocurrency mining is the process of validating transactions and adding them to a blockchain ledger
                while simultaneously creating new cryptocurrency tokens as a reward. Miners use powerful computers to
                solve complex mathematical problems that secure the network and maintain the decentralized nature of
                cryptocurrencies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Think of mining as the backbone of cryptocurrency networks. Without miners, there would be no way to
                verify transactions, prevent double-spending, or maintain the security and integrity of the blockchain.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How Does Crypto Mining Work?</h2>
              <div className="space-y-4">
                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold">1</span>
                      </div>
                      <h3 className="font-semibold text-white">Transaction Collection</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Miners collect pending transactions from the network's memory pool (mempool) and group them into a
                      block.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold">2</span>
                      </div>
                      <h3 className="font-semibold text-white">Hash Calculation</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Miners compete to find a hash (a unique digital fingerprint) that meets specific criteria set by
                      the network's difficulty level.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold">3</span>
                      </div>
                      <h3 className="font-semibold text-white">Proof of Work</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      The first miner to find the correct hash broadcasts it to the network as proof of their
                      computational work.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold">4</span>
                      </div>
                      <h3 className="font-semibold text-white">Block Validation & Reward</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Other miners verify the solution, and if correct, the block is added to the blockchain. The
                      winning miner receives cryptocurrency rewards.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Types of Mining</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="glass-subtle border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center gap-2">
                      <Cpu className="h-5 w-5" />
                      CPU Mining
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-2">
                      Uses computer processors to mine cryptocurrency. Suitable for beginners but less profitable.
                    </p>
                    <div className="space-y-1 text-xs">
                      <p>
                        <strong className="text-white">Pros:</strong> Low entry cost, easy setup
                      </p>
                      <p>
                        <strong className="text-white">Cons:</strong> Low hash rate, high electricity cost per hash
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      GPU Mining
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-2">
                      Uses graphics cards for mining. More efficient than CPU mining and suitable for many altcoins.
                    </p>
                    <div className="space-y-1 text-xs">
                      <p>
                        <strong className="text-white">Pros:</strong> Higher hash rate, versatile
                      </p>
                      <p>
                        <strong className="text-white">Cons:</strong> Higher initial investment, heat generation
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">ASIC Mining</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-2">
                      Application-Specific Integrated Circuits designed specifically for mining certain
                      cryptocurrencies.
                    </p>
                    <div className="space-y-1 text-xs">
                      <p>
                        <strong className="text-white">Pros:</strong> Highest efficiency, maximum hash rate
                      </p>
                      <p>
                        <strong className="text-white">Cons:</strong> Expensive, limited to specific coins
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Cloud Mining</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-2">
                      Rent mining power from remote data centers without owning physical hardware.
                    </p>
                    <div className="space-y-1 text-xs">
                      <p>
                        <strong className="text-white">Pros:</strong> No hardware maintenance, instant start
                      </p>
                      <p>
                        <strong className="text-white">Cons:</strong> Ongoing fees, potential scams
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Popular Mineable Cryptocurrencies</h2>
              <div className="space-y-4">
                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">Bitcoin (BTC)</h3>
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">SHA-256</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      The original cryptocurrency. Requires ASIC miners for profitability. High difficulty and
                      competition.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">Ethereum Classic (ETC)</h3>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Ethash</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      GPU-mineable cryptocurrency. Good option for GPU miners after Ethereum's transition to Proof of
                      Stake.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">Monero (XMR)</h3>
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">RandomX</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Privacy-focused cryptocurrency that can be mined with CPUs. ASIC-resistant algorithm.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">Litecoin (LTC)</h3>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Scrypt</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      "Silver to Bitcoin's gold." Requires ASIC miners for competitive mining.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Mining Profitability Factors</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="glass-subtle border-white/10">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="h-5 w-5 text-green-400" />
                        <h3 className="font-semibold text-white">Revenue Factors</h3>
                      </div>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Cryptocurrency price</li>
                        <li>• Mining difficulty</li>
                        <li>• Hash rate of your equipment</li>
                        <li>• Block rewards and transaction fees</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4">
                  <Card className="glass-subtle border-white/10">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-5 w-5 text-red-400" />
                        <h3 className="font-semibold text-white">Cost Factors</h3>
                      </div>
                      <ul className="space-y-1 text-muted-foreground text-sm">
                        <li>• Electricity costs</li>
                        <li>• Hardware purchase and maintenance</li>
                        <li>• Cooling and infrastructure</li>
                        <li>• Pool fees (if applicable)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Getting Started with Mining</h2>
              <div className="space-y-4">
                <div className="glass-subtle p-6 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold text-primary mb-3">Step-by-Step Guide</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li>
                      <strong className="text-white">1. Choose Your Cryptocurrency:</strong> Research different coins
                      and their mining requirements
                    </li>
                    <li>
                      <strong className="text-white">2. Calculate Profitability:</strong> Use mining calculators to
                      estimate potential profits
                    </li>
                    <li>
                      <strong className="text-white">3. Select Hardware:</strong> Choose between CPU, GPU, or ASIC based
                      on your budget and goals
                    </li>
                    <li>
                      <strong className="text-white">4. Set Up Mining Software:</strong> Download and configure mining
                      software for your chosen cryptocurrency
                    </li>
                    <li>
                      <strong className="text-white">5. Join a Mining Pool:</strong> Consider joining a pool for more
                      consistent rewards
                    </li>
                    <li>
                      <strong className="text-white">6. Create a Wallet:</strong> Set up a secure wallet to receive your
                      mining rewards
                    </li>
                    <li>
                      <strong className="text-white">7. Start Mining:</strong> Begin the mining process and monitor your
                      performance
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Environmental Impact and Future</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cryptocurrency mining, particularly Bitcoin mining, has faced criticism for its environmental impact due
                to high energy consumption. However, the industry is evolving with:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Increased use of renewable energy sources</li>
                <li>• Development of more energy-efficient mining hardware</li>
                <li>• Transition to Proof of Stake consensus mechanisms</li>
                <li>• Carbon offset initiatives by mining companies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cryptocurrency mining is a fundamental process that secures blockchain networks while providing
                opportunities for individuals to earn cryptocurrency rewards. While it can be profitable, success
                requires careful consideration of costs, hardware selection, and market conditions. As the industry
                evolves, miners must stay informed about technological developments and regulatory changes.
              </p>
            </section>

            <div className="glass-subtle p-6 rounded-lg border border-red-500/20 mt-8">
              <h3 className="text-lg font-semibold text-red-400 mb-3">Important Notice</h3>
              <p className="text-sm text-muted-foreground">
                Mining cryptocurrency involves financial risk and may not be profitable in all situations. Always
                research thoroughly, calculate potential costs and returns, and consider your local electricity costs
                and regulations before starting any mining operation.
              </p>
            </div>
          </CardContent>
        </article>
      </div>
    </div>
  )
}
