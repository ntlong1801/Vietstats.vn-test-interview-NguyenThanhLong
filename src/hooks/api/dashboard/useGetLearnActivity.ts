import { useSuspenseQuery } from '@tanstack/react-query';

import { getLearnActivityAction } from '@/actions/dashboard';
import REACT_QUERY_KEYS from '@/constants/react-query-keys';

const useGetLearnActivity = () => {
  const { data, ...rest } = useSuspenseQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_LEARN_ACTIVITY],
    queryFn: () => getLearnActivityAction(),
  });

  return { data: data.data, ...rest, isSuccess: data.isSuccess };
};

export default useGetLearnActivity;
