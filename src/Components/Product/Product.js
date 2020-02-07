import React from 'react';

import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Card from '../Card/card';

class Product extends React.Component {
    render() {
        return(
        <section>
            <NavBar />
            <div className='component'>
                <Header title='Products' />
                <Card />
            </div>
        </section>
        )
    }
}

export default Product;