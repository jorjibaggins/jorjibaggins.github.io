export { Head }

function Head() {
  return (
    <>
      <title>Sell Your Company Singapore | Business Valuation Calculator | East Street Advisory</title>
      <meta name="description" content="Calculate your business value instantly with our Singapore business valuation calculator. Get estimated worth before selling your company. Free tool used by 500+ business owners." />
      
      {/* SEO Keywords */}
      <meta name="keywords" content="sell my company singapore, business valuation singapore, company valuation calculator, sell business singapore, singapore business broker, M&A advisory singapore" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Sell Your Company Singapore | Business Valuation Calculator" />
      <meta property="og:description" content="Calculate your business value instantly with our Singapore business valuation calculator. Get estimated worth before selling your company." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://eaststreetadvisory.com/valuation" />
      <meta property="og:image" content="https://eaststreetadvisory.com/og-valuation-calculator.jpg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Singapore Business Valuation Calculator" />
      <meta name="twitter:description" content="Calculate your business value instantly. Free tool for Singapore companies looking to sell." />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://eaststreetadvisory.com/valuation" />
      
      {/* Structured Data for Calculator Tool */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Business Valuation Calculator",
          "description": "Free online calculator to estimate business value for Singapore companies",
          "url": "https://eaststreetadvisory.com/valuation",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "SGD"
          },
          "provider": {
            "@type": "Organization",
            "name": "East Street Advisory",
            "url": "https://eaststreetadvisory.com"
          }
        })}
      </script>
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "East Street Advisory",
          "description": "Singapore M&A advisory and business brokerage services",
          "url": "https://eaststreetadvisory.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "SG",
            "addressLocality": "Singapore"
          },
          "areaServed": "Singapore",
          "serviceType": ["Business Valuation", "M&A Advisory", "Business Brokerage"],
          "priceRange": "$$"
        })}
      </script>
      
      {/* Structured Data for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How accurate is this business valuation calculator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our calculator provides a market-based estimate using industry multiples sourced from SGX market data. While more accurate than generic online calculators, actual valuations can vary based on specific factors like market conditions, business quality, and buyer interest."
              }
            },
            {
              "@type": "Question", 
              "name": "How long does it take to sell a business in Singapore?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The timeline to sell your company in Singapore typically ranges from 6-12 months, depending on business size, industry, and market conditions. Proper preparation and professional guidance can speed up the process."
              }
            }
          ]
        })}
      </script>
    </>
  )
}