import React, { FC } from 'react';

interface FilterProps {
  sortOrder: string | null;
  handleSortChange: (value: string) => void;
  clearFilter: () => void;
}

const Filter: FC<FilterProps> = ({ sortOrder, handleSortChange, clearFilter }) => {
  return (
    <div className='mb-2'>
      <button onClick={clearFilter} className='font-medium text-red-500 underline mr-2 text-sm'>Clear Filter</button>
      <select
        value={sortOrder || ''}
        onChange={(e) => handleSortChange(e.target.value)}
        className='border-2 outline-none rounded'
      >
        <option value="">Sort Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Filter;
