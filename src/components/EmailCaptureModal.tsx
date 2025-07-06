import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Mail, Download } from 'lucide-react';
import { z } from 'zod';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  valuationData: {
    industry: string;
    revenue: number;
    ebitda: number;
    valuationRange: { min: number; max: number };
    midpoint: number;
  };
}

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters')
});

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({ isOpen, onClose, valuationData }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-SG', {
      style: 'currency',
      currency: 'SGD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const validateForm = () => {
    try {
      emailSchema.parse({ email, name });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare email data for submission
      const emailData = {
        access_key: "74e8a036-1522-4498-944d-6893a47c2412",
        name: name.trim(),
        email: email.trim(),
        subject: `Business Valuation Results for ${name} - East Street Advisory`,
        from_name: "East Street Advisory Calculator",
        message: `
Business Valuation Calculator Results:

Name: ${name}
Email: ${email}
Industry: ${valuationData.industry}
Annual Revenue: ${formatCurrency(valuationData.revenue)}
EBITDA: ${formatCurrency(valuationData.ebitda)}
Estimated Valuation Range: ${formatCurrency(valuationData.valuationRange.min)} - ${formatCurrency(valuationData.valuationRange.max)}
Midpoint Valuation: ${formatCurrency(valuationData.midpoint)}

This lead was generated from the business valuation calculator on the website.
        `.trim(),
        _template: "table"
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Valuation Results Sent!",
          description: "Check your email for your detailed business valuation report. We'll also be in touch soon!",
        });
        
        // Reset form and close modal
        setEmail('');
        setName('');
        setErrors({});
        onClose();
      } else {
        throw new Error(result.message || 'Failed to send results');
      }
      
    } catch (error) {
      console.error('Email capture error:', error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your results. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = () => {
    // Track that user skipped email capture
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'calculator_email_skipped', {
        event_category: 'calculator',
        event_label: valuationData.industry
      });
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-eaststreet-darkest">
            <Mail className="h-5 w-5" />
            Get Your Detailed Valuation Report
          </DialogTitle>
          <DialogDescription>
            Enter your details to receive a detailed PDF report of your business valuation via email.
          </DialogDescription>
        </DialogHeader>

        {/* Valuation Summary */}
        <div className="bg-eaststreet-lightest p-4 rounded-lg mb-4">
          <h4 className="font-medium text-eaststreet-darkest mb-2">Your Valuation Summary</h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>Industry:</span>
              <span className="font-medium">{valuationData.industry}</span>
            </div>
            <div className="flex justify-between">
              <span>EBITDA:</span>
              <span className="font-medium">{formatCurrency(valuationData.ebitda)}</span>
            </div>
            <div className="flex justify-between">
              <span>Valuation Range:</span>
              <span className="font-medium">
                {formatCurrency(valuationData.valuationRange.min)} - {formatCurrency(valuationData.valuationRange.max)}
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="modal-name">Full Name *</Label>
            <Input
              id="modal-name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-email">Email Address *</Label>
            <Input
              id="modal-email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-start gap-2">
              <Download className="h-4 w-4 mt-0.5 text-blue-600" />
              <div className="text-sm">
                <p className="font-medium text-blue-900">What you'll receive:</p>
                <ul className="mt-1 space-y-1 text-blue-800">
                  <li>• Detailed valuation breakdown PDF</li>
                  <li>• Industry comparison analysis</li>
                  <li>• Tips to maximize your business value</li>
                  <li>• Next steps for selling your company</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Send My Report
                </>
              )}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={handleSkip}
              disabled={isSubmitting}
              className="flex-1"
            >
              Skip for Now
            </Button>
          </div>

          <p className="text-xs text-gray-600 text-center">
            We respect your privacy. Your information will only be used to send your valuation report and provide relevant business advisory services.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmailCaptureModal;