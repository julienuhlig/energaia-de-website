import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <img 
      src="/logo.png" 
      alt="Energaia Logo" 
      className={`h-8 w-auto ${className}`}
    />
  );
}