'use client';

import api from '@/libs/axios/api';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Search: React.FC<SearchProps> = ({ results: initialResults, keyword: initialKeyword }) => {
  const [results, setResults] = useState(initialResults);
  const [keyword, setKeyword] = useState(initialKeyword);

  const param = useSearchParams();

  const fetchResult = async () => {
    try {
      const response = await api.get(`search/?keyword=${keyword}&page=1&limit=10`);
      const res = response.data.data;

      setResults(res);
    } catch (e: any) {}
  };

  useEffect(() => {
    const queryKeyword = param.get('keyword');
    if (queryKeyword) {
      setKeyword(queryKeyword);
    }
  }, [param.get('keyword')]);

  useEffect(() => {
    fetchResult();
  }, [keyword]);

  return (
    <div className="flex w-full flex-col gap-6 bg-gradient-to-t from-[#D3EBFE] to-white px-6 py-28 lg:gap-10 lg:px-20 lg:py-32">
      <span className="font-medium text-black">
        Search result for <b className="text-[#37AAE8]">{keyword}</b>
      </span>

      <div>
        {results.length ? (
          results.map((res, index) => (
            <div key={index}>
              <h3 className="text-black">{res.title}</h3>
              {/* <p>{res.description}</p> */}
            </div>
          ))
        ) : (
          <p className="text-black">No recommendations found.</p>
        )}
      </div>
    </div>
  );
};
