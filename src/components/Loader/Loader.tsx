import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '150px',
  },
});

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loader;
