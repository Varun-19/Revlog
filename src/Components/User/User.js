import React from 'react';

import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';

class User extends React.Component {
    render() {
        return(
            <section>
                <Navbar />
                <h1>Users Page</h1>
            </section>
        )
    }
}

export default User;