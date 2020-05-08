import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Control from 'components/Control';
import Devices from 'components/Devices';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <Control />
        </Route>
        <Route exact path="/devices">
          <Devices />
        </Route>
      </Switch>
    </Fragment>
  );
}
