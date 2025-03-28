import TableUI from '@/components/UI/Table';
import { REAKSI_HEADER_TABLE } from './Reaksi.contants';
import { Key, ReactNode, useCallback } from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';

const Reaksi = () => {
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
        default:
          return cellValue as ReactNode;
      }
    },
    []
  );

  return (
    <div className="p-4">
      <TableUI
        columns={REAKSI_HEADER_TABLE}
        data={[]}
        emptyContent="Data tidak ditemukan"
        renderCell={renderCell}
        totalPages={10}
      />
    </div>
  );
};

export default Reaksi;
