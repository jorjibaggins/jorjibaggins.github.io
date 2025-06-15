
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';

const Valuation = () => {
  return (
    <main className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="bg-eaststreet-lightest py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl text-eaststreet-darkest mb-6 font-serif">
                Thinking of Selling Your Business?
              </h1>
              <p className="text-xl text-eaststreet-dark mb-8">
                Get a professional, confidential valuation of your business completely free of charge, with no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#valuation-form" className="btn-primary">Get Free Valuation</a>
                <Link to="/services" className="btn-secondary">Our Services</Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/272bd5d9-14bc-4ae8-867a-1f28040eaf3e.png" 
                alt="Business Valuation" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Get a Valuation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Why Get a Professional Valuation?" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="service-card">
              <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-eaststreet-lightest">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eaststreet-darkest">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Understand Your True Worth</h3>
              <p className="text-eaststreet-dark">
                Know the real market value of your business based on industry-specific valuation methodologies.
              </p>
            </div>
            
            <div className="service-card">
              <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-eaststreet-lightest">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eaststreet-darkest">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Make Strategic Decisions</h3>
              <p className="text-eaststreet-dark">
                Use your valuation as a foundation for strategic planning, whether you're selling now or preparing for the future.
              </p>
            </div>
            
            <div className="service-card">
              <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-eaststreet-lightest">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eaststreet-darkest">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                </svg>
              </div>
              <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Strengthen Your Position</h3>
              <p className="text-eaststreet-dark">
                Enter negotiations with confidence, armed with professional insights about your business's true market value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Valuation Process */}
      <section className="py-16 bg-eaststreet-lightest">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Our Valuation Process" centered={true} />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">1</div>
                </div>
                <div>
                  <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Initial Consultation</h3>
                  <p className="text-eaststreet-dark">
                    Complete the form below to schedule a confidential discussion about your business. We'll gather basic information to understand your goals and timeline.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">2</div>
                </div>
                <div>
                  <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Financial Analysis</h3>
                  <p className="text-eaststreet-dark">
                    Our team will review your financial records with absolute confidentiality, analyzing revenue trends, profit margins, and growth potential.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">3</div>
                </div>
                <div>
                  <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Market Assessment</h3>
                  <p className="text-eaststreet-dark">
                    We'll evaluate current market conditions and use industry-specific valuation methodologies to size your business and provide contextual benchmarks.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">4</div>
                </div>
                <div>
                  <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Valuation Report</h3>
                  <p className="text-eaststreet-dark">
                    Receive a comprehensive yet clear valuation report with our expert assessment and actionable recommendations for maximizing your business value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - COMMENTED OUT */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="What Our Clients Say" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="testimonial-card">
              <p className="italic mb-4 text-eaststreet-gray">
                "East Street's valuation was eye-opening. Their detailed analysis helped us understand our company's true worth and gave us leverage during negotiations. We sold for 30% more than we initially expected."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-eaststreet-beige rounded-full flex items-center justify-center text-eaststreet-brown font-bold">JL</div>
                <div>
                  <h4 className="font-medium">James Lee</h4>
                  <p className="text-sm text-eaststreet-gray">Former CEO</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <p className="italic mb-4 text-eaststreet-gray">
                "Even though we weren't ready to sell immediately, the valuation from East Street Advisory provided invaluable insights into our business strengths and areas for improvement. It's become the foundation of our 5-year growth plan."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-eaststreet-beige rounded-full flex items-center justify-center text-eaststreet-brown font-bold">ST</div>
                <div>
                  <h4 className="font-medium">Sarah Tan</h4>
                  <p className="text-sm text-eaststreet-gray">Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Valuation Form Section */}
      <section id="valuation-form" className="py-16 bg-eaststreet-lightest scroll-mt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Get Your Free Business Valuation" centered={true} />
            <p className="text-center text-eaststreet-dark mb-10 max-w-2xl mx-auto">
              Fill out the form below to request your complimentary business valuation. All information provided is strictly confidential.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Frequently Asked Questions" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="bg-eaststreet-lightest p-6 rounded-lg">
              <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">How long does a business valuation take?</h3>
              <p className="text-eaststreet-dark">
                A comprehensive valuation typically takes 1-2 weeks, depending on the complexity of your business and the availability of financial records.
              </p>
            </div>
            
            <div className="bg-eaststreet-lightest p-6 rounded-lg">
              <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Is the valuation really free?</h3>
              <p className="text-eaststreet-dark">
                Yes, our initial valuation service is completely free and comes with no obligation to engage our services further. Should you wish to get a detailed valuation report, we will provide a quotation based on the size and complexity of your company.
              </p>
            </div>
            
            <div className="bg-eaststreet-lightest p-6 rounded-lg">
              <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">What information will you need from me?</h3>
              <p className="text-eaststreet-dark">
                We'll need financial statements from the past 3-5 years, information about your assets and liabilities, and details about your operations and market position.
              </p>
            </div>
            
            <div className="bg-eaststreet-lightest p-6 rounded-lg">
              <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">How confidential is this process?</h3>
              <p className="text-eaststreet-dark">
                Extremely confidential. We sign NDAs with clients and have strict protocols to protect your sensitive business information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaSection 
        title="Ready to Discover Your Business's True Value?" 
        description="Take the first step toward understanding what your business is really worth in today's market. Our expert team is ready to help." 
        buttonText="Get Free Valuation" 
        buttonLink="#valuation-form" 
      />
    </main>
  );
};

export default Valuation;
