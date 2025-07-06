import { getIndustryMultiple } from './industryMultiples';

export interface CalculatorInputs {
  industry: string;
  annualRevenue: number;
  netProfitBeforeTax: number;
  depreciationAmortisation: number;
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

// EBITDA Calculation
export const calculateEBITDA = (netProfitBeforeTax: number, depreciationAmortisation: number): number => {
  return netProfitBeforeTax + depreciationAmortisation;
};

// Base Valuation Calculation
export const calculateBaseValuation = (ebitda: number, industryMultiple: number): number => {
  return ebitda * industryMultiple;
};

// Apply 10% Discount
export const applyDiscount = (baseValuation: number, discountRate: number = 0.1): number => {
  return baseValuation * (1 - discountRate);
};

// Calculate Valuation Range (+/- 20%)
export const calculateValuationRange = (discountedValuation: number, rangePercentage: number = 0.2) => {
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

  // Net Profit > Revenue check
  if (inputs.netProfitBeforeTax > inputs.annualRevenue) {
    errors.push("Net profit cannot exceed annual revenue");
  }

  // D&A > Revenue check (unusual but possible)
  if (inputs.depreciationAmortisation > inputs.annualRevenue) {
    warnings.push("Depreciation & amortisation exceeds revenue - please verify this is correct");
  }

  // Negative EBITDA warning
  const ebitda = calculateEBITDA(inputs.netProfitBeforeTax, inputs.depreciationAmortisation);
  if (ebitda < 0) {
    warnings.push("Your EBITDA is negative, which may indicate financial challenges");
  }

  // Very low profit margins
  const profitMargin = inputs.netProfitBeforeTax / inputs.annualRevenue;
  if (profitMargin < 0.01 && profitMargin > 0) {
    warnings.push("Low profit margin detected - consider reviewing your financials");
  }

  // Extremely high profit margins (potential input error)
  if (profitMargin > 0.5) {
    warnings.push("Unusually high profit margin - please verify your inputs");
  }

  // Zero depreciation warning for certain industries
  if (inputs.depreciationAmortisation === 0) {
    const assetHeavyIndustries = ['Manufacturing', 'Construction', 'Transportation/Logistics', 'Real Estate'];
    if (assetHeavyIndustries.includes(inputs.industry)) {
      warnings.push("Zero depreciation is unusual for asset-heavy industries");
    }
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
  const industryMultiple = getIndustryMultiple(inputs.industry);
  
  // Calculate EBITDA
  const ebitda = calculateEBITDA(inputs.netProfitBeforeTax, inputs.depreciationAmortisation);
  
  // Calculate base valuation
  const baseValuation = calculateBaseValuation(ebitda, industryMultiple);
  
  // Apply discount
  const discountedValuation = applyDiscount(baseValuation);
  
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