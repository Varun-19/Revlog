import React from 'react';

import Login from './Components/Login/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
    </Router>
  );
}

export default App;
