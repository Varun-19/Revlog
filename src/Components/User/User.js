import React from 'react';

import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';

class User extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Navbar />
                <h1>Users Page</h1>
            </React.Fragment>
        )
    }
}

export default User;