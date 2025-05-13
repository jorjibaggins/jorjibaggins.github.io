
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-eaststreet-brown text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Logo and Brief - Updated with new logo */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/89f16988-aa42-4270-8891-37f26fe4a40d.png" 
                alt="East Street Advisory Logo" 
                className="h-16"
              />
            </div>
            <p className="text-sm opacity-80 mt-4">
              East Street Advisory is Singapore's premier M&A advisory firm for SMEs, 
              providing strategic guidance for business owners looking to maximize value 
              through mergers, acquisitions, and divestitures.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link>
              </li>
              <li>
                <Link to="/services" className="opacity-80 hover:opacity-100 transition-opacity">Services</Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
              </li>
              <li>
                <Link to="/case-studies" className="opacity-80 hover:opacity-100 transition-opacity">Case Studies</Link>
              </li>
              <li>
                <Link to="/valuation" className="opacity-80 hover:opacity-100 transition-opacity">Free Valuation</Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
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
