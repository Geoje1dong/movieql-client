import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import Home from './page/Home';
import Detail from './page/Detail';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
    height:100%;
    overflow:auto;
  }
`;
class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <GlobalStyle />
            <Switch>
              <Route exact= {true} path={'/'} component={Home} />
              <Route path={'/details/:movieId'} component={Detail} />
            </Switch>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

export default App;
