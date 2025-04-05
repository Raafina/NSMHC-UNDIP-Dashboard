import berandaServices from '@/services/beranda.service';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
const useBeranda = () => {
  const { isReady } = useRouter();

  const getUserSummary = async () => {
    const res = await berandaServices.getUserSummary();
    return res.data.data;
  };

  const getUserVisitorSummary = async () => {
    const res = await berandaServices.getUserVisitorSummary();
    return res.data.data;
  };

  const { data: dataUserSummary } = useQuery({
    queryKey: ['dataUserSummary'],
    queryFn: () => getUserSummary(),
    enabled: isReady,
  });

  const { data: dataUserVisitorSummary } = useQuery({
    queryKey: ['dataUserVisitorSummary'],
    queryFn: () => getUserVisitorSummary(),
    enabled: isReady,
  });

  return {
    dataUserSummary,
    dataUserVisitorSummary,
  };
};

export default useBeranda;
