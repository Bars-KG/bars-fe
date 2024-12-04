import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export const Detail: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex w-full justify-center bg-gradient-to-t from-[#D3EBFE] to-white px-6 py-40 md:py-28 lg:gap-10 lg:px-20 lg:py-32">
      <div className="flex w-full flex-col gap-6 2xl:max-w-[70%]">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-[#519EFD] hover:underline">
          <IoIosArrowBack size={30} />
          <span className="font-bold">Back</span>
        </button>
      </div>
    </div>
  );
};
