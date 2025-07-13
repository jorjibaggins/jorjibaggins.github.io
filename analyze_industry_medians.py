#!/usr/bin/env python3
"""
SGX Industry Median Analysis
Calculates median P/E and EV/EBITDA by industry (sub-sector), ignoring NULL values
"""

import pandas as pd
import numpy as np

def main():
    # Load the data
    df = pd.read_csv('real_sgx_yahoo_finance.csv')
    
    print('SGX Industry (Sub-Sector) Median Valuation Analysis')
    print('='*80)
    print(f'Total companies analyzed: {len(df)}')
    print()
    
    # Clean the data - convert to numeric and handle non-numeric values
    df['Trailing_PE'] = pd.to_numeric(df['Trailing_PE'], errors='coerce')
    df['EV_EBITDA'] = pd.to_numeric(df['EV_EBITDA'], errors='coerce')
    
    # Replace infinite values with NaN
    df['Trailing_PE'] = df['Trailing_PE'].replace([np.inf, -np.inf], np.nan)
    df['EV_EBITDA'] = df['EV_EBITDA'].replace([np.inf, -np.inf], np.nan)
    
    # Replace negative values with NaN (exclude from median calculations)
    df.loc[df['Trailing_PE'] <= 0, 'Trailing_PE'] = np.nan
    df.loc[df['EV_EBITDA'] <= 0, 'EV_EBITDA'] = np.nan
    
    # Rename Industry column to Sub_Sector
    df = df.rename(columns={'Industry': 'Sub_Sector'})
    
    # Group by Sub_Sector and calculate medians (ignoring NaN values)
    industry_stats = df.groupby('Sub_Sector').agg({
        'Trailing_PE': ['count', 'median'],
        'EV_EBITDA': ['count', 'median'],
        'Ticker': 'count',
        'Sector': lambda x: x.mode().iloc[0] if not x.mode().empty else 'Unknown'  # Most common sector
    }).round(2)
    
    # Flatten column names
    industry_stats.columns = ['PE_Count', 'PE_Median', 'EVEBITDA_Count', 'EVEBITDA_Median', 'Total_Companies', 'Sector']
    
    # Filter out industries with no valid EV/EBITDA data (requirement) and sort by company count
    industry_stats = industry_stats[
        (industry_stats['EVEBITDA_Count'] > 0) & (~pd.isna(industry_stats['EVEBITDA_Median']))
    ].sort_values('Total_Companies', ascending=False)
    
    # Calculate sector-level "General" medians
    sector_stats = df.groupby('Sector').agg({
        'Trailing_PE': ['count', 'median'],
        'EV_EBITDA': ['count', 'median'],
        'Ticker': 'count'
    }).round(2)
    
    # Flatten column names for sector stats
    sector_stats.columns = ['PE_Count', 'PE_Median', 'EVEBITDA_Count', 'EVEBITDA_Median', 'Total_Companies']
    
    # Filter sectors with valid EV/EBITDA data and add "General" prefix
    sector_stats = sector_stats[
        (sector_stats['EVEBITDA_Count'] > 0) & (~pd.isna(sector_stats['EVEBITDA_Median']))
    ]
    
    # Create "General" sub-sector entries
    general_entries = []
    for sector_name, row in sector_stats.iterrows():
        general_entries.append({
            'Sub_Sector': 'General',
            'Sector': sector_name,
            'PE_Count': row['PE_Count'],
            'PE_Median': row['PE_Median'],
            'EVEBITDA_Count': row['EVEBITDA_Count'],
            'EVEBITDA_Median': row['EVEBITDA_Median'],
            'Total_Companies': row['Total_Companies']
        })
    
    # Convert to DataFrame and combine with industry stats
    general_df = pd.DataFrame(general_entries).set_index('Sub_Sector')
    general_df.index.name = industry_stats.index.name
    
    # Combine industry stats with general sector stats
    combined_stats = pd.concat([industry_stats, general_df])
    
    # Sort by sector, then by company count (General entries will appear at top of each sector)
    combined_stats = combined_stats.sort_values(['Sector', 'Total_Companies'], ascending=[True, False])
    
    # Update industry_stats to use combined data
    industry_stats = combined_stats
    
    print('MEDIAN VALUATION BY SUB-SECTOR (Industry):')
    print('-'*140)
    print(f'{"Sub-Sector":<40} {"Sector":<20} {"Companies":<10} {"PE Count":<10} {"PE Median":<12} {"EV/EBITDA Count":<15} {"EV/EBITDA Median":<15}')
    print('-'*140)
    
    for industry, row in industry_stats.iterrows():
        if pd.isna(industry) or industry == '' or str(industry).strip() == '':
            industry_name = '[No Industry Data]'
        else:
            industry_name = str(industry)[:39]
        
        pe_median = f'{row["PE_Median"]:.1f}' if not pd.isna(row['PE_Median']) else 'N/A'
        ev_median = f'{row["EVEBITDA_Median"]:.1f}' if not pd.isna(row['EVEBITDA_Median']) else 'N/A'
        sector_name = str(row["Sector"])[:19] if pd.notna(row["Sector"]) else 'Unknown'
        
        print(f'{industry_name:<40} {sector_name:<20} {int(row["Total_Companies"]):<10} {int(row["PE_Count"]):<10} {pe_median:<12} {int(row["EVEBITDA_Count"]):<15} {ev_median:<15}')
    
    print()
    print('SUMMARY STATISTICS:')
    print(f'Total sub-sectors with valid EV/EBITDA data: {len(industry_stats)}')
    print(f'Sub-sectors with P/E data: {len(industry_stats[industry_stats["PE_Count"] > 0])}')
    print(f'General sector entries: {len(industry_stats[industry_stats.index == "General"])}')
    print(f'Specific sub-sector entries: {len(industry_stats[industry_stats.index != "General"])}')
    print(f'Note: Negative values excluded from median calculations')
    print(f'Note: Sub-sectors without valid EV/EBITDA medians removed')
    print(f'Note: "General" entries represent sector-wide medians for fallback use')
    
    # Reorder columns for CSV output
    csv_output = industry_stats[['Sector', 'PE_Count', 'PE_Median', 'EVEBITDA_Count', 'EVEBITDA_Median', 'Total_Companies']].copy()
    
    # Save to CSV
    csv_output.to_csv('sgx_industry_medians.csv')
    print()
    print('✓ Industry median data saved to sgx_industry_medians.csv')
    
    # Show top sub-sectors by valuation metrics
    print()
    print('TOP 10 SUB-SECTORS BY MEDIAN P/E RATIO:')
    print('-'*60)
    pe_data = industry_stats[industry_stats['PE_Count'] >= 2].sort_values('PE_Median', ascending=False).head(10)
    for industry, row in pe_data.iterrows():
        print(f'{str(industry)[:35]:<35} P/E: {row["PE_Median"]:.1f} ({int(row["PE_Count"])} companies)')
    
    print()
    print('TOP 10 SUB-SECTORS BY MEDIAN EV/EBITDA:')
    print('-'*60)
    ev_data = industry_stats[industry_stats['EVEBITDA_Count'] >= 2].sort_values('EVEBITDA_Median', ascending=False).head(10)
    for industry, row in ev_data.iterrows():
        print(f'{str(industry)[:35]:<35} EV/EBITDA: {row["EVEBITDA_Median"]:.1f} ({int(row["EVEBITDA_Count"])} companies)')

if __name__ == "__main__":
    main()