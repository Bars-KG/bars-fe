'use client';

import api from '@/libs/axios/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SearchCard } from './SearchCard';
import { Pagination } from '../Pagination';

export const Search: React.FC<SearchProps> = ({
  results: initialResults,
  keyword: initialKeyword,
  page: initialPage,
}) => {
  const [results, setResults] = useState(initialResults);
  const [keyword, setKeyword] = useState(initialKeyword);
  const [countItems, setCountItems] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const router = useRouter();

  const param = useSearchParams();
  const queryKeyword = param.get('keyword');
  const queryPage = param.get('page');

  const fetchResult = async () => {
    try {
      const response = await api.get(`search/?keyword=${keyword}&page=${currentPage}&limit=10`);
      const res = response.data;

      setResults(res.data);
      setCurrentPage(currentPage);
      setCountItems(res.count_items);
    } catch (e: any) {}
  };

  useEffect(() => {
    if (queryKeyword) {
      setKeyword(queryKeyword);
      setCurrentPage(1);
    }
  }, [queryKeyword]);

  useEffect(() => {
    if (queryPage) {
      setCurrentPage(Number(queryPage));
    }
  }, [queryPage]);

  useEffect(() => {
    fetchResult();
  }, [keyword, currentPage]);

  return (
    <div className="flex w-full justify-center bg-gradient-to-t from-[#D3EBFE] to-white px-6 py-40 md:py-28 lg:gap-10 lg:px-20 lg:py-32">
      <div className="flex w-full flex-col gap-6 2xl:max-w-[70%]">
        <span className="font-medium text-black">
          Search result for <b className="text-[#37AAE8]">{keyword}</b>
        </span>

        <div className="grid grow grid-cols-1 gap-2">
          {results.length ? (
            results.map((res, index) => <SearchCard key={index} {...res} />)
          ) : (
            <p className="font-bold text-black">No recommendations found.</p>
          )}
        </div>

        <div className="mt-auto">
          {results.length > 0 && (
            // <Pagination
            //   currentPage={currentPage}
            //   nextPage={nextPage}
            //   previousPage={previousPage}
            //   onPageChange={(page) => {
            //     router.push(`/search?keyword=${keyword}&page=${page}&limit=10`);
            //     router.refresh();
            //   }}
            // />
            <Pagination
              currentPage={currentPage}
              countItems={countItems}
              limit={10}
              onPageChange={(page) => {
                router.push(`/search?keyword=${keyword}&page=${page}&limit=10`);
                router.refresh();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
