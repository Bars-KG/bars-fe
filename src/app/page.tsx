import FeatureCard from '@/components/FeatureCard';
import { SearchInput } from '@/components/SearchInput';
import { features } from '@/libs/features';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{ backgroundImage: 'linear-gradient(to bottom, #7EB2F1, #C9DFF9, #F4F9FE, #F0F6FD, #7EB2F1)' }}
      className="w-full"
    >
      <div className="relative w-full justify-items-center gap-8 p-4 pb-20 sm:p-8">
        <div className="relative z-40 mt-48 w-full items-center justify-center text-center sm:mt-48">
          <h1 className="text-center font-grandstander text-5xl font-bold text-[#002A48] drop-shadow-xl sm:text-8xl">
            SkyWiki
          </h1>
          <p className="mt-4 items-center justify-center px-4 text-center text-sm font-medium text-black sm:px-24 sm:text-base lg:px-96">
            Discover insider secrets, real-time updates, and everything you need to know about airports worldwide—all in
            one place!
          </p>
          <div className="mt-6 w-full items-center justify-items-center place-self-center px-4 sm:mt-8 sm:max-w-screen-md">
            <SearchInput />
          </div>
        </div>
        <div className="absolute inset-0 right-0 z-30 mt-48 sm:mt-32">
          <Image
            src="/images/cloud-bg.svg"
            alt="cloud elements"
            width={1440}
            height={773}
            className="object-cover 2xl:w-full"
          />
        </div>
      </div>

      <div className="relative z-40 min-h-screen w-full justify-items-center gap-16 p-4 pb-20 sm:p-8">
        <div className="flex w-full flex-col items-center justify-center overflow-hidden">
          <h2 className="pt-24 text-center font-grandstander text-2xl font-semibold text-[#002A48] drop-shadow-xl sm:pt-48 sm:text-3xl">
            What Can You Find Here?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 px-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} text={feature.text} url={feature.url} />
            ))}
          </div>

          <Link
            href={''}
            className="sm:text-md mt-8 text-center text-sm font-medium text-[#002A48] underline hover:text-[#33629a]"
          >
            ... and More!
          </Link>
        </div>
      </div>
    </div>
  );
}
