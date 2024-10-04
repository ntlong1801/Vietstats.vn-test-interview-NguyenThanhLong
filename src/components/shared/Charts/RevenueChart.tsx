'use client';

import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

import type { IRevenue } from '@/types/dashboard';

import { BarChart } from './BarChart';

Chart.register(CategoryScale);

interface IRevenueChartProps {
  data: IRevenue[];
}

export default function RevenueChart({ data }: IRevenueChartProps) {
  const chartData = {
    labels: ['Yesterday', 'Today'],
    datasets: [
      {
        label: 'Revenue',
        data: data.map((item: { quantity: any }) => item.quantity),
        backgroundColor: ['#377DFF'],
        border: 'none',
      },
    ],
  };

  return <BarChart chartData={chartData} />;
}
