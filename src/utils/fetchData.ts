import axios from 'axios';
import { Character, ResponseData } from 'types';

const fetchData = async ({
  queryKey,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  queryKey: any;
}): Promise<ResponseData | Character> => {
  const [, { type, query }]: [string, { type: string, query: string }] = queryKey;
  const response = await axios.get(
    `https://rickandmortyapi.com/api/${type}/${query}`,
  );
  return response.data;
};

export default fetchData;
