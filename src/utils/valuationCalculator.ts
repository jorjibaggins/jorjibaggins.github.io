import { getSGXIndustryMultiple } from './sgxIndustryMultiples';

export interface CalculatorInputs {
  sector: string;
  subSector: string;
  annualRevenue: number;
  ebitda: number;
}

export interface ValuationResult {
  ebitda: number;
  industryMultiple: number;
  baseValuation: number;
  discountedValuation: number;
  valuationRange: {
    min: number;
    max: number;
  };
  warnings: string[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// EBITDA is now provided directly
export const getEBITDA = (ebitda: number): number => {
  return ebitda;
};

// Base Valuation Calculation
export const calculateBaseValuation = (ebitda: number, industryMultiple: number): number => {
  return ebitda * industryMultiple;
};

// Apply Revenue-Based Discount (20% for <1M revenue, 10% for >=1M revenue)
export const applyDiscount = (baseValuation: number, annualRevenue: number): number => {
  const discountRate = annualRevenue < 1000000 ? 0.2 : 0.1;
  return baseValuation * (1 - discountRate);
};

// Calculate Valuation Range (+/- 30%)
export const calculateValuationRange = (discountedValuation: number, rangePercentage: number = 0.3) => {
  const variance = discountedValuation * rangePercentage;
  return {
    min: Math.max(0, discountedValuation - variance), // Ensure minimum is not negative
    max: discountedValuation + variance
  };
};

// Validate Business Logic
export const validateBusinessLogic = (inputs: CalculatorInputs): ValidationResult => {
  const warnings: string[] = [];
  const errors: string[] = [];

  // EBITDA > Revenue check (unusual but possible for some businesses)
  if (inputs.ebitda > inputs.annualRevenue) {
    warnings.push("EBITDA exceeds revenue - please verify this is correct");
  }

  // Negative EBITDA warning
  if (inputs.ebitda < 0) {
    warnings.push("Your EBITDA is negative, which may indicate financial challenges");
  }

  // Very low EBITDA margins
  const ebitdaMargin = inputs.ebitda / inputs.annualRevenue;
  if (ebitdaMargin < 0.05 && ebitdaMargin > 0) {
    warnings.push("Low EBITDA margin detected - consider reviewing your financials");
  }

  // Extremely high EBITDA margins (potential input error)
  if (ebitdaMargin > 0.7) {
    warnings.push("Unusually high EBITDA margin - please verify your inputs");
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

// Main Valuation Calculator
export const calculateValuation = (inputs: CalculatorInputs): ValuationResult => {
  // Get industry multiple
  const industryMultiple = getSGXIndustryMultiple(inputs.subSector, inputs.sector);
  
  // Use EBITDA directly
  const ebitda = getEBITDA(inputs.ebitda);
  
  // Calculate base valuation
  const baseValuation = calculateBaseValuation(ebitda, industryMultiple);
  
  // Apply discount based on revenue size
  const discountedValuation = applyDiscount(baseValuation, inputs.annualRevenue);
  
  // Calculate range
  const valuationRange = calculateValuationRange(discountedValuation);
  
  // Validate business logic for warnings
  const validation = validateBusinessLogic(inputs);
  
  return {
    ebitda,
    industryMultiple,
    baseValuation,
    discountedValuation,
    valuationRange,
    warnings: validation.warnings
  };
};

// Utility function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// Utility function to format number with commas
export const formatNumber = (number: number): string => {
  return new Intl.NumberFormat('en-SG').format(number);
};