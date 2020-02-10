import React from 'react';

import * as styles from './RevLog.module.css';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

class RevLog extends React.Component {
    render() {
        return (
            <section>
                <Navbar/>
                <Header title="RevLog" />
            </section>
        )
    }
}
export default RevLog;
