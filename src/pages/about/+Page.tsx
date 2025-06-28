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
            <h1 className="text-4xl md:text-5xl text-eaststreet-brown mb-6">
              About East Street Advisory
            </h1>
            <p className="text-xl text-eaststreet-gray max-w-4xl mx-auto">
              Singapore's trusted M&A advisory firm dedicated to the success of small and medium-sized enterprises.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading title="Our Story" />
                <p className="mb-4 text-eaststreet-gray">
                  East Street's mission is to provide world-class M&A advisory services specifically tailored to the unique needs of Singapore's SME business community.
                </p>
                <p className="mb-4 text-eaststreet-gray">
                  After observing that smaller businesses were often underserved by traditional investment banks and advisory firms, our founders combined their extensive experience in finance, strategy consulting, and entrepreneurship to create a boutique firm that delivers personalized, high-quality M&A advice to business owners.
                </p>
                <p className="text-eaststreet-gray">
                  Today, East Street has grown to become a trusted partner for SME business transactions across Singapore and Southeast Asia, with a track record of successful deals across numerous industries and a reputation for integrity, expertise, and exceptional client service.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a" 
                  alt="Modern office building in Singapore"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-eaststreet-beige rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-eaststreet-cream">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Our Approach" centered={true} className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-eaststreet-beige mb-6">
                  <span className="text-2xl font-bold text-eaststreet-brown">1</span>
                </div>
                <h3 className="text-xl font-bold text-eaststreet-brown mb-4">Understand</h3>
                <p className="text-eaststreet-gray">
                  We begin every client relationship by deeply understanding your business, goals, challenges, and the specific outcomes you hope to achieve.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-eaststreet-beige mb-6">
                  <span className="text-2xl font-bold text-eaststreet-brown">2</span>
                </div>
                <h3 className="text-xl font-bold text-eaststreet-brown mb-4">Strategize</h3>
                <p className="text-eaststreet-gray">
                  We develop a tailored strategy leveraging our expertise, market insights, and extensive network to identify the optimal path forward for your specific situation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-eaststreet-beige mb-6">
                  <span className="text-2xl font-bold text-eaststreet-brown">3</span>
                </div>
                <h3 className="text-xl font-bold text-eaststreet-brown mb-4">Execute</h3>
                <p className="text-eaststreet-gray">
                  We implement the strategy with meticulous attention to detail, guiding you through every step of the process while proactively addressing challenges.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-12 text-center">
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-eaststreet-cream">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Our Values" centered={true} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-transparent hover:border-eaststreet-primary text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-eaststreet-beige mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-eaststreet-brown">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-eaststreet-brown mb-2">Integrity</h3>
                <p className="text-eaststreet-gray">
                  We act with honesty and transparency in every client interaction, always putting your interests first.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-transparent hover:border-eaststreet-primary text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-eaststreet-beige mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-eaststreet-brown">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-eaststreet-brown mb-2">Excellence</h3>
                <p className="text-eaststreet-gray">
                  We strive for exceptional quality in everything we do, delivering results that exceed expectations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-transparent hover:border-eaststreet-primary text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-eaststreet-beige mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-eaststreet-brown">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.479m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-eaststreet-brown mb-2">Partnership</h3>
                <p className="text-eaststreet-gray">
                  We build collaborative relationships with clients, serving as trusted advisors throughout your business journey.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-transparent hover:border-eaststreet-primary text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-eaststreet-beige mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-eaststreet-brown">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-eaststreet-brown mb-2">Results</h3>
                <p className="text-eaststreet-gray">
                  We focus relentlessly on delivering measurable outcomes that create meaningful value for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection title="Ready to Work with Our Team?" description="Contact East Street Advisory today to schedule a confidential consultation about your business goals." />
      </main>
    </Layout>
  )
}