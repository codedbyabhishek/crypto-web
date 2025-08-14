import { ArrowLeft, AlertTriangle, Shield, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Disclaimer() {
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
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Legal</Badge>
              <Badge variant="outline" className="border-white/30 text-white">
                Important
              </Badge>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-display gradient-text leading-tight">
              Disclaimer - crypto.moneyphobia.in
            </CardTitle>
            <p className="text-muted-foreground mt-4">Last updated: December 15, 2024</p>
          </CardHeader>

          <CardContent className="prose prose-invert max-w-none space-y-6">
            <div className="glass-subtle p-6 rounded-lg border border-red-500/20">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="h-6 w-6 text-red-400" />
                <h2 className="text-xl font-semibold text-red-400">Important Notice</h2>
              </div>
              <p className="text-muted-foreground">
                The information provided on crypto.moneyphobia.in is for educational and informational purposes only. It
                should not be considered as financial, investment, legal, or professional advice.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Financial Disclaimer</h2>
              <div className="space-y-4">
                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">Not Financial Advice</h3>
                    <p className="text-muted-foreground text-sm">
                      All content on this website, including articles, price predictions, analysis, and recommendations,
                      is provided for educational purposes only and should not be construed as financial advice. We are
                      not licensed financial advisors, and nothing on this site should be considered as personalized
                      investment advice.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">Investment Risks</h3>
                    <p className="text-muted-foreground text-sm">
                      Cryptocurrency investments are highly volatile and risky. The value of cryptocurrencies can
                      fluctuate dramatically and you may lose some or all of your investment. Past performance is not
                      indicative of future results. Always invest only what you can afford to lose.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">Do Your Own Research (DYOR)</h3>
                    <p className="text-muted-foreground text-sm">
                      Before making any investment decisions, you should conduct your own research and analysis. Consult
                      with qualified financial advisors, tax professionals, and legal experts as appropriate for your
                      individual circumstances.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Content Accuracy</h2>
              <div className="space-y-4">
                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">Information Accuracy</h3>
                    <p className="text-muted-foreground text-sm">
                      While we strive to provide accurate and up-to-date information, we make no representations or
                      warranties of any kind, express or implied, about the completeness, accuracy, reliability,
                      suitability, or availability of the information contained on this website.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">Third-Party Information</h3>
                    <p className="text-muted-foreground text-sm">
                      Some information on this website may be obtained from third-party sources. We do not guarantee the
                      accuracy of such information and are not responsible for any errors or omissions in third-party
                      content.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">Price Predictions</h3>
                    <p className="text-muted-foreground text-sm">
                      All price predictions and forecasts are speculative in nature and based on current market
                      analysis. They should not be relied upon for investment decisions. Cryptocurrency markets are
                      unpredictable and influenced by numerous factors.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
              <div className="glass-subtle p-6 rounded-lg border border-yellow-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-yellow-400" />
                  <h3 className="text-lg font-semibold text-yellow-400">Liability Limitations</h3>
                </div>
                <div className="space-y-3 text-muted-foreground text-sm">
                  <p>
                    In no event shall crypto.moneyphobia.in, its owners, authors, or contributors be liable for any
                    direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of
                    this website or any information contained herein.
                  </p>
                  <p>
                    This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other
                    intangible losses resulting from the use or inability to use the information on this website.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Regulatory Compliance</h2>
              <div className="space-y-4">
                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">Jurisdictional Differences</h3>
                    <p className="text-muted-foreground text-sm">
                      Cryptocurrency regulations vary by jurisdiction. It is your responsibility to ensure compliance
                      with local laws and regulations in your area. Some content may not be applicable or legal in your
                      jurisdiction.
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-subtle border-white/10">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-primary mb-2">Tax Implications</h3>
                    <p className="text-muted-foreground text-sm">
                      Cryptocurrency transactions may have tax implications. We do not provide tax advice. Consult with
                      qualified tax professionals regarding your specific tax obligations related to cryptocurrency
                      activities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">External Links</h2>
              <Card className="glass-subtle border-white/10">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-2">Third-Party Websites</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    This website may contain links to external websites that are not provided or maintained by
                    crypto.moneyphobia.in. We do not guarantee the accuracy, relevance, timeliness, or completeness of
                    any information on these external websites.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    The inclusion of any links does not necessarily imply a recommendation or endorsement of the views
                    expressed within them.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Changes to Disclaimer</h2>
              <Card className="glass-subtle border-white/10">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-primary">Updates and Modifications</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    We reserve the right to modify this disclaimer at any time without prior notice. Changes will be
                    effective immediately upon posting on this website. Your continued use of this website after any
                    changes constitutes acceptance of the new disclaimer.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
              <Card className="glass-subtle border-white/10">
                <CardContent className="p-4">
                  <p className="text-muted-foreground text-sm mb-2">
                    If you have any questions about this disclaimer, please contact us through our website or email us
                    at the contact information provided on our main website.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Website: crypto.moneyphobia.in
                    <br />
                    Parent Site: moneyphobia.in
                  </p>
                </CardContent>
              </Card>
            </section>

            <div className="glass-subtle p-6 rounded-lg border border-primary/20 mt-8">
              <h3 className="text-lg font-semibold text-primary mb-3">Acknowledgment</h3>
              <p className="text-sm text-muted-foreground">
                By using crypto.moneyphobia.in, you acknowledge that you have read, understood, and agree to be bound by
                this disclaimer. If you do not agree with any part of this disclaimer, please do not use this website.
              </p>
            </div>
          </CardContent>
        </article>
      </div>
    </div>
  )
}
