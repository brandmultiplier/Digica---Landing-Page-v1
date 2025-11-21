import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, dark = false, className = "" }) => {
  return (
    <div className={`relative mb-12 inline-block ${className} ${dark ? 'dark' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold ${dark ? 'text-white' : 'text-digica-dark'} circuit-line relative`}>
        {children}
      </h2>
    </div>
  );
};