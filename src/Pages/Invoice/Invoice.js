import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NavBar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Card/card';
import ImportButton from '../../Components/Import/Import';
import Modal from '../../Components/Modal/Modal';
import Table from '../../Components/Table/Table';

class Invoice extends React.Component {
    userLoggedIn = () => {
        if(this.props.login.auth.authRedirectPath !== '/') return true;
    }
    
    render() {

        return(
            <section>
                {this.userLoggedIn ? null : <Redirect to={this.props.login.auth.authRedirectPath}/>}
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

const mapStateToProps = state => {
    return {
        login : state.login
    }
}

export default connect(mapStateToProps)(Invoice);