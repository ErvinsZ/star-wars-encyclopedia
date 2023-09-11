// components/BackButton.tsx
import React from 'react';
import en from '../public/en.json'

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-blue-500 hover:underline cursor-pointer"
    >
      {en.back}
    </button>
  );
};

export default BackButton;
