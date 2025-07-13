export interface SGXIndustryData {
  subSector: string;
  sector: string;
  peCount: number;
  peMedian: number | null;
  evEbitdaCount: number;
  evEbitdaMedian: number;
  totalCompanies: number;
}

export interface SectorOption {
  sector: string;
  subSectors: SubSectorOption[];
}

export interface SubSectorOption {
  subSector: string;
  sector: string;
  evEbitdaMedian: number;
  totalCompanies: number;
  description: string;
}

// SGX Industry data parsed from sgx_industry_medians.csv
export const sgxIndustryData: SGXIndustryData[] = [
  { subSector: "General", sector: "Basic Materials", peCount: 10, peMedian: 9.44, evEbitdaCount: 14, evEbitdaMedian: 8.08, totalCompanies: 18 },
  { subSector: "Chemicals", sector: "Basic Materials", peCount: 1, peMedian: 9.38, evEbitdaCount: 3, evEbitdaMedian: 4.06, totalCompanies: 4 },
  { subSector: "Specialty Chemicals", sector: "Basic Materials", peCount: 3, peMedian: 7.63, evEbitdaCount: 3, evEbitdaMedian: 6.84, totalCompanies: 4 },
  { subSector: "Building Materials", sector: "Basic Materials", peCount: 2, peMedian: 48.08, evEbitdaCount: 2, evEbitdaMedian: 8.08, totalCompanies: 3 },
  { subSector: "Steel", sector: "Basic Materials", peCount: 3, peMedian: 6.6, evEbitdaCount: 3, evEbitdaMedian: 6.22, totalCompanies: 3 },
  { subSector: "Lumber & Wood Production", sector: "Basic Materials", peCount: 1, peMedian: 26.25, evEbitdaCount: 1, evEbitdaMedian: 8.23, totalCompanies: 2 },
  { subSector: "Aluminum", sector: "Basic Materials", peCount: 0, peMedian: null, evEbitdaCount: 1, evEbitdaMedian: 12.7, totalCompanies: 1 },
  { subSector: "Other Industrial Metals & Mining", sector: "Basic Materials", peCount: 0, peMedian: null, evEbitdaCount: 1, evEbitdaMedian: 24.58, totalCompanies: 1 },
  
  { subSector: "General", sector: "Communication Services", peCount: 5, peMedian: 15.0, evEbitdaCount: 7, evEbitdaMedian: 14.36, totalCompanies: 10 },
  { subSector: "Telecom Services", sector: "Communication Services", peCount: 3, peMedian: 17.0, evEbitdaCount: 4, evEbitdaMedian: 12.35, totalCompanies: 4 },
  { subSector: "Advertising Agencies", sector: "Communication Services", peCount: 1, peMedian: 7.0, evEbitdaCount: 1, evEbitdaMedian: 76.09, totalCompanies: 3 },
  { subSector: "Entertainment", sector: "Communication Services", peCount: 1, peMedian: 2.97, evEbitdaCount: 2, evEbitdaMedian: 12.64, totalCompanies: 3 },
  
  { subSector: "General", sector: "Consumer Cyclical", peCount: 29, peMedian: 12.75, evEbitdaCount: 40, evEbitdaMedian: 9.76, totalCompanies: 52 },
  { subSector: "Lodging", sector: "Consumer Cyclical", peCount: 6, peMedian: 18.18, evEbitdaCount: 10, evEbitdaMedian: 18.84, totalCompanies: 11 },
  { subSector: "Restaurants", sector: "Consumer Cyclical", peCount: 3, peMedian: 16.25, evEbitdaCount: 6, evEbitdaMedian: 16.85, totalCompanies: 9 },
  { subSector: "Furnishings, Fixtures & Appliances", sector: "Consumer Cyclical", peCount: 1, peMedian: 2.78, evEbitdaCount: 2, evEbitdaMedian: 227.81, totalCompanies: 4 },
  { subSector: "Luxury Goods", sector: "Consumer Cyclical", peCount: 4, peMedian: 7.68, evEbitdaCount: 4, evEbitdaMedian: 6.84, totalCompanies: 4 },
  { subSector: "Auto Parts", sector: "Consumer Cyclical", peCount: 1, peMedian: 14.67, evEbitdaCount: 2, evEbitdaMedian: 8.32, totalCompanies: 3 },
  { subSector: "Department Stores", sector: "Consumer Cyclical", peCount: 2, peMedian: 10.95, evEbitdaCount: 1, evEbitdaMedian: 10.11, totalCompanies: 3 },
  { subSector: "Leisure", sector: "Consumer Cyclical", peCount: 2, peMedian: 8.98, evEbitdaCount: 3, evEbitdaMedian: 2.4, totalCompanies: 3 },
  { subSector: "Specialty Retail", sector: "Consumer Cyclical", peCount: 2, peMedian: 4.3, evEbitdaCount: 3, evEbitdaMedian: 5.86, totalCompanies: 3 },
  { subSector: "Packaging & Containers", sector: "Consumer Cyclical", peCount: 2, peMedian: 11.44, evEbitdaCount: 3, evEbitdaMedian: 5.57, totalCompanies: 3 },
  { subSector: "Auto & Truck Dealerships", sector: "Consumer Cyclical", peCount: 1, peMedian: 18.13, evEbitdaCount: 1, evEbitdaMedian: 11.96, totalCompanies: 2 },
  { subSector: "Apparel Retail", sector: "Consumer Cyclical", peCount: 1, peMedian: 5.63, evEbitdaCount: 1, evEbitdaMedian: 11.58, totalCompanies: 2 },
  { subSector: "Resorts & Casinos", sector: "Consumer Cyclical", peCount: 2, peMedian: 13.0, evEbitdaCount: 2, evEbitdaMedian: 8.58, totalCompanies: 2 },
  { subSector: "Auto Manufacturers", sector: "Consumer Cyclical", peCount: 1, peMedian: 14.08, evEbitdaCount: 1, evEbitdaMedian: 10.48, totalCompanies: 1 },
  { subSector: "Apparel Manufacturing", sector: "Consumer Cyclical", peCount: 1, peMedian: 18.3, evEbitdaCount: 1, evEbitdaMedian: 5.93, totalCompanies: 1 },
  
  { subSector: "General", sector: "Consumer Defensive", peCount: 15, peMedian: 11.75, evEbitdaCount: 20, evEbitdaMedian: 7.79, totalCompanies: 22 },
  { subSector: "Packaged Foods", sector: "Consumer Defensive", peCount: 5, peMedian: 12.29, evEbitdaCount: 6, evEbitdaMedian: 9.18, totalCompanies: 7 },
  { subSector: "Farm Products", sector: "Consumer Defensive", peCount: 3, peMedian: 7.7, evEbitdaCount: 3, evEbitdaMedian: 5.23, totalCompanies: 4 },
  { subSector: "Food Distribution", sector: "Consumer Defensive", peCount: 1, peMedian: 99.5, evEbitdaCount: 3, evEbitdaMedian: 9.96, totalCompanies: 3 },
  { subSector: "Confectioners", sector: "Consumer Defensive", peCount: 2, peMedian: 7.38, evEbitdaCount: 2, evEbitdaMedian: 7.25, totalCompanies: 2 },
  { subSector: "Education & Training Services", sector: "Consumer Defensive", peCount: 1, peMedian: 19.3, evEbitdaCount: 2, evEbitdaMedian: 8.33, totalCompanies: 2 },
  { subSector: "Grocery Stores", sector: "Consumer Defensive", peCount: 1, peMedian: 22.33, evEbitdaCount: 2, evEbitdaMedian: 17.75, totalCompanies: 2 },
  { subSector: "Beverages - Non-Alcoholic", sector: "Consumer Defensive", peCount: 1, peMedian: 14.62, evEbitdaCount: 1, evEbitdaMedian: 12.25, totalCompanies: 1 },
  { subSector: "Beverages - Wineries & Distilleries", sector: "Consumer Defensive", peCount: 1, peMedian: 11.75, evEbitdaCount: 1, evEbitdaMedian: 5.58, totalCompanies: 1 },
  
  { subSector: "General", sector: "Energy", peCount: 11, peMedian: 8.6, evEbitdaCount: 14, evEbitdaMedian: 4.68, totalCompanies: 17 },
  { subSector: "Oil & Gas Equipment & Services", sector: "Energy", peCount: 6, peMedian: 10.43, evEbitdaCount: 7, evEbitdaMedian: 5.79, totalCompanies: 9 },
  { subSector: "Oil & Gas Refining & Marketing", sector: "Energy", peCount: 2, peMedian: 10.9, evEbitdaCount: 3, evEbitdaMedian: 7.43, totalCompanies: 3 },
  { subSector: "Oil & Gas E&P", sector: "Energy", peCount: 2, peMedian: 6.1, evEbitdaCount: 3, evEbitdaMedian: 1.52, totalCompanies: 3 },
  { subSector: "Thermal Coal", sector: "Energy", peCount: 1, peMedian: 8.75, evEbitdaCount: 1, evEbitdaMedian: 13.13, totalCompanies: 1 },
  
  { subSector: "General", sector: "Financial Services", peCount: 14, peMedian: 10.88, evEbitdaCount: 4, evEbitdaMedian: 5.41, totalCompanies: 17 },
  { subSector: "Asset Management", sector: "Financial Services", peCount: 4, peMedian: 8.61, evEbitdaCount: 2, evEbitdaMedian: 1.74, totalCompanies: 7 },
  { subSector: "Financial Data & Stock Exchanges", sector: "Financial Services", peCount: 2, peMedian: 26.17, evEbitdaCount: 2, evEbitdaMedian: 15.15, totalCompanies: 2 },
  
  { subSector: "General", sector: "Healthcare", peCount: 8, peMedian: 13.63, evEbitdaCount: 11, evEbitdaMedian: 9.81, totalCompanies: 18 },
  { subSector: "Medical Care Facilities", sector: "Healthcare", peCount: 3, peMedian: 25.62, evEbitdaCount: 5, evEbitdaMedian: 13.97, totalCompanies: 7 },
  { subSector: "Diagnostics & Research", sector: "Healthcare", peCount: 1, peMedian: 15.5, evEbitdaCount: 1, evEbitdaMedian: 7.32, totalCompanies: 3 },
  { subSector: "Medical Instruments & Supplies", sector: "Healthcare", peCount: 1, peMedian: 11.08, evEbitdaCount: 2, evEbitdaMedian: 5.29, totalCompanies: 3 },
  { subSector: "Drug Manufacturers - Specialty & Generic", sector: "Healthcare", peCount: 1, peMedian: 9.7, evEbitdaCount: 1, evEbitdaMedian: 8.5, totalCompanies: 2 },
  { subSector: "Drug Manufacturers - General", sector: "Healthcare", peCount: 1, peMedian: 11.77, evEbitdaCount: 1, evEbitdaMedian: 27.86, totalCompanies: 1 },
  { subSector: "Pharmaceutical Retailers", sector: "Healthcare", peCount: 1, peMedian: 10.67, evEbitdaCount: 1, evEbitdaMedian: 6.36, totalCompanies: 1 },
  
  { subSector: "General", sector: "Industrials", peCount: 50, peMedian: 8.79, evEbitdaCount: 65, evEbitdaMedian: 6.8, totalCompanies: 88 },
  { subSector: "Engineering & Construction", sector: "Industrials", peCount: 13, peMedian: 9.0, evEbitdaCount: 16, evEbitdaMedian: 6.05, totalCompanies: 23 },
  { subSector: "Conglomerates", sector: "Industrials", peCount: 4, peMedian: 10.71, evEbitdaCount: 7, evEbitdaMedian: 11.86, totalCompanies: 9 },
  { subSector: "Aerospace & Defense", sector: "Industrials", peCount: 4, peMedian: 16.66, evEbitdaCount: 5, evEbitdaMedian: 4.91, totalCompanies: 7 },
  { subSector: "Specialty Industrial Machinery", sector: "Industrials", peCount: 1, peMedian: 9.27, evEbitdaCount: 4, evEbitdaMedian: 3.48, totalCompanies: 7 },
  { subSector: "Integrated Freight & Logistics", sector: "Industrials", peCount: 3, peMedian: 8.38, evEbitdaCount: 4, evEbitdaMedian: 10.48, totalCompanies: 5 },
  { subSector: "Marine Shipping", sector: "Industrials", peCount: 4, peMedian: 6.19, evEbitdaCount: 4, evEbitdaMedian: 5.26, totalCompanies: 5 },
  { subSector: "Industrial Distribution", sector: "Industrials", peCount: 2, peMedian: 11.92, evEbitdaCount: 3, evEbitdaMedian: 50.54, totalCompanies: 4 },
  { subSector: "Waste Management", sector: "Industrials", peCount: 2, peMedian: 10.88, evEbitdaCount: 3, evEbitdaMedian: 8.45, totalCompanies: 3 },
  { subSector: "Metal Fabrication", sector: "Industrials", peCount: 2, peMedian: 9.28, evEbitdaCount: 3, evEbitdaMedian: 7.09, totalCompanies: 3 },
  { subSector: "Consulting Services", sector: "Industrials", peCount: 2, peMedian: 8.75, evEbitdaCount: 2, evEbitdaMedian: 4.72, totalCompanies: 3 },
  { subSector: "Security & Protection Services", sector: "Industrials", peCount: 1, peMedian: 5.5, evEbitdaCount: 2, evEbitdaMedian: 7.06, totalCompanies: 3 },
  { subSector: "Rental & Leasing Services", sector: "Industrials", peCount: 2, peMedian: 6.43, evEbitdaCount: 2, evEbitdaMedian: 8.99, totalCompanies: 3 },
  { subSector: "Specialty Business Services", sector: "Industrials", peCount: 0, peMedian: null, evEbitdaCount: 1, evEbitdaMedian: 38.01, totalCompanies: 2 },
  { subSector: "Staffing & Employment Services", sector: "Industrials", peCount: 2, peMedian: 12.0, evEbitdaCount: 1, evEbitdaMedian: 8.23, totalCompanies: 2 },
  { subSector: "Pollution & Treatment Controls", sector: "Industrials", peCount: 1, peMedian: 6.8, evEbitdaCount: 1, evEbitdaMedian: 5.15, totalCompanies: 2 },
  { subSector: "Farm & Heavy Construction Machinery", sector: "Industrials", peCount: 2, peMedian: 10.56, evEbitdaCount: 2, evEbitdaMedian: 3.28, totalCompanies: 2 },
  { subSector: "Airlines", sector: "Industrials", peCount: 1, peMedian: 8.53, evEbitdaCount: 1, evEbitdaMedian: 7.05, totalCompanies: 1 },
  { subSector: "Airports & Air Services", sector: "Industrials", peCount: 1, peMedian: 19.5, evEbitdaCount: 1, evEbitdaMedian: 7.96, totalCompanies: 1 },
  { subSector: "Electrical Equipment & Parts", sector: "Industrials", peCount: 1, peMedian: 9.1, evEbitdaCount: 1, evEbitdaMedian: 6.48, totalCompanies: 1 },
  { subSector: "Railroads", sector: "Industrials", peCount: 1, peMedian: 14.2, evEbitdaCount: 1, evEbitdaMedian: 6.26, totalCompanies: 1 },
  { subSector: "Tools & Accessories", sector: "Industrials", peCount: 1, peMedian: 8.07, evEbitdaCount: 1, evEbitdaMedian: 2.25, totalCompanies: 1 },
  
  { subSector: "General", sector: "Real Estate", peCount: 43, peMedian: 15.94, evEbitdaCount: 47, evEbitdaMedian: 20.14, totalCompanies: 70 },
  { subSector: "Real Estate - Development", sector: "Real Estate", peCount: 6, peMedian: 13.56, evEbitdaCount: 13, evEbitdaMedian: 18.7, totalCompanies: 18 },
  { subSector: "Real Estate Services", sector: "Real Estate", peCount: 7, peMedian: 18.0, evEbitdaCount: 7, evEbitdaMedian: 23.76, totalCompanies: 9 },
  { subSector: "REIT - Office", sector: "Real Estate", peCount: 6, peMedian: 14.69, evEbitdaCount: 4, evEbitdaMedian: 17.55, totalCompanies: 9 },
  { subSector: "Real Estate - Diversified", sector: "Real Estate", peCount: 3, peMedian: 12.38, evEbitdaCount: 6, evEbitdaMedian: 20.81, totalCompanies: 8 },
  { subSector: "REIT - Retail", sector: "Real Estate", peCount: 5, peMedian: 15.79, evEbitdaCount: 7, evEbitdaMedian: 21.25, totalCompanies: 8 },
  { subSector: "REIT - Industrial", sector: "Real Estate", peCount: 7, peMedian: 21.13, evEbitdaCount: 4, evEbitdaMedian: 19.73, totalCompanies: 8 },
  { subSector: "REIT - Diversified", sector: "Real Estate", peCount: 5, peMedian: 26.25, evEbitdaCount: 3, evEbitdaMedian: 21.7, totalCompanies: 5 },
  { subSector: "REIT - Healthcare Facilities", sector: "Real Estate", peCount: 2, peMedian: 19.34, evEbitdaCount: 1, evEbitdaMedian: 11.23, totalCompanies: 2 },
  { subSector: "REIT - Hotel & Motel", sector: "Real Estate", peCount: 1, peMedian: 80.5, evEbitdaCount: 2, evEbitdaMedian: 16.23, totalCompanies: 2 },
  
  { subSector: "General", sector: "Technology", peCount: 21, peMedian: 20.25, evEbitdaCount: 26, evEbitdaMedian: 7.41, totalCompanies: 35 },
  { subSector: "Semiconductor Equipment & Materials", sector: "Technology", peCount: 5, peMedian: 22.5, evEbitdaCount: 6, evEbitdaMedian: 12.28, totalCompanies: 8 },
  { subSector: "Electronic Components", sector: "Technology", peCount: 5, peMedian: 14.21, evEbitdaCount: 4, evEbitdaMedian: 9.32, totalCompanies: 6 },
  { subSector: "Communication Equipment", sector: "Technology", peCount: 1, peMedian: 28.89, evEbitdaCount: 2, evEbitdaMedian: 18.25, totalCompanies: 4 },
  { subSector: "Electronics & Computer Distribution", sector: "Technology", peCount: 3, peMedian: 7.33, evEbitdaCount: 4, evEbitdaMedian: 5.36, totalCompanies: 4 },
  { subSector: "Software - Application", sector: "Technology", peCount: 1, peMedian: 29.22, evEbitdaCount: 3, evEbitdaMedian: 9.29, totalCompanies: 3 },
  { subSector: "Information Technology Services", sector: "Technology", peCount: 3, peMedian: 18.02, evEbitdaCount: 3, evEbitdaMedian: 1.93, totalCompanies: 3 },
  { subSector: "Scientific & Technical Instruments", sector: "Technology", peCount: 1, peMedian: 14.56, evEbitdaCount: 2, evEbitdaMedian: 4.81, totalCompanies: 2 },
  { subSector: "Semiconductors", sector: "Technology", peCount: 2, peMedian: 25.83, evEbitdaCount: 2, evEbitdaMedian: 8.53, totalCompanies: 2 },
  
  { subSector: "General", sector: "Utilities", peCount: 3, peMedian: 5.56, evEbitdaCount: 5, evEbitdaMedian: 6.82, totalCompanies: 6 },
  { subSector: "Utilities - Regulated Water", sector: "Utilities", peCount: 1, peMedian: 4.03, evEbitdaCount: 2, evEbitdaMedian: 8.7, totalCompanies: 2 },
  { subSector: "Utilities - Renewable", sector: "Utilities", peCount: 1, peMedian: 5.56, evEbitdaCount: 1, evEbitdaMedian: 6.82, totalCompanies: 2 },
  { subSector: "Utilities - Independent Power Producers", sector: "Utilities", peCount: 1, peMedian: 7.5, evEbitdaCount: 1, evEbitdaMedian: 4.78, totalCompanies: 1 },
  { subSector: "Utilities - Regulated Gas", sector: "Utilities", peCount: 0, peMedian: null, evEbitdaCount: 1, evEbitdaMedian: 3.78, totalCompanies: 1 }
];

