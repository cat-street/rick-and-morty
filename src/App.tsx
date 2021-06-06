import { Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';

import Characters from 'components/Characters/Characters';
import Header from 'components/Header/Header';
import Character from 'components/Character/Character';
import Main from 'components/Main/Main';

function App() {
  return (
    <Box>
      <Header />

      <Main>
        <Switch>
          <Route path="/character/:id">
            <Character />
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
