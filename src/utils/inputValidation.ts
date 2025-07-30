import { z } from 'zod';
import { getAllSectors, getSubSectorsForSector } from './sgxCompsData';

// Get valid sector and sub-sector options for validation
const validSectors = getAllSectors();

// Zod schema for calculator inputs
export const calculatorInputSchema = z.object({
  sector: z.string()
    .min(1, "Please select your sector")
    .refine((value) => validSectors.includes(value), {
      message: "Please select a valid sector"
    }),
  
  subSector: z.string()
    .min(1, "Please select your sub-sector"),
  
  annualRevenue: z.number()
    .min(1, "Annual revenue must be greater than 0")
    .max(1000000000, "Please enter a realistic revenue figure")
    .refine((value) => !isNaN(value), {
      message: "Please enter a valid revenue amount"
    }),
  
  ebitda: z.number()
    .min(-1000000000, "Please enter a realistic EBITDA figure")
    .max(1000000000, "Please enter a realistic EBITDA figure")
    .refine((value) => !isNaN(value), {
      message: "Please enter a valid EBITDA amount"
    })
});

export type CalculatorInputs = z.infer<typeof calculatorInputSchema>;

// Individual field validation functions
export const validateSector = (sector: string): string | null => {
  if (!sector || sector.trim() === '') {
    return "Please select your sector";
  }
  if (!validSectors.includes(sector)) {
    return "Please select a valid sector";
  }
  return null;
};

export const validateSubSector = (subSector: string, sector: string): string | null => {
  if (!subSector || subSector.trim() === '') {
    return "Please select your sub-sector";
  }
  if (sector) {
    const validSubSectors = getSubSectorsForSector(sector).map(item => item.subSector);
    if (!validSubSectors.includes(subSector)) {
      return "Please select a valid sub-sector for the chosen sector";
    }
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

export const validateEBITDA = (ebitda: number | string): string | null => {
  const num = typeof ebitda === 'string' ? parseFloat(ebitda) : ebitda;
  
  if (isNaN(num)) {
    return "Please enter a valid EBITDA amount";
  }
  if (num < -1000000000 || num > 1000000000) {
    return "Please enter a realistic EBITDA figure";
  }
  return null;
};

// Cross-field validation
export const validateCrossFields = (_inputs: CalculatorInputs): string[] => {
  const errors: string[] = [];
  
  // EBITDA margin validation (warning moved to business logic)
  // No critical cross-field errors for EBITDA vs Revenue
  
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
  
  // Check if all required fields are present
  if (!inputs.sector || inputs.sector === '') {
    errors.sector = "Please select your sector";
  } else {
    const sectorError = validateSector(inputs.sector);
    if (sectorError) errors.sector = sectorError;
  }
  
  if (!inputs.subSector || inputs.subSector === '') {
    errors.subSector = "Please select your sub-sector";
  } else {
    const subSectorError = validateSubSector(inputs.subSector, inputs.sector || '');
    if (subSectorError) errors.subSector = subSectorError;
  }
  
  if (inputs.annualRevenue === undefined || inputs.annualRevenue === null || inputs.annualRevenue === 0) {
    errors.annualRevenue = "Annual revenue is required";
  } else {
    const revenueError = validateRevenue(inputs.annualRevenue);
    if (revenueError) errors.annualRevenue = revenueError;
  }
  
  if (inputs.ebitda === undefined || inputs.ebitda === null) {
    errors.ebitda = "EBITDA is required";
  } else {
    const ebitdaError = validateEBITDA(inputs.ebitda);
    if (ebitdaError) errors.ebitda = ebitdaError;
  }
  
  // Cross-field validation (only if all fields are present and valid)
  let crossFieldErrors: string[] = [];
  if (Object.keys(errors).length === 0 && 
      inputs.sector && 
      inputs.subSector &&
      inputs.annualRevenue !== undefined && 
      inputs.ebitda !== undefined) {
    crossFieldErrors = validateCrossFields(inputs as CalculatorInputs);
  }
  
  return {
    isValid: Object.keys(errors).length === 0 && crossFieldErrors.length === 0,
    errors,
    crossFieldErrors
  };
};