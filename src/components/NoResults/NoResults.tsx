import { makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  noResults: {
    padding: '20px',
    textAlign: 'center',
  },
});

const NoResults = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Typography variant="body1" component="p" className={classes.noResults}>
        No results!
      </Typography>
    </Paper>
  );
};

export default NoResults;
