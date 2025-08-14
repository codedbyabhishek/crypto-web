import { ArrowLeft, Calendar, User, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DogecoincPricePrediction() {
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
              <Badge className="bg-primary/20 text-primary border-primary/30">Price Prediction</Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                Meme Coin
              </Badge>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-display gradient-text leading-tight">
              Dogecoin (DOGE) Price Prediction 2024, 2025, 2030, 2050 – Is DOGE Worth Investing In?
            </CardTitle>
            <div className="flex items-center gap-6 text-sm text-muted-foreground mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>15 min read</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="prose prose-invert max-w-none space-y-6">
            <div className="glass-subtle p-6 rounded-lg border border-primary/20">
              <h2 className="text-xl font-semibold text-primary mb-3">Key Takeaways</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• DOGE remains one of the most popular meme coins with strong community support</li>
                <li>• Price predictions range from $0.50 to $5.00 by 2030</li>
                <li>• Elon Musk's influence continues to impact DOGE price movements</li>
                <li>• Utility adoption and payment integration could drive long-term growth</li>
              </ul>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What is Dogecoin (DOGE)?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dogecoin (DOGE) started as a joke cryptocurrency in 2013, created by Billy Markus and Jackson Palmer.
                Based on the popular "Doge" meme featuring a Shiba Inu dog, DOGE has evolved from a meme into one of the
                most recognized cryptocurrencies in the world.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unlike Bitcoin's limited supply, Dogecoin has an inflationary model with over 140 billion DOGE in
                circulation. The cryptocurrency gained massive popularity through social media endorsements,
                particularly from Elon Musk, and has been adopted by various merchants for payments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">DOGE Price History & Current Performance</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">All-Time High</span>
                      <div className="flex items-center gap-1 text-green-400">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-semibold">$0.7376</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">May 8, 2021</p>
                  </CardContent>
                </Card>
                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Current Price</span>
                      <div className="flex items-center gap-1 text-primary">
                        <span className="font-semibold">$0.08-$0.12</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">December 2024</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Dogecoin Price Predictions</h2>

              <div className="space-y-6">
                <Card className="glass-subtle border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">2024 Prediction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      <strong className="text-white">Conservative:</strong> $0.10 - $0.15
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong className="text-white">Optimistic:</strong> $0.20 - $0.30
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Factors: Market recovery, continued meme coin popularity, potential utility adoption
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">2025 Prediction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      <strong className="text-white">Conservative:</strong> $0.15 - $0.25
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong className="text-white">Optimistic:</strong> $0.40 - $0.60
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Factors: Increased merchant adoption, potential Ethereum integration, social media influence
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">2030 Prediction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      <strong className="text-white">Conservative:</strong> $0.50 - $1.00
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong className="text-white">Optimistic:</strong> $2.00 - $5.00
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Factors: Mainstream adoption, payment system integration, technological improvements
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">2050 Prediction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      <strong className="text-white">Conservative:</strong> $1.00 - $3.00
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong className="text-white">Optimistic:</strong> $5.00 - $10.00
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Factors: Long-term adoption, inflation hedge, global payment system
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Factors Affecting DOGE Price</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-primary">Positive Factors</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Strong community support and meme culture</li>
                    <li>• Celebrity endorsements (Elon Musk)</li>
                    <li>• Low transaction fees</li>
                    <li>• Merchant adoption for payments</li>
                    <li>• Potential utility developments</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">Risk Factors</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• High volatility and speculation</li>
                    <li>• Inflationary supply model</li>
                    <li>• Limited technological innovation</li>
                    <li>• Dependence on social media hype</li>
                    <li>• Regulatory uncertainty</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Is DOGE Worth Investing In?</h2>
              <div className="glass-subtle p-6 rounded-lg border border-yellow-500/20">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">Investment Considerations</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-white">For Speculative Investors:</strong> DOGE can be part of a diversified
                    crypto portfolio, but should represent only a small percentage due to high volatility.
                  </p>
                  <p>
                    <strong className="text-white">For Conservative Investors:</strong> DOGE may not be suitable due to
                    its meme coin nature and lack of fundamental utility compared to other cryptocurrencies.
                  </p>
                  <p>
                    <strong className="text-white">Risk Management:</strong> Never invest more than you can afford to
                    lose, and consider dollar-cost averaging to reduce volatility impact.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Conclusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dogecoin remains one of the most interesting cryptocurrencies due to its unique origin and strong
                community support. While price predictions suggest potential growth, investors should be aware of the
                high volatility and speculative nature of meme coins. DOGE's future success will largely depend on
                continued community support, celebrity endorsements, and potential utility developments.
              </p>
            </section>

            <div className="glass-subtle p-6 rounded-lg border border-red-500/20 mt-8">
              <h3 className="text-lg font-semibold text-red-400 mb-3">Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                This article is for educational purposes only and should not be considered financial advice.
                Cryptocurrency investments are highly volatile and risky. Always do your own research and consult with
                financial advisors before making investment decisions.
              </p>
            </div>
          </CardContent>
        </article>
      </div>
    </div>
  )
}
