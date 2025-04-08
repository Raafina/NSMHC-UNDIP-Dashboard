import TableUI from '@/components/UI/Table';
import { REAKSI_HEADER_TABLE } from './Reaksi.contants';
import { Key, ReactNode, useCallback, useEffect, useState } from 'react';
import { Checkbox } from '@heroui/react';
import { useRouter } from 'next/router';
import useReaksi from './useReaksi';
import useChangeUrl from '@/hooks/useChangeUrl';

const Reaksi = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const {
    dataAllReaksi,
    isLoadingAllReaksi,
    isRefetchAllReaksi,
    handleSearch,
  } = useReaksi();

  const { push, query, isReady } = useRouter();
  const { setUrl } = useChangeUrl();

  useEffect(() => {
    if (isReady) {
      setUrl();
    }
  }, [isReady]);

  const renderCell = useCallback(
    (data: Record<string, unknown>, columnKey: Key, index: number) => {
      const cellValue = data[columnKey as keyof typeof data];
      switch (columnKey) {
        case 'no':
          const currentPage = query.page ? parseInt(query.page as string) : 1;
          const itemsPerPage = dataAllReaksi?.per_page || 8;
          const calculatedIndex = (currentPage - 1) * itemsPerPage + index + 1;
          return calculatedIndex;
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
    [push]
  );

  return (
    <section>
      {Object.keys(query).length > 0 && (
        <TableUI
          columns={REAKSI_HEADER_TABLE}
          data={dataAllReaksi?.data_user || []}
          isLoading={isLoadingAllReaksi || isRefetchAllReaksi}
          emptyContent="Data tidak ditemukan"
          renderCell={renderCell}
          totalPages={dataAllReaksi?.last_page}
          setSearchQuery={setSearchQuery}
          onClickButtonTopContent={() => handleSearch(searchQuery)}
        />
      )}
    </section>
  );
};

export default Reaksi;
