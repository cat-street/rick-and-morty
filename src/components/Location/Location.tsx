import { useParams } from 'react-router-dom';
import {
  Card,
  Container,
  List,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Camera, Public } from '@material-ui/icons';

import useReactQuery from 'hooks/useReactQuery';
import { Location } from 'types';

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

const LocationPage = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useReactQuery<Location>('location', id);

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
              <InfoItem title="Type" icon={Public}>
                {data.type}
              </InfoItem>
              <InfoItem title="Dimension" icon={Camera}>
                {data.dimension}
              </InfoItem>
            </List>
          </div>

          {data.residents.length > 0 && (
            <InfoItem title="Characters">
              <CharactersList itemsArr={data.residents} />
            </InfoItem>
          )}
        </Card>
      )}
    </Container>
  );
};

export default LocationPage;
