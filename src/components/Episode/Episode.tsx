import { useParams } from 'react-router-dom';
import {
  Card,
  Container,
  List,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Event, Theaters } from '@material-ui/icons';

import useReactQuery from 'hooks/useReactQuery';
import { Episode } from 'types';

import Loader from 'components/Loader/Loader';
import InfoItem from 'components/InfoItem/InfoItem';
import CharactersList from 'components/CharactersList/CharactersList';

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

const EpisodePage = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useReactQuery<Episode>('episode', id);

  return (
    <Container>
      {isLoading || !data ? (
        <Loader />
      ) : (
        <Card className={classes.card}>
          <div className={classes.card__text}>
            <Typography
              variant="h4"
              component="h2"
              className={classes.card__header}
            >
              {data.name}
            </Typography>

            <List>
              <InfoItem title="Episode" icon={Theaters}>
                {data.episode}
              </InfoItem>
              <InfoItem title="Air date" icon={Event}>
                {data.air_date}
              </InfoItem>
            </List>
          </div>

          {data.characters.length > 0 && (
            <InfoItem title="Characters">
              <CharactersList itemsArr={data.characters} />
            </InfoItem>
          )}
        </Card>
      )}
    </Container>
  );
};

export default EpisodePage;
