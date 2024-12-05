'use client';

import { useState } from 'react';
import Link from 'next/link';
import api from '@/libs/axios/api';
import { FaChevronDown } from 'react-icons/fa';

export const AirportContinents: React.FC<AirportContinentsProps> = ({ continents }) => {
  return (
    <div className="w-full items-center justify-center bg-gradient-to-t from-[#D3EBFE] to-white p-8">
      <h1 className="pt-24 text-center font-grandstander text-3xl font-bold text-[#002A48]">Airport List</h1>
      <p className="mb-7 text-center text-[#002A48]">By Continent</p>
      <ul className="grid grid-cols-1 gap-4 sm:px-24">
        {continents.map((c) => (
          <ContinentDropdown key={c.code} continent={c} />
        ))}
      </ul>
    </div>
  );
};

const ContinentDropdown: React.FC<ContinentProps> = ({ continent }) => {
  const [countries, setCountries] = useState<{ code: string; name: string }[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchCountries = async (continentCode: string) => {
    const res = await api.get(`/airports/continents/${continentCode}`);
    return res.data.data;
  };

  const toggleDropdown = async () => {
    if (!isOpen) {
      const fetchedCountries = await fetchCountries(continent.code);
      setCountries(fetchedCountries);
    }
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative mx-2 rounded-lg border border-[#4DA6E6] bg-white p-4 pl-8 transition-shadow hover:shadow-md">
      <button
        className="w-full text-left text-lg font-semibold text-[#4DA6E6] hover:underline"
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-between">
          <p>{continent.name}</p>
          <FaChevronDown
            className={`mt-1 text-xl transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="mt-2 w-full rounded-lg p-4">
          <ul className="space-y-2">
            {countries.map((country) => (
              <li key={country.code}>
                <Link
                  href={`/airport/country/${country.code}`}
                  className="block text-[#002A48] hover:text-[#4DA6E6] hover:underline"
                >
                  {country.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={`/airport/continent/${continent.code}`}
                className="block font-semibold text-[#37AAE8] hover:underline"
              >
                More Countries
              </Link>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};
