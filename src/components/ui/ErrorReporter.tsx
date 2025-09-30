"use client";

import { useEffect } from 'react';

const ErrorReporter: React.FC = () => {
  useEffect(() => {
    // Error reporting logic can be added here
    console.log('Error reporter initialized');
  }, []);

  return null; // This component doesn't render anything
};

export default ErrorReporter;