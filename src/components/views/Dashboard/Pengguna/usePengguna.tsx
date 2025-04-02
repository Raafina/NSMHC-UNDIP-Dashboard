import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import penggunaServices from '@/services/pengguna.service';
import useChangeUrl from '@/hooks/useChangeUrl';

const usePengguna = () => {
  const router = useRouter();

  const { currentSearch, currentPage } = useChangeUrl();
  const getAllPengguna = async () => {
    let params = `&page=${currentPage}`;
    if (currentSearch) {
      params += `&search=${currentSearch}`;
    }
    const res = await penggunaServices.getAllPengguna(params);
    console.log(res, 'res');
    const data = res.data.data;
    console.log(data);
    return data;
  };

  const {
    data: dataAllPengguna,
    isLoading: isLoadingAllPengguna,
    isRefetching: isRefetchAllPengguna,
  } = useQuery({
    queryKey: ['dataAllPengguna', currentPage],
    queryFn: () => getAllPengguna(),
    enabled: router.isReady && !!currentPage,
  });
  return { dataAllPengguna, isLoadingAllPengguna, isRefetchAllPengguna };
};

export default usePengguna;
