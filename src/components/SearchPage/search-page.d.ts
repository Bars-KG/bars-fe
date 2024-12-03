type Recommendation = {
  description?: string;
  entity: string;
  title: string;
};

type SearchResult = {
  description?: string;
  entity: string;
  title: string;
  imgUrl?: string;
};

interface SearchProps {
  keyword: string;
  results: SearchResult[];
}
