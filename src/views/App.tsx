import React from 'react';
import { 
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from '../store';
import SearchPage from './search/SearchPage';
import UserPage from './user/UserPage';
import Content from '../components/Content';

const App: React.FC = () => {
  return (
    <Content>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/users/:name" component={UserPage} />
          </Switch>
          <GlobalStyle />
        </BrowserRouter>
      </Provider>
    </Content>
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

  hr {
    border-top: 1px solid rgba(34,36,38,.15);
    border-bottom: 1px solid rgba(255,255,255,.1);
    margin: 15px 0;
  }

  .flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-center {
    justify-content: center;
  }

  .flex-space-between {
    justify-content: space-between;
  }
`;

export default App;
