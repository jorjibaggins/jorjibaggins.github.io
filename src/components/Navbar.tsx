
import React from 'react';

const Navbar = () => {
  return (
    <nav 
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-eaststreet-lightest py-5"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
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
            <NavLink to="/blog" label="Blog" />
            <NavLink to="/valuation" label="Valuation Calculator" />
            <NavLink to="/contact" label="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-button"
            className="md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              id="hamburger-icon"
              className="w-6 h-6 text-eaststreet-darkest"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              id="close-icon"
              className="w-6 h-6 text-eaststreet-darkest hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="md:hidden mt-4 bg-white rounded-lg py-4 px-2 shadow-lg hidden">
          <div className="flex flex-col space-y-3">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/services" label="Services" />
            <MobileNavLink to="/about" label="About Us" />
            <MobileNavLink to="/blog" label="Blog" />
            <MobileNavLink to="/valuation" label="Valuation Calculator" />
            <MobileNavLink to="/contact" label="Contact" />
          </div>
        </div>
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
const MobileNavLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <a
      href={to}
      className="mobile-nav-link block py-2 px-4 text-eaststreet-darkest hover:bg-eaststreet-lightest rounded transition-colors duration-300"
    >
      {label}
    </a>
  );
};

export default Navbar;
