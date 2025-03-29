import TableUI from '@/components/UI/Table';
import { REAKSI_HEADER_TABLE } from './Reaksi.contants';
import { Key, ReactNode, useCallback, useMemo, useState } from 'react';
import dummyReaksiData from '@/dummyReaksi.json';
import { Checkbox } from '@heroui/react';

const Reaksi = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const allData = dummyReaksiData;
  const startIndex = (page - 1) * perPage;

  const processedData = useMemo(() => {
    return allData
      .slice(startIndex, startIndex + perPage)
      .map((item, index) => {
        return {
          ...item,
          no: startIndex + index + 1,
        };
      });
  }, [allData, startIndex, perPage]);

  const totalPages = Math.ceil(allData.length / perPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const renderCell = useCallback(
    (category: Record<string, unknown>, columnKey: Key) => {
      const cellValue = category[columnKey as keyof typeof category];
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
    <div className="p-4">
      <TableUI
        columns={REAKSI_HEADER_TABLE}
        data={processedData}
        emptyContent="Data tidak ditemukan"
        renderCell={renderCell}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Reaksi;
