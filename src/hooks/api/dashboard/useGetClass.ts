import { useSuspenseQuery } from '@tanstack/react-query';

import { getClassAction } from '@/actions/dashboard';
import REACT_QUERY_KEYS from '@/constants/react-query-keys';

const useGetClass = () => {
  const { data, ...rest } = useSuspenseQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_CLASS],
    queryFn: () => getClassAction(),
  });

  return { data: data.data, ...rest, isSuccess: data.isSuccess };
};

export default useGetClass;
