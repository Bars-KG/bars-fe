'use client';

import api from '@/libs/axios/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SearchCard } from '../SearchPage/SearchCard';
import { Pagination } from '../Pagination';

export const AirportListPage: React.FC<AirportListProps> = ({
  results: initialResults,
  country: initialCountry,
  page: initialPage,
}) => {
  const [results, setResults] = useState(initialResults);
  const [country, setCountry] = useState(initialCountry);
  const [countryTitle, setCountryTitle] = useState();
  const [countItems, setCountItems] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const router = useRouter();
  const param = useSearchParams();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await api.get(`search/?country=${country}&page=${currentPage}&limit=10`);
        const res = response.data;
        const countryResponse = await api.get(`/countries/${country}`);

        setResults(res.data);
        setCountItems(res.count_items);
        setCountryTitle(countryResponse.data.title);
      } catch (e) {
        console.error(e);
      }
    };

    fetchResult();
  }, [country, currentPage]);

  useEffect(() => {
    const queryCountry = param.get('country');
    const queryPage = param.get('page');

    if (queryCountry) {
      setCountry(queryCountry);
    }

    if (queryPage) {
      setCurrentPage(Number(queryPage));
    }
  }, [param]);

  return (
    <div className="flex w-full justify-center bg-gradient-to-t from-[#D3EBFE] to-white px-6 py-40 md:py-28 lg:gap-10 lg:px-20 lg:py-32">
      <div className="flex w-full flex-col gap-6 2xl:max-w-[70%]">
        <span className="text-center font-grandstander text-2xl font-semibold text-black">
          List of Airport in <p className="text-[#37AAE8]">{countryTitle}</p>
        </span>

        <div className="grid grow grid-cols-1 gap-2">
          {results.length ? (
            results.map((res, index) => <SearchCard key={index} {...res} />)
          ) : (
            <p className="font-bold text-black">No airports found.</p>
          )}
        </div>

        <div className="mt-auto">
          {results.length > 0 && (
            <Pagination
              currentPage={currentPage}
              countItems={countItems}
              limit={10}
              onPageChange={(page) => {
                router.push(`/airport/country/${country}?page=${page}`);
                router.refresh();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
