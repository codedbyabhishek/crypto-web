import Link from "next/link"
import { ArrowLeft, Calendar, Clock, TrendingUp, DollarSign, Shield } from "lucide-react"

export default function Ptas1982CoinValuePage() {
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
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8 mb-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>December 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full text-amber-400 border border-amber-500/30">
              Numismatics
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-4">
            1982 25 Pesetas Coin Value: Complete Collector's Guide
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Discover the current market value, historical significance, and collecting potential of the 1982 Spanish 25
            pesetas coin in today's numismatic market.
          </p>
        </div>

        {/* Article Content */}
        <div className="backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-8">
          <div className="prose prose-invert max-w-none">
            {/* Quick Value Overview */}
            <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                Current Market Value
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$0.50 - $2.00</div>
                  <div className="text-sm text-gray-400">Circulated Condition</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$3.00 - $8.00</div>
                  <div className="text-sm text-gray-400">Uncirculated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">$15.00+</div>
                  <div className="text-sm text-gray-400">Proof/Special Editions</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Historical Background</h2>
            <p className="text-gray-300 mb-6">
              The 1982 25 pesetas coin represents a significant period in Spanish monetary history, minted during the
              final decades of the peseta before Spain's adoption of the Euro in 2002. This coin was part of Spain's
              modernization of its currency system and features distinctive design elements that make it popular among
              collectors today.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Coin Specifications</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Physical Details</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Denomination:</strong> 25 Pesetas
                    </li>
                    <li>
                      <strong>Year:</strong> 1982
                    </li>
                    <li>
                      <strong>Country:</strong> Spain
                    </li>
                    <li>
                      <strong>Composition:</strong> Copper-Nickel
                    </li>
                    <li>
                      <strong>Weight:</strong> 8.5 grams
                    </li>
                    <li>
                      <strong>Diameter:</strong> 25.5 mm
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Design Features</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Obverse:</strong> Spanish coat of arms
                    </li>
                    <li>
                      <strong>Reverse:</strong> Denomination and date
                    </li>
                    <li>
                      <strong>Edge:</strong> Reeded
                    </li>
                    <li>
                      <strong>Mint:</strong> Royal Spanish Mint
                    </li>
                    <li>
                      <strong>Designer:</strong> Luis Aurelio Álvarez Catalá
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Factors Affecting Value</h2>

            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Condition Grading</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Poor to Fair (P-F): $0.25 - $0.50</h4>
                <p className="text-gray-400">Heavy wear, details barely visible, significant damage or corrosion.</p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Good to Very Good (G-VG): $0.50 - $1.00</h4>
                <p className="text-gray-400">Moderate wear, main design elements visible but worn smooth.</p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Fine to Very Fine (F-VF): $1.00 - $2.00</h4>
                <p className="text-gray-400">Light to moderate wear, all major details clear.</p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Extremely Fine (XF): $2.00 - $4.00</h4>
                <p className="text-gray-400">Slight wear on highest points, sharp details throughout.</p>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Uncirculated (UNC): $3.00 - $8.00</h4>
                <p className="text-gray-400">No wear, original mint luster, possible minor bag marks.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Rarity and Mintage</h3>
            <p className="text-gray-300 mb-6">
              The 1982 25 pesetas had a substantial mintage, making it relatively common in circulated grades. However,
              high-grade examples and special mint sets can command premium prices. The coin's value is primarily driven
              by condition rather than rarity.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Market Trends and Investment Potential</h2>
            <p className="text-gray-300 mb-6">
              Spanish peseta coins have seen steady interest from collectors, particularly those from the Franco era and
              the democratic transition period. The 1982 25 pesetas represents an affordable entry point for collectors
              interested in modern Spanish numismatics.
            </p>

            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Investment Outlook
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Stable demand from European collectors</li>
                <li>• Increasing interest in pre-Euro currencies</li>
                <li>• Limited upside potential for common dates</li>
                <li>• Best value in high-grade examples</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Where to Buy and Sell</h2>

            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Recommended Platforms</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Online Marketplaces</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>• eBay (largest selection)</li>
                  <li>• Heritage Auctions</li>
                  <li>• Catawiki</li>
                  <li>• MA-Shops</li>
                </ul>
              </div>
              <div className="bg-slate-800/30 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Physical Dealers</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>• Local coin shops</li>
                  <li>• Coin shows and exhibitions</li>
                  <li>• Numismatic societies</li>
                  <li>• Estate sales</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Authentication and Grading</h2>
            <p className="text-gray-300 mb-6">
              While counterfeiting of 1982 25 pesetas coins is rare due to their relatively low value, collectors should
              still be aware of potential issues. Professional grading services like PCGS or NGC can provide
              authentication and condition certification for valuable examples.
            </p>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Authentication Tips
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Check weight and dimensions against specifications</li>
                <li>• Examine edge reeding for consistency</li>
                <li>• Verify magnetic properties (should be slightly magnetic)</li>
                <li>• Compare design details with authenticated examples</li>
                <li>• Consider professional grading for valuable pieces</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Collecting Strategy</h2>
            <p className="text-gray-300 mb-6">
              For collectors interested in 1982 25 pesetas coins, focus on acquiring the highest grade examples within
              your budget. Consider building a type set of Spanish peseta denominations or focusing on specific years
              during the democratic transition period.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
            <p className="text-gray-300 mb-6">
              The 1982 25 pesetas coin offers an accessible entry point into Spanish numismatics with modest but stable
              value potential. While not rare, high-grade examples can provide both collecting satisfaction and
              reasonable investment returns for patient collectors.
            </p>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Key Takeaways</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Current value ranges from $0.50 to $8.00 depending on condition</li>
                <li>• Common date with stable collector demand</li>
                <li>• Best investment potential in uncirculated grades</li>
                <li>• Represents important period in Spanish monetary history</li>
                <li>• Affordable collectible with educational value</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
