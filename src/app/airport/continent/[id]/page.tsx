import { CountryListPage } from '@/components/CountryListPage';

export default function ContinentPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { page?: string };
}) {
  const continent = params.id;
  const initialPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;

  return <CountryListPage continent={continent} initialPage={initialPage} />;
}
