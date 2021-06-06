import { makeStyles } from '@material-ui/core';

interface Props {
  children: JSX.Element
}

const useStyles = makeStyles({
  main: {
    padding: '20px 0 30px',
  },
});

const Main = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      {children}
    </main>
  );
};

export default Main;
