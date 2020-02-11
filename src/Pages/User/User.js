import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/card';

class User extends React.Component {
    render() {
        return(
            <section>
                <Navbar />
                <div className='component'>
                <Header title="User" />
                <Card title='user'/>
                </div>
            </section>
        )
    }
}

export default User;