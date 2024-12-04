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
    <div className="mt-4 flex w-full items-center justify-center gap-1 place-self-center rounded-full sm:w-2/5 sm:gap-4">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex h-14 w-14 items-center rounded-full p-1 sm:p-4 ${
          currentPage === 1
            ? 'cursor-not-allowed text-gray-400 sm:bg-white/10'
            : 'text-blue-600 sm:bg-white/60 sm:hover:bg-blue-300/60'
        }`}
      >
        <IoIosArrowBack size={20} className="h-5 w-5 sm:h-10 sm:w-10" />
      </button>

      <div className="flex w-full items-center justify-center gap-2 rounded-full bg-white/60 p-1 sm:p-3">
        {renderPageNumbers().map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`h-14 w-14 rounded-full p-3 text-xs sm:text-base ${
                page === currentPage ? 'bg-[#519EFD] text-white' : 'text-gray-700 hover:bg-blue-100'
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
        className={`flex h-14 w-14 items-center rounded-full p-1 sm:p-4 ${
          currentPage === totalPages
            ? 'cursor-not-allowed text-gray-400 sm:bg-white/10'
            : 'text-blue-600 sm:bg-white/60 sm:hover:bg-blue-300/60'
        }`}
      >
        <IoIosArrowForward size={20} className="h-5 w-5 sm:h-10 sm:w-10" />
      </button>
    </div>
  );
};
