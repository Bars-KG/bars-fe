import { Search } from '@/components/SearchPage';
import api from '@/libs/axios/api';

export default async function SearchResult({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const keyword = (await searchParams).keyword?.toLowerCase() || '';
  const response = await api.get(`search/?keyword=${keyword}&page=1&limit=10`);
  const results = response.data.data;
  return <Search keyword={keyword} results={results} />;
}
