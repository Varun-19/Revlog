import React from 'react';

import Login from './Components/Login/Login';
import User from './Components/User/User';
import RevLog from './Components/RevLog/RevLog';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/revlog' component={RevLog} />
        <Route path='/users' component={User}/>
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
