import TableUI from '@/components/UI/Table';
import { PROGRESS_PENGGUNA_HEADER_TABLE } from './ProgressPengguna.constants';
import { Key, ReactNode, useCallback, useEffect, useState } from 'react';
import { Checkbox } from '@heroui/react';
import { useRouter } from 'next/router';
import useProgressPengguna from './useProgressPengguna';
import useChangeUrl from '@/hooks/useChangeUrl';

const ProgressPengguna = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const {
    dataAllProgressPengguna,
    isLoadingAllProgressPengguna,
    isRefetchAllProgressPengguna,
    handleSearch,
  } = useProgressPengguna();

  const { push, query, isReady } = useRouter();
  const { setUrl } = useChangeUrl();

  useEffect(() => {
    if (isReady) {
      setUrl();
    }
  }, [isReady]);

  const renderCell = useCallback(
    (data: Record<string, unknown>, columnKey: Key) => {
      const cellValue = data[columnKey as keyof typeof data];

      switch (columnKey) {
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
    [push]
  );
  return (
    <section>
      {Object.keys(query).length > 0 && (
        <TableUI
          columns={PROGRESS_PENGGUNA_HEADER_TABLE}
          data={dataAllProgressPengguna?.data_user || []}
          isLoading={
            isLoadingAllProgressPengguna || isRefetchAllProgressPengguna
          }
          emptyContent="Data tidak ditemukan"
          renderCell={renderCell}
          totalPages={dataAllProgressPengguna?.last_page}
          setSearchQuery={setSearchQuery}
          onClickButtonTopContent={() => handleSearch(searchQuery)}
        />
      )}
    </section>
  );
};

export default ProgressPengguna;
