type SearchResult = {
  entity: string;
  title: string;
  description?: string;
  image_url?: string;
  city_label?: string;
  country_label?: string;
};

interface AirportListProps {
  page: number;
  country: string;
  results: SearchResult[];
}
