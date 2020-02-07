import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import LogoWhite from '../../assets/logo/LogoWhite.svg';
import returnIcon from '../../assets/icons/return.svg';
import trolleyIcon from '../../assets/icons/trolley.svg';
import teamIcon from '../../assets/icons/team.svg';
import invoiceIcon from '../../assets/icons/invoice.svg';
import * as styles from './Navbar.module.css';

class navBar extends React.Component {
    headerStyle = `${styles.mainHeader} ${styles.clearfix}`;
    render() {
        return (
            <header className={this.headerStyle}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <img src={LogoWhite} alt='Logo' />
                    </div>
                    <ul>
                        <li>
                            <div className={styles.revContainer}>
                                <NavLink to='/revlog'>
                                    <span className={styles.rev}>RL</span>
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink to='/returns' activeClassName={styles.active}>
                                <div className={styles.slide}>
                                    <div className={styles.circle}>
                                        <img src={returnIcon} alt='RevLog' />
                                    </div>
                                    <span className={styles.display}>Returns</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/products' activeClassName={styles.active}>
                                <div className={styles.slide}>
                                    <div className={styles.circle}>
                                        <img src={trolleyIcon} alt='RevLog' />
                                    </div>
                                    <span className={styles.display}>Products</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/users'  activeClassName={styles.active}>
                                <div className={styles.slide}>
                                    <div className={styles.circle}>
                                        <img src={teamIcon} alt='User' />
                                    </div>
                                    <span className={styles.display}>Users</span>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/invoice' activeClassName={styles.active}>
                                <div className={styles.slide}>
                                    <div className={styles.circle}>
                                        <img src={invoiceIcon} alt='RevLog' />
                                    </div>
                                    <span className={styles.display}>Invoice</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )  
    }
}

export default navBar;