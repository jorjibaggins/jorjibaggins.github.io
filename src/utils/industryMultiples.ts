export interface IndustryMultiple {
  industry: string;
  multiple: number;
  description: string;
}

export const industryMultiples: IndustryMultiple[] = [
  {
    industry: "Technology/Software",
    multiple: 12.0,
    description: "High growth potential, recurring revenue models, scalable technology platforms"
  },
  {
    industry: "Healthcare/Medical",
    multiple: 8.5,
    description: "Stable demand, regulatory barriers to entry, essential services"
  },
  {
    industry: "Financial Services",
    multiple: 10.0,
    description: "Stable cash flows, regulated industry, trust-based relationships"
  },
  {
    industry: "Manufacturing",
    multiple: 6.5,
    description: "Asset-heavy operations, cyclical demand, established supply chains"
  },
  {
    industry: "Retail/E-commerce",
    multiple: 4.5,
    description: "Competitive landscape, margin pressure, inventory management challenges"
  },
  {
    industry: "Food & Beverage",
    multiple: 5.5,
    description: "Stable local demand, brand loyalty, regulatory compliance requirements"
  },
  {
    industry: "Professional Services",
    multiple: 7.0,
    description: "People-dependent, moderate growth, expertise-based value proposition"
  },
  {
    industry: "Real Estate",
    multiple: 9.0,
    description: "Asset-backed valuations, steady rental income, Singapore property market"
  },
  {
    industry: "Construction",
    multiple: 4.0,
    description: "Cyclical industry, project-based revenue, regulatory compliance"
  },
  {
    industry: "Transportation/Logistics",
    multiple: 6.0,
    description: "Essential infrastructure, asset-heavy operations, Singapore hub advantage"
  },
  {
    industry: "Education/Training",
    multiple: 8.0,
    description: "Stable demand, recurring revenue, skills development focus"
  },
  {
    industry: "Hospitality/Tourism",
    multiple: 3.5,
    description: "Seasonal variations, post-pandemic recovery, travel-dependent"
  },
  {
    industry: "Media/Marketing",
    multiple: 6.5,
    description: "Creative industry, client-dependent, digital transformation opportunities"
  },
  {
    industry: "Energy/Utilities",
    multiple: 7.5,
    description: "Stable regulated industry, essential services, infrastructure investments"
  },
  {
    industry: "Import/Export Trading",
    multiple: 5.0,
    description: "Market-dependent, competitive landscape, Singapore trade hub position"
  }
];

export const getIndustryMultiple = (industry: string): number => {
  const industryData = industryMultiples.find(item => item.industry === industry);
  return industryData ? industryData.multiple : 6.0; // Default fallback multiple
};

export const getIndustryDescription = (industry: string): string => {
  const industryData = industryMultiples.find(item => item.industry === industry);
  return industryData ? industryData.description : "General industry characteristics";
};