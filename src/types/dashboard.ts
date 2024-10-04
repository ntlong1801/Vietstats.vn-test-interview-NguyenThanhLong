import type { Trend } from './common';

export interface ISummaryItem {
  id: string;
  name: string;
  quantity: number;
  backgroundColor: string;
}

export interface ITopInfoBlockProps {
  summaryData: ISummaryItem[];
}

export interface IClassItem {
  name: string;
  quantity: number;
  trend: Trend | null;
  percent: string | null;
}

export interface IRightInfoBlockProps {
  classData: IClassItem[];
}

export interface INewClassItem {
  date: string;
  data: {
    [key: string]: [number, number];
  };
}

export interface ILearnActivityItem {
  month: string;
  data: {
    [key: string]: number;
  };
}

export interface IActivitiItem {
  time: string;
  subject: string;
  tutor: string;
  student: string;
  backgroundColor: string;
}

export interface IScheduleItem {
  date: string;
  activities: IActivitiItem[];
}

export interface IRevenue {
  id: string;
  date: string;
  quantity: number;
  trend: Trend | null;
  percent: string | null;
}
