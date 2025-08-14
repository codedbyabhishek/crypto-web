import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Common cryptocurrency redirects
  const cryptoRedirects: Record<string, string> = {
    "/bitcoin": "/price/bitcoin",
    "/btc": "/price/bitcoin",
    "/ethereum": "/price/ethereum",
    "/eth": "/price/ethereum",
    "/dogecoin": "/price/dogecoin",
    "/doge": "/price/dogecoin",
    "/solana": "/price/solana",
    "/sol": "/price/solana",
    "/xrp": "/price/xrp",
    "/ripple": "/price/xrp",
    "/bnb": "/price/bnb",
    "/binance": "/price/bnb",
    "/cardano": "/price/cardano",
    "/ada": "/price/cardano",
    "/tether": "/price/tether",
    "/usdt": "/price/tether",
    "/usdc": "/price/usd-coin",
    "/avalanche": "/price/avalanche",
    "/avax": "/price/avalanche",
    "/polkadot": "/price/polkadot",
    "/dot": "/price/polkadot",
    "/chainlink": "/price/chainlink",
    "/link": "/price/chainlink",
    "/tron": "/price/tron",
    "/trx": "/price/tron",
    "/toncoin": "/price/toncoin",
    "/ton": "/price/toncoin",
    "/pinetwork": "/price/pinetwork",
    "/pi": "/price/pinetwork",
  }

  // Common misspellings and variations
  const misspellingRedirects: Record<string, string> = {
    "/bitcon": "/price/bitcoin",
    "/bitcoins": "/price/bitcoin",
    "/etherium": "/price/ethereum",
    "/etherem": "/price/ethereum",
    "/dogcoin": "/price/dogecoin",
    "/doge-coin": "/price/dogecoin",
    "/solanna": "/price/solana",
    "/solanaa": "/price/solana",
    "/prices": "/price/bitcoin",
    "/crypto-prices": "/price/bitcoin",
    "/cryptocurrency": "/price/bitcoin",
    "/coins": "/price/bitcoin",
  }

  // Blog post redirects for common variations
  const blogRedirects: Record<string, string> = {
    "/how-to-make-money-crypto": "/how-to-make-money-from-crypto",
    "/ethereum-prediction": "/ethereum-price-prediction-2024-2025-2030-2050-is-eth-a-good-investment",
    "/trc20-usdt": "/trc20-usdt-everything-you-need-to-know",
    "/dogecoin-prediction": "/dogecoin-doge-price-prediction-2024-2025-2030-2050-is-doge-worth-investing-in",
    "/crypto-mining": "/what-is-crypto-mining",
    "/mining": "/what-is-crypto-mining",
    "/notcoin": "/notcoin-not-price-prediction",
    "/render": "/what-is-render-crypto",
    "/bybit": "/recensione-e-panoramica-di-servizi-bybit-com",
  }

  // Check for redirects
  const redirect = cryptoRedirects[pathname] || misspellingRedirects[pathname] || blogRedirects[pathname]

  if (redirect) {
    return NextResponse.redirect(new URL(redirect, request.url))
  }

  // Handle trailing slashes consistently
  if (pathname.endsWith("/") && pathname !== "/") {
    return NextResponse.redirect(new URL(pathname.slice(0, -1), request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml (sitemap)
     * - robots.txt (robots file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}
