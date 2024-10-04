import { useSuspenseQuery } from '@tanstack/react-query';

import { getSummaryAction } from '@/actions/dashboard';
import REACT_QUERY_KEYS from '@/constants/react-query-keys';

const useGetSummary = () => {
  const { data, ...rest } = useSuspenseQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_SUMMARY],
    queryFn: () => getSummaryAction(),
  });

  return { data: data.data, ...rest, isSuccess: data.isSuccess };
};

export default useGetSummary;
