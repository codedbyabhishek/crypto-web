import Link from "next/link"
import { ArrowLeft, Calculator, TrendingUp, AlertTriangle, Coins } from "lucide-react"

export default function PiNetworkToPHPPage() {
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
            Pi Network to PHP: Current Value and Exchange Guide
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
            <span className="flex items-center gap-1">
              <Coins className="w-4 h-4" />
              Cryptocurrency
            </span>
            <span>Published: August 13, 2025</span>
            <span>Reading time: 6 min</span>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed">
            Learn about Pi Network's current value in Philippine Pesos (PHP), how to convert Pi coins, and what to
            expect from this mobile mining cryptocurrency.
          </p>
        </div>

        {/* Article Content */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-cyan-400" />
              Current Pi Network Value
            </h2>
            <p className="text-gray-200 mb-6">
              As of December 2024, Pi Network (PI) is still in its enclosed mainnet phase, meaning Pi coins cannot be
              freely traded on major exchanges. However, some peer-to-peer trading and barter systems have emerged, with
              estimated values ranging from ₱0.50 to ₱5.00 per Pi coin in the Philippines.
            </p>

            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-500/30 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Estimated Pi to PHP Conversion</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">1 PI</div>
                  <div className="text-gray-300">₱0.50 - ₱5.00</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">10 PI</div>
                  <div className="text-gray-300">₱5.00 - ₱50.00</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">100 PI</div>
                  <div className="text-gray-300">₱50.00 - ₱500.00</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">1000 PI</div>
                  <div className="text-gray-300">₱500.00 - ₱5,000.00</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              Understanding Pi Network's Current Status
            </h2>

            <h3 className="text-xl font-semibold text-white mb-3">Enclosed Mainnet Phase</h3>
            <p className="text-gray-200 mb-4">Pi Network is currently in its "Enclosed Mainnet" phase, which means:</p>
            <ul className="text-gray-200 mb-6 space-y-2">
              <li>• Pi coins cannot be withdrawn to external wallets</li>
              <li>• No official exchange listings on major platforms</li>
              <li>• Limited to internal ecosystem transactions</li>
              <li>• Value is largely speculative and community-driven</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Factors Affecting Pi Value</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-xl border border-green-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Positive Factors</h4>
                <ul className="text-gray-200 space-y-2">
                  <li>• Large user base (35+ million)</li>
                  <li>• Active development team</li>
                  <li>• Growing ecosystem of Pi apps</li>
                  <li>• Community engagement</li>
                  <li>• Mobile accessibility</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 p-6 rounded-xl border border-red-500/30">
                <h4 className="text-lg font-semibold text-white mb-3">Risk Factors</h4>
                <ul className="text-gray-200 space-y-2">
                  <li>• No official exchange listings</li>
                  <li>• Uncertain regulatory status</li>
                  <li>• High token supply inflation</li>
                  <li>• Limited real-world utility</li>
                  <li>• Speculative pricing</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">How to Convert Pi to PHP</h2>

            <h3 className="text-xl font-semibold text-white mb-3">Current Methods</h3>
            <p className="text-gray-200 mb-4">
              Since Pi is not yet on major exchanges, conversion to PHP requires alternative methods:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">1. Peer-to-Peer Trading</h4>
                <p className="text-gray-200">
                  Direct trading with other Pi users through social media groups, forums, or local meetups. Prices vary
                  widely based on supply and demand.
                </p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">2. Pi Barter System</h4>
                <p className="text-gray-200">
                  Some Pi users exchange Pi coins for goods and services, effectively establishing a barter-based value
                  system.
                </p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2">3. Pi Apps Ecosystem</h4>
                <p className="text-gray-200">
                  Use Pi coins within the Pi Network ecosystem apps for various services and products.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">Future Exchange Prospects</h2>

            <h3 className="text-xl font-semibold text-white mb-3">Open Mainnet Timeline</h3>
            <p className="text-gray-200 mb-4">
              Pi Network has indicated plans to transition to an "Open Mainnet" which would allow:
            </p>
            <ul className="text-gray-200 mb-6 space-y-2">
              <li>• External wallet transfers</li>
              <li>• Potential exchange listings</li>
              <li>• True market price discovery</li>
              <li>• Integration with DeFi protocols</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">Philippine Exchange Potential</h3>
            <p className="text-gray-200 mb-6">
              Once Pi reaches open mainnet, potential Philippine exchanges that might list Pi include Coins.ph, PDAX,
              and other local platforms, making PHP conversion more straightforward.
            </p>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-500/30 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Important Warnings</h4>
                  <ul className="text-gray-200 space-y-1">
                    <li>• Pi Network is still experimental and unproven</li>
                    <li>• Current Pi "values" are speculative and not guaranteed</li>
                    <li>• Be cautious of scams claiming to sell or buy Pi coins</li>
                    <li>• Never share your Pi wallet passphrase with anyone</li>
                    <li>• Only trade with trusted community members</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">Tips for Pi Network Users in Philippines</h2>

            <h3 className="text-xl font-semibold text-white mb-3">Maximizing Your Pi Holdings</h3>
            <ul className="text-gray-200 mb-6 space-y-2">
              <li>
                • <strong>Daily Mining:</strong> Continue daily check-ins to accumulate Pi
              </li>
              <li>
                • <strong>Build Security Circle:</strong> Add trusted contacts to increase mining rate
              </li>
              <li>
                • <strong>KYC Verification:</strong> Complete identity verification when available
              </li>
              <li>
                • <strong>Stay Informed:</strong> Follow official Pi Network announcements
              </li>
              <li>
                • <strong>Community Participation:</strong> Engage with local Pi communities
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white mb-4">Conclusion</h2>
            <p className="text-gray-200 mb-4">
              While Pi Network shows promise with its large user base and mobile-first approach, its current value in
              PHP remains speculative and highly variable. The estimated range of ₱0.50 to ₱5.00 per Pi coin reflects
              community trading rather than established market value.
            </p>
            <p className="text-gray-200">
              Filipino Pi users should remain cautious, continue mining if interested, but avoid investing significant
              money or expecting guaranteed returns. The true value of Pi will only be determined once it reaches open
              mainnet and gains official exchange listings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
