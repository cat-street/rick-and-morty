import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core';

import Characters from 'components/Characters/Characters';

function App() {
  return (
    <Box>
      <AppBar color="secondary" position="static">
        <Container>
          <Toolbar>
            <Typography variant="h5" component="h1">
              <strong>Rick and Morty App</strong>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Characters />
    </Box>
  );
}

export default App;
