import api from '@/libs/axios/api';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useDebounce } from 'use-debounce';

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(searchQuery, 300);
  const [suggestions, setSuggestions] = useState<Recommendation[]>([]);
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearInput = () => {
    setSearchQuery('');
    setSuggestions([]);
  };

  const handleSearch = (query: string) => {
    if (query) {
      router.push(`/search?keyword=${query}&page=1&limit=10`);
      router.refresh()
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery) {
      handleSearch(searchQuery);
    }
  };

  const fetchSuggestions = async (query: string) => {
    if (!query) return [];

    try {
      const search = await api.get(`search/recommendation/?keyword=${query}`);
      const recommendation = search.data.recommendation;

      return recommendation;
    } catch (e: any) {
      console.log(e);
      return [];
    }
  };

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchSuggestions(debouncedQuery);
      setSuggestions(result);
    };
    fetch();
  }, [debouncedQuery]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="h-10 w-full rounded-full border border-[#4DA6E6] px-4 pl-10 text-black placeholder-[#4DA6E6] focus:outline-none"
      />

      <button
        type="button"
        className="absolute left-3 top-1/2 -translate-y-1/2 transform text-[#4DA6E6] focus:outline-none"
      >
        <FaSearch />
      </button>

      {searchQuery && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 transform text-[#4DA6E6] focus:outline-none"
          onClick={clearInput}
        >
          <IoClose />
        </button>
      )}

      {suggestions.length > 0 && (
        <div className="absolute left-0 top-12 z-10 w-full rounded-lg border border-[#4DA6E6] bg-white shadow-xl">
          {suggestions.map((s, i) => (
            <div
              key={i}
              className={`flex cursor-pointer flex-col px-4 py-2 align-middle text-black hover:bg-gray-100 rounded-lg ${
                i < suggestions.length - 1 ? 'border-b border-gray-200' : ''
              }`}
              onClick={() => {
                setSearchQuery(s.title);
                setSuggestions([]);
                handleSearch(s.title);
              }}
            >
              <span className="font-bold">{s.title}</span>
              <span className="max-w-full overflow-hidden text-ellipsis text-sm text-gray-600">
                {s.description ?? ''}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
