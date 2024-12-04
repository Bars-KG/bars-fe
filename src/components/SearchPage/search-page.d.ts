type Recommendation = {
  description?: string;
  entity: string;
  title: string;
};

type SearchResult = {
  description?: string;
  entity: string;
  title: string;
  image_url?: string;
};

interface SearchProps {
  page: number;
  keyword: string;
  results: SearchResult[];
}
