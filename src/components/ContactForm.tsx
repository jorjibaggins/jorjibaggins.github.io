
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
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

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Prepare form data for web3forms (same as ContactModal)
      const emailData = {
        access_key: "74e8a036-1522-4498-944d-6893a47c2412",
        name: data.name.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || "Not provided",
        company: data.company?.trim() || "Not provided",
        message: data.message.trim(),
        subject: `New inquiry from ${data.name} - East Street Advisory`,
        from_name: "East Street Advisory Website",
        _template: "table"
      };

      console.log('ContactForm: Sending email data:', emailData);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailData),
      });

      console.log('ContactForm: Response status:', response.status);
      const result = await response.json();
      console.log('ContactForm: Response data:', result);
      
      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting East Street Advisory. We'll be in touch within 24 hours.",
        });
        
        // Reset form
        form.reset();
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
      
    } catch (error) {
      console.error('Contact form submission error:', error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again or contact us directly at contact@eaststreetadvisory.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form data-contact-form="true" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    name="name"
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
                    name="email"
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
                    name="phone"
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
                    name="company"
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
                  name="message"
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
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
