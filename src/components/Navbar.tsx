
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Removed for static site
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-eaststreet-lightest',
        scrolled ? 'shadow-md py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo - Updated with new image */}
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/42e5c86a-b211-4a13-bc53-42702c3d6cb7.png" 
              alt="East Street Advisory Logo" 
              className="h-12 md:h-16"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/about" label="About Us" />
            {/* <NavLink to="/case-studies" label="Case Studies" /> */}
            <NavLink to="/valuation" label="Free Valuation" />
            <NavLink to="/contact" label="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6 text-eaststreet-darkest"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg py-4 px-2 shadow-lg">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/services" label="Services" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/about" label="About Us" onClick={() => setIsOpen(false)} />
              {/* <MobileNavLink to="/case-studies" label="Case Studies" onClick={() => setIsOpen(false)} /> */}
              <MobileNavLink to="/valuation" label="Free Valuation" onClick={() => setIsOpen(false)} />
              <MobileNavLink to="/contact" label="Contact" onClick={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Desktop Navigation Link
const NavLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <a
      href={to}
      className="text-eaststreet-darkest hover:text-eaststreet-dark font-medium transition-colors duration-300"
    >
      {label}
    </a>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => {
  return (
    <a
      href={to}
      className="block py-2 px-4 text-eaststreet-darkest hover:bg-eaststreet-lightest rounded transition-colors duration-300"
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Navbar;
