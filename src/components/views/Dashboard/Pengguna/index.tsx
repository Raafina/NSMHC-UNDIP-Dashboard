import TableUI from '@/components/UI/Table';
import { PENGGUNA_HEADER_TABLE } from './Pengguna.constants';
import dummyPenggunaData from '@/dummyPengguna.json';
import { Key, ReactNode, useCallback } from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { RiEdit2Fill } from 'react-icons/ri';
import { FaUnlockAlt, FaEye } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Pengguna = () => {
  const { push } = useRouter();

  const renderCell = useCallback(
    (data: Record<string, unknown>, columnKey: Key) => {
      const cellValue = data[columnKey as keyof typeof data];
      switch (columnKey) {
        case 'foto':
          return (
            <div className="flex justify-center">
              <IoPersonCircleSharp className="text-blue" size={40} />
            </div>
          );
        case 'name':
          return (
            <div className="w-[150px] lg:w-full ">
              <p className="truncate lg:truncate-none">
                {cellValue as ReactNode}
              </p>
            </div>
          );
        case 'last_job_husband':
          return (
            <div className="w-[100px] lg:w-full ">
              <p className="truncate lg:truncate-none">
                {cellValue as ReactNode}
              </p>
            </div>
          );
        case 'actions':
          return (
            <div className="flex gap-2 justify-center">
              <button type="button" className="bg-green p-1 rounded-lg">
                <FaEye
                  size={20}
                  className="text-brown-lighter"
                  onClick={() => push(`/dashboard/pengguna/${data.id}`)}
                />
              </button>
              <button
                type="button"
                className="bg-blue p-1 rounded-lg"
                onClick={() => push(`/dashboard/pengguna/edit/${data.id}`)}>
                <RiEdit2Fill size={20} className="text-brown-lighter" />
              </button>
              <button type="button" className="bg-secondary p-1 rounded-lg">
                <FaUnlockAlt size={20} className="text-brown-lighter" />
              </button>
            </div>
          );
        default:
          return cellValue as ReactNode;
      }
    },
    []
  );

  return (
    <div className="p-4">
      <TableUI
        columns={PENGGUNA_HEADER_TABLE}
        data={dummyPenggunaData}
        emptyContent="Data tidak ditemukan"
        renderCell={renderCell}
        totalPages={10}
      />
    </div>
  );
};

export default Pengguna;
