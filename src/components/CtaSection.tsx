
import React from 'react';
import { Link } from 'react-router-dom';

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Ready to Discuss Your Business Growth or Exit Strategy?",
  description = "Let East Street Advisory help you navigate the complex world of mergers and acquisitions with tailored advice for your specific business needs.",
  buttonText = "Schedule a Consultation",
  buttonLink = "/contact"
}) => {
  return (
    <section className="bg-eaststreet-beige py-16">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-eaststreet-brown mb-6">
          {title}
        </h2>
        <p className="text-lg mb-8 text-eaststreet-gray">
          {description}
        </p>
        <Link to={buttonLink} className="btn-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
