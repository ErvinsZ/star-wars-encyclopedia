import React from 'react';
import en from '../public/en.json'

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (arg:number) => void;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
          onPageChange(newPage);
        }
      };
  return (
    <div className="flex justify-center">
      <div className='w-[150px] space-x-4 flex'>
        <div className='w-[60px]'>
            {currentPage > 1 && (
            <button onClick={() => handlePageChange(currentPage - 1)} className='font-medium text-sky-600	'>{en.previous}</button>
            )}
        </div>
        <div className='w-[60px]'>   
            {currentPage < totalPages && (
            <button onClick={() => handlePageChange(currentPage + 1)} className='font-medium text-sky-600	'>{en.next}</button>
            )}
        </div>

      </div>
    </div>
  );
};

export default PaginationButtons;
