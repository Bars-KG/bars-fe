'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';
import { DetailCard } from './DetailCard';

export const Detail: React.FC<DetailProps> = ({ title, detail_fields }) => {
  const router = useRouter();
  return (
    <div className="flex w-full justify-center bg-gradient-to-t from-[#D3EBFE] to-white px-6 py-40 md:py-28 lg:gap-10 lg:px-20 lg:py-32">
      <div className="flex w-full flex-col gap-14 2xl:max-w-[70%]">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-[#519EFD] hover:underline">
          <IoIosArrowBack size={20} />
          <span className="text-lg font-bold">Back</span>
        </button>

        <div className="flex w-full flex-col gap-6 place-self-center lg:max-w-[60%]">
          <span className="font-grandstander text-xl font-semibold text-[#002A48] md:text-2xl">{title}</span>

          <div className="rounded-lg border border-[#519EFD] bg-white p-8 flex flex-col gap-1">
            {detail_fields.map((d, i) => {
              return (
                <div key={i}>
                  <DetailCard {...d} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
