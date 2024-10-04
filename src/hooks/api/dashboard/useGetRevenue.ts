import { useSuspenseQuery } from '@tanstack/react-query';

import { getRevenueAction } from '@/actions/dashboard';
import REACT_QUERY_KEYS from '@/constants/react-query-keys';

const useGetRevenue = () => {
  const { data, ...rest } = useSuspenseQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_REVENUE],
    queryFn: () => getRevenueAction(),
  });

  return { data: data.data, ...rest, isSuccess: data.isSuccess };
};

export default useGetRevenue;
