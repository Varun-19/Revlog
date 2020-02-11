import React from 'react';

import NavBar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/card';
import ImportButton from '../../Components/Import/Import';

class Invoice extends React.Component {
    render() {
        return(
            <section>
                <NavBar/>
                <div className='component'>
                    <Header title="Invoice" />
                    <Card title='product'/>
                    <ImportButton />
                </div>
            </section>
        )
    }
}

export default Invoice;