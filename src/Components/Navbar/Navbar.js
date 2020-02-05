import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import LogoWhite from '../../assets/logo/LogoWhite.svg';
import returnIcon from '../../assets/icons/return.svg';
import trolleyIcon from '../../assets/icons/trolley.svg';
import teamIcon from '../../assets/icons/team.svg';
import invoiceIcon from '../../assets/icons/invoice.svg';
import * as styles from './Navbar.module.css';

const navBar = () => {
    const headerStyle = `${styles.mainHeader} ${styles.clearfix}`
    return (
        <header className={headerStyle}>
            <div className={styles.logo}>
                <img src={LogoWhite} alt='Logo' />
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink to='/returns'>
                            <span className={styles.rev}>RL</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/revlog' activeClassName={styles.active}>
                            <div>
                                <img src={returnIcon} alt='RevLog' />
                                <span className={styles.display}>REVLOG</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'>
                            <img src={trolleyIcon} alt='RevLog' />
                            <span className={styles.display}>REVLOG</span>
                        </NavLink>
                    </li>
                    <li>
                        <Link to='/users'  activeClassName={styles.active}>
                            <div>
                                <img src={teamIcon} alt='User' />
                                <span className={styles.display}>REVLOG</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <NavLink to='/invoice'>
                            <img src={invoiceIcon} alt='RevLog' />
                            <span className={styles.display}>REVLOG</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default navBar;