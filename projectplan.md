import yfinance as yf
import pandas as pd

# Sample SGX tickers - ideally load a full list
sgx_tickers = [
    "A17U.SI",  # Ascendas REIT
    "C6L.SI",   # SGX
    "Z74.SI",   # Singtel
]

data = []

for ticker in sgx_tickers:
    try:
        stock = yf.Ticker(ticker)
        info = stock.info
        data.append({
            "Ticker": ticker,
            "Name": info.get("longName"),
            "Industry": info.get("industry"),
            "Sector": info.get("sector"),
            "Trailing P/E": info.get("trailingPE"),
            "EV/EBITDA": info.get("enterpriseToEbitda"),
        })
    except Exception as e:
        print(f"Failed for {ticker}: {e}")

df = pd.DataFrame(data)
df.to_csv("sgx_multiples.csv", index=False)
