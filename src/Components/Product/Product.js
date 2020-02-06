import React from 'react';

import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';

class Product extends React.Component {
    render() {
        return(
        <section>
            <NavBar />
            <Header title='Products' />
        </section>
        )
    }
}

export default Product;