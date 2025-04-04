import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import penggunaServices from '@/services/pengguna.service';

const usePenggunaDetail = () => {
  const { query, isReady } = useRouter();

  const getDetailPengguna = async () => {
    const res = await penggunaServices.getDetailPengguna(`${query.id}`);
    const data = res.data.data;
    return data;
  };

  const {
    data: dataDetailPengguna,
    isLoading: isLoadingDetailPengguna,
    isRefetching: isRefetchDetailPengguna,
  } = useQuery({
    queryKey: ['dataDetailPengguna', query.id],
    queryFn: () => getDetailPengguna(),
    enabled: isReady && !!query.id,
  });
  return {
    dataDetailPengguna,
    isLoadingDetailPengguna,
    isRefetchDetailPengguna,
  };
};

export default usePenggunaDetail;
