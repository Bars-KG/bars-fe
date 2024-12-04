import React from 'react';
import Image from 'next/image';

interface CardProps {
  icon: string;
  text: string;
}

const FeatureCard = ({ icon, text }: CardProps) => {
  return (
    <div className="flex w-fit transform items-center space-x-4 rounded-lg border border-2 border-[#93BCD9] bg-white p-4 shadow-white transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex-shrink-0">
        <Image src={icon} alt="Card Icon" width={40} height={40} />
      </div>

      <div>
        <h1 className="text-base font-medium text-gray-800">{text}</h1>
      </div>
    </div>
  );
};

export default FeatureCard;
