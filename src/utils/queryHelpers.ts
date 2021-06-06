import { QueryParams } from 'types';

function buildQueryString(queryParams: QueryParams) {
  const queryArr: string[] = [];
  Object.keys(queryParams).forEach((el) => {
    if (queryParams[el] && queryParams[el] !== 'all') {
      queryArr.push(`${el}=${queryParams[el]}`);
    }
  });
  return queryArr.length > 0 ? `?${queryArr.join('&')}` : '';
}

function buildPaginationString(page: number, queryParams: QueryParams) {
  return page === 1
    ? buildQueryString({ ...queryParams, page: '' })
    : buildQueryString({ ...queryParams, page });
}

export { buildQueryString, buildPaginationString };
