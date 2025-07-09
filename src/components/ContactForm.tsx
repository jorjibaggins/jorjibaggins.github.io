
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

  // Form submission is now handled by the HTML script in onRenderHtml.tsx
  // This prevents the React form from submitting and interfering with the HTML script
  const onSubmit = () => {
    // No-op - form submission is handled by HTML script
  };

  return (
    <Form {...form}>
      <form data-contact-form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            className="btn-primary w-full flex justify-center items-center"
          >
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
