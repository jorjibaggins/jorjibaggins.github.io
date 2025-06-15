
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';
import { Helmet } from 'react-helmet-async';

const Valuation = () => {
  return (
    <>
      <Helmet>
        <title>Business Valuation Singapore | Free Professional Valuation | East Street Advisory</title>
        <meta name="description" content="Get a free professional business valuation in Singapore. Expert business valuation services from East Street Advisory. Accurate, confidential valuations for SMEs looking to sell or understand their business worth." />
        <meta name="keywords" content="business valuation singapore, singapore business valuation, business valuation services singapore, free business valuation, SME valuation singapore, company valuation singapore, business worth singapore" />
        <meta property="og:title" content="Business Valuation Singapore | Free Professional Valuation" />
        <meta property="og:description" content="Get a free professional business valuation in Singapore. Expert business valuation services from East Street Advisory." />
        <link rel="canonical" href="https://eaststreetadvisory.sg/valuation" />
      </Helmet>
      
      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="bg-eaststreet-lightest py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl text-eaststreet-darkest mb-6 font-serif">
                  Business Valuation Singapore: Free Professional Assessment
                </h1>
                <p className="text-xl text-eaststreet-dark mb-8">
                  Get a comprehensive business valuation in Singapore from certified professionals. Our free business valuation service helps SME owners understand their company's true market value with no obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#valuation-form" className="btn-primary">Get Free Business Valuation</a>
                  <Link to="/services" className="btn-secondary">Our Valuation Services</Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/272bd5d9-14bc-4ae8-867a-1f28040eaf3e.png" 
                  alt="Business Valuation Singapore - Professional valuation services" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Get a Business Valuation in Singapore */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Why Get a Professional Business Valuation in Singapore?" centered={true} />
            <p className="text-center text-eaststreet-dark mb-12 max-w-4xl mx-auto">
              Singapore's dynamic business environment requires accurate valuation methods. Our business valuation services in Singapore help you make informed decisions about your company's future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="service-card">
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-eaststreet-lightest">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eaststreet-darkest">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Accurate Singapore Market Valuation</h3>
                <p className="text-eaststreet-dark">
                  Understand your business's true market value in Singapore's competitive landscape using industry-specific valuation methodologies tailored to local market conditions.
                </p>
              </div>
              
              <div className="service-card">
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-eaststreet-lightest">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eaststreet-darkest">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Strategic Business Planning</h3>
                <p className="text-eaststreet-dark">
                  Use professional business valuation insights for strategic planning in Singapore's market, whether you're selling, expanding, or preparing for future growth opportunities.
                </p>
              </div>
              
              <div className="service-card">
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-eaststreet-lightest">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eaststreet-darkest">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                  </svg>
                </div>
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Enhanced Negotiation Position</h3>
                <p className="text-eaststreet-dark">
                  Enter M&A negotiations with confidence using professional business valuation data that strengthens your position in Singapore's competitive business market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Singapore Business Valuation Process */}
        <section className="py-16 bg-eaststreet-lightest">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Our Singapore Business Valuation Process" centered={true} />
            <p className="text-center text-eaststreet-dark mb-12 max-w-4xl mx-auto">
              Our structured approach to business valuation in Singapore ensures accurate, reliable results that reflect current market conditions and industry standards.
            </p>
            
            <div className="max-w-4xl mx-auto mt-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Initial Business Valuation Consultation</h3>
                    <p className="text-eaststreet-dark">
                      Schedule a confidential consultation to discuss your Singapore business valuation needs. We'll understand your goals, timeline, and specific requirements for the valuation process.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Comprehensive Financial Analysis</h3>
                    <p className="text-eaststreet-dark">
                      Our Singapore-based valuation experts analyze your financial records with complete confidentiality, reviewing revenue trends, profit margins, and growth potential within the local market context.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Singapore Market Assessment</h3>
                    <p className="text-eaststreet-dark">
                      We evaluate current Singapore market conditions and apply industry-specific valuation methodologies to benchmark your business against comparable companies in the local market.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Professional Valuation Report</h3>
                    <p className="text-eaststreet-dark">
                      Receive a comprehensive business valuation report with expert assessment and actionable recommendations for maximizing your business value in Singapore's market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Valuation Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Business Valuation Methods We Use in Singapore" centered={true} />
            <p className="text-center text-eaststreet-dark mb-12 max-w-4xl mx-auto">
              Our Singapore business valuation services employ multiple internationally recognized methodologies to ensure accurate and defensible valuations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-eaststreet-lightest p-6 rounded-lg">
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Asset-Based Valuation</h3>
                <p className="text-eaststreet-dark">
                  Comprehensive assessment of your business assets and liabilities, particularly relevant for asset-heavy businesses in Singapore's manufacturing and logistics sectors.
                </p>
              </div>
              
              <div className="bg-eaststreet-lightest p-6 rounded-lg">
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Income-Based Valuation</h3>
                <p className="text-eaststreet-dark">
                  Discounted cash flow analysis considering Singapore's business environment, tax implications, and future earning potential of your company.
                </p>
              </div>
              
              <div className="bg-eaststreet-lightest p-6 rounded-lg">
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Market-Based Valuation</h3>
                <p className="text-eaststreet-dark">
                  Comparative analysis using recent transactions and market multiples from similar businesses in Singapore and Southeast Asia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Free Business Valuation Form */}
        <section id="valuation-form" className="py-16 bg-eaststreet-lightest scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <SectionHeading title="Get Your Free Business Valuation in Singapore" centered={true} />
              <p className="text-center text-eaststreet-dark mb-10 max-w-2xl mx-auto">
                Request your complimentary business valuation from Singapore's trusted valuation experts. All information is strictly confidential and there's no obligation to proceed.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Business Valuation FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Business Valuation Singapore - Frequently Asked Questions" centered={true} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
              <div className="bg-eaststreet-lightest p-6 rounded-lg">
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">How long does business valuation take in Singapore?</h3>
                <p className="text-eaststreet-dark">
                  A comprehensive business valuation in Singapore typically takes 1-2 weeks, depending on your business complexity and the availability of financial records. Our team works efficiently to deliver accurate results.
                </p>
              </div>
              
              <div className="bg-eaststreet-lightest p-6 rounded-lg">
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Is the business valuation service really free?</h3>
                <p className="text-eaststreet-dark">
                  Yes, our initial business valuation assessment is completely free with no obligation. For detailed valuation reports, we provide transparent quotations based on your company's size and complexity.
                </p>
              </div>
              
              <div className="bg-eaststreet-lightest p-6 rounded-lg">
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">What documents do you need for business valuation?</h3>
                <p className="text-eaststreet-dark">
                  We typically require financial statements from the past 3-5 years, information about assets and liabilities, operational details, and market position data relevant to Singapore's business environment.
                </p>
              </div>
              
              <div className="bg-eaststreet-lightest p-6 rounded-lg">
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">How confidential is the valuation process?</h3>
                <p className="text-eaststreet-dark">
                  Extremely confidential. We sign NDAs with all clients and maintain strict protocols to protect your sensitive business information throughout the valuation process.
                </p>
              </div>
              
              <div className="bg-eaststreet-lightest p-6 rounded-lg">
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Do you value all types of businesses in Singapore?</h3>
                <p className="text-eaststreet-dark">
                  We provide business valuations for various industries in Singapore including technology, healthcare, retail, F&B, professional services, and manufacturing sectors.
                </p>
              </div>
              
              <div className="bg-eaststreet-lightest p-6 rounded-lg">
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">How accurate are your business valuations?</h3>
                <p className="text-eaststreet-dark">
                  Our valuations use internationally recognized methodologies adapted for Singapore's market conditions, ensuring high accuracy and defensibility for your business decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CtaSection 
          title="Ready to Discover Your Singapore Business's True Value?" 
          description="Take the first step toward understanding what your business is worth in Singapore's dynamic market. Our expert valuation team is ready to help." 
          buttonText="Get Free Business Valuation" 
          buttonLink="#valuation-form" 
        />
      </main>
    </>
  );
};

export default Valuation;
