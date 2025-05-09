
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <main className="min-h-screen pt-32">
      {/* Page Header */}
      <section className="bg-eaststreet-beige py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-eaststreet-brown mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-eaststreet-gray max-w-4xl mx-auto">
            Ready to discuss your business goals? Reach out to East Street Advisory for a confidential consultation.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <SectionHeading title="Get in Touch" />
              <p className="mb-8 text-eaststreet-gray">
                Our team is ready to discuss your business needs. Whether you're considering selling your business, 
                looking for acquisition targets, or need strategic advice, we're here to help.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="contact-item">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-eaststreet-beige">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-eaststreet-brown">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-eaststreet-brown">Address</h3>
                    <address className="not-italic text-eaststreet-gray">
                      1 Raffles Place, #20-01<br />
                      Singapore 048616
                    </address>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-eaststreet-beige">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-eaststreet-brown">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-eaststreet-brown">Phone</h3>
                    <p className="text-eaststreet-gray">+65 6123 4567</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-eaststreet-beige">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-eaststreet-brown">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-eaststreet-brown">Email</h3>
                    <p className="text-eaststreet-gray">info@eaststreetadvisory.sg</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-eaststreet-beige">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-eaststreet-brown">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-eaststreet-brown">Office Hours</h3>
                    <p className="text-eaststreet-gray">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Google Maps Placeholder */}
              <div className="rounded-lg overflow-hidden h-64 bg-gray-300 flex items-center justify-center">
                <p className="text-eaststreet-gray text-center px-4">
                  Interactive map would be embedded here<br />
                  (Google Maps integration)
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <SectionHeading title="Send a Message" />
              <p className="mb-6 text-eaststreet-gray">
                Please fill out the form below and our team will get back to you within 24 hours. All inquiries are treated with strict confidentiality.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-eaststreet-cream">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Frequently Asked Questions" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-eaststreet-brown mb-3">How long does an M&A process typically take?</h3>
              <p className="text-eaststreet-gray">
                While every transaction is unique, a typical M&A process from initial engagement to closing takes between 6-9 months. Complex transactions may take longer.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-eaststreet-brown mb-3">What size businesses do you work with?</h3>
              <p className="text-eaststreet-gray">
                We specialize in SMEs with annual revenues between S$1 million and S$100 million across various industries in Singapore and Southeast Asia.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-eaststreet-brown mb-3">How are your fees structured?</h3>
              <p className="text-eaststreet-gray">
                Our fee structure typically includes a modest retainer fee and a success fee based on the final transaction value, ensuring our incentives are aligned with maximizing value for our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-eaststreet-brown mb-3">Is my information kept confidential?</h3>
              <p className="text-eaststreet-gray">
                Absolutely. We maintain strict confidentiality throughout the process. We use non-disclosure agreements and anonymous profiles when approaching potential buyers or sellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
