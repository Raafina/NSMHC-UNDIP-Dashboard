import { FaUser } from 'react-icons/fa';
import { MdPhoneAndroid } from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { Skeleton } from '@heroui/react';
import useBeranda from './useBeranda';
import Pengunjung from './Pengunjung';
import Reaksi from './Reaksi';
import Kemampuan from './Kemampuan';

const StatCard = ({ icon: Icon, value, isLoading }: any) => (
  <Skeleton isLoaded={!isLoading} className="w-full rounded-2xl">
    <div className="flex flex-row items-center p-4 md:p-9 rounded-2xl bg-brown-lighter text-brown-extreme-dark">
      <Icon className="w-8 h-8 md:w-16 md:h-16" />
      <p className="md:text-6xl flex-1 text-center truncate">{value}</p>
    </div>
  </Skeleton>
);

const Beranda = () => {
  const { dataUserSummary, dataUserVisitorSummary } = useBeranda();
  const isLoading = !dataUserSummary;

  const stats = [
    {
      icon: FaUser,
      value: dataUserSummary?.total_user,
      isLoading,
    },
    {
      icon: MdPhoneAndroid,
      value: dataUserVisitorSummary?.total_app_opened,
      isLoading,
    },
    {
      icon: BiTask,
      value: dataUserSummary?.user_completed_progress,
      isLoading,
    },
  ];

  return (
    <section className="flex flex-col gap-2 md:gap-4 ">
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            icon={stat.icon}
            value={stat.value}
            isLoading={stat.isLoading}
          />
        ))}
      </div>

      <Pengunjung dataUserVisitorSummary={dataUserVisitorSummary?.summary} />
      <Reaksi />
      <Kemampuan />
    </section>
  );
};

export default Beranda;
