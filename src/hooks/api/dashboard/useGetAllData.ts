import useGetClass from './useGetClass';
import useGetLearnActivity from './useGetLearnActivity';
import useGetNewClass from './useGetNewClass';
import useGetRevenue from './useGetRevenue';
import useGetSchedule from './useGetSchedule';
import useGetSummary from './useGetSummary';

const useGetAllData = () => {
  const { data: summaryData, isSuccess: isSummaryDataSuccess } =
    useGetSummary();
  const { data: classData, isSuccess: isClassDataSuccess } = useGetClass();
  const { data: newClassData, isSuccess: isNewClassDataSuccess } =
    useGetNewClass();
  const { data: learnActivityData, isSuccess: isLearnActivityDataSuccess } =
    useGetLearnActivity();
  const { data: revenueData, isSuccess: isRevenueDataSuccess } =
    useGetRevenue();
  const { data: scheduleData, isSuccess: isScheduleDataSuccess } =
    useGetSchedule();

  return {
    summaryData,
    classData,
    newClassData,
    learnActivityData,
    revenueData,
    scheduleData,
    isSummaryDataSuccess,
    isClassDataSuccess,
    isNewClassDataSuccess,
    isLearnActivityDataSuccess,
    isRevenueDataSuccess,
    isScheduleDataSuccess,
  };
};

export default useGetAllData;
