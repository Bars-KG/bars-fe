import api from '@/libs/axios/api';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useDebounce } from 'use-debounce';

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedQuery] = useDebounce(searchQuery, 300);
  const [suggestions, setSuggestions] = useState<Recommendation[]>([]);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSuggestionsVisible(true);
  };

  const clearInput = () => {
    setSearchQuery('');
    setSuggestions([]);
    setIsSuggestionsVisible(false);
  };

  const handleSearch = (query: string) => {
    if (query) {
      router.push(`/search?keyword=${query}&page=1&limit=10`);
      router.refresh();
      setIsSuggestionsVisible(false);
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
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsSuggestionsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchSuggestions(debouncedQuery);
      setSuggestions(result);
    };
    fetch();
  }, [debouncedQuery]);

  return (
    <div className="relative w-full" ref={containerRef}>
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

      {isSuggestionsVisible && suggestions.length > 0 && (
        <div className="absolute left-0 top-12 z-10 w-full rounded-lg border border-[#4DA6E6] bg-white shadow-xl">
          {suggestions.map((s, i) => (
            <div
              key={i}
              className={`flex cursor-pointer flex-col rounded-lg px-4 py-2 align-middle text-black hover:bg-gray-100 ${
                i < suggestions.length - 1 ? 'border-b border-gray-200' : ''
              }`}
              onClick={() => {
                router.push(`/airport/${s.entity.split('/').pop()}`);
                setIsSuggestionsVisible(false);
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
