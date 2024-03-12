import React, { useEffect, useState } from 'react';
import './style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Home from './Components/Home';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/about" component={Home}></Route>
          <Route exact path="/playground" component={Home}></Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}
