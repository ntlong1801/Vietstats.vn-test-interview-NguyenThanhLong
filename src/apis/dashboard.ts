import type {
  IClassItem,
  ILearnActivityItem,
  INewClassItem,
  IRevenue,
  IScheduleItem,
  ISummaryItem,
} from '@/types/dashboard';

import axiosInstance from './axios-instance';

const dashboardApi = {
  getSummary: (): Promise<ISummaryItem[]> => axiosInstance.get('summary'),
  getClass: (): Promise<IClassItem[]> => axiosInstance.get('class'),
  getNewClass: (): Promise<INewClassItem[]> => axiosInstance.get('new-class'),
  getRevenue: (): Promise<IRevenue[]> => axiosInstance.get('revenue'),
  getLearnActivity: (): Promise<ILearnActivityItem[]> =>
    axiosInstance.get('learn-activity'),
  getSchedule: (): Promise<IScheduleItem[]> => axiosInstance.get('schedule'),
};

export default dashboardApi;
