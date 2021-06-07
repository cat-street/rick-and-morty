import { useParams } from 'react-router-dom';
import {
  Card,
  CardMedia,
  Container,
  Link,
  List,
  ListItem,
  ListItemText,
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
              variant="h4"
              component="h2"
              className={classes.card__header}
            >
              {data.name}
            </Typography>

            <List>
              <CharacterInfoItem title="Gender" icon={Face}>
                {data.gender}
              </CharacterInfoItem>
              <CharacterInfoItem title="Status" icon={InsertEmoticon}>
                {data.status}
              </CharacterInfoItem>
              <CharacterInfoItem title="Species" icon={Android}>
                {data.species}
              </CharacterInfoItem>
              {data.type && (
                <CharacterInfoItem title="Type" icon={BugReport}>
                  {data.type}
                </CharacterInfoItem>
              )}

              <CharacterInfoItem title="Origin" icon={Language}>
                {data.origin.url ? (
                  <Link
                    href={`/location/${data.origin.url.replace(/.*\//, '')}`}
                  >
                    {data.origin.name}
                  </Link>
                ) : (
                  data.origin.name
                )}
              </CharacterInfoItem>

              <CharacterInfoItem title="Location" icon={LocationOn}>
                {data.location.url ? (
                  <Link
                    href={`/location/${data.location.url.replace(/.*\//, '')}`}
                  >
                    {data.location.name}
                  </Link>
                ) : (
                  data.location.name
                )}
              </CharacterInfoItem>
            </List>
          </div>

          <CharacterInfoItem title="Episodes" icon={Language}>
            {data.episode.map((el) => (
              <Link
                href={`/episode/${el.replace(/.*\//, '')}`}
              >
                {`${el.replace(/.*\//, '')}`}
              </Link>
            ))}
          </CharacterInfoItem>
        </Card>
      )}
    </Container>
  );
};

export default CharacterPage;
