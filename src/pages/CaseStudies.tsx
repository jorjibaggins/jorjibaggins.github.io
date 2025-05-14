
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';

const CaseStudies = () => {
  return (
    <main className="min-h-screen pt-32">
      {/* Page Header */}
      <section className="bg-eaststreet-beige py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-eaststreet-brown mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-eaststreet-gray max-w-4xl mx-auto">
            Explore our successful transactions and learn how we've helped business owners achieve their M&A objectives.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Case Study 1 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="relative h-64 lg:h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b" 
                    alt="Manufacturing facility" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-eaststreet-brown/30"></div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-eaststreet-beige text-eaststreet-brown text-sm font-medium rounded-full mb-3">
                      Sell-Side M&A
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-eaststreet-brown">
                      Precision Engineering Co. Acquisition
                    </h2>
                    <p className="text-eaststreet-gray mt-2">
                      <strong>Industry:</strong> Manufacturing | <strong>Deal Size:</strong> S$25-50M
                    </p>
                  </div>
                  <div className="flex-grow mb-4">
                    <p className="text-eaststreet-gray mb-4">
                      After 25 years of building a successful precision engineering business, the founder was ready to retire. 
                      East Street Advisory was engaged to find the right buyer who would continue the company's legacy and provide fair value.
                    </p>
                    <ul className="triangle-bullet space-y-2">
                      <li>Conducted comprehensive business valuation and prepared marketing materials</li>
                      <li>Identified strategic buyers in complementary industries</li>
                      <li>Managed competitive bidding process with 8 potential acquirers</li>
                      <li>Negotiated final sale price 30% above client's expectations</li>
                      <li>Secured favorable employment terms for key management team</li>
                    </ul>
                  </div>
                  <div className="bg-eaststreet-cream p-4 rounded-lg">
                    <p className="italic text-eaststreet-gray">
                      "East Street Advisory understood our complex manufacturing business and found the perfect buyer who shared our values. The transaction exceeded our financial goals while ensuring our employees would be taken care of."
                    </p>
                    <p className="font-semibold text-eaststreet-brown mt-2">
                      - Michael Tan, Former Owner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="relative h-64 lg:h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Technology company office" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-eaststreet-brown/30"></div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-eaststreet-beige text-eaststreet-brown text-sm font-medium rounded-full mb-3">
                      Strategic Partnership
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-eaststreet-brown">
                      TechGrowth Solutions Expansion
                    </h2>
                    <p className="text-eaststreet-gray mt-2">
                      <strong>Industry:</strong> Technology | <strong>Deal Type:</strong> Minority Investment
                    </p>
                  </div>
                  <div className="flex-grow mb-4">
                    <p className="text-eaststreet-gray mb-4">
                      A fast-growing Singapore-based software company sought capital and strategic expertise to expand into 
                      Southeast Asian markets. East Street Advisory helped secure the ideal strategic partner.
                    </p>
                    <ul className="triangle-bullet space-y-2">
                      <li>Developed compelling growth story and investment materials</li>
                      <li>Identified strategic investors with complementary technology and regional presence</li>
                      <li>Structured deal preserving founder control while gaining strategic benefits</li>
                      <li>Secured 40% premium valuation compared to industry standards</li>
                      <li>Negotiated access to partner's distribution networks in key markets</li>
                    </ul>
                  </div>
                  <div className="bg-eaststreet-cream p-4 rounded-lg">
                    <p className="italic text-eaststreet-gray">
                      "East Street Advisory understood both our technology and our ambitions. They found us a strategic partner who brought not just capital, but invaluable market access and expertise that accelerated our growth plan by years."
                    </p>
                    <p className="font-semibold text-eaststreet-brown mt-2">
                      - Sarah Lim, CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="relative h-64 lg:h-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1" 
                    alt="Business owner signing documents" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-eaststreet-brown/30"></div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-eaststreet-beige text-eaststreet-brown text-sm font-medium rounded-full mb-3">
                      Family Business Succession
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-eaststreet-brown">
                      Heritage Foods Family Transition
                    </h2>
                    <p className="text-eaststreet-gray mt-2">
                      <strong>Industry:</strong> Food & Beverage | <strong>Deal Type:</strong> Family Succession
                    </p>
                  </div>
                  <div className="flex-grow mb-4">
                    <p className="text-eaststreet-gray mb-4">
                      A second-generation family business with complex ownership needed to transition leadership while 
                      addressing family members with different levels of involvement and expectations.
                    </p>
                    <ul className="triangle-bullet space-y-2">
                      <li>Facilitated family governance discussions and alignment of interests</li>
                      <li>Structured ownership transfer minimizing tax implications</li>
                      <li>Created liquidity options for non-operating family members</li>
                      <li>Developed leadership transition plan including external management</li>
                      <li>Established advisory board with industry experts to support new leadership</li>
                    </ul>
                  </div>
                  <div className="bg-eaststreet-cream p-4 rounded-lg">
                    <p className="italic text-eaststreet-gray">
                      "East Street helped us navigate the emotional and financial complexities of our family business transition. Their methodical approach kept everyone's interests in mind while ensuring the business would continue to thrive."
                    </p>
                    <p className="font-semibold text-eaststreet-brown mt-2">
                      - David Teo, Managing Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-eaststreet-cream">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Client Testimonials" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <p className="italic mb-4 text-eaststreet-gray">
                "East Street Advisory's deep understanding of the manufacturing sector was evident throughout our engagement. Their team navigated complex negotiations with skill and persistence."
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-bold text-eaststreet-brown">Jasmine Toh</p>
                  <p className="text-sm text-eaststreet-gray">CFO, Industrial Solutions Pte Ltd</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <p className="italic mb-4 text-eaststreet-gray">
                "The valuation expertise provided by East Street was instrumental in demonstrating our company's true worth to potential acquirers. Professional and thorough."
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-bold text-eaststreet-brown">Marcus Lim</p>
                  <p className="text-sm text-eaststreet-gray">Founder, HealthTech Innovations</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <p className="italic mb-4 text-eaststreet-gray">
                "Having East Street by our side during the acquisition process gave us confidence we were making the right decisions. Their insights were invaluable."
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-bold text-eaststreet-brown">Priya Sharma</p>
                  <p className="text-sm text-eaststreet-gray">CEO, LogiSmart Solutions</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 4 */}
            <div className="testimonial-card">
              <p className="italic mb-4 text-eaststreet-gray">
                "East Street Advisory helped us navigate our family business succession with sensitivity and strategic insight. They balanced our legacy concerns with practical business solutions."
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-bold text-eaststreet-brown">Raymond Wong</p>
                  <p className="text-sm text-eaststreet-gray">Chairman, Heritage Retail Group</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 5 */}
            <div className="testimonial-card">
              <p className="italic mb-4 text-eaststreet-gray">
                "The team's attention to detail and negotiation skills helped us secure terms that exceeded our expectations. They truly earned their fee with the value they added."
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-bold text-eaststreet-brown">Thomas Goh</p>
                  <p className="text-sm text-eaststreet-gray">Former Owner, Singapore Electronics</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 6 */}
            <div className="testimonial-card">
              <p className="italic mb-4 text-eaststreet-gray">
                "Even after the transaction closed, East Street Advisory continued to support us during the transition period. Their commitment to our success was evident throughout."
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-bold text-eaststreet-brown">Mei Lin Chen</p>
                  <p className="text-sm text-eaststreet-gray">Director, Global Education Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection title="Ready to Write Your Success Story?" description="Contact East Street Advisory to discuss your M&A objectives and how we can help you achieve them." />
    </main>
  );
};

export default CaseStudies;
