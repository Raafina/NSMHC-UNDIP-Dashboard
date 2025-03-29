// import useChangeUrl from '@/hooks/useChangeUrl';
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
import InputSearch from '../InputSearch';
import { ChangeEvent, Key, ReactNode, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';

interface PropTypes {
  buttonTopContentLabel?: string;
  columns: Record<string, unknown>[];
  data: Record<string, unknown>[];
  emptyContent: string;
  isLoading?: boolean;
  onClickButtonTopContent?: () => void;
  renderCell: (item: Record<string, unknown>, columnKey: Key) => ReactNode;
  showLimit?: boolean;
  showSearch?: boolean;
  totalPages: number;
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
    showLimit = true,
    showSearch = true,
    totalPages,
  } = props;

  const TopContent = useMemo(() => {
    return (
      <div className="flex gap-2">
        <InputSearch />
        <button className="rounded-full bg-primary hover:bg-opacity-90 p-4">
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
            page={1}
            total={2}
            onChange={() => {}}
            loop
          />
        )}
      </div>
    );
  }, [totalPages]);

  return (
    <Table
      bottomContent={BottomContent}
      classNames={{
        wrapper: 'border-primary border-2 rounded-3xl',
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
            <Spinner color="danger" />
          </div>
        }>
        {(item) => (
          <TableRow key={item._id as Key}>
            {(columnKey) => (
              <TableCell
                className={cn('text-center', {
                  'text-start': columnKey === 'name',
                })}>
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableUI;
