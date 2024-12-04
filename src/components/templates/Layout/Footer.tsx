'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookSquare, FaYoutube, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 z-50 flex flex-col items-center justify-between gap-6 bg-[#FFFFFF] px-7 py-8 sm:flex-row sm:gap-4 lg:px-20 lg:py-12">
      <Link href="/" passHref className="flex items-center gap-3">
        <Image src="/logos/skywiki-logo.svg" alt="skywiki logo" className="cursor-pointer" width={40} height={40} />
        <div className="flex flex-col text-center sm:text-left">
          <span className="font-grandstander text-2xl font-semibold text-[#4DA6E6]">SkyWiki</span>
          <span className="font-medium text-[#7398B2]">all about airports</span>
        </div>
      </Link>

      <div className="flex gap-4 sm:gap-2">
        <FaInstagram className="text-3xl text-[#8FC4ED] hover:text-[#649fcc] sm:text-2xl" />
        <FaFacebookSquare className="text-3xl text-[#8FC4ED] hover:text-[#649fcc] sm:text-2xl" />
        <FaYoutube className="text-3xl text-[#8FC4ED] hover:text-[#649fcc] sm:text-2xl" />
        <FaLinkedin className="text-3xl text-[#8FC4ED] hover:text-[#649fcc] sm:text-2xl" />
        <FaTwitter className="text-3xl text-[#8FC4ED] hover:text-[#649fcc] sm:text-2xl" />
      </div>

      <div className="text-center sm:text-right">
        <span className="flex items-center gap-1 font-medium text-[#A1A3A5]">
          made with <FaHeart color="#4DA6E6" /> by BARS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
