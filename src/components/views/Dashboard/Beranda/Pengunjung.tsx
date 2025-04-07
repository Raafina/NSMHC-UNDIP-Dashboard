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
import { useMemo } from 'react';

const generateRandomColor = (index: number): string => {
  const hue = (index * 137.5) % 360;

  const saturation = 65 + Math.random() * 20;
  const lightness = 45 + Math.random() * 10;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const Pengunjung = (props: any) => {
  const { dataUserVisitorSummary } = props;

  const years = useMemo(() => {
    if (!dataUserVisitorSummary || dataUserVisitorSummary.length === 0)
      return [];

    const sample = dataUserVisitorSummary[0];
    return Object.keys(sample)
      .filter((key) => key !== 'name' && !isNaN(Number(key)))
      .sort((a, b) => parseInt(a) - parseInt(b));
  }, [dataUserVisitorSummary]);

  const yearColors = useMemo(() => {
    const colors: Record<string, string> = {};
    years.forEach((year, index) => {
      colors[year] = generateRandomColor(index);
    });
    return colors;
  }, [years]);

  const getLineStyle = (index: number) => {
    const styles = ['', '5 5', '10 5', '5 1 5'];
    return index % 4 === 0 ? '' : styles[index % styles.length];
  };

  return (
    <Skeleton
      isLoaded={!!dataUserVisitorSummary}
      className="w-full rounded-2xl">
      <div className="flex flex-col items-center p-4 md:p-9 rounded-2xl bg-brown-lighter text-brown-extreme-dark h-full w-full">
        <h1 className="font-medium text-xl mb-4">Pengunjung Aplikasi</h1>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={dataUserVisitorSummary}
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
            <Tooltip
              formatter={(value, name) => [`${value}`, `Tahun ${name}`]}
              labelFormatter={(label) => `${label}`}
            />
            {years.map((year, index) => (
              <Line
                key={year}
                type="monotone"
                dataKey={year}
                stroke={yearColors[year]}
                name={year}
                strokeWidth={2}
                strokeDasharray={getLineStyle(index)}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Skeleton>
  );
};

export default Pengunjung;
