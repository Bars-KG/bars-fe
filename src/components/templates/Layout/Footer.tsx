'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="flex w-full justify-between gap-4 bg-[#FFFFFF] px-7 py-8 lg:py-12 lg:px-20 items-center">
      <Link href="/" passHref className="flex items-center gap-3">
        <Image src="/logos/skywiki-logo.svg" alt="skywiki logo" className="cursor-pointer" width={40} height={40} />
        <div className="flex flex-col">
          <span className="font-grandstander text-2xl font-semibold text-[#4DA6E6]">SkyWiki</span>
          <span className="font-medium text-[#7398B2]">all about airports</span>
        </div>
      </Link>

      <div className="flex flex-col gap-1">
        <span className="font-medium text-[#A1A3A5]">made with 🩵 by BARS</span>
      </div>
    </footer>
  );
};

export default Footer;
