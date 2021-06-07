import { useParams } from 'react-router-dom';
import {
  Container,
  List,
} from '@material-ui/core';
import { Camera, Public } from '@material-ui/icons';

import useReactQuery from 'hooks/useReactQuery';
import { Location } from 'types';

import Loader from 'components/Loader/Loader';
import InfoItem from 'components/InfoItem/InfoItem';
import PageWithCharsList from 'components/PageWithCharsList/PageWithCharsList';

const LocationPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useReactQuery<Location>('location', id);

  return (
    <Container>
      {isLoading || !data ? (
        <Loader />
      ) : (
        <PageWithCharsList title={data.name} data={data.residents}>
          <List>
            <InfoItem title="Type" icon={Public}>
              {data.type}
            </InfoItem>
            <InfoItem title="Dimension" icon={Camera}>
              {data.dimension}
            </InfoItem>
          </List>
        </PageWithCharsList>
      )}
    </Container>
  );
};

export default LocationPage;
