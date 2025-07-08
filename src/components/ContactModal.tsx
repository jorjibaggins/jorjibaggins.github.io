import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Mail, Phone } from 'lucide-react';
import { z } from 'zod';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  valuationData: {
    industry: string;
    revenue: number;
    netProfitBeforeTax: number;
    depreciationAmortisation: number;
    ebitda: number;
    valuationRange: { min: number; max: number };
    midpoint: number;
  };
}

const contactSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  whatsapp: z.string().min(8, 'Please enter a valid WhatsApp number')
});

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, valuationData }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
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
      contactSchema.parse({ email, name, whatsapp });
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
        subject: `Valuation Consultation Request from ${name} - East Street Advisory`,
        from_name: "East Street Advisory Calculator",
        message: `
Valuation Consultation Request:

CONTACT DETAILS:
Name: ${name}
Email: ${email}
WhatsApp: ${whatsapp}

CALCULATOR INPUTS:
Industry: ${valuationData.industry}
Annual Revenue: ${formatCurrency(valuationData.revenue)}
Net Profit Before Tax: ${formatCurrency(valuationData.netProfitBeforeTax)}
Depreciation & Amortisation: ${formatCurrency(valuationData.depreciationAmortisation)}

CALCULATED RESULTS:
EBITDA: ${formatCurrency(valuationData.ebitda)}
Estimated Valuation Range: ${formatCurrency(valuationData.valuationRange.min)} - ${formatCurrency(valuationData.valuationRange.max)}

This lead was generated from the business valuation calculator on the website.
The client is requesting a consultation for professional business valuation services.
        `.trim(),
        _template: "table"
      };

      console.log('ContactModal: Sending email data:', emailData);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailData),
      });

      console.log('ContactModal: Response status:', response.status);
      const result = await response.json();
      console.log('ContactModal: Response data:', result);
      
      if (result.success) {
        toast({
          title: "Contact Request Sent!",
          description: "We'll contact you shortly for a professional valuation consultation.",
        });
        
        // Reset form and close modal
        setEmail('');
        setName('');
        setWhatsapp('');
        setErrors({});
        onClose();
      } else {
        throw new Error(result.message || 'Failed to send contact request');
      }
      
    } catch (error) {
      console.error('Contact submission error:', error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your contact request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-eaststreet-darkest">
            <Mail className="h-5 w-5" />
            Contact East Street Advisory
          </DialogTitle>
          <DialogDescription>
            Get professional consultation for your business valuation. We'll contact you to discuss your specific needs.
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

          <div className="space-y-2">
            <Label htmlFor="modal-whatsapp">WhatsApp Number *</Label>
            <Input
              id="modal-whatsapp"
              type="tel"
              placeholder="+65 9xxx xxxx"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className={errors.whatsapp ? 'border-red-500' : ''}
            />
            {errors.whatsapp && (
              <p className="text-sm text-red-600">{errors.whatsapp}</p>
            )}
          </div>

          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-blue-600" />
              <div className="text-sm">
                <p className="font-medium text-blue-900">What happens next:</p>
                <ul className="mt-1 space-y-1 text-blue-800">
                  <li>• We'll contact you within 24 hours</li>
                  <li>• Professional valuation consultation</li>
                  <li>• Discuss your specific business needs</li>
                  <li>• Provide tailored advice for your situation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1 px-6"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                whiteSpace: 'nowrap'
              }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4" style={{ marginRight: '8px' }} />
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4" style={{ marginRight: '8px' }} />
                  Request Consultation
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-gray-600 text-center">
            We respect your privacy. Your information will only be used to contact you about business valuation services.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;