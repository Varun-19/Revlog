import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as styles from './RevLog.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';

class RevLog extends React.Component {
    userLoggedIn = () => {
        if(this.props.login.auth.authRedirectPath !== '/') return true;
    }

    render() {
        return (
            <section>
                {/* {this.userLoggedIn ? null : <Redirect to={this.props.login.auth.authRedirectPath}/>} */}
                <Navbar/>
                <div className={'component'}>
                    <Header title="RevLog" />
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

export default connect(mapStateToProps)(RevLog);