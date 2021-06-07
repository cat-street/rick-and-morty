import { useQueries } from 'react-query';

import fetchData from 'utils/fetchData';

export default function useMultipleQueries(
  type: string,
  idsArray: string[],
) {
  return useQueries(
    idsArray.map((id) => ({
      queryKey: [type, { type, query: id }],
      queryFn: fetchData,
    })),
  );
}
