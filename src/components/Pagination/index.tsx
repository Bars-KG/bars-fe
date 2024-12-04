import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

interface PaginationProps {
  currentPage: number;
  countItems: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, countItems, limit, onPageChange }) => {
  const totalPages = Math.ceil(countItems / limit);

  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="mt-4 flex items-center w-2/5 justify-center gap-4 place-self-center rounded-full">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`rounded-full border p-4 w-14 h-14 flex items-center ${
          currentPage === 1 ? 'cursor-not-allowed text-gray-400 bg-white/10' : 'text-blue-600 bg-white/40 hover:bg-blue-300/60'
        }`}
      >
        <IoIosArrowBack size={20}/>
      </button>

      <div className='bg-white/40 p-3 rounded-full w-full flex justify-center items-center gap-2'>
        {renderPageNumbers().map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`rounded-full p-3 h-14 w-14 ${
                page === currentPage ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-3 py-2 text-gray-500">
              {page}
            </span>
          ),
        )}
      </div>

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`rounded-full border p-4 w-14 h-14 flex items-center ${
          currentPage === totalPages ? 'cursor-not-allowed text-gray-400 bg-white/10' : 'text-blue-600 bg-white/40 hover:bg-blue-300/60'
        }`}
      >
        <IoIosArrowForward size={20}/>
      </button>
    </div>
  );
};
