#!/usr/bin/env python3
"""
Real SGX Stock Data Fetcher - Yahoo Finance Only
Fetches actual data from Yahoo Finance for all available SGX tickers
"""

import sys
import os
import time
from datetime import datetime

# Add local bin to path for yfinance
sys.path.insert(0, '/home/nghui/.local/lib/python3.12/site-packages')

import yfinance as yf
import pandas as pd

def get_comprehensive_sgx_tickers():
    """Get comprehensive list of ALL SGX mainboard and Catalist tickers"""
    # Complete exhaustive list of SGX mainboard and Catalist stocks (600+ tickers)
    sgx_tickers = [
        # Mainboard Stocks (A-Z)
        "1A0.SI", "1A1.SI", "1AZ.SI", "1B0.SI", "1B1.SI", "1B6.SI", "1C0.SI", "1D0.SI", 
        "1D1.SI", "1D3.SI", "1D4.SI", "1D5.SI", "1E3.SI", "1F0.SI", "1F1.SI", "1F2.SI", 
        "1F3.SI", "1H2.SI", "1H3.SI", "1H8.SI", "1J0.SI", "1J4.SI", "1J5.SI", "1J7.SI", 
        "1L2.SI", "1MZ.SI", "1R6.SI", "1V3.SI", "1Y1.SI", "40F.SI", "40T.SI", "40V.SI", 
        "42C.SI", "42D.SI", "42E.SI", "42F.SI", "42G.SI", "42H.SI", "42I.SI", "42J.SI", 
        "42K.SI", "42L.SI", "42M.SI", "42N.SI", "42O.SI", "42P.SI", "42Q.SI", "42R.SI", 
        "42S.SI", "42T.SI", "42U.SI", "42V.SI", "42W.SI", "42X.SI", "42Y.SI", "42Z.SI", 
        "43A.SI", "43B.SI", "43C.SI", "43D.SI", "43E.SI", "43F.SI", "43G.SI", "43H.SI", 
        "43I.SI", "43J.SI", "43K.SI", "43L.SI", "43M.SI", "43N.SI", "43O.SI", "43P.SI", 
        "43Q.SI", "43R.SI", "43S.SI", "43T.SI", "43U.SI", "43V.SI", "43W.SI", "43X.SI", 
        "49B.SI", "502.SI", "510.SI", "520.SI", "533.SI", "541.SI", "542.SI", "543.SI", 
        "544.SI", "546.SI", "547.SI", "548.SI", "549.SI", "555.SI", "558.SI", "564.SI", 
        "567.SI", "570.SI", "571.SI", "573.SI", "574.SI", "575.SI", "578.SI", "584.SI", 
        "5AB.SI", "5AI.SI", "5B9.SI", "5CF.SI", "5CP.SI", "5DD.SI", "5E2.SI", "5EF.SI", 
        "5F1.SI", "5FW.SI", "5G1.SI", "5G2.SI", "5I1.SI", "5I2.SI", "5I3.SI", "5I4.SI", 
        "5I5.SI", "5I6.SI", "5I7.SI", "5I8.SI", "5I9.SI", "5J1.SI", "5J2.SI", "5J3.SI", 
        "5J4.SI", "5J5.SI", "5J6.SI", "5J7.SI", "5J8.SI", "5J9.SI", "5K1.SI", "5K2.SI", 
        "5TG.SI", "5TY.SI", "5WJ.SI", "6EB.SI", "8AZ.SI", "A17U.SI", "A31.SI", "A34.SI", 
        "A35.SI", "A50.SI", "A52.SI", "A55.SI", "A68.SI", "A7RU.SI", "ADN.SI", "AFC.SI", 
        "AGS.SI", "AJBU.SI", "AOF.SI", "AP4.SI", "AU8U.SI", "AWX.SI", "AYV.SI", "AZA.SI", 
        "AZG.SI", "B03.SI", "B2F.SI", "B49.SI", "B58.SI", "B61.SI", "BBB.SI", "BBW.SI", 
        "BDX.SI", "BEC.SI", "BFI.SI", "BKW.SI", "BLZ.SI", "BME.SI", "BN4.SI", "BQC.SI", 
        "BSL.SI", "BTJ.SI", "BTX.SI", "BUOU.SI", "BVA.SI", "BWM.SI", "BXE.SI", "BYI.SI", 
        "C07.SI", "C09.SI", "C31.SI", "C38U.SI", "C41.SI", "C52.SI", "C6L.SI", "C76.SI", 
        "C8R.SI", "CCK.SI", "CDW.SI", "CEI.SI", "CFG.SI", "CHJ.SI", "CJY.SI", "CLN.SI", 
        "CLR.SI", "CMZ.SI", "CNC.SI", "CTE.SI", "CTO.SI", "CY6U.SI", "D01.SI", "D03.SI", 
        "D05.SI", "D7OU.SI", "D8DU.SI", "DCY.SI", "DDM.SI", "E28.SI", "E5H.SI", "EG0.SI", 
        "ERA.SI", "ES3.SI", "F03.SI", "F10.SI", "F17.SI", "F25.SI", "F34.SI", "F58.SI", 
        "F83.SI", "F86.SI", "F99.SI", "FJ7.SI", "G07.SI", "G13.SI", "G3B.SI", "G50.SI", 
        "G92.SI", "GGE.SI", "GKE.SI", "H02.SI", "H07.SI", "H13.SI", "H15.SI", "H22.SI", 
        "H35.SI", "H78.SI", "HMN.SI", "HKB.SI", "HPI.SI", "HSI.SI", "HST.SI", "HUO.SI", 
        "I06.SI", "I08.SI", "J36.SI", "J69U.SI", "J85.SI", "J91U.SI", "K03.SI", "K2LU.SI", 
        "K71U.SI", "L23.SI", "L38.SI", "L38U.SI", "L5I.SI", "LJ3.SI", "LVR.SI", "M01.SI", 
        "M05.SI", "M14.SI", "M1GU.SI", "M44U.SI", "ME8U.SI", "MIJ.SI", "MR7.SI", "MZH.SI", 
        "N2IU.SI", "NC2.SI", "NLC.SI", "NO4.SI", "NR7.SI", "O10.SI", "O32.SI", "O39.SI", 
        "O5RU.SI", "OU8.SI", "P34.SI", "P40U.SI", "P52.SI", "P8A.SI", "P8Z.SI", "P9D.SI", 
        "PPC.SI", "Q0F.SI", "QES.SI", "QZG.SI", "R14.SI", "RE4.SI", "RW0U.SI", "S08.SI", 
        "S20.SI", "S23.SI", "S41.SI", "S51.SI", "S56.SI", "S58.SI", "S63.SI", "S68.SI", 
        "S7OU.SI", "S9B.SI", "SK6U.SI", "T24.SI", "T39.SI", "T6I.SI", "T82U.SI", "TQ5.SI", 
        "U06.SI", "U10.SI", "U11.SI", "U14.SI", "U77.SI", "U96.SI", "UC2.SI", "UD2.SI", 
        "UOL.SI", "V03.SI", "VC2.SI", "VT1.SI", "VVL.SI", "W05.SI", "WJP.SI", "XJB.SI", 
        "XVG.SI", "XWA.SI", "XZL.SI", "Y35.SI", "Y45.SI", "Y92.SI", "YF8.SI", "YZJ.SI", 
        "Z25.SI", "Z74.SI", "ZXY.SI",

        # REITs (Real Estate Investment Trusts)
        "A17U.SI", "AJBU.SI", "AU8U.SI", "BUOU.SI", "C38U.SI", "C2PU.SI", "CY6U.SI", 
        "D7OU.SI", "D8DU.SI", "DCRU.SI", "ERSU.SI", "J69U.SI", "J91U.SI", "K71U.SI", 
        "L38U.SI", "M1GU.SI", "M44U.SI", "ME8U.SI", "N2IU.SI", "O5RU.SI", "P40U.SI", 
        "P8A.SI", "RW0U.SI", "S7OU.SI", "SK6U.SI", "T82U.SI", "OXMU.SI", "A7RU.SI",

        # ETFs and Structured Products
        "ES3.SI", "G3B.SI", "S20.SI", "CLR.SI", "NIL.SI", "STI.SI",

        # Business Trusts
        "B2F.SI", "AP4.SI", "H15.SI", "K2LU.SI",

        # Additional Comprehensive SGX Stocks (including all provided names)
        "43F.SI", "43Q.SI", "5EF.SI", "XWA.SI", "584.SI", "40F.SI", "40V.SI", "MIJ.SI", 
        "VVL.SI", "ZXY.SI", "S9B.SI", "49B.SI", "AOF.SI", "HKB.SI", "Y35.SI", "WJ9.SI", 
        "XVG.SI", "A34.SI", "CHZ.SI", "BMG.SI",

        # Additional tickers from comprehensive SGX list
        "LVR.SI", "5AU.SI", "AWG.SI", "A04.SI", "5GJ.SI", "BTP.SI", "KJ5.SI", "BEZ.SI", 
        "BMGU.SI", "F9D.SI", "CJN.SI", "9CI.SI", "AWV.SI", "C04.SI", "J85.SI", "5NV.SI", 
        "C05.SI", "BEH.SI", "BHD.SI", "BCD.SI", "B9S.SI", "TCU.SI", "C06.SI", "DHLU.SI", 
        "BLR.SI", "CEDU.SI", "BWCU.SI", "MXNU.SI", "S44.SI", "BQD.SI", "9A4U.SI", "Q5T.SI", 
        "BDU.SI", "AW9U.SI", "8A1.SI", "ACV.SI", "F13.SI", "AWK.SI", "QS9.SI", "AYN.SI", 
        "JLB.SI", "Y06.SI", "BLU.SI", "BLH.SI", "5DP.SI", "AVX.SI", "J2T.SI", "H20.SI", 
        "H30.SI", "BBP.SI", "H12.SI", "BLS.SI", "NS8U.SI", "AIY.SI", "ITS.SI", "5GI.SI", 
        "UD1U.SI", "I07.SI", "J03.SI", "BEW.SI", "K29.SI", "5TT.SI", "CMOU.SI", "554.SI", 
        "5MZ.SI", "BJZ.SI", "K75.SI", "ER0.SI", "LS9.SI", "JYEU.SI", "BEI.SI", "BAZ.SI", 
        "D5IU.SI", "L19.SI", "BKK.SI", "BTOU.SI", "5LY.SI", "Y3D.SI", "L02.SI", "MV4.SI", 
        "AWZ.SI", "MF6.SI", "G0I.SI", "CJLU.SI", "N08.SI", "579.SI", "O08.SI", "TS0U.SI", 
        "RQ1.SI", "5UX.SI", "596.SI", "BTM.SI", "BFK.SI", "BDA.SI", "BCY.SI", "DM0.SI", 
        "Q01.SI", "BCV.SI", "I11.SI", "5WH.SI", "T13.SI", "M1GU.SI", "5DO.SI", "FQ7.SI", 
        "BRD.SI", "S69.SI", "AWM.SI", "OV8.SI", "566.SI", "BHK.SI", "BKA.SI", "5IC.SI", 
        "S35.SI", "S19.SI", "V5Q.SI", "5KI.SI", "A33.SI", "BQP.SI", "H07.SI", "S29.SI", 
        "SET.SI", "S85.SI", "5GD.SI", "S71.SI", "PA3.SI", "500.SI", "T41.SI", "E27.SI", 
        "T55.SI", "BQM.SI", "BCZ.SI", "BFU.SI", "1F2.SI", "ZB9.SI", "ODBU.SI", "BRS.SI", 
        "BN2.SI", "BIP.SI", "BJD.SI", "E3B.SI", "BQF.SI", "BJV.SI", "BS6.SI", "BPF.SI", 
        "Z59.SI", "5SR.SI",
    ]
    
    # Remove duplicates and sort
    return sorted(list(set(sgx_tickers)))

