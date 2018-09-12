import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Dashboard } from './containers';

const Routes = () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
