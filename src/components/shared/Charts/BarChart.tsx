import { Bar } from 'react-chartjs-2';

interface BarChartProps {
  chartData: any;
}

export const BarChart = ({ chartData }: BarChartProps) => {
  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
        },
      }}
      height={640}
      width={480}
    />
  );
};
