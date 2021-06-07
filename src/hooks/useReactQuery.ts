import { useQuery, UseQueryResult } from 'react-query';

import fetchData from 'utils/fetchData';

export default function useReactQuery<Type>(
  type: string,
  query: string,
): UseQueryResult<Type, Error> {
  return useQuery(
    [type, { type, query }],
    fetchData,
  );
}
