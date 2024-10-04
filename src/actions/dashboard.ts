'use server';

import dashboardApi from '@/apis/dashboard';

export const getSummaryAction = async () => {
  try {
    const data = await dashboardApi.getSummary();

    return {
      data,
      isSuccess: true,
    };
  } catch (error) {
    const errorData = error;
    return { errorData, isSuccess: false };
  }
};

export const getClassAction = async () => {
  try {
    const data = await dashboardApi.getClass();

    return {
      data,
      isSuccess: true,
    };
  } catch (error) {
    const errorData = error;
    return { errorData, isSuccess: false };
  }
};

export const getNewClassAction = async () => {
  try {
    const data = await dashboardApi.getNewClass();

    return {
      data,
      isSuccess: true,
    };
  } catch (error) {
    const errorData = error;
    return { errorData, isSuccess: false };
  }
};

export const getLearnActivityAction = async () => {
  try {
    const data = await dashboardApi.getLearnActivity();

    return {
      data,
      isSuccess: true,
    };
  } catch (error) {
    const errorData = error;
    return { errorData, isSuccess: false };
  }
};

export const getRevenueAction = async () => {
  try {
    const data = await dashboardApi.getRevenue();

    return {
      data,
      isSuccess: true,
    };
  } catch (error) {
    const errorData = error;
    return { errorData, isSuccess: false };
  }
};

export const getScheduleAction = async () => {
  try {
    const data = await dashboardApi.getSchedule();

    return {
      data,
      isSuccess: true,
    };
  } catch (error) {
    const errorData = error;
    return { errorData, isSuccess: false };
  }
};
