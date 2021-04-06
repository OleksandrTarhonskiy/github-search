import React from 'react';
import { 
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import SearchPage from './search/SearchPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SearchPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    position: relative;
    font-family: Roboto, sans-serif;
  }
`;

export default App;
