import { Search } from '@/components/SearchPage';
import api from '@/libs/axios/api';

export default async function SearchResult({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const keyword = (await searchParams).keyword || '';
  const page = (await searchParams).page || '1';
  const response = await api.get(`search/?keyword=${keyword}&page=${page}&limit=10`);
  const results = response.data.data;
  return <Search keyword={keyword} results={results} page={Number(page)} />;
}
