import { Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';

import Characters from 'components/Characters/Characters';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import CharacterPage from 'components/Character/Character';
import EpisodePage from 'components/Episode/Episode';
import LocationPage from 'components/Location/Location';

function App() {
  return (
    <Box>
      <Header />

      <Main>
        <Switch>
          <Route path="/character/:id">
            <CharacterPage />
          </Route>
          <Route path="/episode/:id">
            <EpisodePage />
          </Route>
          <Route path="/location/:id">
            <LocationPage />
          </Route>
          <Route>
            <Characters />
          </Route>
        </Switch>
      </Main>

    </Box>
  );
}

export default App;
