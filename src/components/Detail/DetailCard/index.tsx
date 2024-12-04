import Image from 'next/image';
import Link from 'next/link';

export const DetailCard: React.FC<Field> = (props) => {
  return (
    <>
      {props.type === 'section' && (
        <div className="mb-6 mt-4 w-full rounded-lg bg-[#519EFD] px-6 py-4 text-center text-lg font-bold text-white">
          {props.value ?? 'Undefined value'}
        </div>
      )}
      {props.type === 'literal' && (
        <div className="grid grid-cols-2 gap-6 text-black">
          <span className="font-bold">{props.label ?? 'Undefined key'}</span>
          <span>{props.value ?? 'Undefined value'}</span>
        </div>
      )}
      {props.type === 'hyperlink' && (
        <div className="grid grid-cols-2 gap-6 text-black">
          <span className="font-bold">{props.label ?? 'Undefined key'}</span>
          <Link href={props.hyperlink ?? ''} className="text-[#519EFD] hover:underline">
            {props.value ?? 'Undefined value'}
          </Link>
        </div>
      )}
      {props.type === 'separator' && <div className="my-4 border-b border-[#519EFD]"></div>}
      {props.type === 'image' && (
        <div className="relative w-full h-40 justify-center mb-6">
          <Image src={props.value ?? ''} alt={'image'} fill className="object-contain rounded-lg" />
        </div>
      )}
    </>
  );
};
