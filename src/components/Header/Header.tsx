import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar color="secondary" position="static">
      <Container>
        <Toolbar>
          <Typography variant="h5" component="h1">
            <a href="/" className={classes.link}>
              <strong>Rick and Morty App</strong>
            </a>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
