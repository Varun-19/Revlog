import React from 'react';

import * as styles from './RevLog.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';

class RevLog extends React.Component {
    render() {
        return (
            <section>
                <Navbar/>
                <div className='component'>
                    <Header title="RevLog" />
                </div>
            </section>
        )
    }
}
export default RevLog;
