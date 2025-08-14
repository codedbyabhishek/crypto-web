import Link from "next/link"
import { ArrowLeft, Calendar, Clock, TrendingUp, Star, AlertTriangle } from "lucide-react"

export default function CienPesetasCoinValue() {
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
              <Clock className="w-4 h-4" />8 min read
            </div>
            <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              Numismatics
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            1983 Cien Pesetas Coin Value: Complete Collector's Guide
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Discover the current market value, historical significance, and collecting potential of the 1983 Spanish 100
            pesetas coin.
          </p>
        </div>

        {/* Article Content */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8">
          <div className="prose prose-invert max-w-none">
            {/* Current Value Section */}
            <div className="backdrop-blur-sm bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20 mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Current Market Value (2024)
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-3">Circulated Condition</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Good (G-4):</strong> €0.10 - €0.25
                    </li>
                    <li>
                      <strong>Very Good (VG-8):</strong> €0.25 - €0.50
                    </li>
                    <li>
                      <strong>Fine (F-12):</strong> €0.50 - €1.00
                    </li>
                    <li>
                      <strong>Very Fine (VF-20):</strong> €1.00 - €2.00
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 mb-3">Uncirculated Condition</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>MS-60:</strong> €3.00 - €5.00
                    </li>
                    <li>
                      <strong>MS-63:</strong> €5.00 - €8.00
                    </li>
                    <li>
                      <strong>MS-65:</strong> €8.00 - €15.00
                    </li>
                    <li>
                      <strong>MS-67+:</strong> €15.00 - €30.00
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Coin Specifications */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Coin Specifications</h2>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">Physical Details</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Denomination:</strong> 100 Pesetas
                    </li>
                    <li>
                      <strong>Year:</strong> 1983
                    </li>
                    <li>
                      <strong>Country:</strong> Spain
                    </li>
                    <li>
                      <strong>Composition:</strong> Aluminum-Bronze
                    </li>
                    <li>
                      <strong>Weight:</strong> 9.25 grams
                    </li>
                    <li>
                      <strong>Diameter:</strong> 24.5 mm
                    </li>
                    <li>
                      <strong>Edge:</strong> Reeded
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">Design Elements</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <strong>Obverse:</strong> Juan Carlos I portrait
                    </li>
                    <li>
                      <strong>Reverse:</strong> Spanish coat of arms
                    </li>
                    <li>
                      <strong>Designer:</strong> Luis José Díez
                    </li>
                    <li>
                      <strong>Mint:</strong> Royal Spanish Mint
                    </li>
                    <li>
                      <strong>Mintage:</strong> ~50 million pieces
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Historical Context */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Historical Significance</h2>
            <div className="text-gray-300 space-y-4 mb-8">
              <p>
                The 1983 100 pesetas coin represents an important period in Spanish monetary history. Issued during the
                early years of King Juan Carlos I's reign, this coin circulated during Spain's transition to democracy
                and economic modernization.
              </p>
              <p>
                This denomination was part of Spain's decimal currency system that remained in use until the adoption of
                the Euro in 2002. The 1983 issue is notable for its relatively high mintage, making it accessible to
                collectors while still maintaining numismatic interest.
              </p>
            </div>

            {/* Collecting Guide */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Collector's Guide</h2>

            <h3 className="text-2xl font-semibold text-blue-400 mb-4">What to Look For</h3>
            <div className="backdrop-blur-sm bg-blue-500/10 rounded-xl p-6 border border-blue-500/20 mb-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Mint State Examples:</strong> Look for coins with original luster and no wear
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Sharp Details:</strong> Clear portrait features and coat of arms details
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Error Varieties:</strong> Double strikes, off-center strikes, or die cracks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Proof Versions:</strong> Special collector editions with mirror-like finish
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Grading Tips</h3>
            <div className="text-gray-300 space-y-4 mb-8">
              <p>
                When evaluating a 1983 100 pesetas coin, focus on the high points of the design that show wear first:
                the king's cheek and hair details on the obverse, and the crown and shield details on the reverse.
              </p>
              <p>
                Aluminum-bronze coins can develop a natural patina over time. Light, even toning is generally acceptable
                and doesn't significantly impact value, but heavy corrosion or cleaning damage will reduce the coin's
                worth considerably.
              </p>
            </div>

            {/* Investment Potential */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Investment Potential</h2>
            <div className="backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 mb-8">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Market Outlook</h3>
              <div className="text-gray-300 space-y-4">
                <p>
                  The 1983 100 pesetas coin offers modest collecting potential rather than significant investment
                  returns. Its relatively high mintage means most examples trade near face value or slightly above, with
                  premium examples commanding higher prices.
                </p>
                <p>
                  <strong>Best Investment Strategy:</strong> Focus on high-grade uncirculated examples (MS-65 or better)
                  or seek out error varieties and proof versions for the best long-term appreciation potential.
                </p>
              </div>
            </div>

            {/* Where to Buy/Sell */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Where to Buy and Sell</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Buying Sources</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Coin dealers and numismatic shops</li>
                  <li>• Online auction platforms (eBay, Heritage)</li>
                  <li>• Coin shows and conventions</li>
                  <li>• Spanish numismatic societies</li>
                  <li>• Estate sales and antique shops</li>
                </ul>
              </div>
              <div className="backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Selling Options</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Local coin dealers</li>
                  <li>• Online marketplaces</li>
                  <li>• Auction houses (for premium pieces)</li>
                  <li>• Collector forums and groups</li>
                  <li>• Coin shows and exhibitions</li>
                </ul>
              </div>
            </div>

            {/* Important Notice */}
            <div className="backdrop-blur-sm bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">Important Considerations</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Always verify authenticity through reputable dealers</li>
                    <li>• Consider professional grading for valuable specimens</li>
                    <li>• Store coins properly to prevent damage and preserve value</li>
                    <li>• Research current market prices before buying or selling</li>
                    <li>• Be aware of cleaned or damaged coins that may appear better than they are</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Conclusion</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                The 1983 100 pesetas coin represents an accessible entry point into Spanish numismatics. While not rare
                or extremely valuable, it offers collectors a piece of Spanish monetary history from the democratic
                transition period.
              </p>
              <p>
                For collectors interested in Spanish coins, this piece works well as part of a type set or Juan Carlos I
                series. Focus on condition and authenticity when acquiring examples, and consider the coin's historical
                significance alongside its modest monetary value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
