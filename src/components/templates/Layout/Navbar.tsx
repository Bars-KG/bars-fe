'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { MdLocalAirport } from 'react-icons/md';
import Image from 'next/image';
import styles from './hamburger.module.css';
import { usePathname } from 'next/navigation';

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
    <>
      <div className="shadow-bottom-only fixed z-50 hidden h-[82px] w-full items-center bg-white px-12 lg:flex lg:justify-between">
        <Link href="/" passHref className="flex items-center gap-3">
          <Image src="/logos/skywiki-logo.svg" alt="skywiki logo" className="cursor-pointer" width={40} height={40} />
          <span className="font-grandstander text-2xl font-semibold text-[#4DA6E6]">SkyWiki</span>
        </Link>

        <div className="mx-8">
          <input
            type="text"
            placeholder="Search..."
            className="h-10 rounded-full border border-[#4DA6E6] px-4 placeholder-[#4DA6E6]"
          />
        </div>

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
      </div>

      <div className="shadow-bottom-only fixed z-50 flex w-full items-center bg-white px-6 py-5 lg:hidden">
        <div className="flex h-9 w-full items-center justify-center">
          <Link href="/" passHref className="flex items-center gap-3">
            <Image src="/logos/skywiki-logo.svg" alt="skywiki logo" className="cursor-pointer" width={40} height={40} />
            <span className="font-grandstander text-2xl font-semibold text-[#4DA6E6]">SkyWiki</span>
          </Link>
          <div className="flex w-full justify-end">
            <button onClick={toggleHamburger} className={open ? styles.whnth : styles.wh}>
              <div className={styles.icon}></div>
            </button>
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
            <input
              type="text"
              placeholder="Search..."
              className="h-10 rounded-full border border-[#4DA6E6] px-4 placeholder-[#4DA6E6]"
            />

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
      </div>
    </>
  );
};

export default Navbar;
