import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Control from 'components/Control';
import Overview from 'components/Overview';
import Devices from 'components/Devices';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <Overview />
        </Route>
        <Route exact path="/control">
          <Control />
        </Route>
        <Route exact path="/devices">
          <Devices />
        </Route>
      </Switch>
    </Fragment>
  );
}
