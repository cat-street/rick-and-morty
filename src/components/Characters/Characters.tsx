import { useEffect } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import { QueryParams, ResponseData } from 'types';
import useReactQuery from 'hooks/useReactQuery';
import { buildPaginationString, buildQueryString } from 'utils/queryHelpers';

import Loader from 'components/Loader/Loader';
import Filter from 'components/Filter/Filter';
import NoResults from 'components/NoResults/NoResults';

const useStyles = makeStyles({
  main: {
    padding: '20px 0 30px',
  },
  card__image: {
    height: '300px',
  },
  pagination: {
    paddingTop: '20px',
    '& ul': {
      justifyContent: 'center',
    },
  },
});

const Characters = () => {
  const classes = useStyles();
  const { pathname, search } = useLocation();
  const history = useHistory();

  const query = new URLSearchParams(search);
  const queryParams: QueryParams = {
    page: '',
    name: '',
    species: '',
    status: 'all',
    gender: 'all',
  };
  Object.keys(queryParams).forEach((el) => {
    queryParams[el] = query.get(el) || '';
  });
  const queryString = buildQueryString(queryParams);
  const { isLoading, data } = useReactQuery<ResponseData>('character', queryString);
  const characters = data?.results;

  const handleCardClick = (id: number) => {
    history.push(`/character/${id}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter queryParams={queryParams} />
          {!characters ? (
            <NoResults />
          ) : (
            <>
              <Grid container spacing={2}>
                {characters.map((el) => (
                  <Grid item xs={12} sm={4} lg={3} key={el.id}>
                    <Card variant="outlined">
                      <CardActionArea onClick={() => handleCardClick(el.id)}>
                        <CardMedia
                          className={classes.card__image}
                          image={el.image}
                          title={el.name}
                        />
                        <CardContent>
                          <Typography variant="h5" component="h2">
                            {el.name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Pagination
                page={queryParams.page ? +queryParams.page : 1}
                count={data?.info.pages}
                variant="outlined"
                className={classes.pagination}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    to={buildPaginationString(item.page, queryParams)}
                    {...item}
                  />
                )}
              />
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Characters;
