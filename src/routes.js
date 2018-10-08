import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

const routes = (
  <App>
    <Switch>
      <Route exact path='/home' component={Home} />
    </Switch>
  </App>
)

export { routes };