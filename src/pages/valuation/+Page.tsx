import React from 'react'
import Layout from '../../components/Layout'
import ValuationCalculator from '@/components/ValuationCalculator'
import SectionHeading from '@/components/SectionHeading'
import ContactForm from '@/components/ContactForm'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import '../../index.css'

function Page() {
  return (
    <Layout>
      <main className="min-h-screen pt-32">
        {/* Hero Section */}
        <section className="bg-eaststreet-lightest py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl text-eaststreet-darkest mb-4 font-serif">
                Sell Your Company in Singapore
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-eaststreet-brown mb-6">
                  Free & Instant Business Valuation Estimate
                </h2>
                <p className="text-xl text-eaststreet-dark mb-8">
                  Discover what your business is worth with our instant valuation calculator. Get an estimated business value range in minutes, based on industry-specific multiples used by Singapore business brokers and M&A professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#valuation-calculator" className="btn-primary">
                    Calculate My Business Value
                  </a>
                  <a href="#how-it-works" className="btn-secondary">How It Works</a>
                </div>
                <p className="text-sm text-eaststreet-dark mt-4">
                  ✓ Free valuation calculator ✓ Instant results ✓ Singapore-specific data
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/Drone Photo - Singapore 1.png" 
                  alt="Singapore cityscape - strategic location for business sales" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-eaststreet-primary rounded-lg opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Why Know Your Business Value Before Selling?" centered={true} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="service-card">
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-eaststreet-lightest">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eaststreet-darkest">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Maximize Your Sale Price</h3>
                <p className="text-eaststreet-dark">
                  Understanding your business value helps you negotiate from a position of strength and avoid underselling your company in Singapore's competitive market.
                </p>
              </div>
              
              <div className="service-card">
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-eaststreet-lightest">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eaststreet-darkest">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                </div>
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Strategic Exit Planning</h3>
                <p className="text-eaststreet-dark">
                  Plan your exit strategy with confidence. Know if it's the right time to sell your company or if you should focus on increasing value first.
                </p>
              </div>
              
              <div className="service-card">
                <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-eaststreet-lightest">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-eaststreet-darkest">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-xl text-eaststreet-darkest mb-3 font-serif">Attract Quality Buyers</h3>
                <p className="text-eaststreet-dark">
                  Professional valuation data helps attract serious buyers and streamlines the due diligence process when selling your Singapore business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="valuation-calculator" className="py-16 bg-eaststreet-lightest scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Free Business Valuation Calculator" centered={true} />
            <p className="text-center text-eaststreet-dark mb-12 max-w-3xl mx-auto">
              Calculate your business value using the same methods employed by Singapore M&A professionals. 
              Our calculator uses industry-specific EBITDA multiples to provide an estimated valuation range.
            </p>
            <ValuationCalculator />
            
            {/* Disclaimer */}
            <div className="mt-8">
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong>Disclaimer:</strong> This business valuation calculator is for information purposes only. East Street Advisory assumes no responsibility nor liabilities for any consequences from the calculated results and provides no assurances of the applicability or accuracy of the valuation results for your company. East Street Advisory has no obligation to defend or represent any part of the assumptions or calculations used or results from the business valuation calculator, and should be taken "as is" without warranty of any kind. The results of the valuation calculator do not serve as an independent qualified appraisal or valuation opinion.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-white scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="How Our Business Valuation Calculator Works" centered={true} />
            
            <div className="max-w-4xl mx-auto mt-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Choose Your Company's Sector</h3>
                    <p className="text-eaststreet-dark">
                      Choose the sector and sub-sector that your company operates in. If none of the predefined sub-sectors describe your business exactly, choose the "General" sub-sector.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Enter Your Business Financials</h3>
                    <p className="text-eaststreet-dark">
                      Input your annual revenue and EBITDA. These are the key metrics used in Singapore business valuations. If you don't know your company's EBITDA, you can approximate it using Net Operating Profit Before Tax
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Apply Industry Multiple</h3>
                    <p className="text-eaststreet-dark">
                      Your EBITDA is multiplied by an industry-specific multiple based on recent SGX market data. Technology companies typically get higher multiples than retail businesses.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-eaststreet-darkest text-white flex items-center justify-center text-lg font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl text-eaststreet-darkest mb-2 font-serif">Get Your Valuation Range</h3>
                    <p className="text-eaststreet-dark">
                      We apply an illiquidity discount and provide a valuation range to account for market conditions and business-specific factors when selling your company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="valuation-form" className="py-16 bg-eaststreet-lightest scroll-mt-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl text-eaststreet-darkest mb-6 font-serif">
                Ready to Sell Your Company in Singapore?
              </h2>
              <p className="text-xl text-eaststreet-dark mb-8">
                Our calculator provides a starting point, but every business is unique. Get a professional valuation and personalized advice from Singapore's leading M&A advisors.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-left">
                  <h3 className="text-xl text-eaststreet-darkest font-serif">Why Choose East Street Advisory?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-eaststreet-primary mr-2">✓</span>
                      <span>Specialist Singapore M&A expertise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eaststreet-primary mr-2">✓</span>
                      <span>Proven track record of successful exits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eaststreet-primary mr-2">✓</span>
                      <span>Access to qualified buyer network</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-eaststreet-primary mr-2">✓</span>
                      <span>Confidential and professional service</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl text-eaststreet-darkest mb-4 font-serif">Get Professional Help</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Frequently Asked Questions" centered={true} />
            
            <div className="max-w-4xl mx-auto mt-12">
              <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left text-lg text-eaststreet-darkest font-serif hover:no-underline">
                    How accurate is this business valuation calculator?
                  </AccordionTrigger>
                  <AccordionContent className="text-eaststreet-dark pb-4">
                    Our calculator provides a market-based estimate using industry multiples sourced from SGX market data. While more accurate than generic online calculators, actual valuations can vary based on specific factors like market conditions, business quality, and buyer interest.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left text-lg text-eaststreet-darkest font-serif hover:no-underline">
                    What makes Singapore businesses valuable to buyers?
                  </AccordionTrigger>
                  <AccordionContent className="text-eaststreet-dark pb-4">
                    Singapore businesses are attractive due to the country's strategic location, stable economy, skilled workforce, and business-friendly environment. Technology and financial services companies typically command higher multiples in the Singapore market.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left text-lg text-eaststreet-darkest font-serif hover:no-underline">
                    How long does it take to sell a business in Singapore?
                  </AccordionTrigger>
                  <AccordionContent className="text-eaststreet-dark pb-4">
                    The timeline to sell your company in Singapore typically ranges from 6-12 months, depending on business size, industry, and market conditions. Proper preparation and professional guidance can significantly speed up the process.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left text-lg text-eaststreet-darkest font-serif hover:no-underline">
                    What's the difference between this calculator and professional valuation?
                  </AccordionTrigger>
                  <AccordionContent className="text-eaststreet-dark pb-4">
                    Our calculator uses standardized industry multiples, while professional valuations consider specific factors like market position, growth prospects, management quality, and current market conditions. Professional valuations are essential for actual sale negotiations.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left text-lg text-eaststreet-darkest font-serif hover:no-underline">
                    Do I need to pay tax when selling my business in Singapore?
                  </AccordionTrigger>
                  <AccordionContent className="text-eaststreet-dark pb-4">
                    Singapore generally doesn't impose capital gains tax on business sales, but there may be other tax implications. We recommend consulting with a tax professional to understand your specific situation when selling your company.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg px-4">
                  <AccordionTrigger className="text-left text-lg text-eaststreet-darkest font-serif hover:no-underline">
                    How do I find buyers for my Singapore business?
                  </AccordionTrigger>
                  <AccordionContent className="text-eaststreet-dark pb-4">
                    Finding qualified buyers requires market knowledge, networking, and professional marketing. East Street Advisory has an extensive network of local and international buyers actively seeking Singapore businesses to acquire.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export { Page };