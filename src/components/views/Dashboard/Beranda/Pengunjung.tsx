import { Skeleton } from '@heroui/react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const visitorData = [
  { name: 'Januari', '2024': 34, '2025': 63, '2026': 28 },
  { name: 'Februari', '2024': 87, '2025': 22, '2026': 44 },
  { name: 'Maret', '2024': 53, '2025': 38, '2026': 70 },
  { name: 'April', '2024': 65, '2025': 17, '2026': 81 },
  { name: 'Mei', '2024': 48, '2025': 55, '2026': 29 },
  { name: 'Juni', '2024': 72, '2025': 34, '2026': 66 },
  { name: 'Juli', '2024': 21, '2025': 80, '2026': 45 },
  { name: 'Agustus', '2024': 90, '2025': 58, '2026': 61 },
  { name: 'September', '2024': 39, '2025': 73, '2026': 52 },
  { name: 'Oktober', '2024': 46, '2025': 68, '2026': 27 },
  { name: 'November', '2024': 55, '2025': 40, '2026': 37 },
  { name: 'Desember', '2024': 63, '2025': 49, '2026': 88 },
];

const Pengunjung = () => {
  return (
    <Skeleton isLoaded={true} className="w-full rounded-2xl">
      <div className="flex flex-col items-center p-4 md:p-9 rounded-2xl bg-brown-lighter text-brown-extreme-dark h-full w-full">
        <h1 className="font-medium text-xl mb-4">Pengunjung Aplikasi</h1>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={visitorData}
            margin={{ top: 0, right: 30, bottom: 43 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <Legend verticalAlign="top" height={29} />
            <XAxis
              dataKey="name"
              tick={{ dy: 10 }}
              angle={-30}
              textAnchor="end"
            />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="2024" stroke="#F2A263" />
            <Line type="monotone" dataKey="2025" stroke="#8D4D24" />
            <Line type="monotone" dataKey="2026" stroke="#2C2C2C" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Skeleton>
  );
};

export default Pengunjung;
