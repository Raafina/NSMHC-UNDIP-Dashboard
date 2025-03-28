import TableUI from '@/components/UI/Table';
import { PENGGUNA_HEADER_TABLE } from './Pengguna.constants';
import dummyPenggunaData from '@/dummyPengguna.json';
import { Key, ReactNode, useCallback } from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { RiEdit2Fill } from 'react-icons/ri';
import { FaUnlockAlt } from 'react-icons/fa';

const Pengguna = () => {
  const renderCell = useCallback(
    (category: Record<string, unknown>, columnKey: Key) => {
      const cellValue = category[columnKey as keyof typeof category];
      switch (columnKey) {
        case 'foto':
          return (
            <div className="flex justify-center">
              <IoPersonCircleSharp className="text-blue" size={40} />
            </div>
          );
        case 'name':
          return (
            <div className="flex justify-center w-full">
              <p className="truncate w-[150px] overflow-hidden text-ellipsis whitespace-nowrap">
                {cellValue as ReactNode}
              </p>
            </div>
          );
        case 'actions':
          return (
            <div className="flex gap-2 justify-center">
              <button type="button" className="bg-blue p-1 rounded-lg">
                <RiEdit2Fill size={20} className="text-brown-lighter" />
              </button>
              <button type="button" className="bg-brown-normal p-1 rounded-lg">
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
