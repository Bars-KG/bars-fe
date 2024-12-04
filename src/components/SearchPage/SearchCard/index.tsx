import Image from 'next/image';
import Link from 'next/link';

export const SearchCard: React.FC<SearchResult> = (props) => {
  const code = props.entity.split('/').pop();
  return (
    <div
      className={`flex w-full flex-col p-6 md:flex-row ${props.image_url ? 'gap-8' : ''} rounded-lg border border-[#4DA6E6] bg-white shadow-sm`}
    >
      {props.image_url && (
        <Image src={props.image_url} width={120} height={60} alt={props.title} className="rounded-lg object-cover" />
      )}

      <div className="flex w-full flex-col text-black">
        <Link
          href={`/airport/${code}`}
          className="text-lg font-bold text-[#37AAE8] hover:text-[#002A48] hover:underline"
        >
          {props.title}
        </Link>
        {(props.city_label || props.country_label) && (
          <span className="text-sm font-medium">
            {props.city_label ? `${props.city_label}, ` : ''} {props.country_label ?? ''}
          </span>
        )}

        {props.description && (
          <span className="w-full overflow-hidden text-ellipsis break-words pt-4 text-sm md:max-w-[80%]">
            {props.description}
          </span>
        )}
      </div>
    </div>
  );
};