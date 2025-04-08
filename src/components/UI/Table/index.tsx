import useChangeUrl from '@/hooks/useChangeUrl';
import { useState } from 'react';
import { cn } from '@/utils/cn';
import {
  Pagination,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/react';
import { Input } from '@heroui/react';
import { Key, ReactNode, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';

interface PropTypes {
  buttonTopContentLabel?: string;
  columns: Record<string, unknown>[];
  data: Record<string, unknown>[];
  emptyContent: string;
  isLoading?: boolean;
  currentPage?: number;
  onClickButtonTopContent?: () => void;
  renderCell: (
    item: Record<string, unknown>,
    columnKey: Key,
    index: number
  ) => ReactNode;
  showSearch?: boolean;
  totalPages: number;
  setSearchQuery: (query: string) => void;
}

const TableUI = (props: PropTypes) => {
  const {
    buttonTopContentLabel,
    columns,
    data,
    emptyContent,
    isLoading,
    onClickButtonTopContent,
    renderCell,
    setSearchQuery,
    totalPages,
  } = props;

  const { currentPage, handleChangePage } = useChangeUrl();

  const TopContent = useMemo(() => {
    return (
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Masukkan email"
          radius="full"
          variant="bordered"
          autoComplete="off"
          onChange={(e) => setSearchQuery(e.target.value)}
          classNames={{
            label: 'font-semibold !text-primary !top-[26px] !left-2 ',
            inputWrapper: 'border-2 border-primary bg-white',
            helperWrapper: '!py-0 !ps-2.5',
            errorMessage: 'text-small',
            base: '!py-1',
          }}
        />
        <button
          className="rounded-full bg-primary hover:bg-opacity-90 p-4"
          onClick={onClickButtonTopContent}>
          <FaSearch className="text-brown-light " />
        </button>
      </div>
    );
  }, [buttonTopContentLabel, onClickButtonTopContent]);

  const BottomContent = useMemo(() => {
    return (
      <div className="flex items-center justify-center md:justify-end ">
        {totalPages > 1 && (
          <Pagination
            isCompact
            showControls
            color="primary"
            page={Number(currentPage)}
            total={totalPages}
            onChange={handleChangePage}
          />
        )}
      </div>
    );
  }, [totalPages, currentPage, handleChangePage]);

  return (
    <Table
      aria-label="Data Table"
      bottomContent={BottomContent}
      classNames={{
        wrapper: cn('border-primary border-2 rounded-3xl', {
          'overflow-x-hidden': isLoading,
        }),
        th: 'text-left font-medium p-2',
      }}
      topContent={TopContent}
      topContentPlacement="outside"
      bottomContentPlacement="outside">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid as Key}
            className={cn('text-center', {
              'text-start': column.key === 'name',
            })}>
            {column.name as string}
          </TableColumn>
        )}
      </TableHeader>

      <TableBody
        emptyContent={emptyContent}
        isLoading={isLoading}
        items={data}
        loadingContent={
          <div className="flex h-full w-full items-center justify-center bg-foreground-700/30 backdrop-blur-sm">
            <Spinner color="primary" />
          </div>
        }>
        {(item) => (
          <TableRow key={item._id as Key}>
            {(columnKey) => (
              <TableCell
                className={cn('text-center', {
                  'text-start': columnKey === 'name',
                })}>
                {renderCell(item, columnKey, data.indexOf(item))}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableUI;
