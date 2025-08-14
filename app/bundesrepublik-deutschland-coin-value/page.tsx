import Link from "next/link"
import { ArrowLeft, Coins, TrendingUp, Search, AlertCircle } from "lucide-react"

export default function BundesrepublikDeutschlandCoinValuePage() {
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
            Bundesrepublik Deutschland Coin Value: Complete Guide
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
            <span className="flex items-center gap-1">
              <Coins className="w-4 h-4" />
              Numismatics
            </span>
            <span>Published: August 13, 2025</span>
            <span>Reading time: 7 min</span>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed">
            Discover the value and history of Bundesrepublik Deutschland coins, including Deutsche Mark, Euro, and
            commemorative issues from post-war Germany.
          </p>
        </div>

        {/* Article Content */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Coins className="w-6 h-6 text-yellow-400" />
              Understanding Bundesrepublik Deutschland Coins
            </h2>
            <p className="text-gray-200 mb-6">
              "Bundesrepublik Deutschland" (Federal Republic of Germany) appears on German coins minted from 1949
              onwards, marking the establishment of West Germany after World War II. These coins represent different
              eras of German monetary history and can have significant numismatic value.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">Historical Context</h3>
            <p className="text-gray-200 mb-6">
              The inscription "Bundesrepublik Deutschland" was first used on German coins in 1949, replacing earlier
              Reich-era markings. This change marked Germany's transition to a democratic federal republic and the
              introduction of the Deutsche Mark currency system.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              Deutsche Mark Era (1949-2001)
            </h2>

            <h3 className="text-xl font-semibold text-white mb-3">Common Denominations and Values</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Regular Circulation Coins</h4>
                <ul className="text-gray-200 space-y-2">
                  <li>
                    • <strong>1 Pfennig:</strong> €0.10 - €2.00
                  </li>
                  <li>
                    • <strong>2 Pfennig:</strong> €0.15 - €3.00
                  </li>
                  <li>
                    • <strong>5 Pfennig:</strong> €0.20 - €5.00
                  </li>
                  <li>
                    • <strong>10 Pfennig:</strong> €0.25 - €8.00
                  </li>
                  <li>
                    • <strong>50 Pfennig:</strong> €1.00 - €15.00
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Higher Denominations</h4>
                <ul className="text-gray-200 space-y-2">
                  <li>
                    • <strong>1 Deutsche Mark:</strong> €2.00 - €25.00
                  </li>
                  <li>
                    • <strong>2 Deutsche Mark:</strong> €3.00 - €35.00
                  </li>
                  <li>
                    • <strong>5 Deutsche Mark:</strong> €8.00 - €75.00
                  </li>
                  <li>
                    • <strong>10 Deutsche Mark:</strong> €15.00 - €150.00
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">Factors Affecting Value</h3>
            <ul className="text-gray-200 mb-6 space-y-2">
              <li>
                • <strong>Year of minting:</strong> Earlier years (1949-1960) generally more valuable
              </li>
              <li>
                • <strong>Mint mark:</strong> D (Munich), F (Stuttgart), G (Karlsruhe), J (Hamburg)
              </li>
              <li>
                • <strong>Condition:</strong> Uncirculated coins worth significantly more
              </li>
              <li>
                • <strong>Rarity:</strong> Low mintage years command premium prices
              </li>
              <li>
                • <strong>Errors:</strong> Minting errors can increase value dramatically
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mb-4">Commemorative Coins</h2>

            <h3 className="text-xl font-semibold text-white mb-3">Special Issues</h3>
            <p className="text-gray-200 mb-4">
              Germany has issued numerous commemorative coins with "Bundesrepublik Deutschland" inscriptions:
            </p>
            <ul className="text-gray-200 mb-6 space-y-2">
              <li>
                • <strong>5 DM Silver Coins:</strong> €8.00 - €50.00 (depending on theme and year)
              </li>
              <li>
                • <strong>10 DM Silver Coins:</strong> €12.00 - €80.00
              </li>
              <li>
                • <strong>Olympic Commemoratives:</strong> €15.00 - €100.00+
              </li>
              <li>
                • <strong>Historical Events:</strong> €10.00 - €200.00+
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Search className="w-6 h-6 text-purple-400" />
              Euro Era (2002-Present)
            </h2>

            <h3 className="text-xl font-semibold text-white mb-3">German Euro Coins</h3>
            <p className="text-gray-200 mb-4">
              Since 2002, German Euro coins feature "Bundesrepublik Deutschland" and have their own collectible value:
            </p>
            <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Regular Euro Coins</h4>
              <ul className="text-gray-200 space-y-2">
                <li>
                  • <strong>1-2 cent:</strong> Face value to €2.00 (uncirculated)
                </li>
                <li>
                  • <strong>5-50 cent:</strong> Face value to €5.00 (special years)
                </li>
                <li>
                  • <strong>1-2 Euro:</strong> Face value to €15.00 (first year 2002)
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3">German 2 Euro Commemoratives</h3>
            <p className="text-gray-200 mb-6">
              Germany issues special 2 Euro commemorative coins that can be worth €3.00 - €25.00 depending on the theme
              and mintage numbers.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Identification and Authentication</h2>

            <h3 className="text-xl font-semibold text-white mb-3">Key Features to Look For</h3>
            <ul className="text-gray-200 mb-6 space-y-2">
              <li>
                • <strong>Inscription:</strong> "BUNDESREPUBLIK DEUTSCHLAND" clearly visible
              </li>
              <li>
                • <strong>Mint marks:</strong> A, D, F, G, or J indicating mint location
              </li>
              <li>
                • <strong>Year:</strong> Four-digit year of minting
              </li>
              <li>
                • <strong>Designer initials:</strong> Small letters indicating coin designer
              </li>
              <li>
                • <strong>Edge lettering:</strong> Some coins have inscribed edges
              </li>
            </ul>

            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 p-6 rounded-xl border border-red-500/30 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Authentication Tips</h4>
                  <ul className="text-gray-200 space-y-1">
                    <li>• Check weight and dimensions against official specifications</li>
                    <li>• Examine edge details and inscriptions carefully</li>
                    <li>• Look for proper mint marks and positioning</li>
                    <li>• Be wary of coins with unusual coloring or feel</li>
                    <li>• Consult professional grading services for valuable pieces</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">Where to Sell and Buy</h2>

            <h3 className="text-xl font-semibold text-white mb-3">Recommended Platforms</h3>
            <ul className="text-gray-200 mb-6 space-y-2">
              <li>
                • <strong>Coin dealers:</strong> Professional numismatic shops
              </li>
              <li>
                • <strong>Auction houses:</strong> For rare and valuable pieces
              </li>
              <li>
                • <strong>Online marketplaces:</strong> eBay, specialized coin sites
              </li>
              <li>
                • <strong>Coin shows:</strong> Local and regional numismatic events
              </li>
              <li>
                • <strong>Banks:</strong> Some still exchange Deutsche Marks at face value
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mb-4">Conclusion</h2>
            <p className="text-gray-200 mb-4">
              Bundesrepublik Deutschland coins represent an important part of German monetary history. While most
              circulation coins have modest values, certain years, conditions, and commemorative issues can be quite
              valuable to collectors.
            </p>
            <p className="text-gray-200">
              Always research specific coins thoroughly and consider professional appraisal for potentially valuable
              pieces. The numismatic market for German coins remains active, with steady demand from both domestic and
              international collectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
