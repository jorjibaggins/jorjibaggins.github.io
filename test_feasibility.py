import yfinance as yf
import pandas as pd
import time

# Test feasibility of pulling detailed financials for EV/EBITDA calculation
sgx_data = pd.read_csv('real_sgx_yahoo_finance.csv')
valid_tickers = sgx_data['Ticker'].dropna().tolist()

# Test 15 tickers
sample_tickers = valid_tickers[:15]
print(f'Testing {len(sample_tickers)} tickers...')

results = []
start_total = time.time()

for i, ticker in enumerate(sample_tickers):
    print(f'{i+1}/{len(sample_tickers)}: {ticker}', end=' ')
    start_time = time.time()
    
    try:
        stock = yf.Ticker(ticker)
        info = stock.info
        financials = stock.financials
        
        ebitda_info = info.get('ebitda')
        ebitda_financials = None
        
        if not financials.empty:
            ebitda_mask = financials.index.str.contains('EBITDA', case=False, na=False)
            if ebitda_mask.any():
                ebitda_financials = financials.loc[ebitda_mask].iloc[0, 0]
        
        discrepancy = None
        if ebitda_info and ebitda_financials and ebitda_info != 0:
            discrepancy = abs((ebitda_financials - ebitda_info) / ebitda_info) * 100
        
        duration = time.time() - start_time
        
        results.append({
            'ticker': ticker,
            'ebitda_info': ebitda_info,
            'ebitda_financials': ebitda_financials,
            'discrepancy_pct': discrepancy,
            'enterprise_value': info.get('enterpriseValue'),
            'duration': duration,
            'success': True
        })
        
        print(f'✓ {duration:.1f}s')
        
    except Exception as e:
        print(f'✗ {str(e)[:30]}...')
        results.append({
            'ticker': ticker,
            'ebitda_info': None,
            'ebitda_financials': None,
            'discrepancy_pct': None,
            'enterprise_value': None,
            'duration': time.time() - start_time,
            'success': False
        })
    
    time.sleep(0.3)

total_duration = time.time() - start_total
df = pd.DataFrame(results)

print(f'\n=== FEASIBILITY RESULTS ===')
print(f'Sample size: {len(sample_tickers)} tickers')
print(f'Total time: {total_duration:.1f} seconds ({total_duration/60:.1f} minutes)')
print(f'Average per ticker: {df["duration"].mean():.2f} seconds')

success_rate = df['success'].mean()
info_available = (df['ebitda_info'].notna()).mean()
financials_available = (df['ebitda_financials'].notna()).mean()

print(f'\nData Quality:')
print(f'- API success rate: {success_rate:.1%}')
print(f'- EBITDA in info: {info_available:.1%}')
print(f'- EBITDA in financials: {financials_available:.1%}')

# Calculate discrepancies
valid_comparisons = df['discrepancy_pct'].notna()
if valid_comparisons.any():
    significant_diff = (df['discrepancy_pct'] > 10).sum()
    print(f'- Significant differences (>10%): {significant_diff}/{valid_comparisons.sum()}')

# Extrapolate to full dataset
full_estimate_hours = (df['duration'].mean() * len(valid_tickers)) / 3600
conservative_estimate = full_estimate_hours * 2  # Account for rate limits, errors

print(f'\nFull Dataset Estimates:')
print(f'- {len(valid_tickers)} total SGX tickers')
print(f'- Optimistic time: {full_estimate_hours:.1f} hours')
print(f'- Conservative estimate: {conservative_estimate:.1f} hours')
print(f'- Recommended approach: Batch processing over multiple days')

print(f'\n=== ACCURACY COMPARISON (First 8) ===')
for _, row in df.head(8).iterrows():
    if row['ebitda_info'] and row['ebitda_financials']:
        ratio = row['ebitda_financials'] / row['ebitda_info']
        print(f'{row["ticker"]}: Info={row["ebitda_info"]:,.0f}, Detailed={row["ebitda_financials"]:,.0f} (ratio: {ratio:.2f})')
    elif row['success']:
        print(f'{row["ticker"]}: Info={row["ebitda_info"]}, Detailed={row["ebitda_financials"]} (one or both missing)')

print(f'\n=== RECOMMENDATION ===')
print("Based on this analysis:")
if financials_available > 0.8:
    print("✓ HIGH FEASIBILITY: Detailed financials are widely available")
else:
    print("⚠ MODERATE FEASIBILITY: Some data gaps in detailed financials")

if conservative_estimate < 24:
    print("✓ REASONABLE TIME: Can be completed within a day")
else:
    print("⚠ LONG PROCESS: Requires multi-day batch processing")

# Count discrepancies
discrepancy_count = (df['discrepancy_pct'] > 5).sum() if valid_comparisons.any() else 0
total_comparisons = valid_comparisons.sum() if valid_comparisons.any() else 0
if total_comparisons > 0:
    discrepancy_rate = discrepancy_count / total_comparisons
    if discrepancy_rate > 0.3:
        print("⚠ HIGH DISCREPANCY: Significant differences between info and detailed financials")
        print("→ RECOMMENDATION: Use detailed financials for accuracy")
    else:
        print("✓ LOW DISCREPANCY: Info and detailed financials are generally consistent")