import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import {
  getClassAction,
  getLearnActivityAction,
  getNewClassAction,
  getRevenueAction,
  getScheduleAction,
  getSummaryAction,
} from '@/actions/dashboard';
import { DashboardPage } from '@/appPage';
import REACT_QUERY_KEYS from '@/constants/react-query-keys';
import { getQueryClient } from '@/libs/react-query';

export default function Home() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_SUMMARY],
    queryFn: () => getSummaryAction(),
  });

  queryClient.prefetchQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_REVENUE],
    queryFn: () => getRevenueAction(),
  });
  queryClient.prefetchQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_CLASS],
    queryFn: () => getClassAction(),
  });

  queryClient.prefetchQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_SCHEDULE],
    queryFn: () => getScheduleAction(),
  });

  queryClient.prefetchQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_NEW_CLASS],
    queryFn: () => getNewClassAction(),
  });

  queryClient.prefetchQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_LEARN_ACTIVITY],
    queryFn: () => getLearnActivityAction(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardPage />
    </HydrationBoundary>
  );
}
