import { useParams } from 'react-router-dom';
import {
  Container,
  List,
} from '@material-ui/core';
import { Event, Theaters } from '@material-ui/icons';

import useReactQuery from 'hooks/useReactQuery';
import { Episode } from 'types';

import Loader from 'components/Loader/Loader';
import InfoItem from 'components/InfoItem/InfoItem';
import PageWithCharsList from 'components/PageWithCharsList/PageWithCharsList';

const EpisodePage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useReactQuery<Episode>('episode', id);

  return (
    <Container>
      {isLoading || !data ? (
        <Loader />
      ) : (
        <PageWithCharsList title={data.name} data={data.characters}>
          <List>
            <InfoItem title="Episode" icon={Theaters}>
              {data.episode}
            </InfoItem>
            <InfoItem title="Air date" icon={Event}>
              {data.air_date}
            </InfoItem>
          </List>
        </PageWithCharsList>
      )}
    </Container>
  );
};

export default EpisodePage;
