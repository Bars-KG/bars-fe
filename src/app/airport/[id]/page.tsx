import { Detail } from '@/components/Detail/page';
import api from '@/libs/axios/api';

export default async function Airport({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await api.get(`airports/${id}`);
  const data = res.data;

  return <Detail title={data.title} detail_fields={data.detail_fields} />;
}
