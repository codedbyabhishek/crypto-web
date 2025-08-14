import Link from "next/link"
import { ArrowLeft, Code, BarChart3, TrendingUp, Download, Play } from "lucide-react"

export default function OHLCVCandlestickChart() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>

        <article className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-2 text-cyan-400 text-sm mb-4">
              <Code className="w-4 h-4" />
              <span>Python Tutorial</span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4 font-sans">
              OHLCV Candlestick Chart with Python & Streamlit
            </h1>

            <div className="flex items-center gap-6 text-gray-300 text-sm mb-8">
              <span>Published: August 13, 2025</span>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Python Tutorial</span>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 space-y-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                Learn how to create interactive OHLCV (Open, High, Low, Close, Volume) candlestick charts using Python
                and Streamlit. This comprehensive tutorial covers data fetching, chart creation, and deployment of a
                professional crypto trading dashboard.
              </p>

              <div className="flex items-center gap-3 p-4 bg-cyan-500/20 border border-cyan-500/30 rounded-lg">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
                <p className="text-cyan-100 m-0">
                  <strong>What You'll Build:</strong> A fully interactive candlestick chart application with real-time
                  crypto data, technical indicators, and volume analysis.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Prerequisites & Setup</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Required Libraries</h3>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 font-mono text-sm">
                <pre className="text-green-400">
                  {`pip install streamlit
pip install plotly
pip install pandas
pip install yfinance
pip install requests`}
                </pre>
              </div>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">Project Structure</h3>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 font-mono text-sm">
                <pre className="text-blue-400">
                  {`crypto_dashboard/
├── app.py
├── data_fetcher.py
├── chart_components.py
└── requirements.txt`}
                </pre>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 1: Data Fetching Module</h2>

              <p className="text-gray-300 mb-4">
                Create <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">data_fetcher.py</code> to handle
                cryptocurrency data:
              </p>

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  {`import yfinance as yf
import pandas as pd
import requests
from datetime import datetime, timedelta

class CryptoDataFetcher:
    def __init__(self):
        self.base_url = "https://api.coingecko.com/api/v3"
    
    def get_crypto_data(self, symbol, period="1y"):
        """Fetch OHLCV data for cryptocurrency"""
        try:
            # Using yfinance for reliable data
            ticker = f"{symbol}-USD"
            data = yf.download(ticker, period=period, interval="1d")
            
            if data.empty:
                return None
                
            # Rename columns to standard OHLCV format
            data.columns = ['Open', 'High', 'Low', 'Close', 'Adj Close', 'Volume']
            data = data.drop('Adj Close', axis=1)
            data.reset_index(inplace=True)
            
            return data
            
        except Exception as e:
            print(f"Error fetching data: {e}")
            return None
    
    def get_available_cryptos(self):
        """Get list of available cryptocurrencies"""
        cryptos = {
            'Bitcoin': 'BTC',
            'Ethereum': 'ETH',
            'Solana': 'SOL',
            'Cardano': 'ADA',
            'Polygon': 'MATIC',
            'Chainlink': 'LINK',
            'Avalanche': 'AVAX',
            'Polkadot': 'DOT'
        }
        return cryptos`}
                </pre>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 2: Chart Components</h2>

              <p className="text-gray-300 mb-4">
                Create <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">chart_components.py</code> for
                Plotly charts:
              </p>

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  {`import plotly.graph_objects as go
from plotly.subplots import make_subplots
import pandas as pd

class ChartBuilder:
    def __init__(self):
        self.colors = {
            'up': '#00ff88',
            'down': '#ff4444',
            'volume': '#4a90e2',
            'background': '#1a1a1a',
            'grid': '#333333'
        }
    
    def create_candlestick_chart(self, data, title="Cryptocurrency Chart"):
        """Create interactive candlestick chart with volume"""
        
        # Create subplots with secondary y-axis for volume
        fig = make_subplots(
            rows=2, cols=1,
            shared_xaxes=True,
            vertical_spacing=0.1,
            subplot_titles=('Price', 'Volume'),
            row_width=[0.7, 0.3]
        )
        
        # Add candlestick chart
        fig.add_trace(
            go.Candlestick(
                x=data['Date'],
                open=data['Open'],
                high=data['High'],
                low=data['Low'],
                close=data['Close'],
                name="OHLC",
                increasing_line_color=self.colors['up'],
                decreasing_line_color=self.colors['down']
            ),
            row=1, col=1
        )
        
        # Add volume bars
        colors = ['red' if close < open else 'green' 
                 for close, open in zip(data['Close'], data['Open'])]
        
        fig.add_trace(
            go.Bar(
                x=data['Date'],
                y=data['Volume'],
                name="Volume",
                marker_color=colors,
                opacity=0.7
            ),
            row=2, col=1
        )
        
        # Update layout
        fig.update_layout(
            title=title,
            yaxis_title="Price (USD)",
            template="plotly_dark",
            height=700,
            showlegend=False,
            paper_bgcolor=self.colors['background'],
            plot_bgcolor=self.colors['background']
        )
        
        # Update x-axis
        fig.update_xaxes(
            rangeslider_visible=False,
            gridcolor=self.colors['grid']
        )
        
        # Update y-axis
        fig.update_yaxes(
            gridcolor=self.colors['grid']
        )
        
        return fig
    
    def add_technical_indicators(self, fig, data):
        # Calculate moving averages
        data['MA20'] = data['Close'].rolling(window=20).mean()
        data['MA50'] = data['Close'].rolling(window=50).mean()
        
        # Add moving averages to chart
        fig.add_trace(go.Scatter(x=data['Date'], y=data['MA20'], name='20-day MA', line=dict(color='yellow')))
        fig.add_trace(go.Scatter(x=data['Date'], y=data['MA50'], name='50-day MA', line=dict(color='orange')))
        
        return fig`}
                </pre>
              </div>

              <div className="flex items-center gap-3 p-4 bg-purple-500/20 border border-purple-500/30 rounded-lg mt-8">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                <p className="text-purple-100 m-0">
                  <strong>Technical Analysis:</strong> The chart includes 20 and 50-day moving averages for trend
                  analysis. You can easily add RSI, MACD, and Bollinger Bands.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 3: Main Streamlit Application</h2>

              <p className="text-gray-300 mb-4">
                Create the main <code className="bg-gray-800 px-2 py-1 rounded text-cyan-400">app.py</code> file:
              </p>

              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  {`import streamlit as st
import pandas as pd
from data_fetcher import CryptoDataFetcher
from chart_components import ChartBuilder
from datetime import datetime, timedelta

# Page configuration
st.set_page_config(
    page_title="Crypto OHLCV Dashboard",
    page_icon="📈",
    layout="wide",
    initial_sidebar_state="expanded"
)

def main():
    # Initialize components
    data_fetcher = CryptoDataFetcher()
    chart_builder = ChartBuilder()
    
    # Header
    st.title("🚀 Crypto OHLCV Dashboard")
    
    # Sidebar controls
    st.sidebar.header("Chart Settings")
    
    # Cryptocurrency selection
    available_cryptos = data_fetcher.get_available_cryptos()
    selected_crypto = st.sidebar.selectbox(
        "Select Cryptocurrency",
        options=list(available_cryptos.keys()),
        index=0
    )
    
    # Time period selection
    time_periods = {
        "1 Month": "1mo",
        "3 Months": "3mo", 
        "6 Months": "6mo",
        "1 Year": "1y",
        "2 Years": "2y"
    }
    
    selected_period = st.sidebar.selectbox(
        "Select Time Period",
        options=list(time_periods.keys()),
        index=3
    )
    
    # Technical indicators
    show_ma = st.sidebar.checkbox("Show Moving Averages", value=True)
    
    # Fetch and display data
    if st.sidebar.button("Update Chart"):
        with st.spinner("Fetching data..."):
            symbol = available_cryptos[selected_crypto]
            period = time_periods[selected_period]
            
            data = data_fetcher.get_crypto_data(symbol, period)
            
            if data is not None:
                st.session_state.data = data
                st.session_state.symbol = symbol
                st.session_state.crypto_name = selected_crypto
                st.success("✅ Data loaded successfully!")
            else:
                st.error("❌ Failed to fetch data. Please try again.")
                return
    
    # Display chart if data is available
    if 'data' in st.session_state:
        data = st.session_state.data
        symbol = st.session_state.symbol
        crypto_name = st.session_state.crypto_name
        
        # Display key metrics
        col1, col2, col3, col4 = st.columns(4)
        
        latest_data = data.iloc[-1]
        previous_data = data.iloc[-2]
        
        price_change = latest_data['Close'] - previous_data['Close']
        price_change_pct = (price_change / previous_data['Close']) * 100
        
        with col1:
            st.metric(
                label="Current Price",
                value=f"$`}
                  {`{latest_data['Close']:.2f}",
                delta=f"{price_change_pct:.2f}%"
            )
        
        with col2:
            st.metric(
                label="24h High",
                value=f"$`}
                  {`{latest_data['High']:.2f}"
            )
        
        with col3:
            st.metric(
                label="24h Low", 
                value=f"$`}
                  {`{latest_data['Low']:.2f}"
            )
        
        with col4:
            st.metric(
                label="Volume",
                value=f"`}
                  {`{latest_data['Volume']:,.0f}"
            )
        
        # Create and display chart
        chart_title = f"`}
                  {`{crypto_name} (`}
                  {`{symbol}) - OHLCV Chart"
        fig = chart_builder.create_candlestick_chart(data, chart_title)
        
        if show_ma:
            fig = chart_builder.add_technical_indicators(fig, data)
        
        st.plotly_chart(fig, use_container_width=True)
        
        # Data table
        if st.expander("📊 Raw Data"):
            st.dataframe(data.tail(20))

if __name__ == "__main__":
    main()`}
                </pre>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Step 4: Running the Application</h2>

              <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <Play className="w-6 h-6 text-green-400" />
                <p className="text-green-100 m-0">
                  <strong>Launch Command:</strong> Save all files and run{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded">streamlit run app.py</code> in your terminal.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3 mt-6">Features Included</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Interactive candlestick charts with zoom and pan</li>
                <li>• Volume analysis with color-coded bars</li>
                <li>• Real-time price metrics and statistics</li>
                <li>• Moving averages (20-day and 50-day)</li>
                <li>• Multiple time period selection</li>
                <li>• Dark theme optimized for trading</li>
                <li>• Responsive design for all devices</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Advanced Enhancements</h2>

              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Additional Technical Indicators</h3>
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 font-mono text-sm">
                <pre className="text-gray-300">
                  {`# Add to chart_components.py
def calculate_rsi(self, data, window=14):
    delta = data['Close'].diff()
    gain = (delta.where(delta > 0, 0)).rolling(window=window).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=window).mean()
    rs = gain / loss
    rsi = 100 - (100 / (1 + rs))
    return rsi

def add_bollinger_bands(self, fig, data, window=20):
    data['BB_Middle'] = data['Close'].rolling(window).mean()
    data['BB_Upper'] = data['BB_Middle'] + (data['Close'].rolling(window).std() * 2)
    data['BB_Lower'] = data['BB_Middle'] - (data['Close'].rolling(window).std() * 2)
    
    # Add bands to chart
    fig.add_trace(go.Scatter(x=data['Date'], y=data['BB_Upper'], 
                            name='BB Upper', line=dict(color='red', dash='dash')))
    fig.add_trace(go.Scatter(x=data['Date'], y=data['BB_Lower'], 
                            name='BB Lower', line=dict(color='red', dash='dash')))
    return fig`}
                </pre>
              </div>

              <div className="flex items-center gap-3 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg mt-8">
                <Download className="w-6 h-6 text-yellow-400" />
                <p className="text-yellow-100 m-0">
                  <strong>Deployment:</strong> Deploy your Streamlit app to Streamlit Cloud, Heroku, or AWS for public
                  access. Remember to add a requirements.txt file.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
              <p className="text-gray-300">
                You now have a fully functional OHLCV candlestick chart application built with Python and Streamlit.
                This foundation can be extended with more advanced features like portfolio tracking, alerts, and
                automated trading signals.
              </p>

              <p className="text-gray-300 mt-4">
                The combination of Streamlit's simplicity and Plotly's powerful charting capabilities makes it easy to
                create professional-grade financial applications. Continue building on this foundation to create your
                own crypto trading dashboard.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
