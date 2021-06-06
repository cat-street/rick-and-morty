import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import { Character, ResponseData } from 'types';

const getData = async ({
  queryKey,
}: {
  queryKey: any;
}): Promise<ResponseData | Character> => {
  const [, { type, query }]: [string, { type: string, query: string }] = queryKey;
  const response = await axios.get(
    `https://rickandmortyapi.com/api/${type}/${query}`,
  );
  return response.data;
};

export default function useReactQuery<Type>(
  type: string,
  query: string,
): UseQueryResult<Type, Error> {
  return useQuery(
    ['query', { type, query }],
    getData,
  );
}
