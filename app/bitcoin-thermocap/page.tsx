import Link from "next/link"
import { ArrowLeft, TrendingUp, BarChart3, Calculator, AlertTriangle } from "lucide-react"

export default function BitcoinThermocapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        {/* Article Header */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 font-sans">
            Bitcoin Thermocap: Understanding Market Valuation Metrics
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
            <span className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              Technical Analysis
            </span>
            <span>Published: August 13, 2025</span>
            <span>Reading time: 8 min</span>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed">
            Explore Bitcoin Thermocap, an advanced on-chain metric that provides insights into Bitcoin's fair value by
            analyzing the cumulative security spend of the network.
          </p>
        </div>

        {/* Article Content */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-cyan-400" />
              What is Bitcoin Thermocap?
            </h2>
            <p className="text-gray-200 mb-6">
              Bitcoin Thermocap is an on-chain valuation metric that represents the cumulative security spend of the
              Bitcoin network. It calculates the total amount of money that has been spent on mining Bitcoin throughout
              its entire history, providing a unique perspective on the network's intrinsic value.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">How Thermocap is Calculated</h3>
            <p className="text-gray-200 mb-4">The Thermocap metric is calculated using the following formula:</p>
            <div className="bg-slate-800/50 p-4 rounded-lg mb-6">
              <code className="text-cyan-300">Thermocap = Σ (Block Reward × Bitcoin Price at Block Time)</code>
            </div>
            <p className="text-gray-200 mb-6">
              This calculation sums up the USD value of all block rewards (including transaction fees) at the time each
              block was mined, representing the total security expenditure of the network.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              Thermocap vs Market Cap Analysis
            </h2>

            <h3 className="text-xl font-semibold text-white mb-3">Key Differences</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Market Cap</h4>
                <ul className="text-gray-200 space-y-2">
                  <li>• Current price × Total supply</li>
                  <li>• Reflects current market sentiment</li>
                  <li>• Highly volatile and speculative</li>
                  <li>• Forward-looking metric</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Thermocap</h4>
                <ul className="text-gray-200 space-y-2">
                  <li>• Cumulative security expenditure</li>
                  <li>• Based on historical mining costs</li>
                  <li>• More stable, fundamental metric</li>
                  <li>• Backward-looking valuation</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">Thermocap Multiple</h3>
            <p className="text-gray-200 mb-4">The Thermocap Multiple is calculated as:</p>
            <div className="bg-slate-800/50 p-4 rounded-lg mb-6">
              <code className="text-cyan-300">Thermocap Multiple = Market Cap ÷ Thermocap</code>
            </div>
            <p className="text-gray-200 mb-6">
              This ratio helps identify whether Bitcoin is overvalued or undervalued relative to its cumulative security
              spend. Historical analysis shows:
            </p>
            <ul className="text-gray-200 mb-6 space-y-2">
              <li>
                • <strong>Multiple &lt; 8:</strong> Historically good buying opportunities
              </li>
              <li>
                • <strong>Multiple 8-16:</strong> Fair value range
              </li>
              <li>
                • <strong>Multiple &gt; 16:</strong> Potentially overvalued territory
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mb-4">Practical Applications</h2>

            <h3 className="text-xl font-semibold text-white mb-3">Investment Strategy</h3>
            <p className="text-gray-200 mb-4">Thermocap can be used for:</p>
            <ul className="text-gray-200 mb-6 space-y-2">
              <li>
                • <strong>Long-term valuation:</strong> Identifying fair value based on network security
              </li>
              <li>
                • <strong>Market timing:</strong> Using Thermocap Multiple for entry/exit decisions
              </li>
              <li>
                • <strong>Risk assessment:</strong> Understanding when markets are extremely stretched
              </li>
              <li>
                • <strong>Portfolio allocation:</strong> Adjusting Bitcoin exposure based on valuation metrics
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Current Market Context</h3>
            <p className="text-gray-200 mb-6">
              As of December 2024, Bitcoin's Thermocap provides valuable context for current market conditions. The
              metric has shown strong correlation with long-term price floors and has been particularly useful during
              bear markets for identifying accumulation zones.
            </p>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-500/30 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Important Considerations</h4>
                  <ul className="text-gray-200 space-y-1">
                    <li>• Thermocap is a lagging indicator based on historical data</li>
                    <li>• Should be used alongside other metrics for comprehensive analysis</li>
                    <li>• Market conditions and adoption can affect the relevance of historical ratios</li>
                    <li>• Not suitable for short-term trading decisions</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">Conclusion</h2>
            <p className="text-gray-200 mb-4">
              Bitcoin Thermocap offers a unique perspective on Bitcoin's valuation by focusing on the cumulative
              security expenditure of the network. While it shouldn't be used in isolation, it provides valuable
              insights into Bitcoin's fundamental value and can help investors make more informed long-term decisions.
            </p>
            <p className="text-gray-200">
              Understanding metrics like Thermocap is crucial for developing a sophisticated approach to Bitcoin
              investment and gaining deeper insights into the network's economic dynamics.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
