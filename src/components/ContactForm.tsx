
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// Define form validation schema with better validation
const formSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(50, { message: "Name must be less than 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name can only contain letters and spaces." }),
  email: z.string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must be less than 100 characters." }),
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[\+]?[0-9\s\-\(\)]{7,15}$/.test(val), {
      message: "Please enter a valid phone number."
    }),
  company: z.string()
    .optional()
    .refine((val) => !val || val.length <= 100, {
      message: "Company name must be less than 100 characters."
    }),
  message: z.string()
    .min(20, { message: "Message must be at least 20 characters." })
    .max(1000, { message: "Message must be less than 1000 characters." })
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }
  });

  // Form submission with better error handling
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
  
    try {
      // Add delay to avoid being flagged as spam
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "74e8a036-1522-4498-944d-6893a47c2412",
          subject: `New inquiry from ${data.name} - East Street Advisory`,
          from_name: "East Street Advisory Website",
          to: "contact@eaststreetadvisory.com",
          botcheck: "",
          name: data.name.trim(),
          email: data.email.trim(),
          phone: data.phone?.trim() || "Not provided",
          company: data.company?.trim() || "Not provided",
          message: data.message.trim(),
          // Additional fields to help with delivery
          _subject: `New inquiry from ${data.name} - East Street Advisory`,
          _autoresponse: "Thank you for contacting East Street Advisory. We have received your message and will respond within 24 hours.",
          _template: "table"
        }),
      });
  
      const result = await response.json();
      
      if (!response.ok || !result.success) {
        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }
  
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting East Street Advisory. We'll be in touch within 24 hours.",
      });
      
      form.reset();
    } catch (err) {
      console.error('Form submission error:', err);
      
      // Provide more specific error messages
      let errorMessage = "There was a problem sending your message. Please try again later.";
      
      if (err instanceof Error) {
        if (err.message.includes('spam')) {
          errorMessage = "Your message was flagged by our spam filter. Please try rewording your message or contact us directly at contact@eaststreetadvisory.com";
        } else if (err.message.includes('network') || err.message.includes('fetch')) {
          errorMessage = "Network error. Please check your connection and try again.";
        }
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot field for spam protection */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-eaststreet-brown">Full Name*</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eaststreet-gold focus:border-transparent"
                    placeholder="Your Name" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-eaststreet-brown">Email Address*</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="email" 
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eaststreet-gold focus:border-transparent"
                    placeholder="your.email@example.com" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-eaststreet-brown">Phone Number</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="tel"
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eaststreet-gold focus:border-transparent"
                    placeholder="+65 1234 5678" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-eaststreet-brown">Company Name</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eaststreet-gold focus:border-transparent"
                    placeholder="Your Company" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-eaststreet-brown">Message*</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  rows={5}
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eaststreet-gold focus:border-transparent"
                  placeholder="Please describe how we can help with your business needs..." 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full flex justify-center items-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
