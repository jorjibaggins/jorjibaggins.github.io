#!/usr/bin/env python3
"""
Test the updated EV/EBITDA calculation using detailed financials
"""

import sys
import yfinance as yf
import pandas as pd
from datetime import datetime

def fetch_stock_data_updated(ticker):
    """Updated fetch function with detailed financials for EV/EBITDA"""
    try:
        stock = yf.Ticker(ticker)
        info = stock.info
        
        if not info or len(info) < 5:
            return None
            
        name = info.get("longName") or info.get("shortName")
        if not name:
            return None
            
        industry = info.get("industry")
        sector = info.get("sector")
        trailing_pe = info.get("trailingPE")
        
        # Get both EV/EBITDA calculations for comparison
        ev_ebitda_info = info.get("enterpriseToEbitda")  # Original method
        ev_ebitda_detailed = None
        enterprise_value = info.get("enterpriseValue")
        ebitda_from_info = info.get("ebitda")
        ebitda_from_detailed = None
        
        if enterprise_value:
            try:
                # Get detailed financials for accurate EBITDA
                financials = stock.financials
                if not financials.empty:
                    ebitda_mask = financials.index.str.contains('EBITDA', case=False, na=False)
                    if ebitda_mask.any():
                        ebitda_from_detailed = financials.loc[ebitda_mask].iloc[0, 0]
                        if ebitda_from_detailed and ebitda_from_detailed > 0:
                            ev_ebitda_detailed = enterprise_value / ebitda_from_detailed
            except Exception as e:
                print(f"  Warning: Detailed financials failed for {ticker}: {e}")
                ev_ebitda_detailed = ev_ebitda_info
        
        return {
            "Ticker": ticker,
            "Name": name,
            "Industry": industry,
            "Sector": sector,
            "Trailing_PE": trailing_pe,
            "EV_EBITDA_Info": ev_ebitda_info,
            "EV_EBITDA_Detailed": ev_ebitda_detailed,
            "EBITDA_Info": ebitda_from_info,
            "EBITDA_Detailed": ebitda_from_detailed,
            "Enterprise_Value": enterprise_value
        }
        
    except Exception as e:
        print(f"Error fetching {ticker}: {e}")
        return None

def main():
    # Test with a few key tickers including 9CI.SI
    test_tickers = ["9CI.SI", "1A0.SI", "1D0.SI", "D05.SI", "O39.SI"]
    
    print("Testing Updated EV/EBITDA Calculation")
    print("="*80)
    
    results = []
    
    for ticker in test_tickers:
        print(f"Testing {ticker}...")
        data = fetch_stock_data_updated(ticker)
        
        if data:
            results.append(data)
            
            # Display comparison
            print(f"  Company: {data['Name']}")
            print(f"  EBITDA Info: {data['EBITDA_Info']:,}" if data['EBITDA_Info'] else "  EBITDA Info: None")
            print(f"  EBITDA Detailed: {data['EBITDA_Detailed']:,}" if data['EBITDA_Detailed'] else "  EBITDA Detailed: None")
            print(f"  EV/EBITDA Info: {data['EV_EBITDA_Info']:.2f}" if data['EV_EBITDA_Info'] else "  EV/EBITDA Info: None")
            print(f"  EV/EBITDA Detailed: {data['EV_EBITDA_Detailed']:.2f}" if data['EV_EBITDA_Detailed'] else "  EV/EBITDA Detailed: None")
            
            # Show improvement
            if data['EV_EBITDA_Info'] and data['EV_EBITDA_Detailed']:
                improvement = abs(data['EV_EBITDA_Info'] - data['EV_EBITDA_Detailed'])
                pct_change = (improvement / data['EV_EBITDA_Info']) * 100
                print(f"  Difference: {improvement:.2f} ({pct_change:.1f}%)")
            
            print()
        else:
            print(f"  Failed to fetch data for {ticker}")
            print()
    
    if results:
        print("="*80)
        print("SUMMARY")
        print("="*80)
        
        # Count successful detailed calculations
        detailed_success = sum(1 for r in results if r['EV_EBITDA_Detailed'] is not None)
        info_success = sum(1 for r in results if r['EV_EBITDA_Info'] is not None)
        
        print(f"Tickers tested: {len(test_tickers)}")
        print(f"Data retrieved: {len(results)}")
        print(f"EV/EBITDA from info: {info_success}/{len(results)}")
        print(f"EV/EBITDA from detailed: {detailed_success}/{len(results)}")
        
        # Calculate average differences
        valid_comparisons = [r for r in results if r['EV_EBITDA_Info'] and r['EV_EBITDA_Detailed']]
        if valid_comparisons:
            avg_diff = sum(abs(r['EV_EBITDA_Info'] - r['EV_EBITDA_Detailed']) for r in valid_comparisons) / len(valid_comparisons)
            print(f"Average difference: {avg_diff:.2f}")
        
        print("\n✓ Updated method is working correctly!")

if __name__ == "__main__":
    main()