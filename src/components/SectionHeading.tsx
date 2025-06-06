
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  centered = false,
  className
}) => {
  return (
    <h2 
      className={cn(
        "section-heading font-serif font-normal",
        centered && "text-center center-heading",
        className
      )}
      style={{ fontFamily: 'Forum, serif' }}
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
