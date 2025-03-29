import TableUI from '@/components/UI/Table';
import { PROGRESS_PENGGUNA_HEADER_TABLE } from './Progress_Pengguna.constants';
import { Key, ReactNode, useCallback, useState, useMemo } from 'react';
import dummyProgressPenggunaData from '@/dummyProgressPengguna.json';
import { Checkbox } from '@heroui/react';

const ProgressPengguna = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;

  const allData = dummyProgressPenggunaData;

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
            <div className="w-[150px] lg:w-full">
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

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="p-4">
      <TableUI
        columns={PROGRESS_PENGGUNA_HEADER_TABLE}
        data={processedData}
        emptyContent="Data tidak ditemukan"
        renderCell={renderCell}
        totalPages={totalPages}
      />
    </div>
  );
};

export default ProgressPengguna;
