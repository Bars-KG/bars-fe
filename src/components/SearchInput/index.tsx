import { useState } from 'react';

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearInput = () => {
    setSearchQuery('');
  };

  return (
    <div className="relative w-full lg:w-96">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="h-10 w-full rounded-full border border-[#4DA6E6] px-4 pl-10 text-black placeholder-[#4DA6E6] focus:outline-none"
      />
      <button
        type="button"
        className="absolute left-3 top-1/2 -translate-y-1/2 transform text-[#4DA6E6] focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35"
          />
        </svg>
      </button>
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 transform text-[#4DA6E6] focus:outline-none"
        onClick={clearInput}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};
