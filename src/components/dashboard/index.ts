import dynamic from 'next/dynamic';

export const TopInfoBlock = dynamic(
  () => import('@/components/dashboard/TopInfoBlock'),
);
export const ScheduleBlock = dynamic(
  () => import('@/components/dashboard/ScheduleBlock'),
);
export const CalendarCustom = dynamic(
  () => import('@/components/shared/Calendar/Calendar'),
);
export const MixedBarLineChart = dynamic(
  () => import('@/components/shared/Charts/MixedBarLineChart'),
);
export const RevenueChart = dynamic(
  () => import('@/components/shared/Charts/RevenueChart'),
);
export const LineChart = dynamic(
  () => import('@/components/shared/Charts/LineChart'),
);
export const RightInfoBlock = dynamic(
  () => import('@/components/dashboard/RightInfoBlock'),
);
