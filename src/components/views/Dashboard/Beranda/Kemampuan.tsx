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

const reactionData = [
  { name: 'A', yes: 20, no: 8 },
  { name: 'B', yes: 15, no: 12 },
  { name: 'C', yes: 25, no: 5 },
  { name: 'D', yes: 10, no: 18 },
];

const dataWithTotal = reactionData.map((item) => ({
  ...item,
  total: item.yes + item.no,
}));
const maxTotal = Math.max(...dataWithTotal.map((item) => item.total));

const Kemampuan = () => {
  return (
    <Skeleton isLoaded={true} className="w-full rounded-2xl">
      <div className="flex flex-col items-center p-4 md:p-9 rounded-2xl bg-brown-lighter text-brown-extreme-dark h-full w-full">
        <h2 className="text-xl font-medium mb-4">Kemampuan</h2>
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
      </div>
    </Skeleton>
  );
};

export default Kemampuan;
