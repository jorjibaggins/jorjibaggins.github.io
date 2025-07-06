import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Download, Mail } from 'lucide-react';
import EmailCaptureModal from './EmailCaptureModal';

import { industryMultiples } from '@/utils/industryMultiples';
import { calculateValuation, formatCurrency, formatNumber } from '@/utils/valuationCalculator';
import { validateCalculatorForm, formatCurrencyInput, parseCurrencyInput } from '@/utils/inputValidation';
import type { CalculatorInputs, ValuationResult } from '@/utils/valuationCalculator';

const ValuationCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<Partial<CalculatorInputs>>({
    industry: '',
    annualRevenue: undefined,
    netProfitBeforeTax: undefined,
    depreciationAmortisation: undefined
  });
  
  const [result, setResult] = useState<ValuationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [crossFieldErrors, setCrossFieldErrors] = useState<string[]>([]);
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Format currency display values
  const [displayValues, setDisplayValues] = useState({
    annualRevenue: '',
    netProfitBeforeTax: '',
    depreciationAmortisation: ''
  });

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    if (field === 'industry') {
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
          event_label: inputs.industry,
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
      industry: '',
      annualRevenue: undefined,
      netProfitBeforeTax: undefined,
      depreciationAmortisation: undefined
    });
    setDisplayValues({
      annualRevenue: '',
      netProfitBeforeTax: '',
      depreciationAmortisation: ''
    });
    setResult(null);
    setErrors({});
    setCrossFieldErrors([]);
    setShowEmailModal(false);
  };

  const handleGetReport = () => {
    setShowEmailModal(true);
    
    // Track email capture modal opened
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'email_capture_opened', {
        event_category: 'calculator',
        event_label: inputs.industry
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
          {/* Industry Selection */}
          <div className="space-y-2">
            <Label htmlFor="industry" className="text-sm font-medium text-eaststreet-darkest">
              Industry *
            </Label>
            <Select value={inputs.industry} onValueChange={(value) => handleInputChange('industry', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                {industryMultiples.map((industry) => (
                  <SelectItem key={industry.industry} value={industry.industry}>
                    {industry.industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.industry && (
              <p className="text-sm text-red-600">{errors.industry}</p>
            )}
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

            {/* Net Profit Before Tax */}
            <div className="space-y-2">
              <Label htmlFor="netProfit" className="text-sm font-medium text-eaststreet-darkest">
                Net Profit Before Tax (SGD) *
              </Label>
              <Input
                id="netProfit"
                type="text"
                placeholder="e.g., 150000"
                value={displayValues.netProfitBeforeTax}
                onChange={(e) => handleInputChange('netProfitBeforeTax', e.target.value)}
                className="w-full"
              />
              {errors.netProfitBeforeTax && (
                <p className="text-sm text-red-600">{errors.netProfitBeforeTax}</p>
              )}
            </div>

            {/* Depreciation & Amortisation */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="depreciation" className="text-sm font-medium text-eaststreet-darkest">
                Depreciation & Amortisation (SGD) *
              </Label>
              <Input
                id="depreciation"
                type="text"
                placeholder="e.g., 25000"
                value={displayValues.depreciationAmortisation}
                onChange={(e) => handleInputChange('depreciationAmortisation', e.target.value)}
                className="w-full md:w-1/2"
              />
              {errors.depreciationAmortisation && (
                <p className="text-sm text-red-600">{errors.depreciationAmortisation}</p>
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
              className="btn-primary flex-1 md:flex-none"
            >
              {isCalculating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Calculating...
                </>
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
              <p className="text-sm text-eaststreet-dark mt-2">
                Midpoint: {formatCurrency(result.discountedValuation)}
              </p>
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
                    <span>Discount Applied (10%):</span>
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
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleGetReport}
                className="btn-primary flex-1"
              >
                <Download className="mr-2 h-4 w-4" />
                Get Detailed Report
              </Button>
              
              <Button
                onClick={() => {
                  const element = document.querySelector('#valuation-form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline"
                className="flex-1"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact East Street Advisory
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Email Capture Modal */}
      {result && showEmailModal && (
        <EmailCaptureModal
          isOpen={showEmailModal}
          onClose={() => setShowEmailModal(false)}
          valuationData={{
            industry: inputs.industry!,
            revenue: inputs.annualRevenue!,
            ebitda: result.ebitda,
            valuationRange: result.valuationRange,
            midpoint: result.discountedValuation
          }}
        />
      )}
    </div>
  );
};

export default ValuationCalculator;