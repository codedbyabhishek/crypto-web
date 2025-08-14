"use client"

import Link from "next/link"
import { ArrowLeft, Clock, Rocket, Star } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-cyan-400 to-blue-500 p-6 rounded-full">
                <Rocket className="w-12 h-12 text-white animate-bounce" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 font-sans">
            Coming Soon
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 font-sans">
            We're working hard to bring you something amazing!
          </p>

          <p className="text-lg text-white/60 mb-12 max-w-lg mx-auto font-sans">
            This page is currently under development. Stay tuned for exciting new features and content.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2 font-sans">Real-time Updates</h3>
              <p className="text-white/60 text-sm font-sans">Live crypto data and market insights</p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
              <Star className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2 font-sans">Premium Features</h3>
              <p className="text-white/60 text-sm font-sans">Advanced analytics and tools</p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
              <Rocket className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2 font-sans">Fast Performance</h3>
              <p className="text-white/60 text-sm font-sans">Lightning-fast user experience</p>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-sans"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
        </div>

        <p className="text-white/40 mt-8 text-sm font-sans">© 2024 crypto.moneyphobia.in - Stay tuned for updates!</p>
      </div>
    </div>
  )
}
