import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import { Skeleton } from '@heroui/react';

const Kemampuan = (props: any) => {
  const { dataUserAnswerSummary } = props;

  const dataWithTotal =
    dataUserAnswerSummary?.map((item: any) => ({
      ...item,
      total: item.yes + item.no,
    })) ?? [];

  const maxTotal =
    dataWithTotal.length > 0
      ? Math.max(...dataWithTotal.map((item: any) => item.total))
      : 0;

  return (
    <Skeleton isLoaded={!!dataUserAnswerSummary} className="w-full rounded-2xl">
      <div className="flex flex-col  p-4 md:p-9 rounded-2xl bg-brown-lighter text-brown-extreme-dark h-full w-full">
        <h2 className="text-xl text-center font-medium mb-4">Kemampuan</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataWithTotal} margin={{ top: 0, right: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ dy: 10 }} />
            <YAxis domain={[0, maxTotal]} />
            <Tooltip formatter={(value, name) => [value, name]} />
            <Legend verticalAlign="top" height={29} />
            <Bar dataKey="yes" fill="#2C2C2C" name="Sudah" stackId="stack" />
            <Bar dataKey="no" fill="#AFAFAF" name="Belum" stackId="stack" />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex flex-col mt-4 text-2xl">
          <h3 className="text-medium md:text-lg font-medium">Keterangan </h3>
          {dataUserAnswerSummary?.map((data: any, index: number) => {
            return (
              <p key={index} className="text-sm md:text-base text-left">
                {data.name}. {data.question}
              </p>
            );
          })}
        </div>
      </div>
    </Skeleton>
  );
};

export default Kemampuan;
