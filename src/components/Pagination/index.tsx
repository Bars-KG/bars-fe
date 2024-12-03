import React from 'react';

interface PaginationProps {
  currentPage: number;
  nextPage: number | null;
  previousPage: number | null;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, nextPage, previousPage, onPageChange }) => {
  return (
    <div className="mt-4 flex justify-center gap-2">
      <button
        onClick={() => previousPage && onPageChange(previousPage)}
        disabled={!previousPage}
        className={`rounded-md border px-4 py-2 ${!previousPage ? 'cursor-not-allowed text-gray-400' : 'text-blue-600'}`}
      >
        Prev
      </button>

      <span className="px-4 py-2 text-sm font-medium text-gray-700">
        Page {currentPage} {nextPage || previousPage ? '' : '(Last Page)'}
      </span>

      <button
        onClick={() => nextPage && onPageChange(nextPage)}
        disabled={!nextPage}
        className={`rounded-md border px-4 py-2 ${!nextPage ? 'cursor-not-allowed text-gray-400' : 'text-blue-600'}`}
      >
        Next
      </button>
    </div>
  );
};
