import { useParams } from 'react-router-dom';
import { Card, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';

import useReactQuery from 'hooks/useReactQuery';
import { Character } from 'types';
import Loader from 'components/Loader/Loader';

const useStyles = makeStyles({
  card: {
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: '20px',
  },
  card__image: {
    maxWidth: '300px',
    width: '100%',
    height: '300px',
  },
  card__header: {
    flex: 1,
    borderBottom: '1px solid #ddd',
  },
});

const CharacterPage = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useReactQuery<Character>('character', id);

  return (
    <Container>
      {isLoading || !data ? (
        <Loader />
      ) : (
        <Card className={classes.card}>
          <CardMedia
            className={classes.card__image}
            image={data.image}
            title={data.name}
          />
          <Typography variant="h3" component="h2" className={classes.card__header}>
            {data.name}
          </Typography>
        </Card>
      )}
    </Container>
  );
};

export default CharacterPage;
