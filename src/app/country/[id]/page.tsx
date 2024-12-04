import { Detail } from '@/components/Detail/page';
import api from '@/libs/axios/api';

export default async function Country({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await api.get(`countries/${id}`);
  const data = res.data;

  return <Detail title={data.title} detail_fields={data.detail_fields} />;
}
