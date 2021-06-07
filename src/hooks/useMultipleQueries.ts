import { useQueries } from 'react-query';

import fetchData from 'utils/fetchData';

export default function useMultipleQueries(
  idsArray: string[],
  type: string,
) {
  return useQueries(
    idsArray.map((id) => ({
      queryKey: [type, { type, id }],
      queryFn: fetchData,
    })),
  );
}
