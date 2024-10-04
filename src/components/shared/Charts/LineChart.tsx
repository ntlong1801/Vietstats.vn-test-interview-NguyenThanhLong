import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

import type { ILearnActivityItem } from '@/types/dashboard';

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface LearnActivityProps {
  learnActivity: ILearnActivityItem[];
}

const LineChart = ({ learnActivity }: LearnActivityProps) => {
  const data = {
    labels: Object.keys(learnActivity?.[0]?.data),
    datasets: [
      {
        label: 'This month',
        data: Object.values(learnActivity?.[1]?.data),
        borderColor: '#F4450E',
        backgroundColor: '#F4450E',
        fill: false,
        pointStyle: 'dash',
      },
      {
        label: 'Previous month',
        data: Object.values(learnActivity?.[0]?.data),
        borderColor: '#9804DE',
        backgroundColor: '#9804DE',
        fill: false,
        pointStyle: 'dash',
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
      }}
      height={100}
    />
  );
};

export default LineChart;
