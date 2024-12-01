'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { MdLocalAirport } from 'react-icons/md';
import Image from 'next/image';
import styles from './hamburger.module.css';
import { usePathname } from 'next/navigation';
import { SearchInput } from '@/components/SearchInput';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', name: 'Home', icon: FaHome },
    { href: '/airport/list', name: 'Airport List', icon: MdLocalAirport },
  ];

  const toggleHamburger = () => {
    setOpen(!open);
  };

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      <nav className="shadow-bottom-only fixed z-50 hidden h-[82px] w-full items-center bg-white px-20 lg:flex lg:justify-between">
        <Link href="/" passHref className="flex items-center gap-3">
          <Image src="/logos/skywiki-logo.svg" alt="skywiki logo" className="cursor-pointer" width={40} height={40} />
          <span className="font-grandstander text-2xl font-semibold text-[#4DA6E6]">SkyWiki</span>
        </Link>

        <SearchInput />

        <div className="flex items-center gap-10">
          {links.map(({ href, name }) => (
            <Link
              key={href}
              href={href}
              className={`font-semibold ${pathname === href ? 'text-[#4DA6E6] underline' : 'text-black'}`}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>

      <nav className="shadow-bottom-only fixed z-50 flex w-full items-center bg-white px-6 py-5 lg:hidden">
        <div className="w-full justify-between">
          <div className="flex h-9 w-full items-center gap-3">
            <div className="flex justify-start">
              <button onClick={toggleHamburger} className={open ? styles.whnth : styles.wh}>
                <div className={styles.icon}></div>
              </button>
            </div>
            <Link href="/" passHref className="flex items-center gap-3">
              <Image
                src="/logos/skywiki-logo.svg"
                alt="skywiki logo"
                className="cursor-pointer"
                width={40}
                height={40}
              />
              <span className="font-grandstander text-2xl font-semibold text-[#4DA6E6]">SkyWiki</span>
            </Link>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2 transform">
            {isSearchOpen ? (
              <SearchInput />
            ) : (
              <button onClick={toggleSearch} className="text-[#4DA6E6] transition-all duration-300 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 17a6 6 0 100-12 6 6 0 000 12zM21 21l-4.35-4.35"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div
          className={
            open
              ? 'navLink absolute left-0 top-[3.5rem] h-screen w-screen bg-white px-6 py-[1.8rem] opacity-100 transition-all duration-500 ease-in-out'
              : 'navLink absolute left-[100vw] top-[3.5rem] h-screen w-screen bg-white px-6 py-[1.8rem] opacity-0 transition-all duration-500 ease-in-out'
          }
        >
          <div className="flex flex-col gap-6 text-[#828282]">
            {links.map(({ href, name, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 text-[16px] font-semibold ${
                  pathname === href ? 'text-[#4DA6E6] underline' : 'text-black'
                }`}
              >
                <Icon className={`text-[20px] ${pathname === href ? 'text-[#4DA6E6]' : 'text-black'}`} />
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
