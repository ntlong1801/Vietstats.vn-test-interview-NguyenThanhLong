import { useSuspenseQuery } from '@tanstack/react-query';

import { getNewClassAction } from '@/actions/dashboard';
import REACT_QUERY_KEYS from '@/constants/react-query-keys';

const useGetNewClass = () => {
  const { data, ...rest } = useSuspenseQuery({
    queryKey: [REACT_QUERY_KEYS.DASHBOARD.GET_NEW_CLASS],
    queryFn: () => getNewClassAction(),
  });

  return { data: data.data, ...rest, isSuccess: data.isSuccess };
};

export default useGetNewClass;