// Get all unique sectors
export const getAllSectors = (): string[] => {
  const sectors = [...new Set(sgxIndustryData.map(item => item.sector))];
  return sectors.sort();
};

// Get sub-sectors for a specific sector
export const getSubSectorsForSector = (sector: string): SubSectorOption[] => {
  return sgxIndustryData
    .filter(item => item.sector === sector)
    .map(item => ({
      subSector: item.subSector,
      sector: item.sector,
      evEbitdaMedian: item.evEbitdaMedian,
      totalCompanies: item.totalCompanies,
      description: generateSubSectorDescription(item.subSector, item.sector, item.totalCompanies)
    }))
    .sort((a, b) => {
      // Sort General first, then alphabetically
      if (a.subSector === "General") return -1;
      if (b.subSector === "General") return 1;
      return a.subSector.localeCompare(b.subSector);
    });
};

// Get industry multiple based on sub-sector
export const getSGXIndustryMultiple = (subSector: string, sector: string): number => {
  const industryData = sgxIndustryData.find(
    item => item.subSector === subSector && item.sector === sector
  );
  return industryData ? industryData.evEbitdaMedian : 6.0; // Default fallback multiple
};

// Get industry description based on sub-sector
export const getSGXIndustryDescription = (subSector: string, sector: string): string => {
  const industryData = sgxIndustryData.find(
    item => item.subSector === subSector && item.sector === sector
  );
  if (!industryData) return "General industry characteristics";
  
  return generateSubSectorDescription(subSector, sector, industryData.totalCompanies);
};