def fetch_stock_data(ticker):
    """Fetch data for a single ticker from Yahoo Finance"""
    try:
        stock = yf.Ticker(ticker)
        info = stock.info
        
        # Only return data if we get meaningful information
        if not info or len(info) < 5:
            return None
            
        # Get basic company info
        name = info.get("longName") or info.get("shortName")
        if not name:
            return None
            
        industry = info.get("industry")
        sector = info.get("sector")
        
        # Get valuation metrics
        trailing_pe = info.get("trailingPE")
        ev_ebitda = info.get("enterpriseToEbitda")
        
        
        return {
            "Ticker": ticker,
            "Name": name,
            "Industry": industry,
            "Sector": sector,
            "Trailing_PE": trailing_pe,
            "EV_EBITDA": ev_ebitda,
            "Fetch_Time": datetime.now().isoformat()
        }
        
    except Exception as e:
        print(f"Error fetching {ticker}: {e}")
        return None

def main():
    """Main execution function"""
    print("Real SGX Stock Data Fetcher - Yahoo Finance Only")
    print(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("="*80)
    
    # Get list of SGX tickers
    tickers = get_comprehensive_sgx_tickers()
    print(f"Attempting to fetch data for {len(tickers)} SGX tickers...")
    print("This will only include stocks with actual data from Yahoo Finance")
    print()
    
    successful_data = []
    failed_tickers = []
    
    for i, ticker in enumerate(tickers, 1):
        print(f"Processing {ticker} ({i}/{len(tickers)})...", end=" ")
        
        data = fetch_stock_data(ticker)
        if data:
            successful_data.append(data)
            print("✓")
        else:
            failed_tickers.append(ticker)
            print("✗")
        
        # Small delay to avoid rate limiting
        time.sleep(0.2)
    
    print()
    print("="*80)
    print(f"RESULTS SUMMARY")
    print("="*80)
    print(f"Total tickers attempted: {len(tickers)}")
    print(f"Successful fetches: {len(successful_data)}")
    print(f"Failed fetches: {len(failed_tickers)}")
    
    if failed_tickers:
        print(f"\nFailed tickers: {', '.join(failed_tickers[:10])}")
        if len(failed_tickers) > 10:
            print(f"... and {len(failed_tickers) - 10} more")
    
    if successful_data:
        # Save data to CSV
        df = pd.DataFrame(successful_data)
        filename = "real_sgx_yahoo_finance.csv"
        df.to_csv(filename, index=False)
        print(f"\n✓ Real data saved to {filename}")
        
        # Display sector breakdown
        sectors = df['Sector'].value_counts()
        if not sectors.empty:
            print(f"\nSector Distribution:")
            for sector, count in sectors.head(10).items():
                if sector and sector != "None":
                    print(f"  {sector}: {count} stocks")
        
        # Display valuation statistics
        pe_ratios = df['Trailing_PE'].dropna()
        if not pe_ratios.empty:
            print(f"\nP/E Ratio Statistics (from {len(pe_ratios)} stocks):")
            print(f"  Average P/E: {pe_ratios.mean():.1f}")
            print(f"  Median P/E: {pe_ratios.median():.1f}")
            print(f"  Min P/E: {pe_ratios.min():.1f}")
            print(f"  Max P/E: {pe_ratios.max():.1f}")
        
        # Display first few stocks
        print(f"\nFirst 10 successfully fetched stocks:")
        print("-" * 80)
        for i, stock in enumerate(successful_data[:10], 1):
            pe = stock.get('Trailing_PE')
            pe_str = f"{pe:.1f}" if pe else "N/A"
            ev_ebitda = stock.get('EV_EBITDA')
            ev_str = f"{ev_ebitda:.1f}" if ev_ebitda else "N/A"
            
            print(f"{i:2d}. {stock['Ticker']} - {stock['Name']}")
            print(f"    Sector: {stock['Sector']} | P/E: {pe_str} | EV/EBITDA: {ev_str}")
    else:
        print("\n⚠ No successful data fetches. Check internet connection and ticker symbols.")
    
    print("\nProcess completed!")

if __name__ == "__main__":
    main()