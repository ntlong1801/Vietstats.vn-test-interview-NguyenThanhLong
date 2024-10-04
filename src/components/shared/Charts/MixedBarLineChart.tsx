'use client';

import type { ChartData, ChartTypeRegistry } from 'chart.js';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Chart } from 'react-chartjs-2';

import type { INewClassItem } from '@/types/dashboard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,

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
    y: {
      display: true,
      position: 'left',
      title: {
        display: true,
        text: '(classes)',
        position: 'top',
      },
    },
    y1: {
      display: true,
      position: 'right',
      title: {
        display: true,
        text: '($)',
      },
      grid: {
        drawOnChartArea: false, // only want the grid lines for one axis to show up
      },
    },
  },
};

interface NewClassData {
  newClass: INewClassItem;
}

const MixedBarLineChart = ({ newClass }: NewClassData) => {
  const tempData = Object.values(newClass?.data);

  const data = {
    labels: Object.keys(newClass?.data),
    datasets: [
      {
        label: 'Revenue',
        type: 'line',
        data: tempData.map(item => item[1]),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        borderDash: [10, 10],
        yAxisID: 'y1',
      },
      {
        label: 'Class',
        type: 'bar',
        data: tempData.map(item => item[0]),
        backgroundColor: '#43C378',
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barThickness: 10,
        yAxisID: 'y',
      },
    ],
  };

  return (
    <Chart
      options={{
        ...options,
        interaction: {
          intersect: false,
          mode: 'index',
        },
      }}
      data={data as ChartData<keyof ChartTypeRegistry, number[], string>}
      type="bar"
    />
  );
};

export default MixedBarLineChart;
