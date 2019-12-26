import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Church from '../pages/Church';
import ChurchRegister from '../pages/Church/Register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/church/register" component={ChurchRegister} isPrivate />
      <Route path="/church" component={Church} isPrivate />
    </Switch>
  );
}
