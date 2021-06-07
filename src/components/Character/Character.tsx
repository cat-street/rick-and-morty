import { Link, useParams } from 'react-router-dom';
import {
  Card,
  CardMedia,
  Container,
  List,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  Android,
  BugReport,
  Face,
  InsertEmoticon,
  Language,
  LocationOn,
} from '@material-ui/icons';

import useReactQuery from 'hooks/useReactQuery';
import { Character } from 'types';

import Loader from 'components/Loader/Loader';
import CharacterInfoItem from 'components/CharacterInfoItem/CharacterInfoItem';

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
    borderBottom: '1px solid #ddd',
  },
  card__text: {
    flex: 1,
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

          <div className={classes.card__text}>
            <Typography
              variant="h3"
              component="h2"
              className={classes.card__header}
            >
              {data.name}
            </Typography>

            <List>
              <CharacterInfoItem text={`Gender: ${data.gender}`} icon={Face} />
              <CharacterInfoItem text={`Status: ${data.status}`} icon={InsertEmoticon} />
              <CharacterInfoItem text={`Species: ${data.species}`} icon={Android} />
              {data.type && <CharacterInfoItem text={`Type: ${data.type}`} icon={BugReport} />}
              {data.origin.url ? (
                <Link to={`/location/${data.origin.url.replace(/.*\//, '')}`}>
                  <CharacterInfoItem text={`Origin: ${data.origin.name}`} icon={Language} />
                </Link>
              ) : (
                <CharacterInfoItem text={`Origin: ${data.origin.name}`} icon={Language} />
              )}
              <CharacterInfoItem text={`Location: ${data.location.name}`} icon={LocationOn} />
            </List>
          </div>
        </Card>
      )}
    </Container>
  );
};

export default CharacterPage;
