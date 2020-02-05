import React from 'react';

import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';

class User extends React.Component {
    render() {
        return(
            <React.fragment>
                <Navbar />
                <h1>Users Page</h1>
                <Route path='/users' component={User}/>
            </React.fragment>
        )
    }
}

export default User;