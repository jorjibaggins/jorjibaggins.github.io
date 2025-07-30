export interface SGXCompsData {
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

// SGX Comps data from SGX Comps.xlsx - Real market data
export const sgxCompsData: SGXCompsData[] = [
  { subSector: "General", sector: "Communication Services", peCount: 0, peMedian: null, evEbitdaCount: 5, evEbitdaMedian: 8.81, totalCompanies: 5 },
  { subSector: "Media and Entertainment", sector: "Communication Services", peCount: 0, peMedian: null, evEbitdaCount: 2, evEbitdaMedian: 6.88, totalCompanies: 2 },
  { subSector: "Telecommunication Services", sector: "Communication Services", peCount: 0, peMedian: null, evEbitdaCount: 3, evEbitdaMedian: 11.94, totalCompanies: 3 },
  { subSector: "General", sector: "Consumer Discretionary", peCount: 0, peMedian: null, evEbitdaCount: 23, evEbitdaMedian: 5.58, totalCompanies: 23 },
  { subSector: "Consumer Discretionary Distribution and Retail", sector: "Consumer Discretionary", peCount: 0, peMedian: null, evEbitdaCount: 8, evEbitdaMedian: 5.1, totalCompanies: 8 },
  { subSector: "Consumer Services", sector: "Consumer Discretionary", peCount: 0, peMedian: null, evEbitdaCount: 15, evEbitdaMedian: 11.42, totalCompanies: 15 },
  { subSector: "General", sector: "Consumer Staples", peCount: 0, peMedian: null, evEbitdaCount: 19, evEbitdaMedian: 8.21, totalCompanies: 19 },
  { subSector: "Consumer Staples Distribution and Retail", sector: "Consumer Staples", peCount: 0, peMedian: null, evEbitdaCount: 3, evEbitdaMedian: 9.44, totalCompanies: 3 },
  { subSector: "Food, Beverage and Tobacco", sector: "Consumer Staples", peCount: 0, peMedian: null, evEbitdaCount: 16, evEbitdaMedian: 7.38, totalCompanies: 16 },
  { subSector: "General", sector: "Energy", peCount: 0, peMedian: null, evEbitdaCount: 9, evEbitdaMedian: 2.02, totalCompanies: 9 },
  { subSector: "Energy", sector: "Energy", peCount: 0, peMedian: null, evEbitdaCount: 9, evEbitdaMedian: 2.02, totalCompanies: 9 },
  { subSector: "General", sector: "Financials", peCount: 0, peMedian: null, evEbitdaCount: 7, evEbitdaMedian: 7.83, totalCompanies: 7 },
  { subSector: "Financial Services", sector: "Financials", peCount: 0, peMedian: null, evEbitdaCount: 5, evEbitdaMedian: 7.83, totalCompanies: 5 },
  { subSector: "Insurance", sector: "Financials", peCount: 0, peMedian: null, evEbitdaCount: 2, evEbitdaMedian: 8.73, totalCompanies: 2 },
  { subSector: "General", sector: "Health Care", peCount: 0, peMedian: null, evEbitdaCount: 6, evEbitdaMedian: 12.13, totalCompanies: 6 },
  { subSector: "Health Care Equipment and Services", sector: "Health Care", peCount: 0, peMedian: null, evEbitdaCount: 5, evEbitdaMedian: 11.28, totalCompanies: 5 },
  { subSector: "General", sector: "Industrials", peCount: 0, peMedian: null, evEbitdaCount: 57, evEbitdaMedian: 6.24, totalCompanies: 57 },
  { subSector: "Capital Goods", sector: "Industrials", peCount: 0, peMedian: null, evEbitdaCount: 39, evEbitdaMedian: 6.24, totalCompanies: 39 },
  { subSector: "Commercial and Professional Services", sector: "Industrials", peCount: 0, peMedian: null, evEbitdaCount: 6, evEbitdaMedian: 7.2, totalCompanies: 6 },
  { subSector: "Transportation", sector: "Industrials", peCount: 0, peMedian: null, evEbitdaCount: 12, evEbitdaMedian: 5.96, totalCompanies: 12 },
  { subSector: "General", sector: "Information Technology", peCount: 0, peMedian: null, evEbitdaCount: 15, evEbitdaMedian: 7.8, totalCompanies: 15 },
  { subSector: "Semiconductors and Semiconductor Equipment", sector: "Information Technology", peCount: 0, peMedian: null, evEbitdaCount: 3, evEbitdaMedian: 14.92, totalCompanies: 3 },
  { subSector: "Software and Services", sector: "Information Technology", peCount: 0, peMedian: null, evEbitdaCount: 3, evEbitdaMedian: 12.09, totalCompanies: 3 },
  { subSector: "Technology Hardware and Equipment", sector: "Information Technology", peCount: 0, peMedian: null, evEbitdaCount: 9, evEbitdaMedian: 6.17, totalCompanies: 9 },
  { subSector: "General", sector: "Materials", peCount: 0, peMedian: null, evEbitdaCount: 12, evEbitdaMedian: 4.71, totalCompanies: 12 },
  { subSector: "Materials", sector: "Materials", peCount: 0, peMedian: null, evEbitdaCount: 12, evEbitdaMedian: 4.71, totalCompanies: 12 },
  { subSector: "General", sector: "Real Estate", peCount: 0, peMedian: null, evEbitdaCount: 52, evEbitdaMedian: 18.64, totalCompanies: 52 },
  { subSector: "Equity Real Estate Investment Trusts (REITs)", sector: "Real Estate", peCount: 0, peMedian: null, evEbitdaCount: 22, evEbitdaMedian: 19.11, totalCompanies: 22 },
  { subSector: "Real Estate Management and Development", sector: "Real Estate", peCount: 0, peMedian: null, evEbitdaCount: 30, evEbitdaMedian: 18.48, totalCompanies: 30 },
  { subSector: "General", sector: "Utilities", peCount: 0, peMedian: null, evEbitdaCount: 7, evEbitdaMedian: 9.34, totalCompanies: 7 },
  { subSector: "Utilities", sector: "Utilities", peCount: 0, peMedian: null, evEbitdaCount: 7, evEbitdaMedian: 9.34, totalCompanies: 7 },
];

// Get all unique sectors
export const getAllSectors = (): string[] => {
  const sectors = [...new Set(sgxCompsData.map(item => item.sector))];
  return sectors.sort();
};

// Get sub-sectors for a specific sector
export const getSubSectorsForSector = (sector: string): SubSectorOption[] => {
  return sgxCompsData
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
  const industryData = sgxCompsData.find(
    item => item.subSector === subSector && item.sector === sector
  );
  return industryData ? industryData.evEbitdaMedian : 6.0; // Default fallback multiple
};

// Get industry description based on sub-sector
export const getSGXIndustryDescription = (subSector: string, sector: string): string => {
  const industryData = sgxCompsData.find(
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
  
  // Return a generic description with company count
  return `${subSector} industry characteristics (${totalCompanies} SGX companies)`;
};

// Get structured sector options for UI
export const getSectorOptions = (): SectorOption[] => {
  const sectors = getAllSectors();
  return sectors.map(sector => ({
    sector,
    subSectors: getSubSectorsForSector(sector)
  }));
};
