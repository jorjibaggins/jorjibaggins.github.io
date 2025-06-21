
import React from 'react';
// import { Link } from 'react-router-dom'; // Removed for static site

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002855] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo and Brief - Updated with new logo */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/ffa4aa41-f0e9-48fb-aae3-3c7d61ecbfb6.png" 
                alt="East Street Advisory Logo" 
                className="h-20"
              />
            </div>
            <p className="text-sm opacity-80 mt-4">
              East Street Advisory is Singapore's premier M&A advisory firm for SMEs, 
              providing business broker services for business owners looking to sell their companies 
              and maximise value.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</a>
              </li>
              <li>
                <a href="/services" className="opacity-80 hover:opacity-100 transition-opacity">Services</a>
              </li>
              <li>
                <a href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a>
              </li>
              {/* <li>
                <a href="/case-studies" className="opacity-80 hover:opacity-100 transition-opacity">Case Studies</a>
              </li> */}
              <li>
                <a href="/valuation" className="opacity-80 hover:opacity-100 transition-opacity">Free Valuation</a>
              </li>
              <li>
                <a href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="text-sm opacity-80">
              <p className="mb-2">
                <strong>Phone:</strong> +65 9156 6987
              </p>
              <p className="mb-2">
                <strong>Email:</strong> contact@eaststreetadvisory.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 mt-6 text-center text-sm opacity-70">
          <p>© {currentYear} East Street Advisory. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
