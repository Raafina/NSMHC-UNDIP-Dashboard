import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import reaksiService from '@/services/reaksi.service';
import useChangeUrl from '@/hooks/useChangeUrl';

const useReaksi = () => {
  const router = useRouter();

  const { currentSearch, currentPage } = useChangeUrl();
  const getAllReaksi = async () => {
    let params = `&page=${currentPage}`;
    if (currentSearch) {
      params += `&search=${currentSearch}`;
    }
    const res = await reaksiService.getAllReaksi(params);
    const data = res.data.data;
    return data;
  };

  const handleSearch = (search: string) => {
    router.push({
      query: {
        search: search || undefined,
        page: 1,
      },
    });
  };

  const {
    data: dataAllReaksi,
    isLoading: isLoadingAllReaksi,
    isRefetching: isRefetchAllReaksi,
  } = useQuery({
    queryKey: ['dataAllReaksi', currentPage, currentSearch],
    queryFn: () => getAllReaksi(),
    enabled: router.isReady && !!currentPage,
  });

  return {
    dataAllReaksi,
    isLoadingAllReaksi,
    isRefetchAllReaksi,
    handleSearch,
  };
};

export default useReaksi;
