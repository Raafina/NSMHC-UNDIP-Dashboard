import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import contentServices from '@/services/content.service';
import useChangeUrl from '@/hooks/useChangeUrl';

const useProgressPengguna = () => {
  const router = useRouter();

  const { currentSearch, currentPage } = useChangeUrl();
  const getAllProgressPengguna = async () => {
    let params = `&page=${currentPage}`;
    if (currentSearch) {
      params += `&search=${currentSearch}`;
    }
    const res = await contentServices.getAllContentProgress(params);
    const data = res.data.data;
    return data;
  };

  const handleSearch = (search: string) => {
    router.push({
      query: {
        page: 1,
        search: search || undefined,
      },
    });
  };

  const {
    data: dataAllProgressPengguna,
    isLoading: isLoadingAllProgressPengguna,
    isRefetching: isRefetchAllProgressPengguna,
  } = useQuery({
    queryKey: ['dataAllProgressPengguna', currentPage, currentSearch],
    queryFn: () => getAllProgressPengguna(),
    enabled: router.isReady && !!currentPage,
  });

  return {
    dataAllProgressPengguna,
    isLoadingAllProgressPengguna,
    isRefetchAllProgressPengguna,
    handleSearch,
  };
};

export default useProgressPengguna;
