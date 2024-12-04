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
  const pathname = usePathname();

  const links = [
    { href: '/', name: 'Home', icon: FaHome },
    { href: '/airport/list', name: 'Airport List', icon: MdLocalAirport },
  ];

  const toggleHamburger = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed z-50 flex w-full flex-col justify-between gap-4 bg-white px-6 py-5 shadow-bottom-only sm:h-[82px] sm:flex-row sm:items-center sm:gap-0 lg:px-20">
      <div className="flex items-center gap-3">
        <div className="flex justify-start lg:hidden">
          <button onClick={toggleHamburger} className={open ? styles.whnth : styles.wh}>
            <div className={styles.icon}></div>
          </button>
        </div>
        <Link href="/" passHref className="flex items-center gap-3">
          <Image src="/logos/skywiki-logo.svg" alt="skywiki logo" className="cursor-pointer" width={40} height={40} />
          <span className="font-grandstander text-2xl font-semibold text-[#4DA6E6]">SkyWiki</span>
        </Link>
      </div>

      <div className="w-full sm:w-80 lg:w-96">
        <SearchInput />
      </div>

      <div className="hidden items-center gap-10 lg:flex">
        {links.map(({ href, name }) => (
          <Link
            key={href}
            href={href}
            className={`${pathname === href ? 'font-semibold text-[#4DA6E6]' : 'font-medium text-slate-500'} hover:scale-105`}
          >
            {name}
          </Link>
        ))}
      </div>

      <div
        className={`lg:hidden ${
          open
            ? 'navLink absolute left-0 top-[4.5rem] h-screen w-screen bg-white px-6 py-[1.8rem] opacity-100 transition-all duration-500 ease-in-out'
            : 'navLink absolute left-[100vw] top-[4.5rem] h-screen w-screen bg-white px-6 py-[1.8rem] opacity-0 transition-all duration-500 ease-in-out'
        }`}
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
  );
};

export default Navbar;
