import { Avatar, Link, List, ListItem, makeStyles } from '@material-ui/core';

interface Props {
  episodes: string[];
}

const useStyles = makeStyles({
  card__list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
  },
  'card__list-item': {
    flex: 0,
    padding: 0,
  },
  card__avatar: {
    '&:hover': {
      backgroundColor: '#f50057',
    },
  },
});

const EpisodesList = ({ episodes }: Props) => {
  const classes = useStyles();

  return (
    <List className={classes.card__list}>
      {episodes.map((el) => (
        <ListItem className={classes['card__list-item']} key={el}>
          <Link href={`/episode/${el.replace(/.*\//, '')}`} underline="none">
            <Avatar className={classes.card__avatar}>{`${el.replace(/.*\//, '')}`}</Avatar>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default EpisodesList;
