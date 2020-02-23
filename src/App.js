import React from 'react';

import Login from './Pages/Login/Login'
import Return from './Pages/Return/Return';
import User from './Pages/User/User';
import RevLog from './Pages/RevLog/RevLog';
import Product from './Pages/Product/Product';
import Invoice from './Pages/Invoice/Invoice';
import AddReturns from './Pages/AddReturns/AddReturns';
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
