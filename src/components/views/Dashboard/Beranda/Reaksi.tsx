import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Skeleton } from '@heroui/react';

const reactionData = [
  { name: 'Sedih', value: 20 },
  { name: 'Sedih', value: 10 },
  { name: 'Sedih', value: 10 },
  { name: 'PS', value: 10 },
  { name: 'AI', value: 30 },
  { name: 'CorelDraw', value: 10 },
  { name: 'InDesign', value: 10 },
  { name: 'Sedih', value: 10 },
  { name: 'Sedih', value: 20 },
  { name: 'Sedih', value: 10 },
  { name: 'Sedih', value: 40 },
];

const Reaksi = () => {
  return (
    <Skeleton isLoaded={true} className="w-full rounded-2xl">
      <div className="flex flex-col items-center p-4 md:p-9 rounded-2xl bg-brown-lighter text-brown-extreme-dark h-full w-full">
        <h1 className="font-medium text-xl mb-4">Reaksi</h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={reactionData}
            margin={{ top: 0, right: 30, bottom: 38 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ dy: 10 }}
              angle={-30}
              textAnchor="end"
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2C2C2C" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Skeleton>
  );
};

export default Reaksi;
