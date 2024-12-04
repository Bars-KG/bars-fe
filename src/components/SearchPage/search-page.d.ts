type Recommendation = {
  description?: string;
  entity: string;
  title: string;
};

type SearchResult = {
  entity: string;
  title: string;
  description?: string;
  image_url?: string;
  city_label?: string;
  country_label?: string;
};

interface SearchProps {
  page: number;
  keyword: string;
  results: SearchResult[];
}
