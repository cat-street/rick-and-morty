import { useLocation } from 'react-router-dom';
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

import useReactQuery from 'hooks/useReactQuery';
import { Character } from 'types';

const useStyles = makeStyles({
  card__image: {
    height: '300px',
  },
});

const Characters = () => {
  const classes = useStyles();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = query.get('page') || '1';

  const { isLoading, data } = useReactQuery('character', `page=${page}`);
  const characters = data?.results as Character[];

  return (
    <main>
      <Container>
        <Grid container spacing={2}>
          {characters &&
            characters.map((el) => (
              <Grid item xs={12} sm={4} lg={3} key={el.id}>
                <Card variant="outlined">
                  <CardActionArea>
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
      </Container>
    </main>
  );
};

export default Characters;
