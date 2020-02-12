import React from 'react';

import NavBar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/card';
import Modal from '../../Components/Modal/Modal';
import ImportButton from '../../Components/Import/Import';
import Table from '../../Components/Table/Table';

class Return extends React.Component {
    render() {
        return(
            <section>
                <Modal />
                <NavBar/>
                <div className='component'>
                    <Header title="Returns" />
                    <Card page='returns'/>
                    <ImportButton />  
                    <Table /> 
                </div>
            </section>

        )
    }
}

export default Return;