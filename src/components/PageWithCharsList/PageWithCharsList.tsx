import { Card, makeStyles, Typography } from '@material-ui/core';

import { ReactNode } from 'react';

import InfoItem from 'components/InfoItem/InfoItem';
import CharactersList from 'components/CharactersList/CharactersList';

interface Props {
  title: string;
  data: string[];
  children: ReactNode;
}

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

const PageWithCharsList = ({ title, data, children }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.card__text}>
        <Typography
          variant="h4"
          component="h2"
          className={classes.card__header}
        >
          {title}
        </Typography>

        {children}
      </div>

      {data.length > 0 && (
        <InfoItem title="Characters">
          <CharactersList itemsArr={data} />
        </InfoItem>
      )}
    </Card>
  );
};

export default PageWithCharsList;
