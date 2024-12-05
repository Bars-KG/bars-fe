import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  icon: string;
  text: string;
  url: string;
}

const FeatureCard = ({ icon, text, url }: CardProps) => {
  return (
    <Link
      href={url}
      className="flex w-full transform cursor-pointer items-center space-x-4 rounded-lg border-2 border-[#93BCD9] bg-white p-4 shadow-white transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <div className="flex-shrink-0">
        <Image src={icon} alt="Card Icon" width={40} height={40} />
      </div>

      <div>
        <h1 className="text-base font-medium text-gray-800">{text}</h1>
      </div>
    </Link>
  );
};

export default FeatureCard;
