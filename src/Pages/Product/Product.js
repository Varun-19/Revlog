import React from 'react';

import * as styles from './Product.module.css' 
import NavBar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/card';
import Modal from '../../Components/Modal/Modal';
import ImportButton from '../../Components/Import/Import';

class Product extends React.Component {
    render() {
        return(
        <section>
            <Modal />
            <NavBar />
            <div className='component'>
                <Header title='Products' />
                <Card title='product'/>  
                <ImportButton />                  
            </div>
            
        </section>
        )
    }
}

export default Product;