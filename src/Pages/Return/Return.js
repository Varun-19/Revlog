import React from 'react';

import NavBar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/card';

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