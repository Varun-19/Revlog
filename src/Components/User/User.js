import React from 'react';

import Navbar from '../Navbar/Navbar';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Card from '../Card/card';

class User extends React.Component {
    render() {
        return(
            <section>
                <Navbar />
                <div className='component'>
                <Header title="User" />
                <Card />
                </div>
            </section>
        )
    }
}

export default User;