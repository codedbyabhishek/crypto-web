import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp, RefreshCw, AlertCircle } from "lucide-react"

export default function ConvertGBXToUSD() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 backdrop-blur-sm bg-white/5 px-4 py-2 rounded-lg border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Article Header */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 mb-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-cyan-300 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              December 15, 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />6 min read
            </div>
            <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              Currency Exchange
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Convert GBX to USD: Complete Currency Exchange Guide
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Learn how to convert British Pence (GBX) to US Dollars (USD) with current rates, calculation methods, and
            practical tips.
          </p>
        </div>

        {/* Article Content */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8">
          <div className="prose prose-invert max-w-none">
            {/* Current Exchange Rate */}
            <div className="backdrop-blur-sm bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20 mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Current Exchange Rate (December 2024)
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">1 GBP = $1.27 USD</div>
                  <div className="text-lg text-gray-300">1 GBX = $0.0127 USD</div>
                  <div className="text-sm text-gray-400 mt-2">*Rates fluctuate daily</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">100 GBX:</span>
                    <span className="text-cyan-400 font-semibold">$1.27 USD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">500 GBX:</span>
                    <span className="text-cyan-400 font-semibold">$6.35 USD</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">1,000 GBX:</span>
                    <span className="text-cyan-400 font-semibold">$12.70 USD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Understanding GBX */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Understanding GBX (British Pence)</h2>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
              <div className="text-gray-300 space-y-4">
                <p>
                  <strong>GBX</strong> is the currency code for British Pence, which is a subdivision of the British
                  Pound (GBP). The relationship is straightforward: 100 pence = 1 pound.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">Key Facts</h3>
                    <ul className="space-y-2">
                      <li>• 1 GBP = 100 GBX</li>
                      <li>• Used in stock market pricing</li>
                      <li>• Common in financial trading</li>
                      <li>• Allows for precise pricing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-3">Usage Examples</h3>
                    <ul className="space-y-2">
                      <li>• Stock prices: 250 GBX per share</li>
                      <li>• Small transactions</li>
                      <li>• Financial calculations</li>
                      <li>• Investment portfolios</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion Calculator */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">How to Convert GBX to USD</h2>
            <div className="backdrop-blur-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20 mb-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Conversion Formula
              </h3>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                <code className="text-cyan-300 text-lg">USD Amount = (GBX Amount ÷ 100) × GBP/USD Exchange Rate</code>
              </div>
              <div className="text-gray-300 space-y-4">
                <p>
                  <strong>Step-by-step process:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Convert GBX to GBP by dividing by 100</li>
                  <li>Get the current GBP/USD exchange rate</li>
                  <li>Multiply the GBP amount by the exchange rate</li>
                  <li>The result is your USD amount</li>
                </ol>
              </div>
            </div>

            {/* Example Calculations */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Example Calculations</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Example 1: Small Amount</h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <strong>Convert:</strong> 250 GBX to USD
                  </div>
                  <div>
                    <strong>Step 1:</strong> 250 ÷ 100 = 2.50 GBP
                  </div>
                  <div>
                    <strong>Step 2:</strong> 2.50 × 1.27 = $3.18 USD
                  </div>
                  <div className="text-cyan-400 font-semibold">Result: $3.18 USD</div>
                </div>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Example 2: Larger Amount</h3>
                <div className="space-y-3 text-gray-300">
                  <div>
                    <strong>Convert:</strong> 5,000 GBX to USD
                  </div>
                  <div>
                    <strong>Step 1:</strong> 5,000 ÷ 100 = 50 GBP
                  </div>
                  <div>
                    <strong>Step 2:</strong> 50 × 1.27 = $63.50 USD
                  </div>
                  <div className="text-cyan-400 font-semibold">Result: $63.50 USD</div>
                </div>
              </div>
            </div>

            {/* Exchange Rate Factors */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Factors Affecting Exchange Rates</h2>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Economic Factors</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Interest rate differences</li>
                    <li>• Inflation rates</li>
                    <li>• Economic growth (GDP)</li>
                    <li>• Employment data</li>
                    <li>• Trade balance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Market Factors</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Political stability</li>
                    <li>• Market sentiment</li>
                    <li>• Central bank policies</li>
                    <li>• Global events</li>
                    <li>• Supply and demand</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Best Practices for Currency Conversion</h2>
            <div className="space-y-6 mb-8">
              <div className="backdrop-blur-sm bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Getting Accurate Rates
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Use real-time financial data sources</li>
                  <li>• Check multiple sources for consistency</li>
                  <li>• Consider mid-market rates for accuracy</li>
                  <li>• Account for bank/service fees</li>
                  <li>• Monitor rate trends for timing</li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Recommended Tools</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Free Resources</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• XE.com currency converter</li>
                      <li>• Google currency converter</li>
                      <li>• Bank of England rates</li>
                      <li>• Federal Reserve data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Professional Tools</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Bloomberg Terminal</li>
                      <li>• Reuters Eikon</li>
                      <li>• Trading platforms</li>
                      <li>• Financial APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Conversion Amounts */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Quick Reference Table</h2>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-gray-300">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 text-cyan-400">GBX Amount</th>
                      <th className="text-left py-3 text-cyan-400">GBP Equivalent</th>
                      <th className="text-left py-3 text-cyan-400">USD Amount*</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-white/10">
                      <td className="py-2">50 GBX</td>
                      <td className="py-2">£0.50</td>
                      <td className="py-2">$0.64</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">100 GBX</td>
                      <td className="py-2">£1.00</td>
                      <td className="py-2">$1.27</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">500 GBX</td>
                      <td className="py-2">£5.00</td>
                      <td className="py-2">$6.35</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-2">1,000 GBX</td>
                      <td className="py-2">£10.00</td>
                      <td className="py-2">$12.70</td>
                    </tr>
                    <tr>
                      <td className="py-2">10,000 GBX</td>
                      <td className="py-2">£100.00</td>
                      <td className="py-2">$127.00</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-sm text-gray-400 mt-4">*Based on 1 GBP = 1.27 USD (rates fluctuate)</div>
              </div>
            </div>

            {/* Important Considerations */}
            <div className="backdrop-blur-sm bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Important Notes</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Exchange rates change constantly during market hours</li>
                    <li>• Banks and services charge fees that affect final amounts</li>
                    <li>• Weekend and holiday rates may differ</li>
                    <li>• Large transactions may get better rates</li>
                    <li>• Always verify rates before making financial decisions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Conclusion</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Converting GBX to USD is straightforward once you understand that GBX represents pence (1/100th of a
                British Pound). The key is using current exchange rates and accounting for any fees or spreads in your
                calculations.
              </p>
              <p>
                Whether you're dealing with stock prices, small transactions, or investment calculations, always use
                up-to-date exchange rates and reliable financial sources for the most accurate conversions. Remember
                that rates fluctuate throughout the trading day, so timing can impact your final amounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
