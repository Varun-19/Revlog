import React from 'react';

import NavBar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/card';
import ImportButton from '../../Components/Import/Import';
import Modal from '../../Components/Modal/Modal';
import Table from '../../Components/Table/Table';

class Invoice extends React.Component {
    render() {
        return(
            <section>
                <Modal />
                <NavBar/>
                <div className='component'>
                    <Header title="Invoice" />
                    <Card title='product'/>
                    <ImportButton />
                    <Table />
                </div>
            </section>
        )
    }
}

export default Invoice;