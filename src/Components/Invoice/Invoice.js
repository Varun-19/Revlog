import React from 'react';

import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Card from '../Card/card';

class Invoice extends React.Component {
    render() {
        return(
            <section>
                <NavBar/>
                <div className='component'>
                <Header title="Invoice" />
                <Card title/>
                </div>
            </section>
        )
    }
}

export default Invoice;