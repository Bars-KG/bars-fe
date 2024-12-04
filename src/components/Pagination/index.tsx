import React from 'react';

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
    <div className="mt-4 flex justify-center gap-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`rounded-md border px-4 py-2 ${
          currentPage === 1 ? 'cursor-not-allowed text-gray-400' : 'text-blue-600'
        }`}
      >
        Prev
      </button>

      {renderPageNumbers().map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`rounded-md px-3 py-2 ${
              page === currentPage ? 'bg-blue-600 text-white' : 'border text-gray-700 hover:bg-blue-100'
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

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`rounded-md border px-4 py-2 ${
          currentPage === totalPages ? 'cursor-not-allowed text-gray-400' : 'text-blue-600'
        }`}
      >
        Next
      </button>
    </div>
  );
};
