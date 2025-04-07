import berandaServices from '@/services/beranda.service';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
const useBeranda = () => {
  const { isReady } = useRouter();

  const getUserSummary = async () => {
    const res = await berandaServices.getUserSummary();
    return res.data.data;
  };

  const { data: dataUserSummary } = useQuery({
    queryKey: ['dataUserSummary'],
    queryFn: () => getUserSummary(),
    enabled: isReady,
  });

  const getUserVisitorSummary = async () => {
    const res = await berandaServices.getUserVisitorSummary();
    return res.data.data;
  };

  const { data: dataUserVisitorSummary } = useQuery({
    queryKey: ['dataUserVisitorSummary'],
    queryFn: () => getUserVisitorSummary(),
    enabled: isReady,
  });

  const getUserReactionSummary = async () => {
    const res = await berandaServices.getUserReactionSummary();
    return res.data.data;
  };

  const { data: dataUserReactionSummary } = useQuery({
    queryKey: ['dataUserReactionSummary'],
    queryFn: () => getUserReactionSummary(),
    enabled: isReady,
  });

  const getUserAnswerSummary = async () => {
    const res = await berandaServices.getUserAnswerSummary();
    return res.data.data;
  };

  const { data: dataUserAnswerSummary } = useQuery({
    queryKey: ['dataUserAnswerSummary'],
    queryFn: () => getUserAnswerSummary(),
    enabled: isReady,
  });

  return {
    dataUserSummary,
    dataUserVisitorSummary,
    dataUserReactionSummary,
    dataUserAnswerSummary,
  };
};

export default useBeranda;
