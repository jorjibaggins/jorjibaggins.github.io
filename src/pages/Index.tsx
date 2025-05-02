
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Added pt-28 to push content below the navbar */}
      <section className="relative pt-35 pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/272bd5d9-14bc-4ae8-867a-1f28040eaf3e.png" 
            alt="Singapore skyline at night" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to improve text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-3xl mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-4">
                Singapore's Premier SME M&A Advisory Firm
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8">
                Maximizing business value through strategic mergers, acquisitions, and exit planning for Singapore's small and medium enterprises
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Schedule Consultation
                </Link>
                <Link to="/services" className="bg-eaststreet-beige text-eaststreet-brown px-6 py-3 rounded-md hover:bg-eaststreet-gold transition-colors duration-300 inline-block font-medium">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative triangle - adjusted to be visible against the background image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 rotate-45 bg-white border border-eaststreet-gold z-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Our Services" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Service Card 1 */}
            <div className="service-card flex flex-col h-full">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-eaststreet-beige mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-eaststreet-brown">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-serif text-eaststreet-brown mb-3">M&A Advisory</h3>
              <p className="text-eaststreet-gray mb-4 flex-grow">
                Complete M&A advisory services for businesses looking to buy, sell, or merge with other companies in Singapore and Southeast Asia.
              </p>
              <Link to="/services#ma-advisory" className="text-eaststreet-brown hover:text-eaststreet-light-brown font-medium inline-flex items-center mt-2">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Service Card 2 */}
            <div className="service-card flex flex-col h-full">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-eaststreet-beige mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-eaststreet-brown">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-serif text-eaststreet-brown mb-3">Business Valuation</h3>
              <p className="text-eaststreet-gray mb-4 flex-grow">
                Expert valuation services to determine the true market value of your business using industry-specific methodologies and market insights.
              </p>
              <Link to="/services#business-valuation" className="text-eaststreet-brown hover:text-eaststreet-light-brown font-medium inline-flex items-center mt-2">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Service Card 3 */}
            <div className="service-card flex flex-col h-full">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-eaststreet-beige mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-eaststreet-brown">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-serif text-eaststreet-brown mb-3">Exit Strategy Planning</h3>
              <p className="text-eaststreet-gray mb-4 flex-grow">
                Comprehensive exit planning services to prepare your business for a successful sale or transition, maximizing value and minimizing disruption.
              </p>
              <Link to="/services#exit-planning" className="text-eaststreet-brown hover:text-eaststreet-light-brown font-medium inline-flex items-center mt-2">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-eaststreet-cream">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <SectionHeading title="Why Choose East Street Advisory?" />
              <ul className="triangle-bullet space-y-4 text-lg">
                <li>
                  <strong className="text-eaststreet-brown">Local Expertise, Global Perspective:</strong> Deep understanding of Singapore's business landscape combined with international M&A experience.
                </li>
                <li>
                  <strong className="text-eaststreet-brown">Boutique Approach:</strong> Personalized attention and tailored solutions for each client's unique situation.
                </li>
                <li>
                  <strong className="text-eaststreet-brown">End-to-End Support:</strong> Comprehensive guidance throughout the entire M&A process, from initial valuation to closing.
                </li>
                <li>
                  <strong className="text-eaststreet-brown">Extensive Network:</strong> Access to qualified buyers, sellers, and strategic partners across Singapore and Southeast Asia.
                </li>
                <li>
                  <strong className="text-eaststreet-brown">Proven Track Record:</strong> Successful completion of numerous SME transactions across various industries.
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/about" className="btn-primary">
                  Learn About Our Approach
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                    alt="Business professionals in discussion" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-eaststreet-beige rounded-lg -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-eaststreet-gold rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Client Success Stories" centered={true} />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <p className="italic mb-4 text-eaststreet-gray">
                "East Street Advisory guided us through the complex process of selling our manufacturing business. Their expertise in business valuation and strategic positioning helped us secure a deal that exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-bold text-eaststreet-brown">Michael Tan</p>
                  <p className="text-sm text-eaststreet-gray">Former Owner, Precision Engineering Co.</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <p className="italic mb-4 text-eaststreet-gray">
                "The team's deep understanding of Singapore's business landscape and international markets was instrumental in finding the perfect strategic partner for our expansion. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="font-bold text-eaststreet-brown">Sarah Lim</p>
                  <p className="text-sm text-eaststreet-gray">CEO, TechGrowth Solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn-secondary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-eaststreet-brown text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold font-serif text-eaststreet-gold mb-2">50+</p>
              <p className="text-sm md:text-base">Successful Transactions</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold font-serif text-eaststreet-gold mb-2">S$250M+</p>
              <p className="text-sm md:text-base">Transaction Value</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold font-serif text-eaststreet-gold mb-2">15+</p>
              <p className="text-sm md:text-base">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold font-serif text-eaststreet-gold mb-2">12</p>
              <p className="text-sm md:text-base">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </main>
  );
};

export default Index;
