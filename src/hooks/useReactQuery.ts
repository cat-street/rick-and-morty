import axios from 'axios';
import { useQuery } from 'react-query';

import { ResponseData } from 'types';

const getData = async ({ queryKey }: any): Promise<ResponseData> => {
  const [, { type, query }] = queryKey;
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/${type}/${query}`,
  );
  return data;
};

export default function useReactQuery(type: string, query: string) {
  return useQuery<ResponseData, Error>(
    ['query', { type, query }],
    getData,
  );
}
