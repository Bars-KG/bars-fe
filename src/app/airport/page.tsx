import ContinentDropdown from '@/components/ContinentDropdown';
import api from '@/libs/axios/api';

export default async function AirportContinents() {
  const res = await api.get('/airports/continents/');
  const { continents } = res.data;

  return (
    <div className="w-full items-center justify-center bg-gradient-to-t from-[#D3EBFE] to-white px-8 py-8">
      <ContinentDropdown continents={continents} />
    </div>
  );
}
