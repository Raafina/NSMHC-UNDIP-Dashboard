import TableUI from '@/components/UI/Table';
import { REAKSI_HEADER_TABLE } from './Reaksi.contants';
import { Key, ReactNode, useCallback, useMemo, useState } from 'react';
import dummyReaksiData from '@/dummyReaksi.json';
import { Checkbox } from '@heroui/react';

const Reaksi = () => {
  const renderCell = useCallback(
    (data: Record<string, unknown>, columnKey: Key) => {
      const cellValue = data[columnKey as keyof typeof data];
      switch (columnKey) {
        case 'no':
          return (
            <div className="w-[50px] lg:w-full">{cellValue as ReactNode}</div>
          );
        case 'name':
          return (
            <div className="w-[150px] lg:w-full ">
              <p className="truncate lg:truncate-none">
                {cellValue as ReactNode}
              </p>
            </div>
          );
        default:
          return (
            <div>
              <Checkbox
                isSelected={(cellValue as ReactNode) === true}
                isReadOnly></Checkbox>
            </div>
          );
      }
    },
    []
  );

  return (
    <section>
      <TableUI
        columns={REAKSI_HEADER_TABLE}
        data={dummyReaksiData}
        emptyContent="Data tidak ditemukan"
        renderCell={renderCell}
        totalPages={2}
        setSearchQuery={() => {}}
      />
    </section>
  );
};

export default Reaksi;
