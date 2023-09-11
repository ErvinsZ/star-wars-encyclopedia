// components/LoadingIndicator.tsx
import React from 'react';
import en from '../public/en.json'

const LoadingIndicator: React.FC = () => {
  return <p className='text-center'>{en.loading}</p>;
};

export default LoadingIndicator;
