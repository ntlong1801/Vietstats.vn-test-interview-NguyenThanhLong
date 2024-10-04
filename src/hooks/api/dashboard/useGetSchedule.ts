import { useSuspenseQuery } from '@tanstack/react-query';

import { getScheduleAction } from '@/actions/dashboard';
import REACT_QUERY_KEYS from '@/constants/react-query-keys';

const useGetSchedule = () => {
  const { data, ...rest } = useSuspenseQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_SCHEDULE],
    queryFn: () => getScheduleAction(),
  });

  return { data: data.data, ...rest, isSuccess: data.isSuccess };
};

export default useGetSchedule;
