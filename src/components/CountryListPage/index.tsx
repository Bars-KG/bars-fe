'use client';

import api from '@/libs/axios/api';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Pagination } from '../Pagination';
import Link from 'next/link';

export const CountryListPage: React.FC<{ continent: string; initialPage: number }> = ({ continent, initialPage }) => {
  const [countries, setCountries] = useState<{ code: string; name: string }[]>([]);
  const [countItems, setCountItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const router = useRouter();
  const param = useSearchParams();

  const fetchCountries = async (page: number) => {
    try {
      const response = await api.get(`/airports/continents/${continent}?page=${page}&limit=10`);
      const res = response.data;

      setCountries(res.data);
      setCountItems(res.count_items);
    } catch (e) {
      console.error('Error fetching countries:', e);
    }
  };

  useEffect(() => {
    fetchCountries(currentPage);
  }, [continent, currentPage]);

  useEffect(() => {
    const queryPage = param.get('page');
    if (queryPage) {
      const pageNum = Number(queryPage);
      if (pageNum !== currentPage) {
        setCurrentPage(pageNum);
      }
    }
  }, [param]);

  const handlePageChange = (page: number) => {
    router.push(`/airport/continent/${continent}?page=${page}`);
    setCurrentPage(page);
  };

  return (
    <div className="flex w-full justify-center bg-gradient-to-t from-[#D3EBFE] to-white px-6 py-40 md:py-28 lg:gap-10 lg:px-20 lg:py-32">
      <div className="flex w-full flex-col gap-6 2xl:max-w-[70%]">
        <h1 className="text-center font-grandstander text-2xl font-bold text-black">
          Countries in Continent <span className="text-[#37AAE8]">{continent}</span>
        </h1>

        <div className="mx-auto w-full max-w-lg space-y-4">
          {countries.length ? (
            countries.map((country) => (
              <div
                key={country.code}
                className="rounded-lg border border-gray-300 bg-white p-4 text-center shadow hover:shadow-md"
              >
                <Link
                  href={`/airport/country/${country.code}`}
                  className="block text-[#002A48] hover:text-[#4DA6E6] hover:underline"
                >
                  {country.name}
                </Link>
              </div>
            ))
          ) : (
            <p className="font-bold text-black">No countries found.</p>
          )}
        </div>

        <div className="mt-auto">
          {countries.length > 0 && (
            <Pagination currentPage={currentPage} countItems={countItems} limit={10} onPageChange={handlePageChange} />
          )}
        </div>
      </div>
    </div>
  );
};