// Generate description for sub-sectors
const generateSubSectorDescription = (subSector: string, sector: string, totalCompanies: number): string => {
  if (subSector === "General") {
    return `General ${sector.toLowerCase()} sector characteristics (${totalCompanies} SGX companies)`;
  }
  
  // Specific descriptions for common sub-sectors
  const descriptions: Record<string, string> = {
    "Engineering & Construction": "Infrastructure projects, cyclical demand, project-based revenue",
    "Real Estate - Development": "Property development, market-dependent, capital intensive",
    "Semiconductor Equipment & Materials": "High-tech manufacturing, cyclical demand, R&D intensive",
    "Medical Care Facilities": "Healthcare services, stable demand, regulatory requirements",
    "Oil & Gas Equipment & Services": "Energy sector services, commodity-dependent, cyclical",
    "Telecom Services": "Communication infrastructure, stable revenue, regulatory environment",
    "Lodging": "Hospitality sector, tourism-dependent, cyclical demand",
    "Restaurants": "Food service industry, location-dependent, competitive market",
    "Asset Management": "Financial services, fee-based revenue, market-dependent",
    "Packaged Foods": "Consumer staples, stable demand, brand-dependent",
    "Conglomerates": "Diversified holdings, varied revenue streams, complex operations",
    "Electronic Components": "Technology hardware, cyclical demand, supply chain dependent"
  };
  
  const description = descriptions[subSector] || `${subSector} industry characteristics`;
  return `${description} (${totalCompanies} SGX companies)`;
};

// Get structured sector options for UI
export const getSectorOptions = (): SectorOption[] => {
  const sectors = getAllSectors();
  return sectors.map(sector => ({
    sector,
    subSectors: getSubSectorsForSector(sector)
  }));
};