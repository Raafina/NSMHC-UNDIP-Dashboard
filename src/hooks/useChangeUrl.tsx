import { useRouter } from 'next/router';

const useChangeUrl = () => {
  const router = useRouter();

  const currentSearch = router.query.search;
  const currentPage = router.query.page;

  const setUrl = () => {
    router.replace({
      query: {
        page: currentPage || 1,
        search: currentSearch || '',
      },
    });
  };

  const handleChangePage = (page: number) => {
    router.push({
      query: {
        ...router.query,
        page,
      },
    });
  };

  return {
    currentPage,
    currentSearch,
    setUrl,
    handleChangePage,
  };
};

export default useChangeUrl;
