import { AirportListPage } from '@/components/AirportListPage';
import api from '@/libs/axios/api';

export default async function AirportList({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const { id: country } = params;
  const page = searchParams.page || '1';

  const response = await api.get(`search/?country=${country}&page=${page}&limit=10`);
  const results = response.data.data;

  return <AirportListPage country={country} results={results} page={Number(page)} />;
}
