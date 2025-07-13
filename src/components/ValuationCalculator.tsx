import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Mail } from 'lucide-react';
import ContactModal from './ContactModal';

import { getAllSectors, getSubSectorsForSector } from '@/utils/sgxIndustryMultiples';
import { calculateValuation, formatCurrency } from '@/utils/valuationCalculator';
import { validateCalculatorForm, formatCurrencyInput, parseCurrencyInput } from '@/utils/inputValidation';
import type { CalculatorInputs, ValuationResult } from '@/utils/valuationCalculator';

const ValuationCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<Partial<CalculatorInputs>>({
    sector: undefined,
    subSector: undefined,
    annualRevenue: undefined,
    ebitda: undefined
  });
  
  const [result, setResult] = useState<ValuationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [crossFieldErrors, setCrossFieldErrors] = useState<string[]>([]);
  const [showContactModal, setShowContactModal] = useState(false);

  // Format currency display values
  const [displayValues, setDisplayValues] = useState({
    annualRevenue: '',
    ebitda: ''
  });

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    if (field === 'sector') {
      setInputs(prev => ({ 
        ...prev, 
        [field]: value as string,
        subSector: undefined // Reset sub-sector when sector changes
      }));
    } else if (field === 'subSector') {
      setInputs(prev => ({ ...prev, [field]: value as string }));
    } else {
      // Handle currency inputs
      const stringValue = value as string;
      const formattedValue = formatCurrencyInput(stringValue);
      const numericValue = parseCurrencyInput(formattedValue);
      
      setInputs(prev => ({ ...prev, [field]: numericValue }));
      setDisplayValues(prev => ({ ...prev, [field]: formattedValue }));
    }
    
    // Clear errors for this field
    setErrors(prev => ({ ...prev, [field]: '' }));
    setCrossFieldErrors([]);
  };

  const handleCalculate = async () => {
    // Validate inputs
    const validation = validateCalculatorForm(inputs);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      setCrossFieldErrors(validation.crossFieldErrors);
      return;
    }

    setIsCalculating(true);
    setErrors({});
    setCrossFieldErrors([]);

    try {
      // Simulate calculation delay for UX
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const calculationResult = calculateValuation(inputs as CalculatorInputs);
      setResult(calculationResult);

      // Track successful calculation
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'calculator_completed', {
          event_category: 'calculator',
          event_label: `${inputs.sector} - ${inputs.subSector}`,
          value: Math.round(calculationResult.discountedValuation)
        });
      }
    } catch (error) {
      console.error('Calculation error:', error);
      setCrossFieldErrors(['An error occurred during calculation. Please try again.']);
    } finally {
      setIsCalculating(false);
    }
  };

  const resetCalculator = () => {
    setInputs({
      sector: undefined,
      subSector: undefined,
      annualRevenue: undefined,
      ebitda: undefined
    });
    setDisplayValues({
      annualRevenue: '',
      ebitda: ''
    });
    setResult(null);
    setErrors({});
    setCrossFieldErrors([]);
    setShowContactModal(false);
  };

  const handleContactRequest = () => {
    setShowContactModal(true);
    
    // Track contact modal opened
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_modal_opened', {
        event_category: 'calculator',
        event_label: `${inputs.sector} - ${inputs.subSector}`
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-eaststreet-darkest">Business Valuation Calculator</CardTitle>
          <CardDescription>
            Enter your business details to get an estimated valuation range
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Sector and Sub-Sector Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sector Selection */}
            <div className="space-y-2">
              <Label htmlFor="sector" className="text-sm font-medium text-eaststreet-darkest">
                Sector *
              </Label>
              <select 
                value={inputs.sector || ""} 
                onChange={(e) => handleInputChange('sector', e.target.value)}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>Select your sector</option>
                {getAllSectors().map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>
              {errors.sector && (
                <p className="text-sm text-red-600">{errors.sector}</p>
              )}
            </div>

            {/* Sub-Sector Selection */}
            <div className="space-y-2">
              <Label htmlFor="subSector" className="text-sm font-medium text-eaststreet-darkest">
                Sub-Sector *
              </Label>
              <select 
                value={inputs.subSector || ""} 
                onChange={(e) => handleInputChange('subSector', e.target.value)}
                disabled={!inputs.sector}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>
                  {inputs.sector ? 'Select your sub-sector' : 'First select a sector'}
                </option>
                {inputs.sector && getSubSectorsForSector(inputs.sector).map((subSector) => (
                  <option key={subSector.subSector} value={subSector.subSector}>
                    {subSector.subSector}
                  </option>
                ))}
              </select>
              {errors.subSector && (
                <p className="text-sm text-red-600">{errors.subSector}</p>
              )}
              {inputs.sector && (
                <p className="text-xs text-gray-600 mt-1">
                  Choose General if you're unsure which sub-sector your company falls into
                </p>
              )}
            </div>
          </div>

          {/* Financial Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Annual Revenue */}
            <div className="space-y-2">
              <Label htmlFor="revenue" className="text-sm font-medium text-eaststreet-darkest">
                Annual Revenue (SGD) *
              </Label>
              <Input
                id="revenue"
                type="text"
                placeholder="e.g., 1000000"
                value={displayValues.annualRevenue}
                onChange={(e) => handleInputChange('annualRevenue', e.target.value)}
                className="w-full"
              />
              {errors.annualRevenue && (
                <p className="text-sm text-red-600">{errors.annualRevenue}</p>
              )}
            </div>

            {/* EBITDA */}
            <div className="space-y-2">
              <Label htmlFor="ebitda" className="text-sm font-medium text-eaststreet-darkest">
                EBITDA (SGD) *
              </Label>
              <Input
                id="ebitda"
                type="text"
                placeholder="e.g., 175000"
                value={displayValues.ebitda}
                onChange={(e) => handleInputChange('ebitda', e.target.value)}
                className="w-full"
              />
              <p className="text-xs text-gray-600 mt-1">
                EBITDA = Earnings Before Interest, Taxes, Depreciation & Amortisation;
                If you are unsure of your EBITDA, approximate it with Net Operating Profit Before Tax
              </p>
              {errors.ebitda && (
                <p className="text-sm text-red-600">{errors.ebitda}</p>
              )}
            </div>
          </div>

          {/* Cross-field Errors */}
          {crossFieldErrors.length > 0 && (
            <Alert variant="destructive">
              <AlertDescription>
                <ul className="list-disc list-inside space-y-1">
                  {crossFieldErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {/* Calculate Button */}
          <div className="flex gap-4">
            <Button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="btn-primary flex-1 md:flex-none px-8 whitespace-nowrap flex flex-row items-center justify-center min-w-[220px] w-auto"
            >
              {isCalculating ? (
                <div className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Calculating...</span>
                </div>
              ) : (
                'Calculate Valuation'
              )}
            </Button>
            
            {result && (
              <Button
                onClick={resetCalculator}
                variant="outline"
                className="flex-1 md:flex-none"
              >
                Reset
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results Display */}
      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-eaststreet-darkest">Your Business Valuation</CardTitle>
            <CardDescription>
              Based on your inputs, here's your estimated business value
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Valuation Range */}
            <div className="text-center py-8 bg-eaststreet-lightest rounded-lg">
              <h3 className="text-lg font-medium text-eaststreet-darkest mb-2">
                Estimated Valuation Range
              </h3>
              <div className="text-3xl font-bold text-eaststreet-darkest">
                {formatCurrency(result.valuationRange.min)} - {formatCurrency(result.valuationRange.max)}
              </div>
            </div>

            {/* Calculation Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-eaststreet-darkest">Calculation Breakdown</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>EBITDA:</span>
                    <span className="font-medium">{formatCurrency(result.ebitda)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Industry Multiple:</span>
                    <span className="font-medium">{result.industryMultiple}x</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base Valuation:</span>
                    <span className="font-medium">{formatCurrency(result.baseValuation)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount Applied ({inputs.annualRevenue! < 1000000 ? '20%' : '10%'}):</span>
                    <span className="font-medium">{formatCurrency(result.discountedValuation)}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-eaststreet-darkest">Important Notes</h4>
                <ul className="text-sm space-y-1 text-eaststreet-dark">
                  <li>• This is an estimate based on industry averages</li>
                  <li>• Actual valuations may vary significantly</li>
                  <li>• Professional valuation recommended for accuracy</li>
                  <li>• Multiple factors affect final business value</li>
                </ul>
              </div>
            </div>

            {/* Warnings */}
            {result.warnings.length > 0 && (
              <Alert>
                <AlertDescription>
                  <strong>Please Note:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {result.warnings.map((warning, index) => (
                      <li key={index}>{warning}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleContactRequest}
                className="btn-primary py-3 px-8 text-base"
                style={{ 
                  minWidth: '450px',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}
              >
                <Mail className="h-4 w-4" style={{ marginRight: '8px' }} />
                Get a tailored valuation for my company
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Contact Modal */}
      {result && showContactModal && (
        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
          valuationData={{
            industry: `${inputs.sector} - ${inputs.subSector}`,
            revenue: inputs.annualRevenue!,
            ebitda: inputs.ebitda!,
            valuationRange: result.valuationRange,
            midpoint: result.discountedValuation
          }}
        />
      )}
    </div>
  );
};

export default ValuationCalculator;