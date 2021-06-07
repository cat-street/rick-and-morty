import { Avatar, Link, List, ListItem, makeStyles } from '@material-ui/core';

import useMultipleQueries from 'hooks/useMultipleQueries';

interface Props {
  itemsArr: string[];
}

const useStyles = makeStyles({
  card__list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '5px',
  },
  'card__list-item': {
    flex: 0,
    padding: 0,
  },
  card__avatar: {
    width: '64px',
    height: '64px',
    '&:hover': {
      backgroundColor: '#f50057',
    },
    '@media (min-width:425px)': {
      width: '88px',
      height: '88px',
    },
  },
});

const CharactersList = ({ itemsArr }: Props) => {
  const classes = useStyles();
  const listIDs = itemsArr.reduce((red: string[], el) => {
    red.push(el.replace(/.*\//, ''));
    return red;
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const results: Record<string, any>[] = useMultipleQueries(
    'character',
    listIDs,
  );

  return (
    <List className={classes.card__list}>
      {results.map(
        (el) => el.data && (
          <ListItem className={classes['card__list-item']} key={el.data.id}>
            <Link href={`/character/${el.data.id}`} underline="none">
              <Avatar
                alt={el.data.name}
                className={classes.card__avatar}
                src={el.data.image}
              />
            </Link>
          </ListItem>
        ),
      )}
    </List>
  );
};

export default CharactersList;
