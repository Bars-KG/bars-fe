import Link from 'next/link';

export const DetailCard: React.FC<Field> = (props) => {
  console.log(props)
  return (
    <>
      {props.type === 'section' && (
        <div className="mt-4 mb-6 w-full rounded-lg bg-[#519EFD] px-6 py-4 text-lg font-bold text-white text-center">
          {props.value ?? 'Undefined value'}
        </div>
      )}
      {props.type === 'literal' && (
        <div className="flex gap-6 text-black">
          <span className="font-bold">{props.key ?? 'Undefined key'}</span>
          <span>{props.value ?? 'Undefined value'}</span>
        </div>
      )}
      {props.type === 'hyperlink' && (
        <div className="flex gap-6 text-black">
          <span className="font-bold">{props.key ?? 'Undefined key'}</span>
          <Link href={props.hyperlink ?? ''} className="text-[#519EFD] hover:underline">
            {props.value ?? 'Undefined value'}
          </Link>
        </div>
      )}
    </>
  );
};
