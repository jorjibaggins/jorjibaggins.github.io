import { z } from 'zod';
import { industryMultiples } from './industryMultiples';

// Get valid industry options for validation
const validIndustries = industryMultiples.map(item => item.industry);

// Zod schema for calculator inputs
export const calculatorInputSchema = z.object({
  industry: z.string()
    .min(1, "Please select your industry")
    .refine((value) => validIndustries.includes(value), {
      message: "Please select a valid industry"
    }),
  
  annualRevenue: z.number()
    .min(1, "Annual revenue must be greater than 0")
    .max(1000000000, "Please enter a realistic revenue figure")
    .refine((value) => !isNaN(value), {
      message: "Please enter a valid revenue amount"
    }),
  
  netProfitBeforeTax: z.number()
    .min(-1000000000, "Please enter a realistic profit figure")
    .max(1000000000, "Please enter a realistic profit figure")
    .refine((value) => !isNaN(value), {
      message: "Please enter a valid profit amount"
    }),
  
  depreciationAmortisation: z.number()
    .min(0, "Depreciation & amortisation cannot be negative")
    .max(1000000000, "Please enter a realistic D&A figure")
    .refine((value) => !isNaN(value), {
      message: "Please enter a valid D&A amount"
    })
});

export type CalculatorInputs = z.infer<typeof calculatorInputSchema>;

// Individual field validation functions
export const validateIndustry = (industry: string): string | null => {
  if (!industry || industry.trim() === '') {
    return "Please select your industry";
  }
  if (!validIndustries.includes(industry)) {
    return "Please select a valid industry";
  }
  return null;
};

export const validateRevenue = (revenue: number | string): string | null => {
  const num = typeof revenue === 'string' ? parseFloat(revenue) : revenue;
  
  if (isNaN(num)) {
    return "Please enter a valid revenue amount";
  }
  if (num <= 0) {
    return "Revenue must be greater than 0";
  }
  if (num > 1000000000) {
    return "Please enter a realistic revenue figure";
  }
  return null;
};

export const validateNetProfit = (netProfit: number | string): string | null => {
  const num = typeof netProfit === 'string' ? parseFloat(netProfit) : netProfit;
  
  if (isNaN(num)) {
    return "Please enter a valid profit amount";
  }
  if (num < -1000000000 || num > 1000000000) {
    return "Please enter a realistic profit figure";
  }
  return null;
};

export const validateDepreciationAmortisation = (da: number | string): string | null => {
  const num = typeof da === 'string' ? parseFloat(da) : da;
  
  if (isNaN(num)) {
    return "Please enter a valid D&A amount";
  }
  if (num < 0) {
    return "Depreciation & amortisation cannot be negative";
  }
  if (num > 1000000000) {
    return "Please enter a realistic D&A figure";
  }
  return null;
};

// Cross-field validation
export const validateCrossFields = (inputs: CalculatorInputs): string[] => {
  const errors: string[] = [];
  
  // Net Profit > Revenue check
  if (inputs.netProfitBeforeTax > inputs.annualRevenue) {
    errors.push("Net profit cannot exceed annual revenue");
  }
  
  return errors;
};

// Format currency input (remove non-numeric characters except decimal)
export const formatCurrencyInput = (value: string): string => {
  // Remove all non-numeric characters except decimal point
  const numericValue = value.replace(/[^0-9.]/g, '');
  
  // Ensure only one decimal point
  const parts = numericValue.split('.');
  if (parts.length > 2) {
    return parts[0] + '.' + parts.slice(1).join('');
  }
  
  return numericValue;
};

// Parse currency input to number
export const parseCurrencyInput = (value: string): number => {
  const cleaned = formatCurrencyInput(value);
  return parseFloat(cleaned) || 0;
};

// Format number for display with commas
export const formatDisplayNumber = (value: number): string => {
  return new Intl.NumberFormat('en-SG').format(value);
};

// Validation result interface
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  crossFieldErrors: string[];
}

// Complete form validation
export const validateCalculatorForm = (inputs: Partial<CalculatorInputs>): ValidationResult => {
  const errors: Record<string, string> = {};
  
  // Individual field validation
  if (inputs.industry !== undefined) {
    const industryError = validateIndustry(inputs.industry);
    if (industryError) errors.industry = industryError;
  }
  
  if (inputs.annualRevenue !== undefined) {
    const revenueError = validateRevenue(inputs.annualRevenue);
    if (revenueError) errors.annualRevenue = revenueError;
  }
  
  if (inputs.netProfitBeforeTax !== undefined) {
    const profitError = validateNetProfit(inputs.netProfitBeforeTax);
    if (profitError) errors.netProfitBeforeTax = profitError;
  }
  
  if (inputs.depreciationAmortisation !== undefined) {
    const daError = validateDepreciationAmortisation(inputs.depreciationAmortisation);
    if (daError) errors.depreciationAmortisation = daError;
  }
  
  // Cross-field validation (only if all fields are present)
  let crossFieldErrors: string[] = [];
  if (inputs.industry && inputs.annualRevenue && inputs.netProfitBeforeTax && inputs.depreciationAmortisation) {
    crossFieldErrors = validateCrossFields(inputs as CalculatorInputs);
  }
  
  return {
    isValid: Object.keys(errors).length === 0 && crossFieldErrors.length === 0,
    errors,
    crossFieldErrors
  };
};