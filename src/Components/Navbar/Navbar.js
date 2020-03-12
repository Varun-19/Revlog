import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import LogoWhite from '../../assets/logo/LogoWhite.svg';
import returnIcon from '../../assets/icons/return.svg';
import trolleyIcon from '../../assets/icons/trolley.svg';
import teamIcon from '../../assets/icons/team.svg';
import invoiceIcon from '../../assets/icons/invoice.svg';
import styles from './Navbar.module.css';

const navBar = () => {
    const headerStyle = `${styles.mainHeader} ${styles.clearfix}`
    return (
        <header className={headerStyle}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <img src={LogoWhite} alt='Logo' />
                </div>
                <ul>
                    <li>
                        <NavLink to='/revlog'>
                            <div className={styles.revContainer}>
                                RL
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/returns' activeClassName={styles.active}>
                            <div className={styles.circle}>
                                <img src={returnIcon} alt='RevLog' />
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' activeClassName={styles.active}>
                            <div className={styles.circle}>
                                <img src={trolleyIcon} alt='RevLog' />
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/users'  activeClassName={styles.active}>
                            <div className={styles.circle}>
                                <img src={teamIcon} alt='User' />
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/invoice' activeClassName={styles.active}>
                            <div className={styles.circle}>
                                <img src={invoiceIcon} alt='RevLog' />
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default navBar;