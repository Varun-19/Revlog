import React from 'react';

import * as styles from './RevLog.module.css';
import Navbar from '../Navbar/Navbar';

class RevLog extends React.Component {
    render() {
        return (
            <div className={styles.revlog}>
                <Navbar/>
            </div>
        )
    }
}
export default RevLog;
