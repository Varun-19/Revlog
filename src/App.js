import React from 'react';

import Login from './Components/Login/Login';
import Return from './Components/Return/Return';
import User from './Components/User/User';
import RevLog from './Components/RevLog/RevLog';
import Product from './Components/Product/Product';
import Invoice from './Components/Invoice/Invoice';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft, faChevronRight)

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/revlog' component={RevLog}/>
        <Route path='/returns' component={Return}/>
        <Route path='/users' component={User}/>
        <Route path='/products' component={Product}/>
        <Route path='/invoice' component={Invoice}/>
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
