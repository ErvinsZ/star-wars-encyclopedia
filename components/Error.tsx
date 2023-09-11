// components/ErrorDisplay.tsx
import React from 'react';

interface ErrorDisplayProps {
  errorMessage: string;
  errorType?: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ errorMessage, errorType }) => {
  return (
    <div className='text-center'>
      <p>{errorMessage}</p>
      {errorType ?? <p> {errorType}</p>} 
    </div>
  )
};

export default ErrorDisplay;
