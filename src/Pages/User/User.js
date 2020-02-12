import React from 'react';

import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/card';
import Modal from '../../Components/Modal/Modal';
import ImportButton from '../../Components/Import/Import';
import Table from '../../Components/Table/Table';

class User extends React.Component {
    render() {
        return(
            <section>
                <Modal />
                <Navbar />
                <div className='component'>
                    <Header title="User" />
                    <Card title='user'/>
                    <ImportButton />  
                    <Table /> 
                </div>
            </section>
        )
    }
}

export default User;