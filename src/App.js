import React from 'react';

import Login from './Components/Login/Login';
import RevLog from './Components/RevLog/RevLog';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/revlog' component={RevLog} />
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
