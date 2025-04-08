import { Skeleton } from '@heroui/react';
import Image from 'next/image';
import usePenggunaDetail from './usePenggunaDetail';

const PenggunaDetail = () => {
  const { dataDetailPengguna } = usePenggunaDetail();
  const isLoaded = !!dataDetailPengguna;

  const DetailItem = ({ label, value }: { label: string; value?: string }) => (
    <div className="grid grid-cols-[100px_40px_1fr] gap-x-2 w-full">
      <div className="font-medium">{label}</div>
      <div className="text-center">:</div>
      <div className="break-words whitespace-pre-wrap overflow-hidden">
        {value || '-'}
      </div>
    </div>
  );

  return (
    <section>
      <div className="border-2 border-primary bg-white rounded-3xl p-5">
        {/* Profile Header */}
        <div className="flex flex-col items-center justify-center mb-2">
          <Skeleton
            isLoaded={isLoaded}
            className="rounded-full h-40 w-40 flex items-center justify-center">
            {dataDetailPengguna?.user_profile?.foto ? (
              <Image
                src={dataDetailPengguna?.user_profile?.foto}
                alt="profile"
                className="rounded-full aspect-square overflow-hidden"
                width={160}
                height={160}
              />
            ) : (
              <Image
                src="/images/illustration/default-user-foto.svg"
                alt="profile"
                className="rounded-full aspect-square overflow-hidden"
                width={160}
                height={160}
              />
            )}
          </Skeleton>

          <Skeleton
            isLoaded={isLoaded}
            className="rounded-2xl my-2 flex flex-col items-center text-center max-w-[340px] w-full px-4 gap-1">
            <h3 className="font-medium text-2xl min-h-[32px] w-full break-words whitespace-normal text-center">
              {dataDetailPengguna?.name || 'Nama Pengguna'}
            </h3>
            <p className="font-medium text-xl min-h-[28px] w-full break-words whitespace-normal text-center">
              {dataDetailPengguna?.user_profile?.no_hp || '08xxxxxxxxxx'}
            </p>
          </Skeleton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-10 lg:px-32 ">
          <Skeleton
            isLoaded={isLoaded}
            className="flex flex-col gap-y-3 w-full rounded-2xl">
            <DetailItem
              label="Usia"
              value={dataDetailPengguna?.user_profile?.age}
            />
            <DetailItem
              label="Pendidikan"
              value={dataDetailPengguna?.user_profile?.last_education}
            />
            <DetailItem
              label="Pekerjaan"
              value={dataDetailPengguna?.user_profile?.last_job}
            />
            <DetailItem
              label="Alamat"
              value={dataDetailPengguna?.user_profile?.address}
            />
          </Skeleton>

          <Skeleton
            isLoaded={isLoaded}
            className="flex flex-col gap-y-3 w-full rounded-2xl">
            <DetailItem
              label="Nama Anak"
              value={dataDetailPengguna?.user_child?.name}
            />
            <DetailItem
              label="Usia"
              value={dataDetailPengguna?.user_child?.age}
            />
            <DetailItem
              label="Pendidikan"
              value={dataDetailPengguna?.user_child?.last_education}
            />
          </Skeleton>
        </div>
      </div>
    </section>
  );
};

export default PenggunaDetail;
