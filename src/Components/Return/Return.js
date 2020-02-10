import React from 'react';

import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Card from '../Card/card';

class Return extends React.Component {
    render() {
        return(
            <section>
                <NavBar/>
                <div className='component'>
                <Header title="Returns" />
                <Card page='returns'/>
                </div>
            </section>

        )
    }
}

export default Return;