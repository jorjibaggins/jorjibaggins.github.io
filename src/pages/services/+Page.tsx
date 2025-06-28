export { Page }

import React from 'react'
import Layout from '../../components/Layout'
import SectionHeading from '@/components/SectionHeading'
import CtaSection from '@/components/CtaSection'
import '../../index.css'

function Page() {
  return (
    <Layout>
      <main className="min-h-screen pt-32">
        {/* Page Header */}
        <section className="bg-eaststreet-beige py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-eaststreet-brown mb-6">
              Our Services
            </h1>
            <p className="text-xl text-eaststreet-gray max-w-4xl mx-auto">
              East Street Advisory offers comprehensive M&A and business advisory services tailored to the unique needs of Singapore's SME business owners.
            </p>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16" id="ma-advisory">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <SectionHeading title="M&A Advisory" />
                <p className="mb-6 text-eaststreet-gray">
                  Our M&A advisory services guide businesses through the complex landscape of mergers and acquisitions, ensuring optimal outcomes whether you're buying, selling, or merging.
                </p>
                <ul className="triangle-bullet space-y-3 mb-6">
                  <li>Professional guidance and support throughout the entire sale process</li>
                  <li>Buyer identification and outreach</li>
                  <li>Negotiation support and deal structuring</li>
                  <li>Due diligence coordination and management</li>
                </ul>
                <p className="text-eaststreet-gray">
                  We leverage our extensive network and industry knowledge to identify ideal opportunities that align with your strategic goals and maximize transaction value.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b" 
                  alt="Business professionals in a meeting discussing M&A strategy"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-eaststreet-beige rounded-lg -z-10"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24" id="business-valuation">
              <div className="order-1 md:order-2">
                <SectionHeading title="Business Valuation" />
                <p className="mb-6 text-eaststreet-gray">
                  Accurate business valuation is crucial for any transaction or strategic planning. Our valuation services provide clear, defensible assessments of your business's worth.
                </p>
                <ul className="triangle-bullet space-y-3 mb-6">
                  <li>Comprehensive financial analysis and modeling</li>
                  <li>Industry-specific valuation methodologies</li>
                  <li>Experienced valuation experts</li>
                </ul>
                <p className="text-eaststreet-gray">
                  Our valuations consider both quantitative financial data and qualitative factors specific to your business and industry to deliver accurate, reliable assessments.
                </p>
              </div>
              <div className="relative order-2 md:order-1">
                <img
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11" 
                  alt="Financial documents and business valuation charts"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-eaststreet-beige rounded-lg -z-10"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24" id="exit-planning">
              <div>
                <SectionHeading title="Exit Strategy Planning" />
                <p className="mb-6 text-eaststreet-gray">
                  Proper exit planning can significantly increase business value and ensure a smooth transition. We help business owners prepare for successful exits, whether immediate or years in advance.
                </p>
                <ul className="triangle-bullet space-y-3 mb-6">
                  <li>Customized exit timeline development</li>
                  <li>Support pre-transaction readiness and positioning for exit</li>
                  <li>Business value enhancement strategies</li>
                </ul>
                <p className="text-eaststreet-gray">
                  Our structured approach ensures your business is optimally positioned when the time comes to exit, maximizing value while achieving your personal and financial goals.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf" 
                  alt="Business owner planning exit strategy"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-eaststreet-beige rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-eaststreet-cream py-16">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Additional Advisory Services" centered={true} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="service-card bg-white">
                <h3 className="text-xl font-bold text-eaststreet-brown mb-3">Strategic Growth Planning</h3>
                <p className="text-eaststreet-gray">
                  Develop strategic plans for organic growth or growth through acquisitions. We help identify opportunities, assess market potential, and create actionable implementation plans.
                </p>
              </div>
              
              <div className="service-card bg-white">
                <h3 className="text-xl font-bold text-eaststreet-brown mb-3">Capital Raising</h3>
                <p className="text-eaststreet-gray">
                  Secure the funding needed for growth or acquisitions. We help structure deals, prepare documentation, and connect you with appropriate funding sources.
                </p>
              </div>
              
              <div className="service-card bg-white">
                <h3 className="text-xl font-bold text-eaststreet-brown mb-3">Financial Restructuring</h3>
                <p className="text-eaststreet-gray">
                  Optimize your company's financial structure to improve performance, reduce costs, and enhance value prior to a potential transaction.
                </p>
              </div>
              
              <div className="service-card bg-white">
                <h3 className="text-xl font-bold text-eaststreet-brown mb-3">Due Diligence</h3>
                <p className="text-eaststreet-gray">
                  Conduct thorough due diligence to ensure your company is well-prepared for a successful acquisition.
                </p>
              </div>
              
              <div className="service-card bg-white">
                <h3 className="text-xl font-bold text-eaststreet-brown mb-3">Buyer Representation</h3>
                <p className="text-eaststreet-gray">
                  Assist buyers in identifying and negotiating strategic investment opportunities.
                </p>
              </div>
              
              <div className="service-card bg-white">
                <h3 className="text-xl font-bold text-eaststreet-brown mb-3">Business Performance Improvement</h3>
                <p className="text-eaststreet-gray">
                  Identify and implement operational improvements to enhance profitability, efficiency, and overall business value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Industries We Serve" centered={true} />
            <p className="text-center text-eaststreet-gray max-w-4xl mx-auto mb-12">
              East Street Advisory has deep experience across a wide range of industries in Singapore and Southeast Asia, with particular expertise in these sectors:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all border-t-4 border-eaststreet-gold">
                <h3 className="font-semibold text-eaststreet-brown">Technology</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all border-t-4 border-eaststreet-gold">
                <h3 className="font-semibold text-eaststreet-brown">Sports</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all border-t-4 border-eaststreet-gold">
                <h3 className="font-semibold text-eaststreet-brown">Healthcare</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all border-t-4 border-eaststreet-gold">
                <h3 className="font-semibold text-eaststreet-brown">Retail</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all border-t-4 border-eaststreet-gold">
                <h3 className="font-semibold text-eaststreet-brown">Professional Services</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all border-t-4 border-eaststreet-gold">
                <h3 className="font-semibold text-eaststreet-brown">F&B</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all border-t-4 border-eaststreet-gold">
                <h3 className="font-semibold text-eaststreet-brown">Beauty Services</h3>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-all border-t-4 border-eaststreet-gold">
                <h3 className="font-semibold text-eaststreet-brown">Education</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection />
      </main>
    </Layout>
  )
}